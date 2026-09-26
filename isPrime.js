function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    return check(n, 2);
}
function check(n, d) {
    if (d === n) {
        return true;
    }
    if (n % d === 0) {
        return false;
    }
    return check(n, d + 1);
}
console.log(isPrime(0));
console.log(isPrime(3));
console.log(isPrime(9));
console.log(isPrime(53));