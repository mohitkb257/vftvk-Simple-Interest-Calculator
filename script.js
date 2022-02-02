function compute()
{
    p = document.getElementById("principal").value;
	
}

<script>
var slider = document.getElementById("rate");
var output = document.getElementById("rateDisplay");
output.innerHTML = concat(slider.value,"%");

slider.oninput = function() {
	output.innerHTML = concat(this.value,"%");
}
</script>
