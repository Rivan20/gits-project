const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk memeriksa keseimbangan bracket
function isBalanced(input) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (const char of input) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        } else if ([')', ']', '}'].includes(char)) {
            if (stack.pop() !== pairs[char]) {
                return 'NO';
            }
        }
    }
    return stack.length === 0 ? 'YES' : 'NO';
}

// Input string tanda kurung
rl.question("Masukkan string tanda kurung untuk diperiksa: ", (inputBrackets) => {
    const result = isBalanced(inputBrackets);
    console.log("Output: ", result);
    rl.close();
});
