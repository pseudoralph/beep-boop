// Business logic below
function beep() {
  console.log('Beep!')
}

function boop() {
  console.log('Boop!')
}

function daveMsg() {
  console.log("I'm sorry, Dave. I'm afraid I can't do that.")
}

function responseRouter(userEntered) {
  for (var num=0; num < userEntered; num ++){
    if (num !=0 && num % 3 === 0) {
      daveMsg();
      continue;
    }
    if (num.toString().indexOf("1") > -1) {
      boop();
      continue;
    }
    if (num.toString().indexOf("0") > -1) {
      beep();
      continue;
    } else {
      console.log(num)
    }
  }

}

function main() {

  responseRouter(30)



}

// UI logic below

$(function(){
  console.log('ready');
  main();
})
