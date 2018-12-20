window.onbeforeunload = function(){
    if (!confirm()) {
        // return value require. (any)
        return 0;
    }
};

tEND();

function t1() {
    $("#title_class").text("搜索達人#1");
    $('#level_display').attr('dat', '01');
    $("#level").text("Tutorial - 1");
    includeData();
    
    $("#tutorial_1").on("click", function(){   
        t2();
    })
}

function t2() {
    $("#title_class").text("搜索達人#2");
    $('#level_display').attr('dat', '02');
    $("#level").text("Tutorial - 2");
    includeData();

    $("#tutorial_2").on("click", function(){
        t3();
    })
}

function t3() {
    $("#title_class").text("搜索達人#3");
    $('#level_display').attr('dat', '03');
    $("#level").text("Tutorial - 3");
    includeData();

    $("#floatlink").on("click", function(){
        t4();
    })
}

function t4() {
    $("#title_class").text("搜索達人#4");
    $('#level_display').attr('dat', '04');
    $("#level").text("Tutorial - 4");
    includeData();

    $("#fruitimg").on("click", function(){
        alert(Base64.decode("5LiN6KaB5LqC54yc5ZaU"));
    })
    $("#fruitlink").on("click", function(){
        alert(Base64.decode("5q2j6Kej77yB"));
        t5();
    })
}

function t5() {
    $("#title_class").text("通關密語#1");
    $('#level_display').attr('dat', '05');
    $("#level").text("Tutorial - 5");
    includeData();

    $("#rot26").on("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            if($("#rot26").val() == Base64.decode("SGFrdW5hTWF0YXRh")) {
                alert(Base64.decode("5q2j6Kej77yB"));
                alert(Base64.decode("6aCG5L6/5o+Q6YaS77yM5pyq5L6G6YCy6ZqO55qE6Zec5Y2h5Y+v6IO95pyD6ZmQ5Yi2562U6aGM5qyh5pW45ZaU44CC"));
                t6();
            } else {
                alert(Base64.decode("562U6Yyv5ZuJ44CC6Ieq5YuV5riF56m66Ly45YWl5qGG"));
                $("#rot26").val("");
            }
        }
    });
}

function t6() {
    $("#title_class").text("通關密語#2");
    $('#level_display').attr('dat', '06');
    $("#level").text("Tutorial - 6");
    includeData();

    $("#t6input").on("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            if($("#t6input").val() == Base64.decode("VHV0b3JpYWw2")) {
                alert(Base64.decode("5q2j6Kej77yB"));
                t7();
            } else {
                alert(Base64.decode("562U6Yyv5ZuJ44CC6Ieq5YuV5riF56m66Ly45YWl5qGG"));
                $("#t6input").val("");
            }
        }
    });
}

function t7() {
    $("#title_class").text("欲蓋彌彰");
    $('#level_display').attr('dat', '07');
    $("#level").text("Tutorial - 7");
    includeData();

    $(".t7redblock").on("mousedown", function(){
        move(this,event);
    })

    $("#t7anslink").on("click", function(){
        t8();
    })
}

function t8() {
    $("#title_class").text("移形換位");
    $('#level_display').attr('dat', '08');
    $("#level").text("Tutorial - 8");
    includeData();

    $("#t8rect").on("drop", function(){
        drop(event);
        t9();
    })
    $("#t8rect").on("dragover", function(){
        allowDrop(event);
    })

    $("#t8dragimg").attr('draggable', true);
    $("#t8dragimg").on("dragstart", function(){
        drag(event);
    })
}

function t9() {
    $("#title_class").text("牛刀小試");
    $('#level_display').attr('dat', '09');
    $("#level").text("Tutorial - 9");
    includeData();

    $("#t9check").on("click", function() {
        var t9a = parseInt($($("input")[0]).val());
        var t9b = parseInt($($("input")[1]).val());

        if( isNaN(t9a) || isNaN(t9b) ) {
            alert(Base64.decode("6Yyv6Kqk"));
        } else {
            checkans(t9a, t9b);
        }
    });

    $("#t9img").on("click", function(event) {
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;

        if((x>398)&&(x<420)&&(y>246)&&(y<284)) {
            $("#t9img").css({"transition": "1s", "opacity": "0", "zIndex": "0"});
            $(this).unbind(Base64.decode("bW91c2VlbnRlciBtb3VzZWxlYXZlIGNsaWNr"));
            $("#level").text(Base64.decode("MjAxOSUxMDg="));
            $("#t9ansarea").show();
        }
    });

    $("#t9img").hover(function(){
        $("#level").text(Base64.decode("VHV0b3JpYWwgLSBGb3Jtb3Nh"));
    }, function(){
        $("#level").text("Tutorial - 9");
    })

    function checkans(a ,b) {
        if( (a == (Base64.decode("MjE4NzM3") - Base64.decode("MjE4NzMw"))) && (b == Base64.decode("MTIzNDU2Nzg5").substr(4, 1))) {
            alert(Base64.decode("5q2j6Kej77yB"));
            tEND();
        } else {
            alert(Base64.decode("6Yyv6Kqk"));
        }
    }
}

function tEND() {
    document.title = 'Completed! - Tutorial';
    $("#title_class").text("恭喜通關");
    $('#level_display').attr('dat', '0e');
    $("#level").text("Tutorial - END");
    includeData();

    $("#backhome").on("click", function(){
        window.open(".", "_blank");
    })
}