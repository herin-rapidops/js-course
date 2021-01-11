
let n = +prompt("enter a number");

// patter 1

console.log("Pattern 1\n\n");
for(let i=0; i<n; i++) {
	let str = "";
	for(let j=0; j<=i; j++) {
		str = str + "* ";
	}
	console.log(str);
}

console.log("\n\n");

// patter 2

console.log("Pattern 2\n\n");
for(let i=0; i<n; i++) {
	let str = "";
	for(let j=n; j>=0; j--) {
		if(j>i) {
			str = str + "  ";
		} else {
			str = str + "* ";
		}
	}
	console.log(str);
}

console.log("\n\n");

// patter 3

console.log("Pattern 3\n\n");
for(let i=0; i<n; i++) {
	let str = "";
	for(let j=n; j>=0; j--) {
		if(j>i) {
			str = str + "  ";
		} else {
			str = str + "*   ";
		}
	}
	console.log(str);
}

console.log("\n\n");

// patter 4

console.log("Pattern 4\n\n");
for(let i=0; i<n; i++) {
	let str = "";
	for(let j=0; j<=n; j++) {
		if( j==i || i==(n-j-1) ) {
			str = str + "* ";
		} else {
			str = str + "  ";
		}
	}
	console.log(str);
}






























