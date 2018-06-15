window.onload = function () {
    var style1 = document.getElementById("style_1");
    var style2 = document.getElementById("style_2");
    var style3 = document.getElementById("style_3");
    var theme = document.getElementById("theme");

    style1.onclick = function () {
        theme.href = "css/style_1.css";
    }
    style2.onclick = function () {
        theme.href = "css/style_2.css";
    }
    style3.onclick = function () {
        theme.href = "css/style_3.css";
    }
}