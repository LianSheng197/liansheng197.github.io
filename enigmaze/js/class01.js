window.onbeforeunload = function(){
    if (!confirm()) {
        // return value require. (any)
        return 0;
    }
};

// Item Global Variable //

var control_panel = false;

var key_orange = false;
var key_green = false;
var key_red = false;

var use_orange = false;
var use_green = false;
var use_red = false;

var open_orange = false;
var open_green = false;
var open_red = false;

var randps = makeid();
var achvrkey = Base64.decode("cGFzc3dvcmQgaXMgJw==") + randps + "'";
var clickmecnt = 0;

//////////////////////////

// After file read, run it.
function run() {
    // Hint Timestamp
    $(".dir").on("click", function(){   
        $("#hts").text(getTS());
    })

    item();
}

function getTS(){
    var now = new Date();
    var hh = (now.getHours() < 10)? "0" + now.getHours() : now.getHours();
    var mm = (now.getMinutes() < 10)? "0" + now.getMinutes() : now.getMinutes();
    var ss = (now.getSeconds() < 10)? "0" + now.getSeconds() : now.getSeconds();

    var ms = parseInt(now.getMilliseconds() / 100);
    var time = hh + ":" + mm + ":" + ss + "." + ms;

    return time;
}

//////////////////////////

pre();

////////////////// Prelude ///////////////////
function pre() {
    $("#title_class").text("序");
    $('#level_display').attr('dat', '101');
    $("#level").text("Class01 - Prelude");
    includeData();
    
    $("#c01p01next").on("click", function(){   
        fna1();
    })
}

////////////////// maze-A ///////////////////
function fna1() {
    $("#c01maininfo").html(`
        <p>牆面上寫着紅色的 <span style="color: darkred;">watch?</span> 似乎年代久遠，十分暗淡斑駁了。</p>
    `);
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1A1');
    $("#level").text("Class01 - Maze");
    includeData(); run(); item();

    $("#rano1").html("");
    
    $("#a1n").on("click", function(){   
        sh1();
    });
    $("#a1s").on("click", function(){   
        fnds();
    });
    $("#a1e").on("click", function(){   
        fnme();
        fnb1();
    });
    $("#a1w").on("click", function(){   
        fnww();
    });
}

function fna2() {
    $("#c01maininfo").html(`
        <p><span style="color: darkred;">_TaKUSkLtQ8</span></p>
    `);
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1A2');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#a2n").on("click", function(){   
        fndn();
    });
    $("#a2s").on("click", function(){   
        fnms();
        fna3();
    });
    $("#a2e").on("click", function(){   
        fnde();
    });
    $("#a2w").on("click", function(){   
        fnww();
    });
}

function fna3() {
    $("#c01maininfo").html("");
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1A3');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#a3n").on("click", function(){ 
        fnmn();  
        fna2();
    });
    $("#a3s").on("click", function(){ 
        fnms();  
        fna4();
    });
    $("#a3e").on("click", function(){   
        fnme();
        fnb3();
    });
    $("#a3w").on("click", function(){   
        fnww();
    });
}

function fna4() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1A4');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#a4n").on("click", function(){  
        fnmn(); 
        fna3();
    });
    $("#a4s").on("click", function(){   
        fnws();
    });
    $("#a4e").on("click", function(){   
        fnde();
    });
    $("#a4w").on("click", function(){   
        fnww();
    });
}

////////////////// maze-B ///////////////////
function fnb1() {
    $("#c01maininfo").html("");
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1B1');
    $("#level").text("Class01 - Maze");
    includeData(); run();

    if(!key_red) {
        clickmecnt = 0;
        var tmp = clickmecnt;
        $("#rano1").html(`<div style="color: darkred;">Click Me</div>`);
        $("#rano1").on("click", function(){   
            if(tmp == 0){
                $("#rano1").html(`<div style="color: darkred;">more</div>`);
            } else if(tmp == 1) {
                $("#rano1").html(`<div style="color: darkred;">more.</div>`);
            } else if(tmp == 2) {
                $("#rano1").html(`<div style="color: darkred;">more..</div>`);
            } else if(tmp == 3) {
                $("#rano1").html(`<div style="color: darkred;">more...</div>`);
            } else if(tmp == 4) {
                $("#rano1").html(`
                    <div style="color: darkred;">
                        <input id="clickme" type="text" maxlength="6" size="6">
                    </div>
                `);

                clickmeinput();
            }

            tmp++;
        });
    }
    
    $("#b1n").on("click", function(){   
        fnwn();
    });
    $("#b1s").on("click", function(){   
        fnds();
    });
    $("#b1e").on("click", function(){   
        fnme();
        fnc1();
    });
    $("#b1w").on("click", function(){   
        fnmw();
        fna1();
    });
}

function fnb2() {
    $("#c01maininfo").html("");
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1B2');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#b2n").on("click", function(){   
        fndn();
    });
    $("#b2s").on("click", function(){   
        fnms();
        fnb3();
    });
    $("#b2e").on("click", function(){   
        fnme();
        fnc2();
    });
    $("#b2w").on("click", function(){   
        fndw();
    });
}

function fnb3() {
    $("#c01maininfo").html(`
        <p><span style="color: darkred;">v=</span></p>
    `);
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1B3');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#b3n").on("click", function(){   
        fnmn();
        fnb2();
    });
    $("#b3s").on("click", function(){   
        fnms();
        fnb4();
    });
    $("#b3e").on("click", function(){   
        fnde();
    });
    $("#b3w").on("click", function(){   
        fnmw();
        fna3();
    });
}

function fnb4() {
    $("#c01maininfo").html("");
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1B4');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#b4n").on("click", function(){   
        fnmn();
        fnb3();
    });
    $("#b4s").on("click", function(){   
        fnws();
    });
    $("#b4e").on("click", function(){   
        fnme();
        fnc4();
    });
    $("#b4w").on("click", function(){   
        fndw();
    });
}
////////////////// maze-C ///////////////////
function fnc1() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1C1');
    $("#level").text("Class01 - Maze");
    includeData(); run();

    $("#rano1").html("");
    
    $("#c1n").on("click", function(){   
        fnwn();
    });
    $("#c1s").on("click", function(){   
        fnms();
        fnc2();
    });
    $("#c1e").on("click", function(){   
        fnde();
    });
    $("#c1w").on("click", function(){   
        fnmw();
        fnb1();
    });
}

function fnc2() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1C2');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    if(control_panel){
        ctlp();
    } else {
        lightup();
    }
    
    $("#c2n").on("click", function(){   
        fnmn();
        fnc1();
    });
    $("#c2s").on("click", function(){   
        fnms();
        fnc3();
    });
    $("#c2e").on("click", function(){   
        fnme();
        fnd2();
    });
    $("#c2w").on("click", function(){   
        fnmw();
        fnb2();
    });
}

function fnc3() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1C3');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#c3n").on("click", function(){   
        fnmn();
        fnc2();
    });
    $("#c3s").on("click", function(){   
        fnms();
        fnc4();
    });
    $("#c3e").on("click", function(){   
        fnde();
    });
    $("#c3w").on("click", function(){   
        fndw();
    });
}

function fnc4() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1C4');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#c4n").on("click", function(){   
        fnmn();
        fnc3();
    });
    $("#c4s").on("click", function(){   
        fnws();
    });
    $("#c4e").on("click", function(){   
        fnme();
        fnd4();
    });
    $("#c4w").on("click", function(){   
        fnmw();
        fnb4();
    });
}

////////////////// maze-D ///////////////////
function fnd1() {
    $("#c01maininfo").html("");
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1D1');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#d1n").on("click", function(){   
        fnwn();
    });
    $("#d1s").on("click", function(){   
        fnms();
        fnd2();
    });
    $("#d1e").on("click", function(){   
        fnme();
        fne1();
    });
    $("#d1w").on("click", function(){   
        fndw();
    });
}

function fnd2() {
    $("#c01maininfo").html("");
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1D2');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#d2n").on("click", function(){   
        fnmn();
        fnd1();
    });
    $("#d2s").on("click", function(){   
        fnds();
    });
    $("#d2e").on("click", function(){   
        fnme();
        fne2();
    });
    $("#d2w").on("click", function(){   
        fnmw();
        fnc2();
    });
}

function fnd3() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1D3');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#d3n").on("click", function(){   
        fndn();
    });
    $("#d3s").on("click", function(){   
        fnms();
        fnd4();
    });
    $("#d3e").on("click", function(){   
        fnme();
        fne3();
    });
    $("#d3w").on("click", function(){   
        fndw();
    });
}

function fnd4() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1D4');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#d4n").on("click", function(){   
        fnmn();
        fnd3();
    });
    $("#d4s").on("click", function(){   
        fnws();
    });
    $("#d4e").on("click", function(){   
        fnde();
    });
    $("#d4w").on("click", function(){   
        fnmw();
        fnc4();
    });
}

////////////////// maze-E ///////////////////
function fne1() {
    $("#c01maininfo").html(`
        <p><span style="color: darkred;">TU/B3</span></p>
    `);
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1E1');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#e1n").on("click", function(){   
        fnwn();
    });
    $("#e1s").on("click", function(){   
        fnds();
    });
    // for Mystery Space
    $("#e1e").on("click", function(){   
        if(open_orange) {
            if(control_panel) {
                if(open_red) {
                    sh5();
                    sp();
                } else { sh4(); }
            } else { sh3(); }
        } else { sh2(); }
    });
    $("#e1w").on("click", function(){   
        fnmw();
        fnd1();
    });
}

function fne2() {
    $("#c01maininfo").html(`
        <p><span style="color: darkred;">hey, you...</span></p>
    `);
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1E2');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#e2n").on("click", function(){   
        fndn();
    });
    $("#e2s").on("click", function(){   
        fnds();
    });
    $("#e2e").on("click", function(){   
        fnwe();
    });
    $("#e2w").on("click", function(){   
        fnmw();
        fnd2();
    });
}

function fne3() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1E3');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#e3n").on("click", function(){   
        fndn();
    });
    $("#e3s").on("click", function(){   
        fnms();
        fne4();
    });
    $("#e3e").on("click", function(){   
        fnwe();
    });
    $("#e3w").on("click", function(){   
        fnmw();
        fnd3();
    });
}

function fne4() {
    $("#title_class").text("迷宮內部");
    $('#level_display').attr('dat', '1E4');
    $("#level").text("Class01 - Maze");
    includeData(); run();
    
    $("#e4n").on("click", function(){   
        fnmn();
        fne3();
    });
    $("#e4s").on("click", function(){   
        fnws();
    });
    $("#e4e").on("click", function(){   
        if(control_panel) {
            if(open_orange) {
                sh9();
                fin();
            } else { sh8(); }
        } else { sh7(); }
    });
    $("#e4w").on("click", function(){   
        fndw();
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
        fne1();
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
    //     fne1();
    // })
}


/////////////// Move Direction ////////////////
function fnmn() { $("#hint").text("你向北邊移動了"); }
function fnms() { $("#hint").text("你向南邊移動了"); }
function fnme() { $("#hint").text("你向東邊移動了"); }
function fnmw() { $("#hint").text("你向西邊移動了"); }

////////////////// Dead End ///////////////////
function fndn() { $("#hint").text("北邊是死路"); }
function fnds() { $("#hint").text("南邊是死路"); }
function fnde() { $("#hint").text("東邊是死路"); }
function fndw() { $("#hint").text("西邊是死路"); }

//////////////////// Wall /////////////////////
function fnwn() { $("#hint").text("北面是牆壁"); }
function fnws() { $("#hint").text("南面是牆壁"); }
function fnwe() { $("#hint").text("東面是牆壁"); }
function fnww() { $("#hint").text("西面是牆壁"); }

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

///////////////// Light Up (Green) ////////////////
// init status (0: dark; 1: light.)
var table_status = Array(25).fill(0);
var move_count = 0;
function lightup() {
    table_status = Array(25).fill(0);
    move_count = 0;
    var lt = document.getElementById("light-table");
    for(var i=0; i<5; i++) {
        var td_tmp = "<tr>";
        for(var j=0; j<5; j++) {
            var no = (i*5+j);
            td_tmp += "<td id='"+no+"' onclick='change("+no+");'></td>";
        }
        td_tmp += "</tr>";
        lt.innerHTML += td_tmp;
    }
}

function change(number) {
    // light? (1)
    if(table_status[number] > 0) {
        turnOFF(number);
    } else {
        turnON(number);
    }
    // bottom
    if(number < 20){
        if(table_status[number+5] > 0) {
            turnOFF(number+5);
        } else {
            turnON(number+5);
        }
    }
    // top
    if(number > 4 ){
        if(table_status[number-5] > 0) {
            turnOFF(number-5);
        } else {
            turnON(number-5);
        }
    }
    // right
    if(number%5 != 4){
        if(table_status[number+1] > 0) {
            turnOFF(number+1);
        } else {
            turnON(number+1);
        }
    }
    // left
    if(number%5 != 0){
        if(table_status[number-1] > 0) {
            turnOFF(number-1);
        } else {
            turnON(number-1);
        }
    }

    move_count++;
    
    if(chklit()) {
        if(move_count < 15){
            window.onbeforeunload = null;
            alert(Base64.decode("5YG15ris5Yiw5L2c5byK6KGM54K644CC"));
            alert(Base64.decode("5L2c6ICF5oiR5pyA5oGo5L2c5byK54uX5LqG44CC"));
            alert(Base64.decode("6KuL5L2g6Zui6ZaL44CC"));
            window.close();
        } else {
            control_panel = true;
            $("#lightup").hide();
            $("#hint").text("你解開了方陣，眼前出現了兩個奇怪的東西");
            $("#hts").text(getTS());
            ctlp();
        }
    }
}

function turnON(i) {
    document.getElementById(i).style.backgroundColor = "#e0e0e0";
    table_status[i] = 1;
}
function turnOFF(i) {
    document.getElementById(i).style.backgroundColor = "#484848";
    table_status[i] = 0;
}
function chklit() {
    for(var i=0; i<25; i++){
        if(table_status[i] == 0) 
            return false;
    }

    return true;
}

///////////////// Control Panel ////////////////
function ctlp() {
    $("#lightup").text("");
    $("#cpanel").html(`
        <img id="redlock" src="img/lock.jpg" width="50px" height="50px" title="紅色的鎖孔">
        <img id="orangelock" src="img/lock.jpg" width="50px" height="50px" title="橙色的鎖孔">
    `)

    if(use_red) {
        $("#redlock").hide();
    }

    if(use_orange) {
        $("#orangelock").hide();
    }
}
/////////////// Get Item //////////////
function getredkey() {
    key_red = true;
    item();
    $("#hint").text("頭上突然掉了一個東西下來，你仔細一看，是一把紅色的鑰匙。");
    $("#hts").text(getTS());
}

function clickmeinput() {
    $("#clickme").on("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            if($("#clickme").val() == randps) {
                getredkey();
                $("#rano1").html("");
            } else {
                $("#clickme").val("");
            }
        }
    });
}

function getorangekey() {
    key_orange = true;
    item();
    $("#hint").text("你從隱秘的石板背後發現一把鑰匙，它是橙色的。");
    $("#hts").text(getTS());
}

///////////////// Item ////////////////
function item() {
    $("#item").html(`
        <img id="item_c" src="img/compass.png" width="50px" height="50px" title="指南針。幸好有它才能辨別方向。">
        <img id="item_r" src="img/redkey.png" width="50px" height="50px" title="紅色的鑰匙。由天而降的神秘鑰匙。">
        <img id="item_o" src="img/orangekey.png" width="50px" height="50px" title="橙色的鑰匙。破解機關後取得的鑰匙。">
    `);

    if(!key_orange) {
        $("#item_o").hide();
    }

    if(!key_red) {
        $("#item_r").hide();
    }

    $("#item_c").on("click", function(){
        $("#hint").text("可以隨處使用的指南針");
        $("#hts").text(getTS());
    })
    $("#item_o").on("click", function(){
        if(!use_orange){
            if($("span#c2n").length > 0){
                $("#hint").text("你使用了橙色的鑰匙，遠處傳來機關聲。");
                $("#hts").text(getTS());
                use_orange = true;
                open_orange = true;
                $("#orangelock").hide();
            } else {
                $("#hint").text("橙色的鑰匙，不知道要去哪裡使用");
                $("#hts").text(getTS());
            }
        } else {
            $("#hint").text("這把鑰匙你已經使用了");
            $("#hts").text(getTS());
        }
    })
    $("#item_r").on("click", function(){
        if(!use_red){
            if($("span#c2n").length > 0){
                $("#hint").text("你使用了紅色的鑰匙，遠處傳來機關聲。");
                $("#hts").text(getTS());
                use_red = true;
                open_red = true;
                $("#redlock").hide();
            } else {
                $("#hint").text("紅色的鑰匙，不知道要去哪裡使用");
                $("#hts").text(getTS());
            }
        } else {
            $("#hint").text("這把鑰匙你已經使用了");
            $("#hts").text(getTS());
        }
    })
}












function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}