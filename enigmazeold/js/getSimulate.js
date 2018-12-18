var url = window.location.href; 
var pw = url.match(/\?(.*$)/)[1];

// $_GET['name'] simulate.
const $_GET = (search) => {
    var re = new RegExp(search+"=(.*?)(&|$)")
    return pw.match(re)[1]
}