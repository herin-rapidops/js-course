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