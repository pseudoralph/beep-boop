// Business logic below
function beep() {
  return 'Beep!'
}

function boop() {
  return 'Boop!'
}

function daveMsg() {
  return "I'm sorry, Dave. I'm afraid I can't do that."
}

function responseBuilder(validatedInput) {
  var output = [];

  for (var num=0; num <= validatedInput; num ++){
    if (num !=0 && num % 3 === 0) {
      output.push(daveMsg());
      continue;
    }
    if (num.toString().indexOf("1") > -1) {
      output.push(boop());
      continue;
    }
    if (num.toString().indexOf("0") > -1) {
      output.push(beep());
      continue;
    } else {
      output.push(num);
    }
  }
  return output;
}

function userInputValidator(userInput) {
  if (parseInt(userInput) && parseInt(userInput) >= 0) {
    responseBuilder(userInput)
  } else {console.log('nope')}


}

// UI logic below

$(function(){

  $("#go-button").click(function() {
    var capturedInput = $("#user-input").val()
    $(".output").text(responseBuilder(capturedInput));


  })

  $("#user-input").keyup(function(event) {
    if (event.keyCode === 13) {$("#go-button").click();}});


})
