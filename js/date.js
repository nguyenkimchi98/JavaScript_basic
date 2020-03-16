var bongden = document.getElementById("bongden");

var mau = ["blue", "red", "gray", "green", "pink", "purple"];
var dem = 0;

function changeColor() {
    if(dem > mau.length) {
        dem = 0;
    }
    bongden.style.backgroundColor = mau[dem];
    dem++;
}

var myTime = setInterval(changeColor, 100);

bongden.onmouseover = function() {
    clearInterval(myTime);
}