// question 10

//this function is from question 8
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