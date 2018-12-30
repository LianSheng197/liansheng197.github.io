window.onbeforeunload = function(){
    if (!confirm()) {
        // return value require. (any)
        return 0;
    }
};

// Item Global Variable //

var key_orange = false;
var key_green = false;
var key_red = false;

var use_orange = false;
var use_green = false;
var use_red = false;

//////////////////////////

// After file read, run it.
function run() {
    // Hint Timestamp
    $(".dir").on("click", function(){   
        $("#hts").text(getTS());
        getTS();
    })
}

function getTS(){
    var now = new Date();
    var hh = (now.getHours() < 10)? "0" + now.getHours() : now.getHours();
    var mm = (now.getMinutes() < 10)? "0" + now.getMinutes() : now.getMinutes();
    var ss = (now.getSeconds() < 10)? "0" + now.getSeconds() : now.getSeconds();

    var ms = parseInt(now.getMilliseconds() / 100);
    var time = hh + ":" + mm + ":" + ss + "." + ms;

    console.log(time);
    return time;
}

//////////////////////////

pre();

////////////////// Prelude ///////////////////
function pre() {
    $("#title_class").text("序");
    $('#level_display').attr('dat', '101');
    $("#level").text("Class01 - Prelude");
    includeData(); run();
    
    $("#c01p01next").on("click", function(){   
        a1();
    })
}

////////////////// maze-A ///////////////////
function a1() {
    $("#c01maininfo").html("<p>幸好有指南針，不會迷失方向...</p><br><br>");
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1A1');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#a1n").on("click", function(){   
        sh1();
    });
    $("#a1s").on("click", function(){   
        ds();
    });
    $("#a1e").on("click", function(){   
        me();
        b1();
    });
    $("#a1w").on("click", function(){   
        ww();
    });
}

function a2() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1A2');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#a2n").on("click", function(){   
        dn();
    });
    $("#a2s").on("click", function(){   
        ms();
        a3();
    });
    $("#a2e").on("click", function(){   
        de();
    });
    $("#a2w").on("click", function(){   
        ww();
    });
}

function a3() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1A3');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#a3n").on("click", function(){ 
        mn();  
        a2();
    });
    $("#a3s").on("click", function(){ 
        ms();  
        a4();
    });
    $("#a3e").on("click", function(){   
        me();
        b3();
    });
    $("#a3w").on("click", function(){   
        ww();
    });
}

function a4() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1A4');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#a4n").on("click", function(){  
        mn(); 
        a3();
    });
    $("#a4s").on("click", function(){   
        ws();
    });
    $("#a4e").on("click", function(){   
        de();
    });
    $("#a4w").on("click", function(){   
        ww();
    });
}

////////////////// maze-B ///////////////////
function b1() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1B1');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#b1n").on("click", function(){   
        wn();
    });
    $("#b1s").on("click", function(){   
        ds();
    });
    $("#b1e").on("click", function(){   
        me();
        c1();
    });
    $("#b1w").on("click", function(){   
        mw();
        a1();
    });
}

function b2() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1B2');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#b2n").on("click", function(){   
        dn();
    });
    $("#b2s").on("click", function(){   
        ms();
        b3();
    });
    $("#b2e").on("click", function(){   
        me();
        c2();
    });
    $("#b2w").on("click", function(){   
        dw();
    });
}

function b3() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1B3');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#b3n").on("click", function(){   
        mn();
        b2();
    });
    $("#b3s").on("click", function(){   
        ms();
        b4();
    });
    $("#b3e").on("click", function(){   
        de();
    });
    $("#b3w").on("click", function(){   
        mw();
        a3();
    });
}

function b4() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1B4');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#b4n").on("click", function(){   
        mn();
        b3();
    });
    $("#b4s").on("click", function(){   
        ws();
    });
    $("#b4e").on("click", function(){   
        me();
        c4();
    });
    $("#b4w").on("click", function(){   
        dw();
    });
}
////////////////// maze-C ///////////////////
function c1() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1C1');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#c1n").on("click", function(){   
        wn();
    });
    $("#c1s").on("click", function(){   
        ms();
        c2();
    });
    $("#c1e").on("click", function(){   
        de();
    });
    $("#c1w").on("click", function(){   
        mw();
        b1();
    });
}

function c2() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1C2');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#c2n").on("click", function(){   
        mn();
        c1();
    });
    $("#c2s").on("click", function(){   
        ms();
        c3();
    });
    $("#c2e").on("click", function(){   
        me();
        d2();
    });
    $("#c2w").on("click", function(){   
        mw();
        b2();
    });
}

function c3() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1C3');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#c3n").on("click", function(){   
        mn();
        c2();
    });
    $("#c3s").on("click", function(){   
        ms();
        c4();
    });
    $("#c3e").on("click", function(){   
        de();
    });
    $("#c3w").on("click", function(){   
        dw();
    });
}

function c4() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1C4');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#c4n").on("click", function(){   
        mn();
        c3();
    });
    $("#c4s").on("click", function(){   
        ws();
    });
    $("#c4e").on("click", function(){   
        me();
        d4();
    });
    $("#c4w").on("click", function(){   
        mw();
        b4();
    });
}

////////////////// maze-D ///////////////////
function d1() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1D1');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#d1n").on("click", function(){   
        wn();
    });
    $("#d1s").on("click", function(){   
        ms();
        d2();
    });
    $("#d1e").on("click", function(){   
        me();
        e1();
    });
    $("#d1w").on("click", function(){   
        dw();
    });
}

function d2() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1D2');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#d2n").on("click", function(){   
        mn();
        d1();
    });
    $("#d2s").on("click", function(){   
        ds();
    });
    $("#d2e").on("click", function(){   
        me();
        e2();
    });
    $("#d2w").on("click", function(){   
        mw();
        c2();
    });
}

function d3() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1D3');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#d3n").on("click", function(){   
        dn();
    });
    $("#d3s").on("click", function(){   
        ms();
        d4();
    });
    $("#d3e").on("click", function(){   
        me();
        e3();
    });
    $("#d3w").on("click", function(){   
        dw();
    });
}

function d4() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1D4');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#d4n").on("click", function(){   
        mn();
        d3();
    });
    $("#d4s").on("click", function(){   
        ws();
    });
    $("#d4e").on("click", function(){   
        de();
    });
    $("#d4w").on("click", function(){   
        mw();
        c4();
    });
}

////////////////// maze-E ///////////////////
function e1() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1E1');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#e1n").on("click", function(){   
        wn();
    });
    $("#e1s").on("click", function(){   
        ds();
    });
    // for Mystery Space
    $("#e1e").on("click", function(){   
        if(use_orange) {
            if(use_green) {
                if(use_red) {
                    sh5();
                    sp();
                } else { sh4(); }
            } else { sh3(); }
        } else { sh2(); }
    });
    $("#e1w").on("click", function(){   
        mw();
        d1();
    });
}

function e2() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1E2');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#e2n").on("click", function(){   
        dn();
    });
    $("#e2s").on("click", function(){   
        ds();
    });
    $("#e2e").on("click", function(){   
        we();
    });
    $("#e2w").on("click", function(){   
        mw();
        d2();
    });
}

function e3() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1E3');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#e3n").on("click", function(){   
        dn();
    });
    $("#e3s").on("click", function(){   
        ms();
        e4();
    });
    $("#e3e").on("click", function(){   
        we();
    });
    $("#e3w").on("click", function(){   
        mw();
        d3();
    });
}

function e4() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1E4');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#e4n").on("click", function(){   
        mn();
        e3();
    });
    $("#e4s").on("click", function(){   
        ws();
    });
    $("#e4e").on("click", function(){   
        if(use_green) {
            if(use_orange) {
                sh9();
                fin();
            } else { sh8(); }
        } else { sh7(); }
    });
    $("#e4w").on("click", function(){   
        dw();
    });
}

////////////////// Special ///////////////////
function sp() {
    $("#title_class").text("神秘空間");
    $('#level_display').attr('dat', '1s');
    $("#level").text("Class01 - MysterySpace");
    includeData(); run();
    
    $("#back").on("click", function(){   
        sh6();
        e1();
    })
}

////////////////// Finish ///////////////////
function fin() {
    $("#title_class").text("迷宮出口");
    $('#level_display').attr('dat', '1e');
    $("#level").text("Class01 - Finish");
    includeData(); run();
    
    // $("#back").on("click", function(){   
    //     sh6();
    //     e1();
    // })
}


/////////////// Move Direction ////////////////
function mn() { $("#hint").text("你向北邊移動了"); }
function ms() { $("#hint").text("你向南邊移動了"); }
function me() { $("#hint").text("你向東邊移動了"); }
function mw() { $("#hint").text("你向西邊移動了"); }

////////////////// Dead End ///////////////////
function dn() { $("#hint").text("北邊是死路"); }
function ds() { $("#hint").text("南邊是死路"); }
function de() { $("#hint").text("東邊是死路"); }
function dw() { $("#hint").text("西邊是死路"); }

//////////////////// Wall /////////////////////
function wn() { $("#hint").text("北面是牆壁"); }
function ws() { $("#hint").text("南面是牆壁"); }
function we() { $("#hint").text("東面是牆壁"); }
function ww() { $("#hint").text("西面是牆壁"); }

//////////////// Special Hint /////////////////
// for start
function sh1() { $("#hint").text("北邊是入口。既然進來了就別出去了吧！"); }
// for mystery space
function sh2() { $("#hint").text("東邊有道橘色的門，上鎖了"); }
function sh3() { $("#hint").text("東邊那道橘色的門打開了，但裡面還有一道綠色的門，也是鎖著。"); }
function sh4() { $("#hint").text("東邊那兩道橘色與綠色的門都打開了。但裡面還有一道紅色鎖著的門= ="); }
function sh5() { $("#hint").text("終於把三道門都開啟了。你向深處走去。"); }
function sh6() { $("#hint").text("你回到了迷宮。"); }
// for exit
function sh7() { $("#hint").text("東邊有道綠色的門，上鎖了"); }
function sh8() { $("#hint").text("東邊那道綠色的門打開了，但裡面還有一道綠色的門，也是鎖著。 不過門後似乎透出亮光，莫非就是出口？"); }
function sh9() { $("#hint").text("兩道門都開啟了，你朝向光源走去。"); }