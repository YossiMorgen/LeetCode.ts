function majorityElement(nums: number[]): number {
    nums.sort()
    let count = 1
    console.log(nums);
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] == nums[index - 1]){
            count ++
        } else {
            count = 1
        }

        if(count >= (nums.length / 2)){
            return nums[index];
        }
    }
    
    return 0
};

export default majorityElement;



// function majorityElement(nums: number[]): number {
    //     let num: number;
    //     let count: number;
    //     for(let i = 0; i < nums.length; i++){
    //         count = 1
    //         if(nums[i]){
    //             for(let j = i + 1; j < nums.length; j++){
    //                 if(nums[i] == nums[j]){
    //                     count ++;
    //                     delete nums[j];
    //                     console.log(count);
                        
    //                 }
    //             }
    //             if(count >= (nums.length / 2)){
    //                 return nums[i];
    //             }
    //         }
    //     }
    
    // };