// Modified from W3School

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

includeHTML();