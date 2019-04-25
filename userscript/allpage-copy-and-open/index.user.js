// ==UserScript==
// @name         OPEN!!
// @namespace    -
// @version      0.12
// @description  -
// @author       LianSheng
// @match        *://*/*
// ==/UserScript==

(function() {
    'use strict';
    function open() {
        if(event.ctrlKey && (event.key == "c" || event.key == "C")){
            let select = window.getSelection().toString();
            let matchAll = select.match(/http(s)?:\/\/.+?\/[a-zA-Z0-9\-\.\/!?#&%=]*/g);
            if(matchAll!=null){
                let check = confirm(`即將打開 ${matchAll.length} 個頁面，確定開啓？`);
                if (check == true) {
                    matchAll.forEach(function(e){
                        window.open(e, "_blank");
                    });
                }
            }
        }
    }

    document.addEventListener("keydown", open);
})();