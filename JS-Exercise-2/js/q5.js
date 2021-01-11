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