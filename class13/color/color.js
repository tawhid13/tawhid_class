var button = document.querySelector('button');
var colors =['red','green','blue','yellow','tell','salmon','gray','orange','cream','tomato','pest','black','white','#ededed'];
function colorChange() {
	document.body.style.backgroundColor= colors[parseInt(Math.random()*colors.length)];
}
button.addEventListener('mouseout',colorChange);
button.addEventListener('mouseover',colorChange);