function filter(b,v) {
    var e, a = document.querySelectorAll("a[data-f='" + v + "']");
    for (e in a) {
       if (e == parseInt(e,10)) {
           a[e].classList.toggle("a");
        }
    }
}

function show(c) {

    c.parentNode.classList.toggle("a");

}

(function(){
   var e, a = document.querySelectorAll("img");
    for (e in a) {
       if (e == parseInt(e,10)) {
           a[e].setAttribute('src', a[e].getAttribute('data-src'));
        }
    }
})();


