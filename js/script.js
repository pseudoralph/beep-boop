// ---------- Business logic ---------- //
function beep() {
  return '"Beep!"';
}

function boop() {
  return '"Boop!"';
}

function daveMsg(name) {
  return '"I\'m sorry, '+ name +'. I\'m afraid I can\'t do that."';
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
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt#A_stricter_parse_function
  if (/^(\-|\+)?([0-9]+)$/.test(userInput)) {return true}
  return false;
}

// ---------- UI logic ---------- //

function outputExpander() {
  if ($(".output").hasClass("one-line")) {
    $(".output").removeClass("one-line");
    $("#one-line-btn").text("Compress output");
    $("#one-line-btn").addClass("btn-light one-line-btn");
    $("#one-line-btn").removeClass("btn-secondary");
    return;
  }
  if (!$(".output").hasClass("one-line")) {
    $(".output").addClass("one-line");
    $("#one-line-btn").text("Expand output");
    $("#one-line-btn").removeClass("btn-light one-line-btn");
    $("#one-line-btn").addClass("btn-secondary");
    return;
  }
}

$(function(){

  $("#reset").click(function() {
    location.reload();
  })

  $("#one-line-btn").click(function() {
    outputExpander();
  });

  $("#go-button").click(function() {
    $("#one-line-btn").hide();
    $(".output").empty();

    var capturedInput = $("#user-input").val();
    var name = ($("#name-input").val()) ? ($("#name-input").val()) : (undefined);
    var reverseOutput = $("#reverse-order").prop("checked");

    if (userInputValidator(capturedInput)) {
      $(".output").html(responseBuilder(capturedInput,reverseOutput,name));
      $("#one-line-btn").show();
    } else {
      $("#user-input").val("Invalid entry");
    }


  });

  $("#user-input").keyup(function(event) {
    if (event.keyCode === 13) {$("#go-button").click();}
  });

});
