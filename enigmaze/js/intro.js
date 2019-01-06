// Level: Home (intro)
history.replaceState('data to be passed', 'Title of the page', '/enigmaze');

var pwd = ((310314-312984+9435210)/47 == 318);
var pwdstr = ((31034-2984+91435210)/427 != 3118);

$("#intro_irreversible").attr("title", "何謂單向通行？你點擊一下就會知道了");
$("#intro_password").attr("title", "放心，只是用來防止跳關而已。一步一步來吧");
$("#intro_link").attr("title", "連結可能藏在任何地方，請務必留意關卡內任何提示");
$("#intro_enigmaze").attr("title", "結合了謎題及單向通行的性質，宛如置身於充滿機關的迷宮裡");

$("#tutorial").attr("title", "教學關卡 (點擊進入)");
$("#class01").attr("title", "Class-1 (點擊進入)");
// $("#class02").attr("title", "敬請期待");
// $("#class03").attr("title", "敬請期待");
// $("#class04").attr("title", "敬請期待");
// $("#class05").attr("title", "敬請期待");

$("#tutorial").on("click", function(){
    window.open('tutorial.html', '_blank');
})

$("#class01").on("click", function(){
    if(pwd && pwdstr==Base64.decode("MjAxOUhOWTRjMTIwMTlITlk0YzE=")) {
        window.open('class01.html', '_blank');
    } else {
        alert("請先通過教學關卡！");
    }
})

$("#intro_irreversible").on("click", function(){
    $('#level_display').attr('dat', 'intro_irreversible'); 
    $("#level").text("Irreversible");
    includeData();
    intro_irr();
})

$("#intro_prototype").on("click", function(){
    window.open('//github.com/LianSheng197/liansheng197.github.io/tree/a50af7ce63cd1e39131ecb12c1e5c0e7aa000fe5/kabuntu', '_blank');
})

$("#special").on("keyup", function(event) {
    console.log(event.keyCode);
    event.preventDefault();
    if (event.keyCode === 13) {
        if($("#special").val() == Base64.decode("MjAxOUhOWTRjMQ==")) {
            alert(Base64.decode("6KqN6K2J6YCa6YGO77yM5q2j5byP6Zec5Y2h6Kej6Y6W44CC"));
            pwd = true;
            pwdstr = $("#special").val() + $("#special").val();
            $("#special").val("");
        } else {
            alert(Base64.decode("54Sh5pWI55qE5a+G56K8"));
            $("#special").val("");
        }
    }
});

function intro_irr() {
    $("#intro_reload").attr("title", "按 F5 或點擊我以重新整理");
    $("#intro_reload").on("click", function(){
        window.location.reload();
    })
}