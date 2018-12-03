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
terminal.addEventListener("mousedown", function(){ 
    title.innerText = "Terminal";
    init();
    terminal.classList.add("active");
});

firefox.addEventListener("mousedown", function(){ 
    title.innerText = "Mozilla Firefox";
    init();
    firefox.classList.add("active");
});
$('iframe').on("load", function(){
    $(this).contents().find("body").on('mousedown', function(){ 
        title.innerText = "Mozilla Firefox";
        init();
        firefox.classList.add("active"); 
    });
});

nautilus.addEventListener("mousedown", function(){ 
    title.innerText = "Nautilus";
    init();
    nautilus.classList.add("active");
});

trush.addEventListener("mousedown", function(){ 
    title.innerText = "Trush";
    init();
    trush.classList.add("active");
});

imageviewer.addEventListener("mousedown", function(){ 
    title.innerText = "Imageviewer";
    init();
    imageviewer.classList.add("active");
});

desktop.addEventListener("mousedown", function(){ 
    title.innerText = "Kabuntu Desktop"; 
    init();
    desktop.classList.add("active");
});

// remove 'active' from all window 
function init() {
    desktop.classList.remove("active");
    terminal.classList.remove("active");
    firefox.classList.remove("active");
    nautilus.classList.remove("active");
    trush.classList.remove("active");
    imageviewer.classList.remove("active");
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
        init();
        $(window).show();
        window.classList.add("active");
    });
}