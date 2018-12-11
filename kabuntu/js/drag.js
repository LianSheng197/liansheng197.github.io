//Make the DIV element draggagle:
if (document.getElementById("window1")) {dragElement(document.getElementById("window1"));}
if (document.getElementById("window2")) {dragElement(document.getElementById("window2"));}
if (document.getElementById("window3")) {dragElement(document.getElementById("window3"));}
if (document.getElementById("window4")) {dragElement(document.getElementById("window4"));}
if (document.getElementById("window5")) {dragElement(document.getElementById("window5"));}
if (document.getElementById("window6")) {dragElement(document.getElementById("window6"));}
if (document.getElementById("window7")) {dragElement(document.getElementById("window7"));}
if (document.getElementById("window8")) {dragElement(document.getElementById("window8"));}
if (document.getElementById("window9")) {dragElement(document.getElementById("window9"));}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // window's header movable only.
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // Whole window movable.
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    $('iframe').contents().find("body").on('mouseup', closeDragElement);
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}