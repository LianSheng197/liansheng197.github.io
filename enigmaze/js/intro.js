// Level: Home (intro)
$("#intro_irreversible").attr("title", "何謂單向通行？你點擊一下就會知道了");
$("#intro_password").attr("title", "放心，只是用來防止跳關而已。一步一步來吧");
$("#intro_link").attr("title", "連結可能藏在任何地方，請務必留意關卡內任何提示");
$("#intro_enigmaze").attr("title", "結合了謎題及單向通行的性質，宛如置身於充滿機關的迷宮裡");

$("#tutorial").attr("title", "教學關卡");
$("#class01").attr("title", "敬請期待");
$("#class02").attr("title", "敬請期待");
$("#class03").attr("title", "敬請期待");
$("#class04").attr("title", "敬請期待");
$("#class05").attr("title", "敬請期待");

$("#tutorial").on("click", function(){
    window.open('tutorial.html', '_blank');
})

$("#intro_irreversible").on("click", function(){
    $('#level_display').attr('dat', 'intro_irreversible'); 
    $("#level").text("Irreversible");
    includeData();
    intro_irr();
})

$("#intro_prototype").on("click", function(){
    window.open('https://github.com/LianSheng197/liansheng197.github.io/tree/a50af7ce63cd1e39131ecb12c1e5c0e7aa000fe5/kabuntu', '_blank');
})

function intro_irr() {
    $("#intro_reload").attr("title", "按 F5 或點擊我以重新整理");
    $("#intro_reload").on("click", function(){
        window.location.reload();
    })
}