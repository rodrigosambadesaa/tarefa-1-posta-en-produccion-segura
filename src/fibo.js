function generateFibonacciSequence(n) {
    const fibSequence = [0, 1]; // Inicializamos la secuencia con los primeros dos números
    while (fibSequence.length < n) {
        const nextNumber = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextNumber);
    }
    return fibSequence;
}

function getFibonacciNumber(n) {
    const fibSequence = generateFibonacciSequence(n);
    return n > 0 ? fibSequence[n - 1] : 0;
}

module.exports = { generateFibonacciSequence, getFibonacciNumber };