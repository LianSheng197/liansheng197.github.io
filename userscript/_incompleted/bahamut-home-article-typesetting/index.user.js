// ==UserScript==
// @name         小屋創作排版
// @namespace    -
// @version      20190108
// @description  作品資料夾排版
// @author       LianSheng142
// @grant        GM_setValue
// @grant        GM_getValue
// @match        https://home.gamer.com.tw/creation*
// ==/UserScript==

(function() {
    'use strict';
    var css = `

/* 原生作品資料夾標題 */
#BH-slave > h5.us_category {
    display: none;
}

#article_divheader {
    width: 100%;
}

#emptydiv {
    height: 10px;
}

/* 內嵌標題 */
#article_divheader > h5.us_category {
    border: 2px solid white;
    margin: auto;
    position: fixed;
    top: calc(20vh - 32px);
    padding-left: 2px;
    padding-right: 2px;
    -webkit-user-select: none;
    cursor: pointer;
}

#article_divheader > h5.us_category:hover {
    color: white;
    background-color: red;
}

/* 作品資料夾區塊 */
div.MSG-list6 {
    max-height: 70vh;
    min-width: 278px;
    position: fixed;
    top: 20vh;

    /* 通知是100、圖片預覽是95 */
    z-index: 94;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.2);
    overflow-y: scroll;
}

/* 捲軸自定義樣式 - 開始 */
div.MSG-list6::-webkit-scrollbar {
    width: 15px;
}

div.MSG-list6::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.3);
}

div.MSG-list6::-webkit-scrollbar-thumb {
    border: 1px solid rgba(255, 255, 255, 0.5);;
    background-color: rgba(0, 0, 0, 0.5);
}

div.MSG-list6::-webkit-scrollbar-button {
    display: none;
}

div.MSG-list6::-webkit-scrollbar-corner {
    background-color: black;
}
/* 捲軸自定義樣式 - 結束 */

    `;
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);

    // 識別原生標題中何者爲作品資料夾，讓它跟隨其區塊移動
    document.querySelectorAll("h5").forEach(function(element) {
        if(element.innerText == "作品資料夾") {
            element.classList.add("us_category");
        }
    })

    var addhtml = `<div id="article_div_header"><h5>作品資料夾</h5></div><div id="emptydiv"></div>`;
    document.querySelectorAll("div.MSG-list6")[0].insertAdjacentHTML('afterBegin', addhtml);
    document.querySelectorAll("div.MSG-list6")[0].id = "article_div";

    var addjs = `
var article_div = document.querySelectorAll("div.MSG-list6")[0];

// 修改自 https://stackoverflow.com/a/26230989
function getTop(elem) {
        var box = elem.getBoundingClientRect();

        var body = document.body;
        var docEl = document.documentElement;

        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var clientTop = docEl.clientTop || body.clientTop || 0;

        var top  = box.top +  scrollTop - clientTop;

        return Math.round(top);
}

// 讓該區塊可以拖移
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        console.log("down");
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

dragElement(article_div);
`;

    addScript(addjs);

    function addScript(src) {
        var s = document.createElement('script');
        s.innerHTML = src;
        document.body.appendChild(s);
    }
})();