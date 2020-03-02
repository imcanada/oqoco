/* config */
var sektiojnnom = "page" // classname of your "pages"
var defoltnom = "start" // default page classname
/* Code */
function l(n, e) {
    for (var t = document.getElementsByClassName(n), o = 0; o < t.length; o++) t[o].style.display = e
}

function e(n) {
    null != document.getElementById(n) && (l(sektiojnnom, "none"), document.getElementById(n).style.display = "initial")
}
window.onload = function() {
    doOnload();
    l(sektiojnnom, "none"), l(defoltnom, "inline-block");
    var n = window.location.hash.substring(1);
    "" != n && e(n)
}, document.addEventListener("click", function(n) {
    null != n.target.getAttribute("href") && e(n.target.getAttribute("href").substring(1))
}, !1);

function doOnload() {
    console.log("oqoco loaded."); /* onl(); <-- this is for srcql*/
}
