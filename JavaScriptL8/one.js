console.log("Hello World");

function kaprekarConstant(N) {
  let iterations = 0;

  while (true) {
      // Convert number N to an array of digits
      const digits = Array.from(String(N), Number);

      // Sort the digits in ascending and descending order
      const ascending = digits.slice().sort((a, b) => a - b).join('');
      const descending = digits.slice().sort((a, b) => b - a).join('');

      // Calculate the difference and update N
      N = descending - ascending;

      // Increment iterations
      iterations++;

      // Output the current iteration and N
      console.log(`Iteration ${iterations}: ${descending} - ${ascending} = ${N}`);

      // Check if N reaches Kaprekar's constant (6174) or 0
      if (N === 6174 || N === 0) {
          break;
      }
  }
}

// Example usage with the provided number 1201
kaprekarConstant(1201);
