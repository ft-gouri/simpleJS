function armstrong(n) {
    let a = n % 10;
    let b = (n - a) / 10;
    let c = b % 10;
    let d = (b - c) / 10;

    return a * a * a + c * c * c + d * d * d == n;
}
console.log(armstrong(153));
console.log(armstrong(370));