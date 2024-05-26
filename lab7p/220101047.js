function performOperation(operation) {
	const binaryInput1 = document.getElementById('binaryInput1').value;
	const binaryInput2 = document.getElementById('binaryInput2').value;
  
	let resultBinary = '';
	let resultDecimal = '';
  
	switch (operation) {
	  case 'and':
		resultBinary = performLogicalAND(binaryInput1, binaryInput2);
		break;
	  case 'or':
		resultBinary = performLogicalOR(binaryInput1, binaryInput2);
		break;
	  case 'not':
		resultBinary = performLogicalNOT(binaryInput1);
		break;
	  case 'bitwiseAnd':
		resultBinary = performBitwiseAND(binaryInput1, binaryInput2);
		break;
	  case 'bitwiseOr':
		resultBinary = performBitwiseOR(binaryInput1, binaryInput2);
		break;
	  case 'bitwiseXor':
		resultBinary = performBitwiseXOR(binaryInput1, binaryInput2);
		break;
	  case 'bitwiseNot':
		resultBinary = performBitwiseNOT(binaryInput1);
		break;
	  case 'rightShift':
		resultBinary = performRightShift(binaryInput1);
		break;
	  case 'leftShift':
		resultBinary = performLeftShift(binaryInput1);
		break;
	  case 'unsignedRightShift':
		resultBinary = performUnsignedRightShift(binaryInput1);
		break;
	  default:
		break;
	}
  
	document.getElementById('resultBinary').textContent = resultBinary;
  
	if (document.querySelector('input[name="displayMode"]:checked').value === 'both') {
	  document.getElementById('resultDecimal').textContent = binaryToDecimal(resultBinary);
	} else {
	  document.getElementById('resultDecimal').textContent = '';
	}
  }
  
  function resetCalculator() {
	document.getElementById('binaryInput1').value = '';
	document.getElementById('binaryInput2').value = '';
	document.getElementById('resultBinary').textContent = '';
	document.getElementById('resultDecimal').textContent = '';
  }
  
  function navigateOperation(direction) {
	// Your navigation logic here
	// Example: Update operation index and performOperation with the new operation
  }
  
  function performLogicalAND(input1, input2) {
	let result = '';
	for (let i = 0; i < input1.length; i++) {
	  result += (input1[i] === '1' && input2[i] === '1') ? '1' : '0';
	}
	return result;
  }
  
  function performLogicalOR(input1, input2) {
	let result = '';
	for (let i = 0; i < input1.length; i++) {
	  result += (input1[i] === '1' || input2[i] === '1') ? '1' : '0';
	}
	return result;
  }
  
  function performLogicalNOT(input) {
	return input.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
  }
  
  function performBitwiseAND(input1, input2) {
    let result = '';
    for (let i = 0; i < input1.length; i++) {
        result += (input1[i] === '1' && input2[i] === '1') ? '1' : '0';
    }
    return result;
}

function performBitwiseOR(input1, input2) {
    let result = '';
    for (let i = 0; i < input1.length; i++) {
        result += (input1[i] === '1' || input2[i] === '1') ? '1' : '0';
    }
    return result;
}

function performBitwiseXOR(input1, input2) {
    let result = '';
    for (let i = 0; i < input1.length; i++) {
        result += (input1[i] !== input2[i]) ? '1' : '0';
    }
    return result;
}

function performBitwiseNOT(input) {
    return input.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
}

function performRightShift(input) {
    // Assuming a simple right shift by one position
    return '0' + input.slice(0, -1);
}

function performLeftShift(input) {
    // Assuming a simple left shift by one position
    return input.slice(1) + '0';
}

function performUnsignedRightShift(input) {
    // Assuming a simple unsigned right shift by one position
    return '0' + input.slice(0, -1);
}

  
  function binaryToDecimal(binary) {
	return parseInt(binary, 2).toString();
  }