$("#level").text("Tutorial - 1");
$("#title_class").text("搜索達人");

$("#tutorial_1").on("click", function(){
    $('#level_display').attr('dat', '02');
    $("#level").text("Tutorial - 2");
    includeData();
    t2();
})

function t2() {
    $("#tutorial_2").on("click", function(){
        $('#level_display').attr('dat', '03');
        $("#level").text("Tutorial - 3");
        includeData();
        t3();
    })
}

function t3() {
    $("#floatlink").on("click", function(){
        $('#level_display').attr('dat', '04');
        $("#level").text("Tutorial - 4");
        includeData();
        t4();
    })
}

function t4() {
    $("#fruitimg").on("click", function(){
        alert("不要亂猜喔");
    })
    $("#fruitlink").on("click", function(){
        alert("正解！");
        $('#level_display').attr('dat', '05');
        $("#title_class").text("通關密語");
        $("#level").text("Tutorial - 5");
        includeData();
        t5();
    })
}