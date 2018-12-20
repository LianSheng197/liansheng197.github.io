function move(elementToDrag, event) {            
    var scroll = getScrollOffsets();            
    var startX = event.clientX + scroll.x;            
    var startY = event.clientY + scroll.y;
                
    var origX = elementToDrag.offsetLeft;            
    var origY = elementToDrag.offsetTop;            
    var deltaX = startX - origX;            
    var deltaY = startY - origY;
                
    if (document.addEventListener) {                
    document.addEventListener("mousemove", moveHandler, true);                
    document.addEventListener("mouseup", upHandler, true);            
    } else if (document.attachEvent) {                
    elementToDrag.setCapture();                
    elementToDrag.attachEvent("onmousemove", moveHandler);                
    elementToDrag.attachEvent("onmouseup", upHandler);
                    
    elementToDrag.attachEvent("onlosecapture", upHandler);            
    }            
    if (event.stopPropagation) event.stopPropagation();            
    else event.cancelBubble = true;
                
    if (event.preventDefault) event.preventDefault();            
    else event.returnValue = false;
                
    function moveHandler(e) {                
    if (!e) e = window.event;                
    var scroll = getScrollOffsets();                
    elementToDrag.style.left = (e.clientX + scroll.x - deltaX) + "px";                
    elementToDrag.style.top = (e.clientY + scroll.y - deltaY) + "px";                
    if (e.stopPropagation) e.stopPropagation();                
    else e.cancelBubble = true;            
    }
                
    function upHandler(e) {                
    if (!e) e = window.event;                
    if (document.removeEventListener) {                    
        document.removeEventListener("mouseup", upHandler, true);                    
        document.removeEventListener("mousemove", moveHandler, true);                
    } else if (document.detachEvnet) {                    
        elementToDrag.detachEvent("onlosecapture", upHandler);                    
        elementToDrag.detachEvent("onmouseup", upHandler);                    
        elementToDrag.detachEvent("onmousemove", moveHandler);                
    }                
    if (e.stopPropagation) e.stopPropagation();                
    else e.cancelBubble = true;            
    }
            
}
        
function getScrollOffsets(w) {            
    w = w || window;            
    if (w.pageXOffset != null) return {
    x: w.pageXOffset,
    y: w.pageYOffset
    };            
    var d = w.document;            
    if (document.compatMode == "CSS1Compat") return {
    x: d.documentElement.scrollLeft,
    y: d.documentElement.scrollTop
    };            
    return {
    x: d.body.scrollLeft,
    y: d.body.scrollTop
    };                
}

// Drag and Drop.
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}