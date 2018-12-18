$("#next").on("click", function(){
    var file = $(this).attr('detail');
    console.log(file);
    $('#level_display').attr('dat', file); 
    includeData();
})

$("#reload").on("click", function(){
    var file = $(this).attr('detail');
    $('#level_display').attr('dat', file); 
    includeData();
})