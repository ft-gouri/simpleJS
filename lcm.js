function hcf(a, b) {
    if (b == 0) {
        return a;
    }

    return hcf(b, a % b);
}
function lcm(a, b) {
    const result = (a * b);
    return result / hcf(a, b);
}
console.log(lcm(4, 6));
console.log(lcm(5, 7));