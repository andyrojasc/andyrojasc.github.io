(function() {
    var preload = document.getElementById("preload");
    var load = document.getElementById("load");
    var loading = 0;
    if(loading<=20)
    {
        var id = setInterval(frame, 64);
    }

    function frame() {
        console.log("sds");
        if (loading == 50) {
            clearInterval(id);
            window.open("index-en.html", "_self");
        } else {
            loading++;
            if (loading == 40) {
                preload.style.animation = "fadeout 1s ease";
            }
        }
    }
})();