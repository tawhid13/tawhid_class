var button=document.querySelector('button');
button.addEventListener('click',colorChange)
var colors=['red','green','blue','yellow','salmon','teal']
function colorChange() {
	document.body.style.color= colors[parseInt(Math.random()*colors.length)];
	document.body.style.fontSize='30px';
}
button.addEventListener('mouseout',colorChange);
button.addEventListener('mouseover',colorChange);
