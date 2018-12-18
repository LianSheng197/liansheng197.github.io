// Modified from W3School

// Main Page Partition Include
function includeHTML() {
    var all, i, element, file, xhr, origin;
    /*loop through a collection of all HTML elements:*/
    all = document.getElementsByTagName("div");
    for (i = 0; i < all.length; i++) {
      element = all[i];
      origin = element.getAttribute("inc");
      if (origin) {
        file = "partial/" + origin + ".html";
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {element.innerHTML = this.responseText;}
            if (this.status == 404) {element.innerHTML = "Page not found.";}
            element.removeAttribute("inc");
            includeHTML();
          }
        } 
        // true: NOT Synchronous 
        // false: Synchronous 
        xhr.open("GET", file, false);
        xhr.send();
        return;
      }
    }
  };

// Level Data Include
function includeData() {
  var file, xhr, origin, display;
  if(document.getElementById("level_display")) {
    display = document.getElementById("level_display");
    origin = display.getAttribute("dat");
    if (origin) {
      file = "data/" + origin;
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            // display.innerHTML = Base64.decode(this.responseText);
            display.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            display.innerHTML = "找不到頁面: " + origin + "<br>請按底下的【重新載入】按鈕";
          }
          display.removeAttribute("dat");
        }
      } 
      // true: NOT Synchronous 
      // false: Synchronous 
      xhr.open("GET", file, false);
      xhr.send();
      return;
    }
  }
};

includeHTML();
includeData();