var updateSize = function () {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth;
    var title = d.getElementsByTagName("title")[0].innerHTML;
    var head = d.getElementById("head");
    if (x <= 700) {
        if (title.length > 15) {
            head.style.fontSize = parseInt(150 / title.length) + "vw";
        }
    } else {
        head.style.fontSize = "3rem";
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    updateSize();
});

window.onresize = updateSize;