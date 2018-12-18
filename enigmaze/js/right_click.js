if (document.addEventListener) { // IE >= 9; other browsers
    document.addEventListener('contextmenu', function(e) {
        // do somethings here (TBC...)
        e.preventDefault();
    }, false);
} else { // IE < 9
    document.attachEvent('oncontextmenu', function() {
        alert("Your browser not support this feature.");
        window.event.returnValue = false;
    });
}