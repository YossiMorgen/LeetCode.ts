function majorityElement(nums: number[]): number {
    let num: number;
    let count: number;
    for(let i = 0; i < nums.length; i++){
        count = 1
        if(nums[i]){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] == nums[j]){
                    count ++;
                    delete nums[j];
                    console.log(count);
                    
                }
            }
            if(count >= (nums.length / 2)){
                return nums[i];
            }
        }
    }

};

export default majorityElement;