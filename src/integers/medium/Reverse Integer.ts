export default function reverse(x: number): number {
    const isNegative = x < 0;    
    const reversed = Number(Math.abs(x).toString().split('').reverse().join(''));
    if (reversed > 2 ** 31 - 1) {
        return 0;
    }
    return isNegative ? -reversed : reversed;

};