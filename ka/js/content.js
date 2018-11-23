function date_time(){
    var event = new Date();
    var options = { hour12: false, hour: "numeric", minute: "numeric", second: "numeric" };
    return event.toLocaleDateString('zh-tw', options);
}

function readTextFile(file)
{
    var htmlobj = $.ajax({url: file, async: false});
    return htmlobj.responseText;
}

function animate(typewriter) {
    sequence = [
        {
            text: "LianSheng142 @ localhost " + date_time() + " ~\n$ ",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "ls -l | grep ^d\n",
            delayAfter: 400
        },
        {
            text: "drwxr-xr-x 2 LianSheng142 LianSheng142 0 Nov 24 02:48 kadouka/\n\n",
            instant: true,
            delayAfter: 400,
            callback: function(){seq_1(typewriter)}
        },
    ];

    typewriter.playSequence(sequence);
}

function seq_1(typewriter) {
    sequence = [
        {
            text: "LianSheng142 @ localhost " + date_time() + " ~\n$ ",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "cd kadouka\n\n",
            delayAfter: 400,
            callback: function(){seq_2(typewriter)}
        },
    ];

    $(document).scrollTop(9999999);
    typewriter.playSequence(sequence);
}

function seq_2(typewriter) {
    sequence = [
        {
            text: "LianSheng142 @ localhost " + date_time() + " ~/kadouka\n$ ",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "ls -l\n",
            delayAfter: 400,
        },
        {
            text: "total 1133\n"
                + "-rw-r--r-- 1 LianSheng142 LianSheng142 1150350 Nov 24 03:03 ka.bmp\n"
                + "-rw-r--r-- 1 LianSheng142 LianSheng142      10 Nov 24 02:54 msg_1.txt\n"
                + "-rw-r--r-- 1 LianSheng142 LianSheng142     478 Nov 24 02:54 msg_2.txt\n"
                + "-rw-r--r-- 1 LianSheng142 LianSheng142    1501 Nov 24 03:06 msg_3.txt\n\n",
            instant: true,
            delayAfter: 400,
            callback: function(){seq_3(typewriter)}
        },
    ];
    
    $(document).scrollTop(9999999);
    typewriter.playSequence(sequence);
}

function seq_3(typewriter) {
    sequence = [
        {
            text: "LianSheng142 @ localhost " + date_time() + " ~/kadouka\n$ ",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "cat msg_1.txt\n\n",
            delayAfter: 400,
        },
        {
            text: readTextFile("kadouka/msg_1.txt") + "\n\n",
            instant: true,
            delayAfter: 1000,
            callback: function(){seq_4(typewriter)}
        },
    ];

    $(document).scrollTop(9999999);
    typewriter.playSequence(sequence);
}

function seq_4(typewriter) {
    sequence = [
        {
            text: "LianSheng142 @ localhost " + date_time() + " ~/kadouka\n$ ",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "cat msg_2.txt\n\n",
            delayAfter: 400,
        },
        {
            text: readTextFile("kadouka/msg_2.txt") + "\n\n",
            instant: true,
            delayAfter: 1000,
            callback: function(){seq_5(typewriter)}
        },
    ];

    $(document).scrollTop(9999999);
    typewriter.playSequence(sequence);
}

function seq_5(typewriter) {
    sequence = [
        {
            text: "LianSheng142 @ localhost " + date_time() + " ~/kadouka\n$ ",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "cat msg_3.txt\n\n",
            delayAfter: 400,
        },
        {
            text: readTextFile("kadouka/msg_3.txt") + "\n\n",
            instant: true,
            delayAfter: 1000,
            callback: function(){seq_6(typewriter)}
        },
    ];

    $(document).scrollTop(9999999);
    typewriter.playSequence(sequence);
}

function seq_6(typewriter) {
    sequence = [
        {
            text: "LianSheng142 @ localhost " + date_time() + " ~/kadouka\n$ ",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "imageviewer ka.bmp\n\n",
            delayAfter: 400,
        },
        {
            text: "",
            instant: true,
            delayAfter: 1000,
            callback: function(){ $('#button').click(); $('#terminal').text("END") }
        },
    ];

    $(document).scrollTop(9999999);
    typewriter.playSequence(sequence);
}