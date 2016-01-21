
function countUp (countBy, countTo) {
  var numberBank =[];
  for (var i = countBy; i <= countTo; i+=countBy) {
    numberBank.push(i);
  }
  return numberBank;
}
