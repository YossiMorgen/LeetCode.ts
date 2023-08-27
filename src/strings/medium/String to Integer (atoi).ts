function myAtoi(s: string): number {
    // parseInt will return NaN if the string is not a number
    const num = parseInt(s, 10);
    if (isNaN(num)) {
        return 0;
    }
    // if the number is less than the minimum 32 bit signed integer, return the minimum
    if (num < -2147483648) {
        return -2147483648;
    }
    // if the number is greater than the maximum 32 bit signed integer, return the maximum
    if (num > 2147483647) {
        return 2147483647;
    }
    // otherwise return the number
    return num;
};

function myAtoi2(s: string): number {
    // match optional whitespace, followed by an optional + or - sign, and then digits
    const num = parseInt(s.match(/^\s*[\+\-]?\d+/)?.[0] ?? "0", 10);
    // if the number is not a number, return 0
    if (isNaN(num)) {
        return 0;
    }
    // if the number is less than the minimum 32 bit signed integer, return the minimum
    if (num <= -2147483648) {
        return -2147483648;
    }
    // if the number is greater than the maximum 32 bit signed integer, return the maximum
    if (num >= 2147483647) {
        return 2147483647;
    }
    // otherwise return the number
    return num;
}

    
export default  {
    myAtoi,
    myAtoi2,
}