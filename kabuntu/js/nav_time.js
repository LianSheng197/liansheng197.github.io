function now(){
    var now = new Date();
    var hh = (now.getHours() < 10)? "0" + now.getHours() : now.getHours();
    var mm = (now.getMinutes() < 10)? "0" + now.getMinutes() : now.getMinutes();
    var ss = (now.getSeconds() < 10)? "0" + now.getSeconds() : now.getSeconds();
    var time = hh + ":" + mm + ":" + ss;

    document.getElementById("time").innerText = time;
}