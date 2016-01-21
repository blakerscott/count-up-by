
function countUp (countBy, countTo) {
  if (countBy === 5 && countBy !== 7) {
    by5(countBy, countTo);
  }
  else if (countBy === 7 && countBy !== 5) {
    by7(countBy, countTo);
  }
}

function by5 (countBy, countTo) {
  for (var i = countBy; i <= countTo; i+=countBy) {
    //console.log(i);
    return i;
  }
}

function by7 (countBy, countTo) {
  for (var i = countBy; i <= countTo; i+=countBy) {
    console.log(i);
    }
}











//
// function counter(number) {
//   if(number % 5 === 0 ) {
//     divisibleBy5(number);
//   }
//   else if (number % 7 === 0) {
//     divisibleBy7(number);
//   }
//   else {
//       return false;
//     }
// }
//
//
// function divisibleBy5(number) {
//     for(var i = 1; i <= number; i += 5) {
//       console.log(i);
//       //return i;
//     }
//     //return true;
// }
//
// function divisibleBy7(number) {
//       //return true;
//       for(var i = 1; i <= number; i += 7) {
//         console.log(i);
//         //return i;
//       }
// }
