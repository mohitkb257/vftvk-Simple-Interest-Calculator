function compute()
{
    p = document.getElementById("principal").value;
	
}

var slider = document.getElementById("rate");
var output = document.getElementById("rateDisplay");
output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = this.value;
}
