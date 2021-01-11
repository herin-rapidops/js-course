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