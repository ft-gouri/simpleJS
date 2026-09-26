function percent(value) {
    return value / 100 ;
}
function interest(pAmount, rInterest, time) {
    const result = pAmount * rInterest * time;
    return percent(result);
}
console.log(interest(1000, 5, 2));
