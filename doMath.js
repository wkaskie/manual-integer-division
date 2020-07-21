divideBy = (dividend, divisor) => {
    let quotient = 0;
    while(dividend >= divisor) {
        dividend = dividend - divisor;
        if (dividend >= 0 ) { quotient++; }
    }

    return quotient;
}

modulo = (dividend, divisor) => {
    let remainder = 0;
    while(dividend >= divisor) {
        dividend = dividend - divisor;
        if (dividend > 0 && dividend < divisor ) { remainder = dividend; }
    }

    return remainder;
}
// ********* TESTS ***********
console.log(divideBy(1, 1)); // 1 / 1 => 1
console.log(divideBy(4, 2)); // 4 / 2 => 2
console.log(divideBy(21, 3)); // 21 / 3 => 7
console.log(divideBy(15, 6)); // 15 / 6 => 2 (there's a remainder, but not handled here)

console.log(modulo(15, 6)); // 15 % 6 => 3
console.log(modulo(39, 10)); // 39 % 10 => 9