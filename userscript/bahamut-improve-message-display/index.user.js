// ==UserScript==
// @name         巴哈姆特 - 改善留言顯示
// @namespace    -
// @author       LianSheng
// @include      https://forum.gamer.com.tw/C.php*
// @include      https://forum.gamer.com.tw/Co.php*
// @version      20190127
// @grant        none
// @description  改善留言顯示（2019.01.27: 留言區塊自動對齊、微調部分樣式）
// ==/UserScript==

(function() {
    'use strict';
    var css = `
        div.commentsopen[id^=Commendlist_] {
            /*原始視窗高度 - navbar1 - navbar2 - 摺疊/收合按鈕 - 留言 - padding-top - padding-bottom */
            max-height: calc(100vh - 35px - 40px - 24px - 54px - 12px - 24px);
            overflow-y: scroll;
        }

        div.c-post__footer.c-reply:hover {
            /* 調整留言區顏色 */
            background-color: rgba(255, 0, 0, 0.1) !important;
        }

        /* 捲軸自定義樣式 - 開始 */
        div.commentsopen[id^=Commendlist_]::-webkit-scrollbar {
            width: 15px;
        }

        div.commentsopen[id^=Commendlist_]::-webkit-scrollbar-track {
            background-color: rgba(0, 0, 0, 0.3);
        }

        div.commentsopen[id^=Commendlist_]::-webkit-scrollbar-thumb {
            border: 1px solid rgba(255, 255, 255, 0.5);;
            background-color: rgba(0, 0, 0, 0.5);
        }

        div.commentsopen[id^=Commendlist_]::-webkit-scrollbar-button {
            display: none;
        }

        div.commentsopen[id^=Commendlist_]::-webkit-scrollbar-corner {
            background-color: black;
        }
        /* 捲軸自定義樣式 - 結束 */
    `;

    addStyle(css);

    // 【通用】添加 Style
    function addStyle(appendStyle) {
        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = appendStyle;
        document.body.appendChild(css);
    }

    // 【通用】添加 Script
    function addScript(appendScript) {
        let s = document.createElement('script');
        s.type = "text/javascript"
        s.innerHTML = appendScript;
        document.body.appendChild(s);
    }

    // 【通用】添加 HTML
    // 預設添加於 body 尾端.
    // 若指定的 target 有複數匹配，則只作用於第一個配對到的.
    // type 可選 'beforebegin', 'afterbegin', 'beforeend', 'afterend'.
    function addHTML(html, target="body", type="beforeend") {
        document.querySelectorAll(target)[0].insertAdjacentHTML(type, html);
    }

    // 展開更多留言
    document.querySelectorAll(".more-reply").forEach(function(element) {
        element.addEventListener("click", function(e){
            this.parentElement.nextElementSibling.classList.add('commentsopen');
        })
    })

    // 收合留言
    document.querySelectorAll(".hide-reply").forEach(function(element) {
        element.addEventListener("click", function(e){
            this.parentElement.nextElementSibling.classList.remove('commentsopen');
        })
    })

    // 留言區點擊自動對齊
    document.querySelectorAll("div.c-post__footer.c-reply").forEach(function(element) {
        element.addEventListener("click", function(e){
            let moveRangeY = this.getBoundingClientRect().top;
            /* 扣除 navbar1, navbar2 */
            window.scrollBy(0, moveRangeY-35-40);
        })
    })
})();