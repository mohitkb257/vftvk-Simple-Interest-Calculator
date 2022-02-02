function compute()
{
    p = document.getElementById("principal").value;
	
}
        
var slider = document.getElementById("rate");
var output = document.getElementById("rateDisplay");

slider.oninput = function(){
	output.innerHTML = concat(this.value,"%");
}
