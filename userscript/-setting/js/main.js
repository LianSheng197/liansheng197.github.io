let scriptID = [
    "anigamer-fullscreen-send-bullet",
    "bahamut-archeology-comment-unfold",
    "bahamut-forum-post-cooldown",
    "bahamut-improve-message-display",
    "bahamut-overwrite-home-style",
    "youtube-repeat-specific-part"
];
let scriptAbbr = [
    "ag-fsb", "bh-acu", "bh-fpc", "bh-imd", "bh-ohs", "yt-rsp"
];

// loading mask
setTimeout(function () {
    if (document.querySelector("userscript-by-ls")) {
        document.querySelector("span#detect").innerHTML = "完成.";

        // detect each userscript.
        for (let i = 0; i < scriptID.length; i++) {
            if (document.querySelector(`div#${scriptID[i]}`)) {
                document.querySelector(`option#${scriptAbbr[i]}`).style.display = "inline";
            }
        }

        // default selected.
        for (let i = 0; i < scriptAbbr.length; i++) {
            if (location.hash == `#${scriptAbbr[i]}`) {
                document.querySelector(`option#${scriptAbbr[i]}`).setAttribute("selected", "");
                break;
            }
        }

        // fade out.
        document.querySelector("div#loading").classList.add("hidden");
    } else {
        document.title = "請先開啓腳本";
        document.querySelector("span#detect").style.display = "none";
        document.querySelector("span#norun").style.display = "block";
    }
}, 1000);

// select onchange
function selectChange(e) {
    let id = e[e.selectedIndex].id;
    if (id == null) {
        id = "";
    }

    window.history.replaceState("", "", `#${id}`);
    document.querySelector('#opt').setAttribute('inc', `${id}`);
    includeHTML();
}