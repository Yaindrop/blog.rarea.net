var updateSize = function() {
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    var title = d.getElementsByTagName("title")[0].innerHTML;
    var head = d.getElementById("head");
    if (x <= 700) {
        if (title.length > 15) {
            newSize = parseInt(150 / title.length * 10) / 10 + "vw";
            console.log(newSize);
            head.style.fontSize = newSize;
        }
    } else if (x <= 1400) {
        if (title.length > 24) {
            newSize = parseInt(144 / title.length * 10) / 10 + "vw";
            head.style.fontSize = newSize;
        }
    } else {
        head.style.fontSize = "3rem";
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("here");
    updateSize();
});

window.onresize = updateSize;