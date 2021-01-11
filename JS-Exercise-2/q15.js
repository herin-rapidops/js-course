// question 15

document.write("<br><br><strong>Question 15</strong><br><br>");

let static_array15 = [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12},  {name:  "Max" , age : 20} ];

document.write("Array: "+JSON.stringify(static_array15)+"<br><br>");

let c = prompt("Enter 'd' to delete and 'i' to insert");

let delArray = (position) => static_array15.splice(position,1);

let addArray = (obj,position) => {
	return static_array15.splice(position,0,obj);
}

document.write("Output:<br>");

if(c == 'd') {
	let pos = prompt("Enter position to delete");
	delArray(pos);

} else if(c == 'i') {
	let name = prompt("Enter name:"); 
	let age = prompt("Enter age");
	let position = prompt("Enter position");
	let obj = {
		name:name,
		age:age
	}
	addArray(obj,position);
}

document.write("Array after: "+JSON.stringify(static_array15)+"<br>");