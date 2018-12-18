// upper left corner title
var title = document.getElementById("title");

// window select
var desktop = document.getElementById("main");
var terminal = document.getElementById("window1");
var firefox = document.getElementById("window2");
var nautilus = document.getElementById("window3");
var trush = document.getElementById("window4");
var imageviewer = document.getElementById("window5");

// window close (just hide)
var close = document.getElementsByClassName("fa-times-circle");
$.each(close, function(i, value) {
    value.addEventListener("click", function(){
        close_window = $(close[i]).parent().parent().prop("id");
        $("#" + close_window).hide();
    });
});

// select window event listener
console.log(terminal);
terminal.addEventListener("mousedown", function(){ 
    title.innerText = "Terminal";
    order(this);
});

firefox.addEventListener("mousedown", function(){ 
    title.innerText = "Mozilla Firefox";
    order(this);
});
$('iframe').on("load", function(){
    $(this).contents().find("body").on('mousedown', function(){ 
        title.innerText = "Mozilla Firefox";
        order(this);
    });
});

nautilus.addEventListener("mousedown", function(){ 
    title.innerText = "Nautilus";
    order(this);
});

trush.addEventListener("mousedown", function(){ 
    title.innerText = "Trush";
    order(this);
});

imageviewer.addEventListener("mousedown", function(){ 
    title.innerText = "Imageviewer";
    order(this);
});

desktop.addEventListener("mousedown", function(){ 
    title.innerText = "Kabuntu Desktop"; 
    order(this);
});


// get all windows initial z-index.
var windows_z = [
    $(terminal).css("z-index"),
    $(firefox).css("z-index"),
    $(nautilus).css("z-index"),
    $(trush).css("z-index"),
    $(imageviewer).css("z-index"),
]
// window's z-index order.
function order(select) {
    if($(select).css("z-index") != 100) {
        console.log(select);
    }
    console.log(windows_z);
}

// open window (form sidebar)
var s_search = document.getElementById("s_search");
s_search.addEventListener("click", function(){
    // tbc
    console.log(this);
});

for(let i=1; i<=5; i++){
    let sidebar_item = document.getElementById("s_" + i);
    let window = document.getElementById("window" + i);
    sidebar_item.addEventListener("click", function(){
        console.log(this);
        order(this);
        $(window).show();
        window.classList.add("active");
    });
}