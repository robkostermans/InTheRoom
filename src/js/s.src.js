function sf(o){
    document.getElementById("fp").checked = true ;
    if(o.classList.contains("z")){
        o.classList.remove('z'); // or show details
    }else{
        o.classList.add('z');
    }
}


(function(){
   var e, a = document.querySelectorAll("img");
    for (e in a) {
       if (e == parseInt(e,10)) {
           a[e].setAttribute('src', a[e].getAttribute('data-src'));
           a[e].removeAttribute('data-src')
        }
    }
})();


