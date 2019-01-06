    loadScripts([
        "https://i2.bahamut.com.tw/js/jquery/jquery-2.1.4.min.js",
        "https://i2.bahamut.com.tw/js/plugins/hammer-2.0.4.min.js",

        "https://i2.bahamut.com.tw/js/forum_common.js?v=1545878230",
        "https://i2.bahamut.com.tw/js/mobile_2k14.js",
        "https://i2.bahamut.com.tw/JS/ad/mobileBigBanner.js",
        "https://i2.bahamut.com.tw/js/MB_notify.js?v=1543395512",
        "https://i2.bahamut.com.tw/js/BAHA_EGG.js?v=1534925229",
        "https://i2.bahamut.com.tw/js/baha_flipsnap3.js?v=1478758523",
        "https://i2.bahamut.com.tw/js/changeText.js?v=1532055550",
        "https://i2.bahamut.com.tw/js/embed_player.js?v=1532055550",
        "https://i2.bahamut.com.tw/js/flipsnap.js",
        "https://i2.bahamut.com.tw/js/overthrow.js",
        "https://i2.bahamut.com.tw/js/signin.js?v=1522735555",

        "https://i2.bahamut.com.tw/js/guild.js?v=1538386350",
        "https://i2.bahamut.com.tw/js/mobile_2k15.js",
        "https://i2.bahamut.com.tw/js/forum_lastBoard.js?v=1525330826",
        "https://i2.bahamut.com.tw/js/user_login.js?v=1545901000"
    ],function(){
        console.log('All things are loaded');
    });

    function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
            script.onreadystatechange = script.onload = null;
            handler();
        }
        var head = document.getElementsByTagName("head")[0];
        (head || document.body).appendChild( script );
    };
    (function run(){
        if(array.length!=0){
            loader(array.shift(), run);
        }else{
            callback && callback();
        }
    })();
}