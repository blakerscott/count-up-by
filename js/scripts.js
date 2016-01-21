
var countUp = function(countTo, countBy) {
  var numberBank =[];
  for (var i = countBy; i <= countTo; i+=countBy) {
    numberBank.push(i);
  }
  return numberBank;
};

$(document).ready(function(){
  $("form").submit(function(event){
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());
    //var result = countUp(countTo, countBy);
    $(".result").text(countUp(countTo, countBy));

    event.preventDefault();
  });
  //event.preventDefault();
});
