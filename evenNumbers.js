function even(n) {
    if (n <= 1) {
        return "";
    }
    let result = even(n - 1);
    if (n % 2 === 0) {
        result = result + n + "\n";
    }
    return result;
}
console.log(even(10));