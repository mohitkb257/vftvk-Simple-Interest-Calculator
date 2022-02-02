var slider = document.getElementById("rate");
var output = document.getElementById("rateDisplay");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function compute() {
  p = document.getElementById("principal").value;
	y = document.getElementById("years").value;
  r = document.getElementById("rate").value;
 
  let total = p * r * y / 100;
  
  let matYear = 2022 + y;
  
  document.getElementById("result").innerHTML = "If you deposit " + p + "\nat an interest rate of " + r + "%,\nyou will receive an amount of " + total + "\nin the year " + matYear;
  
}
