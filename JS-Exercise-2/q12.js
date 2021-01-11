// question 12

document.write("<br><br><strong>Question 12</strong><br><br>");

let string11 = prompt("Enter string: ");
let length = +prompt("Enter length:");

document.write("String: "+string11+"<br><br>");

let chop = (string,n) => {
	let res = [];
	let j;
	for(let i=0, j=0; i<string.length; i+=n, j++) {
		res[j] = string.substring(i,i+n);
	}

	return res;
}

document.write("Output:<br>");

document.write("Chopped: "+chop(string11,length)+"<br>");