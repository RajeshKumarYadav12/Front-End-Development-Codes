function performBitwiseOperations() {
    // Get input values
    const noOfBits = parseInt(document.getElementById("No-of-bits").value);
    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;
    const operation = document.getElementById("operation").value;

    // Validate inputs
    if (!validateInput(noOfBits, str1, str2)) {
        alert("Invalid input. Please check your input values.");
        return;
    }

    // Convert binary strings to character arrays
    const arr1 = str1.split('');
    const arr2 = str2.split('');
    
    // Perform bitwise operation based on the selected operation
    let resultArr = [];
    for (let i = 0; i < noOfBits; i++) {
        const bit1 = arr1[i] === '1';
        const bit2 = arr2[i] === '1';

        let resultBit;
        switch (operation) {
            case "or":
                resultBit = bit1 || bit2;
                break;
            case "nor":
                resultBit = !(bit1 || bit2);
                break;
            case "and":
                resultBit = bit1 && bit2;
                break;
            case "nand":
                resultBit = !(bit1 && bit2);
                break;
            case "xor":
                resultBit = bit1 !== bit2;
                break;
            case "not":
                resultBit = !bit1;
                break;
            default:
                alert("Invalid operation selected.");
                return;
        }

        resultArr.push(resultBit ? '1' : '0');
    }

    // Convert the result array to string and display
    const resultStr = resultArr.join('');
    alert(`Result of ${operation.toUpperCase()} operation: ${resultStr}`);
}

function validateInput(noOfBits, str1, str2) {
    if (isNaN(noOfBits) || noOfBits <= 0) {
        return false;
    }

    if (!/^[01]+$/.test(str1) || !/^[01]+$/.test(str2) || str1.length !== noOfBits || str2.length !== noOfBits) {
        return false;
    }

    return true;
}
