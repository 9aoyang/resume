// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({5:[function(require,module,exports) {
let bio = {
    'name': 'Yang Gao',
    'role': 'Front-end',
    'contact': {
        'mobile': '177-5602-3489',
        'email': '9aoyang@gmail.com',
        'twitter': '@9aoyang',
        'github': '9aoyang',
        'blog': '9aoyang.me',
        'location': 'Anhui Hefei'
    },
    'bioPic': '../images/fry.jpg',
    'welcomeMsg': 'hello world',
    'skills': ['HTML5', 'CSS3', 'ES6', 'React']
};

let work = {
    'jobs':[
        {
            'Employer': 'DXY',
            'Title': 'Front End Development',
            'Dates': '2017.10 - 2018.1',
            'Location': 'Hangzhou, Zhejiang,',
            'Description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, delectus laborum repellat eos magnam optio libero sapiente laboriosam velit expedita iste amet odit totam voluptate ratione adipisci illo quaerat sequi?'
        },
        {
            'Employer': 'doBell',
            'Title': 'Front End Development',
            'Dates': '2017.6 - 2018.9',
            'Location': 'Hefei, Anhui,',
            'Description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, delectus laborum repellat eos magnam optio libero sapiente laboriosam velit expedita iste amet odit totam voluptate ratione adipisci illo quaerat sequi?'
        }
    ]
};

let project = {
    'project': [
        {

        }
    ]
}

let formattedName = HTMLheaderName.replace('%data%', bio.name);
let formattedRole = HTMLheaderRole.replace('%data%', bio.role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    for (index in bio.skills) {
        let formattedSkill = HTMLskills.replace('%data%', bio.skills[index]);
        $('#skills').append(formattedSkill);
    }
}

var displayWork = function () {
    for (job in work.jobs) {
        $('#workExperience').append(HTMLworkStart)
        let formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].Employer);
        let formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].Title)
        let formattedEmployerTitle = formattedEmployer + formattedTitle
        $('.work-entry:last').append(formattedEmployerTitle);
        let formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].Dates)
        $('.work-entry:last').append(formattedDates);
        let formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].Description)
        $('.work-entry:last').append(formattedDescription);
    }
}

displayWork();

$(document).click(function(loc) {
    let x = loc.pageX;
    let y = loc.pageY;
    logClicks(x, y);
})

function locationizer(work_obj) {
    let locationArray = [];
    for (job in work_obj.jobs) {
        let newLocation = work_obj.jobs[job].Location
        locationArray.push(newLocation)
    }
    return locationArray
}

console.log(locationizer(work));

$('#main').append(internationalizeButton)

let inName = function () {
    let name = bio.name.trim().split(' ');
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + ' ' + name[1];
}



},{}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent) {
  var ws = new WebSocket('ws://localhost:52539/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      window.location.reload();
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error(`[parcel] 🚨 ${data.error.message}\n${data.error.stack}`);
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,5])