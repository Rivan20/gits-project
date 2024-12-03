const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function denseRanking(scores, gitsScores) {
    const uniqueScores = [...new Set(scores)].sort((a, b) => b - a);
    const rankings = [];

    for (const score of gitsScores) {
        let rank = 1;
        while (rank <= uniqueScores.length && score < uniqueScores[rank - 1]) {
            rank++;
        }
        rankings.push(rank);
    }
    return rankings;
}

rl.question("Masukkan skor pemain (pisahkan dengan spasi): ", (scoresInput) => {
    const scores = scoresInput.split(' ').map(Number);

    rl.question("Masukkan skor GITS di setiap permainan (pisahkan dengan spasi): ", (gitsScoresInput) => {
        const gitsScores = gitsScoresInput.split(' ').map(Number);

        const result = denseRanking(scores, gitsScores);
        console.log("Ranking GITS: ", result.join(' '));
        rl.close();
    });
});
