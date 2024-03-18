var a='pink';
var s='orange';
var d= 'blue';
caja=document.querySelector('body');


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        pintar(a);
    }if(event.key === 's'){
        pintar(s);
    }if(event.key === 'd')
        pintar(d);
    
});
function a(){
    document.style.backgroundColor= 'a';
}

