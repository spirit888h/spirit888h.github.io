window.onload = function () {
    var oUl=document.getElementById('ul1');
    var aLi=oUl.getElementsByTagName('li');

    oUl.innerHTML+=oUl.innerHTML;
    oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
    var n=0;
    setInterval(function(){
        n-=1;
        if(n<=-oUl.offsetWidth/2){
            n=0;
        }
        oUl.style.left=n+'px';
    },30);
};