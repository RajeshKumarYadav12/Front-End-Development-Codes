function performBitwiseOperations() {
    const bitInput = document.getElementById('bitInput').value;
    const binaryInput1 = document.getElementById('binaryInput1').value;
    const binaryInput2 = document.getElementById('binaryInput2').value;

    if (!validateBinaryInput(bitInput, binaryInput1, binaryInput2)) {
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const int1 = parseInt(binaryInput1, 2);
    const int2 = parseInt(binaryInput2, 2);

    const result = {
        "AND": int1 & int2,
        "OR": int1 | int2,
        "XOR": int1 ^ int2,
        "NOT Binary 1": ~int1 >>> 0, // Using >>> 0 to convert to unsigned 32-bit
        "NOT Binary 2": ~int2 >>> 0,
        "Left Shift Binary 1": int1 << 1,
        "Right Shift Binary 2": int2 >> 1,
    };

    for (const operation in result) {
        resultDiv.innerHTML += `<p>${operation}: ${result[operation].toString(2).padStart(bitInput, '0')}</p>`;
    }
}

function validateBinaryInput(bitInput, binaryInput1, binaryInput2) {
    const binaryRegex = /^[01]+$/;

    if (!binaryInput1.match(binaryRegex) || !binaryInput2.match(binaryRegex)) {
        alert('Please enter valid binary strings.');
        return false;
    }

    if (binaryInput1.length !== parseInt(bitInput) || binaryInput2.length !== parseInt(bitInput)) {
        alert(`Binary strings should have ${bitInput} bits.`);
        return false;
    }

    return true;
}
