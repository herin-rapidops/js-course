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