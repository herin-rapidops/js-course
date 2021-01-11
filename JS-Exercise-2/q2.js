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