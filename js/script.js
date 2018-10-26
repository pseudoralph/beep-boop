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

function responseRouter(num) {

  if (num !=0 && num % 3 === 0) {
    daveMsg();
    return;
  }
  if (num.toString().indexOf("1") > -1) {
    boop();
    return;
  }
  if (num.toString().indexOf("0") > -1) {
    beep();
    return;
  }

}

function main() {

  responseRouter(0)



}

// UI logic below

$(function(){
  console.log('ready');
  main();
})
