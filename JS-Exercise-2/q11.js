// question 11

document.write("<br><br><strong>Question 11</strong><br><br>");

let static_string11 = "This is a sample string";

document.write("String: "+static_string11+"<br><br>");

let newString = prompt("Enter string to enter between: "+static_string11);
let position = prompt("Enter position:");

let insertString = (a,b,position) => [a.slice(0, position), b, a.slice(position)].join('');

document.write("Output:<br>");

document.write("After insertion: "+insertString(static_string11,newString,position)+"<br>");