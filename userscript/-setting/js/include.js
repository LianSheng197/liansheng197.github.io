////////////////////// for script node executable //////////////////////
function nodeScriptReplace(node) {
    if (nodeScriptIs(node) === true) {
        node.parentNode.replaceChild(nodeScriptClone(node), node);
    } else {
        var i = 0;
        var children = node.childNodes;
        while (i < children.length) {
            nodeScriptReplace(children[i++]);
        }
    }

    return node;
}

function nodeScriptIs(node) {
    return node.tagName === 'SCRIPT';
}

function nodeScriptClone(node) {
    var script = document.createElement("script");
    script.text = node.innerHTML;
    for (var i = node.attributes.length - 1; i >= 0; i--) {
        script.setAttribute(node.attributes[i].name, node.attributes[i].value);
    }
    return script;
}
/////////////////////////////////////////////////////////////////////////////////

function include() {
    let element, file, xhr, origin;

    element = document.querySelector("#opt");
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
                    element.innerHTML = "<div style='color: red'>該腳本的設定頁未完成，或者是網址有誤。</div>";
                }
                element.removeAttribute("inc");
                includeHTML();
            }
        }
        xhr.open("GET", file, false);
        xhr.send();

        return;
    }
};

function includeHTML() {
    include();
    nodeScriptReplace(document.querySelector("#opt"));
}