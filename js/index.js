import './helper.js'

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


