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