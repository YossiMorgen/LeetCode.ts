export default function minSubArrayLen(target: number, nums: number[]): number {
    let maxLength = 0;
    let sum = 0;
    let i = 0;
    let j = 0;
    while(j < nums.length){
        sum += nums[j];
        while(sum >= target){
            maxLength = maxLength == 0 ? j - i + 1 : Math.min(maxLength, j - i + 1);
            sum -= nums[i];
            i++;
        }
        j++;

    }

    return maxLength;
};