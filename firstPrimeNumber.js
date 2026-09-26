function firstPrime(n) {
    if (check(n, 2)) {
        return n;
    }
    return firstPrime(n + 1);
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
console.log(firstPrime(20));