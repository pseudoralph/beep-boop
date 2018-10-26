// Business logic below
function beep() {
  return 'Beep!';
}

function boop() {
  return 'Boop!';
}

function daveMsg(name) {
  return "I'm sorry, "+ name +". I'm afraid I can't do that.";
}

function responseBuilder(validatedInput, reverseBool, name='Dave') {
  var output = [];

  for (var num=0; num <= validatedInput; num ++){
    if (num !=0 && num % 3 === 0) {
      output.push(daveMsg(name));
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

  if (reverseBool) {
    return outputFormatter(output.reverse());
  }

  return outputFormatter(output);
}

function outputFormatter(outputArray) {
  var htmlCode= "";

  outputArray.forEach(function(line) {
    if (parseInt(line)) {
      htmlCode += '<p>'+line+'</p>\n';
    } else if (line.indexOf('Beep') > -1) {
      htmlCode += '<p class="robot beep">'+line+'</p>\n';
    } else if (line.indexOf('Boop') > -1) {
      htmlCode += '<p class="robot boop">'+line+'</p>\n';
    } else {
      htmlCode += '<p class="robot dave-msg">'+line+'</p>\n';
    }
  });

  return htmlCode;
}

function userInputValidator(userInput) {
  if (parseInt(userInput) >= 0) {return true;}
  return false;
}

// UI logic below

$(function(){

  $("#go-button").click(function() {
    $(".output").empty();

    var capturedInput = $("#user-input").val();
    var name = ($("#name-input").val()) ? ($("#name-input").val()) : (undefined)
    var reverseOutput = $("#reverse-order").prop("checked");


    if (userInputValidator(capturedInput)) {
      $(".output").html(responseBuilder(capturedInput,reverseOutput,name));
    } else {$("#user-input").val("Invalid entry")}
  })

  $("#user-input").keyup(function(event) {
    if (event.keyCode === 13) {$("#go-button").click();}
  });

});
