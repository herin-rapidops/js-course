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