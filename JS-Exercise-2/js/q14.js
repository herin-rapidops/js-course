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