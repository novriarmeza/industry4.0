var waktulalu = 0;
var start = new Date();
var $timer = document.querySelector(".timer");

function tick() {
    waktulalu = new Date() - start;
    var elapsed = Math.round(waktulalu/100);
    var detik = (elapsed/10).toFixed(1);
    $timer.innerHTML = detik;
};

setInterval(tick,50);