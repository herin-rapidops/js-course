

// question 1

document.write("<br><br><strong>Question 1</strong><br><br>");

let static_array1 = [0,1,2,3,4,5,6,7,8,9];

let firstN = (arr,n) => arr.splice(0,n);
let lastN = (arr,n) => arr.splice(-n,n);
let que1 = +prompt("Array: "+static_array1+"\nEnter number:");;
document.write("Array: "+static_array1+"<br><br>");

// setTimeout(() => {
// 	que1 = +prompt("Array: "+static_array+"\nEnter number:");
// },0);

document.write("Output:<br>");
document.write("First "+que1+" elements: "+firstN(static_array1,que1)+"<br>");
document.write("Last "+que1+" elements: "+lastN(static_array1,que1)+"<br>");



// question 2

document.write("<br><br><strong>Question 2</strong><br><br>");
let que2 = prompt("Enter a number to add '-' between two even numbers");

let evenDash = number => {
	let str = number.toString();
	let res = [str[0]];

	for(let i=1; i<str.length; i++) {
		if( (str[i-1]%2 == 0) && (str[i]%2 == 0) ) {
			res.push('-',str[i]);
		} else {
			res.push(str[i]);
		}
	}

	return (res.join(''));
}

document.write("Output:<br>");

document.write(evenDash(que2));



// question 3

document.write("<br><br><strong>Question 3</strong><br><br>");

let static_array2 = [0,1,1,2,3,4,5,5,5,6,7,7,8,9];

document.write("Array: "+static_array2+"<br><br>");

let freqItem = arr => {
	let res;
	let mostCount = 0;
	for(let i=0; i<arr.length; i++) {
		let count = 0;
		for(let j=i; j<arr.length; j++) {
			if( arr[i] == arr[j] ) {
				count++;
			}
			if(mostCount<count) {
				mostCount = count;
				res = arr[i];
			}
		}
	}

	return res;
}

document.write("Output:<br>");

document.write("Most frequent item: "+freqItem(static_array2));



// question 4

document.write("<br><br><strong>Question 4</strong><br><br>");

let static_array3 = [0,1,2,3,4,5,6,7,8,9];

document.write("Array: "+static_array3+"<br><br>");

let shuffle = arr => {
  let currentIndex = arr.length;
  let temp;
  let randomIndex;

  while ( currentIndex != 0 ) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  return arr;
}

document.write("Output:<br>");

document.write("Shuffled Array: "+shuffle(static_array3));



// question 5

document.write("<br><br><strong>Question 5</strong><br><br>");

let array_a = [0,1,2,3];
let array_b = [3,4,5];

document.write("Array A: "+array_a+"<br><br>");
document.write("Array B: "+array_b+"<br><br>");

let union = (a,b) => [...new Set(a.concat(b))];

let difference = (a,b) => {
	let res = [... a];
	for(let i=0; i<b.length; i++) {
		if( res.includes(b[i]) ) {
			res.splice(res.indexOf(b[i]),1);
		}
	}

	return res;
}

let intersection = (a,b) => {
	let res = [];
	for(let i=0; i<b.length; i++) {
		if( a.includes(b[i]) ) {
			res.push(b[i]);
		}
	}

	return res;
}

document.write("Output:<br>");

document.write("Union of A and B: "+union(array_a,array_b)+"<br>");
document.write("Difference of A and B: "+difference(array_a,array_b)+"<br>");
document.write("Difference of B and A: "+difference(array_b,array_a)+"<br>");
document.write("Intersection of A and B: "+intersection(array_a,array_b)+"<br>");



// question 6

document.write("<br><br><strong>Question 6</strong><br><br>");

let static_array4 = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ];

document.write("Array: "+static_array4+"<br><br>");

let bound = +prompt("Enter a number to bound array:");

let funBound = (arr) => {
	let res = [];
	for (let i=0; i<arr.length; i++) {
		if( i%bound == 0 ) {
			res.push(arr[i]);
		}
	}

	return res;
}

document.write("Output:<br>");

document.write("Bounded Array at interval "+bound+": "+funBound(static_array4)+"<br>");

// question 7

document.write("<br><br><strong>Question 7</strong><br><br>");

let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = prompt("Enter date in '-' format or '/' format in 'DD/MM/YYYY' format");

document.write("Date: "+date+"<br><br>");

let checkMonth = date => {
	let d;
	if(date.includes('-')) {
		d = date.split('-');
	} else {
		d = date.split('/');
	}

	return d[1];
}

document.write("Output:<br>");

document.write("Month of date "+date+" is: "+monthArray[checkMonth(date)-1]+"<br>");

// question 8

document.write("<br><br><strong>Question 8</strong><br><br>");

let date1 = new Date(prompt("Enter date 1 in 'MM/DD/YYYY' format :"));
let date2 = new Date(prompt("Enter date 2 in 'MM/DD/YYYY' format :"));

document.write("Date 1: "+date1+"<br><br>");
document.write("Date 2: "+date2+"<br><br>");


let diffDate = (date1,date2) => {
	let diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);

	let diffYear = 0;
	let diffMonth = 0;

	if(diffDays>=365) {
		diffYear = Math.floor(diffDays/365);
		diffDays = diffDays % 365;
	}
	if(diffDays>=12) {
		diffMonth = Math.floor(diffDays/30);
		diffDays = diffDays % 30;
	}
	

	return diffYear+" years "+diffMonth+" months "+diffDays+" days";
}

document.write("Output:<br>");

document.write("Differece of date1 and date2 is: "+diffDate(date1,date2)+"<br>");

// question 9

document.write("<br><br><strong>Question 9</strong><br><br>");

let unix = +prompt("Enter unix time stamp:");

document.write("Unix: "+unix+"<br><br>");

let unixToTime = unix => {
	let date = new Date(unix*1000);

	return date;
}

document.write("Output:<br>");

document.write("Date: "+unixToTime(unix)+"<br>");

// question 10

document.write("<br><br><strong>Question 10</strong><br><br>");

let d1 = new Date(prompt("Enter date 1 in 'MM/DD/YYYY' format :"));
let d2 = new Date(prompt("Enter date 2 in 'MM/DD/YYYY' format :"));

document.write("Date 1: "+d1+"<br><br>");
document.write("Date 2: "+d2+"<br><br>");

let detailedDiff = (date1,date2) => {
	let diffMins = parseInt((date2 - date1) / (1000 * 60), 10);

	let diffHours = Math.floor(diffMins/60);
	let diffDays = Math.floor(diffHours/24);
	let diffWeeks = Math.floor(diffDays/7)+" weeks " +diffDays%7+" days";
	let diffMonths = Math.floor(diffDays/30)+" months "+diffDays%30+" days";
	let diffYears = diffDate(date1,date2); //here diffDate() if function from question 8

	return diffYears+"<br>or "+diffMonths+"<br>or "+diffWeeks+"<br>or "+diffDays+" days <br>or "+diffHours+" hours <br>or "+diffMins+" minutes";
}

document.write("Output:<br>");

document.write("Differece of date1 and date2 is: <br>"+detailedDiff(d1,d2)+"<br>");

// question 11

document.write("<br><br><strong>Question 11</strong><br><br>");

let static_string11 = "This is a sample string";

document.write("String: "+static_string11+"<br><br>");

let newString = prompt("Enter string to enter between: "+static_string11);
let position = prompt("Enter position:");

let insertString = (a,b,position) => [a.slice(0, position), b, a.slice(position)].join('');

document.write("Output:<br>");

document.write("After insertion: "+insertString(static_string11,newString,position)+"<br>");

// question 12

document.write("<br><br><strong>Question 12</strong><br><br>");

let string11 = prompt("Enter string: ");
let length = +prompt("Enter length:");

document.write("String: "+string11+"<br><br>");

let chop = (string,n) => {
	let res = [];
	for(let i=0; i<string.length; i+=n) {
		res[i] = string.substring(i,i+n);
	}

	return res;
}

document.write("Output:<br>");

document.write("Chopped: "+chop(string11,length)+"<br>");

// question 13

document.write("<br><br><strong>Question 13</strong><br><br>");

let salary = +prompt("Enter number:");

document.write("Number: "+salary+"<br><br>");

let commaSeperated = number => number.toLocaleString();

document.write("Output:<br>");

document.write("Comma Seperated: "+commaSeperated(salary)+"<br>");



// question 14

document.write("<br><br><strong>Question 14</strong><br><br>");

let static_array14 = [
	{ id: 101, name:"Evans" , age: 35 },
	{ id: 102, name:"Hills" , age: 43 },
	{ id: 103, name:"Ochoa" , age: 43 },
	{ id: 104, name:"Reily" , age: 34 },
	{ id: 105, name:"Baker" , age: 65 },
	{ id: 106, name:"White" , age: 26 },
	{ id: 107, name:"Smith" , age: 54 },
	{ id: 108, name:"Jones" , age: 34 },
	{ id: 109, name:"Klein" , age: 59 },
	{ id: 110, name:"Lopez" , age: 20 },
];

document.write("Array of Objects:<br> "+JSON.stringify(static_array14)+"<br><br>");

let ascendingAge = arr =>{
	res = [... arr];

	res.sort((a,b) =>{
		return a.age - b.age;
	});

	return res;
}

let descendingName = arr =>{
	res = [... arr];

	res.sort((a,b) =>{
		return b.name.localeCompare(a.name);
	});

	return res;
}

document.write("Output:<br>");

document.write("Ascending Age: "+JSON.stringify(ascendingAge(static_array14))+"<br><br>");
document.write("Descending Name: "+JSON.stringify(descendingName(static_array14))+"<br><br>");



// question 15

document.write("<br><br><strong>Question 15</strong><br><br>");

let static_array15 = [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12},  {name:  "Max" , age : 20} ];

document.write("Array: "+JSON.stringify(static_array15)+"<br><br>");

let c = prompt("Enter 'd' to delete and 'i' to insert");

let delArray = (position) => static_array15.splice(position,1);

let addArray = (name,age) => static_array15.push({name,age});

document.write("Output:<br>");

if(c == 'd') {
	let pos = prompt("Enter position to delete");
	delArray(pos);

} else if(c == 'i') {
	let name = prompt("Enter name:"); 
	let age = prompt("Enter age");
	addArray(name,age);
}

document.write("Array after: "+JSON.stringify(static_array15)+"<br>");























