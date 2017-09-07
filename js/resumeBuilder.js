var bio = {
    "name": "9aoyang",
    "role": "Front-end",
    "contact": {
        "mobile": "177-5602-3489",
        "email": "9aoyang@gmail.com",
        "twitter": "@9aoyang",
        "github": "9aoyang",
        "blog": "9aoyang.me",
        "location": "Anhui Hefei"
    },
    "bioPic": "../images/fry.jpg",
    "welcomeMsg": "hello world",
    "skills": ["HTML", "CSS", "JavaScript"]
};

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
// append会添加到<ul></ul>之后，为了添加元素到开头，应使用prepend
// $('#header').append(formattedName);
// $('#header').append(formattedRole);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);