// ==UserScript==
// @name         動畫瘋 - 全螢幕發彈幕
// @namespace    -
// @version      0.1
// @description  原本在全螢幕模式下是不能發彈幕的，必須切回一般模式。這個腳本將把發彈幕的輸入框整合至全螢幕時底下的功能列。
// @author       LianSheng
// @require      https://greasyfork.org/scripts/377302-general-source-code-injection-tool/code/General%20Source%20Code%20Injection%20Tool.js?version=667827
// @match        https://ani.gamer.com.tw/animeVideo.php*
// @compatible   chrome
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    let note = "";

    addStyleLink("https://use.fontawesome.com/releases/v5.7.0/css/all.css");

    let html = `
<div id="custom_bullet_launcher" class="vjs-control">
    <i class="fas fa-comment-alt"></i>
</div>
<input id="custom_bullet_input">
`;
    let css = `
#custom_bullet_launcher {
    width: 42px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 8px;
    padding-right: 8px;
    margin-left: 16px;
    font-size: 18px;
    line-height: 26px;
    cursor: pointer;
}

#custom_bullet_launcher:hover {
    color: #00B4D8;
}

#custom_bullet_input {
    width: 360px;
    height: 32px;
    font-size: 20px;
}
`;

    let js = `
let custom_input = document.querySelector("#custom_bullet_input");
let custom_launcher = document.querySelector("div#custom_bullet_launcher");
let origin_input = document.querySelector("input#danmutxt");
let origin_send = document.querySelector("button.bullet-send-submit");

${note/* 待增加 */}
custom_launcher.addEventListener("click", function() {

});

${note/* 因爲動畫瘋有該死的 0~9 快捷鍵，所以必須阻止事件冒泡。*/}
custom_input.addEventListener("keydown", function(e) {
    e.stopPropagation();

    ${note/* keyCode 已經被排除標準 */}
    if(e.key == "Enter"){
        origin_input.value = custom_input.value;
        custom_input.value = "";
        origin_send.click();
    }
});
`;

    // 年齡確認的元件讀入較慢。（每 0.1 秒檢查一次）
    let r18btnid = setInterval(function() {
        if(document.querySelector("button#adult")) {
            log("R18: found.");
            clearInterval(r18btnid);
            // 開頭的年齡限制確認
            document.querySelector("button#adult").addEventListener("click", function() {
                log("R18: clicked.");
                // 觸發條件：點擊全螢幕切換按鈕
                document.querySelector("div.vjs-fullscreen-control").addEventListener("click", bulletFullScreen);
                // 觸發條件：雙擊影片
                document.querySelector("div.video").addEventListener("dblclick", bulletFullScreen);
                // 觸發條件：ESC, F11, F, f.... ESC, F11 目前抓不到，暫時無解QQ
                window.addEventListener("keydown", function(event){
                    console.log(event.key);
                    if(event.key == "Escape" || event.key == "F11" || event.key == "F" || event.key == "f")
                        bulletFullScreen();
                });

                // 避免樣式鎖死導致功能列不能隱藏
                document.querySelector("#custom_bullet_input").addEventListener("blur", function() {
                    document.querySelector("div.vjs-control-bar").removeAttribute("style");
                })
            });

            addStyle(css, "div.vjs-control-bar");
            addHTML(html, "div.vjs-control-bar");
            addScript(js, "div.vjs-control-bar");

            custom_hide();
        }
    }, 100);

    function bulletFullScreen() {
        // 當前有物件是全螢幕
        // 需要延時，否則抓值時狀態尚未改變
        setTimeout(function(){
            if(document.fullscreenElement != null) {
                log("啓用快捷鍵", "i");
                window.addEventListener("keydown", hotkeyFullScreen);
                custom_display();
            } else {
                log("停用快捷鍵", "i");
                window.removeEventListener("keydown", hotkeyFullScreen, false);
                custom_hide();
            }
        }, 100);
    }

    // 全螢幕時支援快捷鍵，不用動滑鼠
    function hotkeyFullScreen(e) {
        if(e.key == "/") {
            e.preventDefault();
            document.querySelector("div.vjs-control-bar").style.visibility = "visible";
            document.querySelector("div.vjs-control-bar").style.opacity = 1;
            document.querySelector("#custom_bullet_input").focus();
        }
    }

    function custom_hide() {
        document.querySelector("#custom_bullet_input").style.display = "none";
        document.querySelector("#custom_bullet_launcher").style.display = "none";
    }

    function custom_display() {
        document.querySelector("#custom_bullet_input").removeAttribute("style");
        document.querySelector("#custom_bullet_launcher").removeAttribute("style");
    }

    // type: (i)nfo, (w)arning, (e)rror.
    function log(msg, type="") {
        let prefix = "[Fullscreen-bullet]";

        if(type == "e") {
            console.log(`%c${prefix} %c${msg}`, "font-size: 16px; color: red", "color: auto");
        } else if (type == "w") {
            console.log(`%c${prefix} %c${msg}`, "font-size: 12px; color: orange", "color: auto");
        } else if (type == "i") {
            console.log(`%c${prefix} %c${msg}`, "font-size: 12px; color: skyblue", "color: auto");
        } else {
            console.log(`${prefix} ${msg}`);
        }
    }
})();