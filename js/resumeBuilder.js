// try jQuery
// $('#main').append('9aoyang');



// first var
// var awesomeThoughts = 'i am 9aoyang and i am awesome';
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace('awesome', 'fun');
// console.log(funThoughts);
// $('#main').append(funThoughts);

var formattedName = HTMLheaderName.replace('%data%', '9aoyang');
var role = 'Front-end';
var formattedRole = HTMLheaderRole.replace('%data%', role);
// append会添加到<ul></ul>之后，为了添加元素到开头，应使用prepend
// $('#header').append(formattedName);
// $('#header').append(formattedRole);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

var skills = ["HTML", "CSS", "JavaScript"];
$('#main').append(skills[1]);