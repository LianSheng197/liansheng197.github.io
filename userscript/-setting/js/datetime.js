let Month = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

let WeekDay = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];

setInterval(() => {
    let now = new Date();
    document.querySelector("div#datetime > span").innerHTML = 
    `${WeekDay[now.getDay()]} ${Month[now.getMonth()]} ${now.getDate()},
    ${(now.getHours()<10)? "0"+now.getHours():now.getHours()}:${(now.getMinutes()<10)? "0"+now.getMinutes():now.getMinutes()}:${(now.getSeconds()<10)? "0"+now.getSeconds():now.getSeconds()}`;
}, 100);