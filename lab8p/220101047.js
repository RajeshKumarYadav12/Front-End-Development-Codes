function BaseConversion() {
    var inputString = document.getElementById('string').value;
    var algorithm = document.getElementById('algo').value;

    var encodedString = "";

    switch(algorithm) {
        case 'base64':
            encodedString = customBase64Encode(inputString);
            break;
        case 'base32':
            encodedString = base32Encode(inputString);
            break;
        case 'base85':
            encodedString = base85Encode(inputString);
            break;
        default:
            alert('Invalid algorithm selected.');
            return;
    }

    displayResult(encodedString);
}

function displayResult(encodedString) {
    var resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = '<strong>Result:</strong><br>' + encodedString;
}

// Implement your base32Encode, customBase64Encode, and base85Encode functions here.


function customBase64Encode(inputString) {
    var base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var result = '';

    for(var i = 0; i < inputString.length; i += 3) {
        var chunk = inputString.charCodeAt(i) << 16 | (i + 1 < inputString.length ? inputString.charCodeAt(i + 1) << 8 : 0) | (i + 2 < inputString.length ? inputString.charCodeAt(i + 2) : 0);

        for (var j = 0; j < 4; j++) {
            if(i * 8 + j * 6 <= inputString.length * 8) {
                result += base64Chars.charAt((chunk >> 6 * (3 - j)) & 0x3F);
            } 
            else
            {
                result += '=';
            }
        }
    }

    return result;
}

function base32Encode(inputString) {
    var base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    var bits = '';
    var encodedString = '';

    for (var i = 0; i < inputString.length; i++) {
        var charCode = inputString.charCodeAt(i);

        for (var j = 4; j >= 0; j--) {
            bits += ((charCode >> j) & 1) ? '1' : '0';
        }
    }

    while (bits.length % 5 !== 0) {
        bits += '0';
    }

    for (var k = 0; k < bits.length; k += 5) {
        var chunk = bits.substr(k, 5);
        encodedString += base32Chars[parseInt(chunk, 2)];
    }

    return encodedString;
}

function base85Encode(inputString) {
    var base85Chars = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstu";
    var result = '';

    for (var i = 0; i < inputString.length; i += 4) {
        var chunk = inputString.charCodeAt(i) << 24 | (i + 1 < inputString.length ? 
            inputString.charCodeAt(i + 1) << 16 : 0) | (i + 2 < inputString.length ? 
            inputString.charCodeAt(i + 2) << 8 : 0) | (i + 3 < inputString.length ? 
            inputString.charCodeAt(i + 3) : 0);

        for (var j = 0; j < 5; j++) {
            if (i * 8 + j * 6 <= inputString.length * 8) {
                result += base85Chars.charAt((chunk >> 32 - j * 5) & 0x1F);
            } else {
                result += 'u';
            }
        }
    }

    return result;
}



