
let n = +prompt("enter a number");

console.log("Pattern 1\n\n");
for(let i=0; i<n; i++) {
	let str = "";
	for(let j=0; j<=i; j++) {
		str = str + "* ";
	}
	console.log(str);
}

console.log("\n\n");

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

console.log("Pattern 3\n\n");
for(let i=0; i<n; i++) {
	let str = "";

	for(let j=0; j<(n+i); j++){
		if( j<(n-i-1) ) {
			str = str + "  ";
		} else {
			if( (i+j)%2 == 0 ) {
				str = str + "  ";
			} else {
				str = str + "* ";
			}
		}
	}
	console.log(str);
}

console.log("\n\n");

console.log("Pattern 4\n\n");
for(let i=0; i<=n; i++) {
	let str = "";
	for(let j=0; j<=n; j++) {
		if( j==i || j==(n-i) ) {
			str = str + "* ";
		} else {
			str = str + "  ";
		}
	}
	console.log(str);
}






























