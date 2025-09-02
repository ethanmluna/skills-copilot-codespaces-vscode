function calculateNumbers(var1, var2) {
    const sum = var1 + var2;
    const difference = var1 - var2;
    const product = var1 * var2;
    const quotient = var2 !== 0 ? var1 / var2 : 'undefined';

    return {
        sum,
        difference,
        product,
        quotient
    };
}

module.exports = calculateNumbers;
// Example usage:
// const result = calculateNumbers(10, 5);
// console.log(result);
// Output:
// {
//     sum: 15,
//     difference: 5,
//     product: 50,
//     quotient: 2
// }