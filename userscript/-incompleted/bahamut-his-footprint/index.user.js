// ==UserScript==
// @name         His footprint
// @namespace    -
// @version      0.1.2
// @description  As title.
// @author       LianSheng
// @match        https://forum.gamer.com.tw/*
// @require      https://greasyfork.org/scripts/377302-general-source-code-injection-tool/code/General%20Source%20Code%20Injection%20Tool.js?version=667827
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    // -----------[ SET ]------------- //

    let bsn = 60076;
    let author = "LianSheng142";
    let range = 500;

    // ---------[ PROGRAM ]----------- //
    addHTML(`<check>false</check>`, "html");
    console.log(`Hint: document.querySelector("check").innerText = "true"`);
    let running = false;
    let check_delay = 50;
    let run_delay = 50;
    let maxsn = 0;
    let minsn = 0;
    let id;
    let count = 0;

    // control start.
    setInterval(()=>{
        let tmp = document.querySelector("check").innerText;
        if ( tmp == "true" ) {
            if( !running ) {
                run();
            }
            running = true;
        } else if ( tmp == parseInt(tmp) ){
            if( !running ) {
                if( !running ) {
                    run(tmp);
                }
                running = true;
                document.querySelector("check").innerText = true;
            } else {
                console.log("Invalid operation: program is running.");
                document.querySelector("check").innerText = true;
            }
        } else {
            stop();
            running = false;
        }
    }, check_delay);


    function run(tmp=0) {
        let init = Date.now();
        maxsn = (tmp == 0) ? get_max() : tmp;
        minsn = (maxsn - range > 0) ? (maxsn - range) : 1;
        let step1 = Date.now();
        console.log(`parse completed.\n(${minsn} ~ ${maxsn}) [${step1 - init} ms]`);

        id = setInterval(() => {
            count++;
            if ( get(`https://forum.gamer.com.tw/C.php?bsn=${bsn}&snA=${minsn + count}&s_author=${author}`).length > 10000) {
                console.log(`Found:\nhttps://forum.gamer.com.tw/C.php?bsn=${bsn}&snA=${minsn + count}&s_author=${author}`);
            }

            if(count <= parseInt(count/(range/100))*(range/100)) {
                console.log(`${count} / ${range}`);
            }

            if(count >= range){
                stop();
                running = false;
                document.querySelector("check").innerText = "";
            }
        }, run_delay);
    }

    function stop() {
        clearInterval(id);
    }

    // Get now maximum snA
    function get_max() {
        let maxsnA = 0;
        let tmpsn = 0;

        get(`https://forum.gamer.com.tw/B.php?bsn=${bsn}&subbsn=0`)
            .replaceAll(/\n/, "")
            .match(/<tr class=\"b-list__row\"><td class=\"b-list__summary\">.+?<\/td>/g)
            .forEach((e) => {
            tmpsn = e.match(/<a name=\"([0-9]{1,7})\"><\/a>/)[1];
            if(tmpsn > maxsnA) {
                maxsnA = tmpsn;
            }
        })
        return maxsnA;
    }

    // XHR GET
    function get(url, set=false) {
        let temp;
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                temp = xhr.responseText;
            }
        }
        xhr.open('GET', url, set);
        xhr.send(null);

        return temp;
    }
})();// ==UserScript==
// @name         巴哈姆特 - 發文回覆冷卻倒數
// @namespace    -
// @version      20190308.2
// @description  每次發文都要間隔一分鐘。然後巴哈又沒有提供原生的發文倒數...（假設冷卻時間爲 60 秒整、預留 3 秒緩衝）
// @author       LianSheng
// @require      https://greasyfork.org/scripts/377302-general-source-code-injection-tool/code/General%20Source%20Code%20Injection%20Tool.js?version=667827
// @include      https://forum.gamer.com.tw/B.php*
// @include      https://forum.gamer.com.tw/C.php*
// @include      https://forum.gamer.com.tw/Co.php*
// @include      https://forum.gamer.com.tw/post1.php*
// @grant        GM_getValue
// @grant        GM_setValue
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    let url = location.href;
    let hint = "發文冷卻中...";

    let css = `
[last-reply] {
    position: relative;
}
[last-reply]:hover::before {
    content: attr(last-reply);
    position: absolute;
    z-index: 2000;
    top: 46px;
    display: inline-block;
    padding: 4px 8px;
    border-radius: 2px;
    background: #222;
    color: #fff;
    font-size: 16px;
    font-family: sans-serif;
    white-space: nowrap;
}
`;

    if( !GM_getValue("lastreply") ) {
        GM_setValue("lastreply", 0);
    }

    // 文章列表（發文）
    if( url.match("B.php") ) {
        let post = document.querySelector("li.BH-menu-forumA-back > a");

        let id = setInterval(function() {
            let delta = cd();

            if( delta > 0 ) {
                post.addEventListener("click", disable);
                post.innerText = `${hint} ${delta} 秒`;
            } else {
                post.removeEventListener("click", disable);
                post.innerText = "發文";
                clearInterval(id);
            }
        }, 200);
    }

    // 文章串（回覆）/ 特定樓層（回覆）
    if( url.match("C.php") || url.match("Co.php") ) {
        // 上滾時的導覽列
        let navup_a = document.querySelector("i.BHicon-comment2.BH-lg").parentElement;
        let navup_block = navup_a.parentElement;
        // 下滾時的導覽列
        let navdown = document.querySelector("div.c-menu__scrolldown > div.toolbar").children[3];
        // 樓層回覆（複數個）
        let floor = document.querySelectorAll("button.btn--sm.btn--normal");
        // 頁底快速回覆
        let foot_fast = document.querySelector("input.btn--sm.btn--send.btn--normal");
        // 頁底打開完整編輯器、引言回覆
        let foot_full = document.querySelectorAll("div.option > div.toolbar > button[onclick^='location']");

        // 移除原生 title
        navup_a.removeAttribute("title");
        foot_full[0].removeAttribute("title");
        foot_full[1].removeAttribute("title");

        // 發文回覆倒數提示
        let id = setInterval(function() {
            let delta = cd();

            if( delta > 0 ) {
                navup_block.addEventListener("click", disable);
                navdown.addEventListener("click", disable);
                foot_fast.disabled = true;
                foot_full[0].disabled = true;
                foot_full[1].disabled = true;
                floor.forEach(function(e) {
                    e.disabled = true;
                    e.querySelector("span").innerText = `${hint} ${delta} 秒`;
                });
                navup_block.setAttribute("last-reply", `${hint} ${delta} 秒`);
                navdown.innerText = `${hint} ${delta} 秒`;
                foot_fast.value = `${hint} ${delta} 秒`;
                foot_full[0].setAttribute("last-reply", `${hint} ${delta} 秒`);
                foot_full[1].setAttribute("last-reply", `${hint} ${delta} 秒`);
            } else {
                navup_block.removeEventListener("click", disable);
                navdown.removeEventListener("click", disable);
                foot_fast.removeAttribute("disabled");
                foot_full[0].removeAttribute("disabled");
                foot_full[1].removeAttribute("disabled");
                floor.forEach(function(e) {
                    e.removeAttribute("disabled");
                    e.querySelector("span").innerText = "回覆";
                });
                navup_block.setAttribute("last-reply", `回覆此主題`);
                navdown.innerText = "回覆";
                foot_fast.value = "送出";
                foot_full[0].setAttribute("last-reply", `使用完整編輯器`);
                foot_full[1].setAttribute("last-reply", `引言回覆`);
                clearInterval(id);
            }
        }, 200);

        // 頁底快速回覆點擊事件
        foot_fast.addEventListener("click", function() {setTimeout( function() {
            if( document.querySelector("button[autofocus]") ) {
                document.querySelector("button[autofocus]").addEventListener("click", future63);
            }
        }, 100)});

    }

    // 完整編輯頁
    if( url.match("post1.php") ) {
        let type = new URL(location.href).searchParams.get("type");
        //（不含編輯既有文章）
        // 1 發文、2 回覆、3 編輯
        if(type != 3) {
            let post = document.querySelector("li.BH-menu__post__btn > a");
            post.addEventListener("click", function() {setTimeout( function() {
                if( document.querySelector("button[autofocus]") ) {
                    document.querySelector("button[autofocus]").addEventListener("click", future63);
                }
            }, 100)});
        }
    }

    function disable(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function future63() {
        return GM_setValue("lastreply", Date.now() + 63000);
    }

    function cd() {
        return parseInt((GM_getValue("lastreply") - Date.now()) / 1000);
    }

    addStyle(css, "html");
})();