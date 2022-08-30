var number= 0;
function set(){
  document.getElementById("lower").innerHTML = number - 2
  document.getElementById("low").innerHTML = number - 1
  document.getElementById("num").innerHTML = number
  document.getElementById("up").innerHTML = number + 1
  document.getElementById("upper").innerHTML = number + 2

  
}
function prev(){
  number--;
  set()
}
function prev2(){
  number -= 2;
  set()
}
function next(){
  number++;
  set()
}
function next2(){
  number += 2;
  set()
}

set()
