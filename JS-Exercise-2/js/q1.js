
// question 1

document.write("<br><br><strong>Question 1</strong><br><br>");

let static_array1 = [0,1,2,3,4,5,6,7,8,9];

let firstN = (arr,n) => arr.splice(0,n);
let lastN = (arr,n) => arr.splice(-n,n);
let que1 = +prompt("Array: "+static_array1+"\nEnter number:");;
document.write("Array: "+static_array1+"<br><br>");

document.write("Output:<br>");
document.write("First "+que1+" elements: "+firstN(static_array1,que1)+"<br>");
document.write("Last "+que1+" elements: "+lastN(static_array1,que1)+"<br>");