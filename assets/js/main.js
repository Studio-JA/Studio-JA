function hidenav() {
    if (document.querySelector("#main-wrapper > aside").style.visibility == "hidden") {
        document.querySelector("#main-wrapper > aside").style.visibility = "visible"
    } else {
        document.querySelector("#main-wrapper > aside").style.visibility = "hidden"
    }
}

document.getElementById('main').addEventListener('click', function () {
    window.location.href = "./video?v=r9PnyLOQg5I";
});
document.getElementById('movie1').addEventListener('click', function () {
    window.location.href = "./video?v=dxzlHI-mGyA";
});

document.getElementById('trailer1').addEventListener('click', function () {
    window.location.href = "./video?v=WS0ANTYaj9Y";
});
document.getElementById('trailer2').addEventListener('click', function () {
    window.location.href = "./video?v=dGnBIR1wThM";
});
document.getElementById('trailer3').addEventListener('click', function () {
    window.location.href = "./video?v=JdfHxknFkDs";
});
document.getElementById('trailer4').addEventListener('click', function () {
    window.location.href = "./video?v=vKsic5CEf78";
});

document.getElementById('head').addEventListener('click', function () {
    window.location.href = "./";
});