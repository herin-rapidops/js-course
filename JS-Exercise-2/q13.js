// question 13

document.write("<br><br><strong>Question 13</strong><br><br>");

let salary = +prompt("Enter number:");

document.write("Number: "+salary+"<br><br>");

let commaSeperated = number => number.toLocaleString();

document.write("Output:<br>");

document.write("Comma Seperated: "+commaSeperated(salary)+"<br>");