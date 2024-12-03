const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jumlah bilangan (n): ", (answer) => {
    const n = parseInt(answer, 10);

    if (isNaN(n) || n <= 0) {
        console.log("Harap masukkan angka positif.");
        rl.close();
        return;
    }

    // Generate A000124 series
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push((i * (i + 1)) / 2 + 1);
    }

    console.log("Output: ", result.join('-'));
    rl.close();
});
