// ==UserScript==
// @name         UnFoldComments
// @author       LianSheng
// @version      0.12
// @description  -
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @match        https://m.gamer.com.tw/ajax/MB_forum_commend_all.php?*
// ==/UserScript==

(function() {
    'use strict';

    $("a[href^=javascript]").on("click", function(){
        $(this).parent().next().show(200);
    })

    $("body").append(`
     <div style="position: fixed; right: 10px; top: 10px;">
         <button onclick="document.querySelectorAll('a[href^=javascript]').forEach(function(e){ e.parentElement.nextElementSibling.style.display='block' });">開啓所有摺疊</button>
         <button onclick="document.querySelectorAll('a[href^=javascript]').forEach(function(e){ e.parentElement.nextElementSibling.style.display='none' });">關閉所有摺疊</button>
     </div>
    `);
})();