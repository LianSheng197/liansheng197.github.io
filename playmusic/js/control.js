var m1 = new Howl({
	src: [ "music/Demo1.mp3" ],
	autoplay: false, 	// 自動播放
	loop: true, 		// 無限循環
	volume: 0.3,

	onload: function() {
		document.getElementById( "status1" ).innerText = "就緒 (1)";
	},
	onplay: function() {
		document.getElementById( "status1" ).innerText = "播放 (1)";
	},
	onpause: function() {
		document.getElementById( "status1" ).innerText = "暫停 (1)";
	},
	onstop: function() {
		document.getElementById( "status1" ).innerText = "停止 (1)";
	},
	onend: function() {
		document.getElementById( "status1" ).innerText = "結束 (1)";
	}
});

// second
var m2 = new Howl({
	src: [ "music/Demo2.mp3" ],
	autoplay: false, 	// 自動播放
	loop: true, 		// 無限循環
	volume: 0.8,

	onload: function() {
		document.getElementById( "status2" ).innerText = "就緒 (2)";
	},
	onplay: function() {
		document.getElementById( "status2" ).innerText = "播放 (2)";
	},
	onpause: function() {
		document.getElementById( "status2" ).innerText = "暫停 (2)";
	},
	onstop: function() {
		document.getElementById( "status2" ).innerText = "停止 (2)";
	},
	onend: function() {
		document.getElementById( "status2" ).innerText = "結束 (2)";
	}
});

function play1()	{m1.play()}
function stop1()	{m1.stop()}
function pause1()	{m1.pause()}
function play2()	{m2.play()}
function stop2()	{m2.stop()}
function pause2()	{m2.pause()}