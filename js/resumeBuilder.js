let bio = {
    'name': '9aoyang',
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
            'Date': '2017.10-2018.1',
            'Location': 'Hangzhou, Zhejiang,',
            // 'Description': ''
        }
    ]
};

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

for (job in work.jobs) {
    $('#workExperience').append(HTMLworkStart)
    let formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].Employer);
    let formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].Title)
    let formattedEmployerTitle = formattedEmployer + formattedTitle
    $('.work-entry:last').append(formattedEmployerTitle);
}

