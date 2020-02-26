/* config */
var pages = [
    "#yo",
    "#about",
    "#use",
    "#contact"
];
/* code */
var scrollamount = 0

function sug(xe) {
    var element = document.querySelectorAll('[' + 'href="'+ xe + '"' + ']');
    var elements = document.querySelectorAll('[' + 'href' + ']');
    for ( var i = 0; i < elements.length; i++ ) {
        elements[i].style.borderBottom = "none"; // Remember to add corresponding clearing here if you change the style below.
        // Clear for the example below:
        //elements[i].style.color = "white";
    }
    for ( var i = 0; i < element.length; i++ ) {
        element[i].style.borderBottom = "2px solid white"; // This is the style that gets added to the link to the current page when you scroll.
        // Example change:
        //element[i].style.color = "red";
    }
}

function onl() {
    console.log("srcql has been loaded.")
    var ele = document.querySelectorAll('[' + 'href="'+ pages[0] + '"' + ']');
    for ( var i = 0; i < ele.length; i++ ) {
        ele[i].style.borderBottom = "2px solid white"; // Add border to first navlink
    }
}

window.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
        if (scrollamount<=0) {
            // Homepage reached
        }
        else {
            scrollamount--;
            e(pages[scrollamount].substring(1));
            sug(pages[scrollamount]);
            window.location.hash = pages[scrollamount];
        }
    }
    else if (event.deltaY > 0) {
        scrollamount++;
        if (pages[scrollamount] == undefined) {
            scrollamount = pages.length;
        }
        else {
            e(pages[scrollamount].substring(1));
            sug(pages[scrollamount]);
            window.location.hash = pages[scrollamount];
        }
    }
});
