function includeHTML() {
    let all, i, element, file, xhr, origin;
    all = document.getElementsByTagName("div");
    for (i = 0; i < all.length; i++) {
        element = all[i];
        origin = element.getAttribute("inc");
        if (origin) {
            file = "partial/" + origin + ".html";
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        element.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        element.innerHTML = "Page not found.";
                    }
                    document.querySelector("#opt").removeAttribute("inc");
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