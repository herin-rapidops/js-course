
// question 4

document.write("<br><br><strong>Question 4</strong><br><br>");

let static_array3 = [0,1,2,3,4,5,6,7,8,9];

document.write("Array: "+static_array3+"<br><br>");

let shuffle = arr => {
  let currentIndex = arr.length;
  let temp;
  let randomIndex;

  while ( currentIndex != 0 ) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  return arr;
}

document.write("Output:<br>");

document.write("Shuffled Array: "+shuffle(static_array3));