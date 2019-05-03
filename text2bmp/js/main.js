let char = [];

function drawArray(arr, depth) {
    try {
        let offset, height, data, image;

        function conv(size) {
            return String.fromCharCode(size & 0xff, (size >> 8) & 0xff, (size >> 16) & 0xff, (size >> 24) &
                0xff);
        }

        offset = depth <= 8 ? 54 + Math.pow(2, depth) * 4 : 54;
        height = Math.ceil(Math.sqrt(arr.length * 8 / depth));

        //BMP Header
        data = 'BM'; // ID field
        data += conv(offset + arr.length); // BMP size
        data += conv(0); // unused
        data += conv(offset); // pixel data offset

        //DIB Header
        data += conv(40); // DIB header length
        data += conv(height); // image height
        data += conv(height); // image width
        data += String.fromCharCode(1, 0); // colour panes
        data += String.fromCharCode(depth, 0); // bits per pixel
        data += conv(0); // compression method
        data += conv(arr.length); // size of the raw data
        data += conv(2835); // horizontal print resolution
        data += conv(2835); // vertical print resolution
        data += conv(0); // colour palette, 0 == 2^n
        data += conv(0); // important colours

        //Grayscale tables for bit depths <= 8
        if (depth <= 8) {
            data += conv(0);

            for (let s = Math.floor(255 / (Math.pow(2, depth) - 1)), i = s; i < 256; i += s) {
                data += conv(i + i * 256 + i * 65536);
            }
        }

        //Pixel data
        data += String.fromCharCode.apply(String, arr);

        //Image element
        image = document.createElement('img');

        image.src = 'data:image/bmp;base64,' + btoa(data);
        image.style = "width: 100%; height: auto;";

        return image;
    } catch (error) {
        alert("遇到錯誤，請確定上傳的檔案是純文字檔！");
        location.href = '';
    }
}

function process(event) {
    let files = event.target.files
    let reader = new FileReader()
    reader.onload = function () {
        let contents = this.result

        for (let i = 0; i < contents.length; i++) {
            char[i] = contents[i].charCodeAt(0);
        }

        // 補齊
        if (contents.length % 3 == 1) {
            char[contents.length] = "00";
            char[contents.length + 1] = "00";
        }
        if (contents.length % 3 == 2) {
            char[contents.length] = "00";
        }

        document.querySelector("div#display").innerHTML = "";
        document.querySelector("div#display").appendChild(drawArray(char, 24));
    }

    reader.readAsText(files[0]);
}

let input = document.querySelector('input#real-input');
input.addEventListener('change', process);