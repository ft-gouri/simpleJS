function hcf(a, b) {
    if (b == 0) {
        return a;
    }

    return hcf(b, a % b);
}
console.log(hcf(12, 18));
console.log(hcf(20, 30));