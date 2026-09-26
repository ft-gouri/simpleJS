function firstPrime(n) {
    if (n < 2) {
        return "";
    }
    let result = firstPrime(n - 1);
    if (check(n, 2)) {
        result = result + n + " ";
    }
    return result;
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
console.log(firstPrime(9));