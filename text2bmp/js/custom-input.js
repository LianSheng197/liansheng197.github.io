let uploadButton = document.querySelector('.browse-btn');
let fileInfo = document.querySelector('.file-info');
let realInput = document.querySelector('#real-input');

uploadButton.addEventListener('click', function (e) {
    realInput.click();
});

realInput.addEventListener('change', function () {
    let name = realInput.value.split(/\\|\//).pop();
    let truncated = name.length > 20 ? name.substr(name.length - 20) : name;

    fileInfo.innerHTML = truncated;
});