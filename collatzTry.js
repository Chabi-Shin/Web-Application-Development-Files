// Function to generate Collatz sequence for a given number
function collatzSequence(number) {
  // Create an array to store the sequence
  const sequence = [number];

  // Continue generating sequence until the number becomes 1
  while (number !== 1) {
    // If the number is even, divide it by 2
    if (number % 2 === 0) {
      number = number / 2;
    } else {
      // If the number is odd, multiply it by 3 and add 1
      number = 3 * number + 1;
    }

    // Add the new number to the sequence
    sequence.push(number);
  }

  // Return the generated Collatz sequence
  return sequence;
}

// Example: Generate and print Collatz sequence for the number 10
const startingNumber = 10;
const resultSequence = collatzSequence(startingNumber);

// Print the result
console.log(`Collatz sequence for ${startingNumber}: ${resultSequence.join(' -> ')}`);
