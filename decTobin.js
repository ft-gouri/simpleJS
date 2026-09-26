function binary(n) {
    if (n < 2) {
        return n;
    }
    return calculate(n);
}
function calculate(n) {
    const rem = n % 2;
    const quo = (n - rem) / 2;

    return binary(quo) + " " + rem;
}
console.log(binary(10));