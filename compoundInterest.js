function percent(value) {
    const r = 1 + (value / 100);
    return r;
}
function power(rI, year) {
    return year == 0 ? 1 : rI ** year;
}
function ComInterest(pAmount, rInterest, time) {
    const rate = percent(rInterest);
    const p = power(rate, time);
    return Math.floor(pAmount * p);
}
console.log(ComInterest(1000, 10, 5));

