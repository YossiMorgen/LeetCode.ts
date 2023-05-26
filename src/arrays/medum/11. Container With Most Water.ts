export default function maxArea(height: number[]): number {
    let max = 0;

    for (let i = 0; i < height.length; i++) {
        for(let j = i + 1; j < height.length; j++){
            const min = height[i] < height[j] ? height[i] : height[j];
            const amount = min * (j - i + 1);
            if(max < amount){
                max = amount;
            }
        }
        
    }

    return max;
};