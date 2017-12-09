var names =['samir','sakib','samim','sayem','sadia','sabbir','sania','santo','samia'];
var html='<ul>'; 
for ( var n= 0; n<names.length; n++) {
 html = html + '<li>'+ names[n]+'</li>'
}
html = html+'</ul>';
var name=document.getElementById('name').innerHTML= html;

