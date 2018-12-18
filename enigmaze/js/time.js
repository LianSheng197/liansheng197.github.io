setInterval(function(){ 
    now();
}, 200);

function now(){
    var now = new Date();
    var hh = (now.getHours() < 10)? "0" + now.getHours() : now.getHours();
    var mm = (now.getMinutes() < 10)? "0" + now.getMinutes() : now.getMinutes();
    var ss = (now.getSeconds() < 10)? "0" + now.getSeconds() : now.getSeconds();
    var time = hh + ":" + mm + ":" + ss;

    var nav_time = document.getElementById("time");
    var prev = nav_time.innerText;

    if(time != prev)
        nav_time.innerText = time;
}