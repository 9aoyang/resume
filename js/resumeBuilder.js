// try jQuery
// $('#main').append('9aoyang');



// first var
// var awesomeThoughts = 'i am 9aoyang and i am awesome';
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace('awesome', 'fun');
// console.log(funThoughts);
// $('#main').append(funThoughts);

var formattedName = HTMLheaderName.replace('%data%', '羔羊');
var formattedRole = HTMLheaderRole.replace('%data%', 'Front-end');
$('#header').append(formattedName);
$('#header').append(formattedRole);