function sf(o){
    if(o.classList.contains("bf")){
        //document.body.classList.toggle('fp');
        document.getElementById("fp").checked = true ;
        return;
    }
    document.body.classList.add('floorplan');
    document.getElementById("fp").checked = true ;
    if(o.classList.contains("a") || o.classList.contains("z")){
        console.log("show details");
    }else{
        o.classList.add('z');
    }
}



(function(){
   var e, a = document.querySelectorAll("img");
    for (e in a) {
       if (e == parseInt(e,10)) {
           a[e].setAttribute('src', a[e].getAttribute('data-src'));
        }
    }
})();


