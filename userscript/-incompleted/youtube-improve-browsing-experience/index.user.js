// ==UserScript==
// @name         Youtube 改善瀏覽體驗（未完成）
// @namespace    -
// @version      0.11 (20190111)
// @description  讓電腦瀏覽器也能邊看影片邊看留言，就像 Youtube App 那樣。
// @author       LianSheng
// @match        https://www.youtube.com/watch*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // ================ Main ================ //
    // 針對一般模式
    function isNormalMode() {
        insertStyle();
        checkInfomationBlock();
        checkRecommendBlock();
        checkCommentBlock();

        setTimeout(enableSwitches, 2000);
    }

    // 針對劇院模式
    function isTheaterMode() {

    }
    // ================ Main ================ //

    var addjs_moreVideo = `
document.querySelectorAll("ytd-compact-radio-renderer")[0].setAttribute("style", "display: none;");
document.querySelectorAll("ytd-compact-autoplay-renderer")[0].setAttribute("style", "display: none;");

var change_moreVideo = "";
document.querySelectorAll("ytd-compact-video-renderer").forEach(function(element) {
    change_moreVideo += "<div>" + element + "</div>"
})

document.querySelectorAll("div#items.style-scope.ytd-watch-next-secondary-results-renderer")[0].innerHTML = change_moreVideo;

`;

    // 區塊
    var addcss_Block = `
.forNormalMode {
position: fixed;
right: 0;
top: calc(56px + 24px);
z-index: 2200;
background-color: rgba(255, 255, 255, 0.8);
max-height: calc(100vh - 80px);
height: calc(100vh - 80px);
max-width: 40vw;
overflow-y: scroll;
}

.forDarkMode {
position: fixed;
right: 0;
top: calc(56px + 24px);
z-index: 2200;
background-color: rgba(0, 0, 0, 0.8);
max-height: calc(100vh - 80px);
height: calc(100vh - 80px);
max-width: 40vw;
overflow-y: scroll;
}
`;

    // 右上角開關部分
    var addcss_rightTopSwitches =`
#rightTopSwitches {
user-select: none;
position: fixed;
right: 0;
top: 56px;
z-index: 2200;
}

#rt_informationSwitch {
display: inline-block;
width: 13vw;
height: 24px;
line-height: 24px;
font-size: 20px;
text-align: center;
background-color: rgba(64, 64, 64, 0.7);
color: rgba(240, 240, 240, 1.0);
}

#rt_commentSwitch {
display: inline-block;
width: 14vw;
height: 24px;
line-height: 24px;
font-size: 20px;
text-align: center;
background-color: rgba(64, 64, 64, 0.7);
color: rgba(240, 240, 240, 1.0);
}

#rt_recommendSwitch {
display: inline-block;
width: 13vw;
height: 24px;
line-height: 24px;
font-size: 20px;
text-align: center;
background-color: rgba(64, 64, 64, 0.7);
color: rgba(240, 240, 240, 1.0);
}

span[id^="rt_"]:hover {
color: red ！important;
cursor: pointer;
}

.rt_hideSwitch {
display: none;
}
`;
    var addhtml_rightTopSwitches = `
<div id="rightTopSwitches">
<span id="rt_informationSwitch" onclick="rt_informationClick()">資訊</span>
<span id="rt_commentSwitch" onclick="rt_commentClick()">留言</span>
<span id="rt_recommendSwitch" onclick="rt_recommendClick()">推薦</span>
</div>
`;

    // 確保留言區塊已載入
    var count_checkCommentBlock = 0;
    function checkCommentBlock() {
        setTimeout( function(){
            let commentBlock = document.querySelectorAll("ytd-item-section-renderer.style-scope.ytd-comments")[0];

            if(commentBlock == undefined) {
                checkCommentBlock();
                count_checkCommentBlock++;
            } else {
                console.log(commentBlock);
                console.log(`[Debug] count_checkCommentBlock: ${count_checkCommentBlock} (${count_checkCommentBlock*100}ms)`);

                if(isDarkMode()){
                    commentBlock.classList.add("forDarkMode");
                    commentBlock.classList.remove("forNormalMode");
                } else {
                    commentBlock.classList.add("forNormalMode");
                    commentBlock.classList.remove("forDarkMode");
                }

                commentBlock.classList.add("rt_hideSwitch");
            }
        }, 100)
    }

    // 確保資訊區塊已載入
    var count_checkInformationBlock = 0;
    function checkInfomationBlock() {
        let infomationBlock = document.querySelectorAll("#container.style-scope.ytd-video-secondary-info-renderer")[0];

        setTimeout(function(){
            if(infomationBlock == undefined) {
                checkInfomationBlock();
                count_checkInformationBlock++;
            } else {
                console.log(infomationBlock);
                console.log(`[Debug] count_checkInformationBlock: ${count_checkInformationBlock} (${count_checkInformationBlock*100}ms)`);

                if(isDarkMode()){
                    infomationBlock.classList.add("forDarkMode");
                    infomationBlock.classList.remove("forNormalMode");
                } else {
                    infomationBlock.classList.add("forNormalMode");
                    infomationBlock.classList.remove("forDarkMode");
                }

                //infomationBlock.classList.add("rt_hideSwitch");
        }
        }, 100)
    }

    // 確保推薦區塊已載入
    var count_checkRecommendBlock = 0;
    function checkRecommendBlock() {
        let recommendBlock = document.querySelectorAll("ytd-watch-next-secondary-results-renderer")[0];

        setTimeout(function(){
            if(recommendBlock == undefined) {
                checkRecommendBlock();
                count_checkRecommendBlock++;
            } else {
                console.log(recommendBlock);
                console.log(`[Debug] count_checkRecommendBlock: ${count_checkRecommendBlock} (${count_checkRecommendBlock*100}ms)`);

                if(isDarkMode()){
                    recommendBlock.classList.add("forDarkMode");
                    recommendBlock.classList.remove("forNormalMode");
                } else {
                    recommendBlock.classList.add("forNormalMode");
                    recommendBlock.classList.remove("forDarkMode");
                }

                recommendBlock.classList.add("rt_hideSwitch");
            }
        }, 100)
    }

    // 右上角開關與自訂樣式
    function insertStyle() {
        addStyle(addcss_Block);
        addStyle(addcss_rightTopSwitches);
        addHTML(addhtml_rightTopSwitches);
        addScript(addjs_moreVideo);
    }

    // 啓用右上角按鈕
    function enableSwitches() {
        let js = `
setTimeout(function(){
console.log("Ready");
    var informationBlock = document.querySelectorAll("#container.style-scope.ytd-video-secondary-info-renderer")[0];
    var recommendBlock = document.querySelectorAll("ytd-watch-next-secondary-results-renderer")[0];
    var commentBlock = document.querySelectorAll("ytd-item-section-renderer.style-scope.ytd-comments")[0];
}, 1000);

function rt_informationClick(){
    console.log("infomationSwitch");
    document.querySelectorAll("#container.style-scope.ytd-video-secondary-info-renderer")[0].classList.remove("rt_hideSwitch");
    document.querySelectorAll("ytd-watch-next-secondary-results-renderer")[0].classList.add("rt_hideSwitch");
    document.querySelectorAll("ytd-item-section-renderer.style-scope.ytd-comments")[0].classList.add("rt_hideSwitch");
}

function rt_recommendClick(){
    console.log("recommendBlock");
    document.querySelectorAll("#container.style-scope.ytd-video-secondary-info-renderer")[0].classList.add("rt_hideSwitch");
    document.querySelectorAll("ytd-watch-next-secondary-results-renderer")[0].classList.remove("rt_hideSwitch");
    document.querySelectorAll("ytd-item-section-renderer.style-scope.ytd-comments")[0].classList.add("rt_hideSwitch");
};
function rt_commentClick(){
    console.log("commentSwitch");
    document.querySelectorAll("#container.style-scope.ytd-video-secondary-info-renderer")[0].classList.add("rt_hideSwitch");
    document.querySelectorAll("ytd-watch-next-secondary-results-renderer")[0].classList.add("rt_hideSwitch");
    document.querySelectorAll("ytd-item-section-renderer.style-scope.ytd-comments")[0].classList.console.log("rt_hideSwitch");
};
`;
        addScript(js);
    }

    // 判斷當前是否爲劇院模式
    var getStatus = document.querySelectorAll("button.ytp-size-button.ytp-button path")[0].getAttribute("d").split(/[\ ,]/)[1] | undefined;

    if(getStatus == 28) {
        isNormalMode();
    } else if (getStatus == 26) {
        isTheaterMode();
    } else {
        // 未定義，可能有改版
        console.log("無法辨識當前顯示模式。\n此腳本已終止。");
    }

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

    // 【雜項】判斷是否開啓深色背景（true: 深色, false: 淺色）
    function isDarkMode() {
        let darkModeStatus = document.querySelectorAll("ytd-masthead")[0].getAttribute("dark");

        if(darkModeStatus == null) {
            return false;
        } else {
            return true;
        }
    }
})();