function removeDuplicates(nums: number[]): number {
    let count = 0;
    for (let index = 1; index < nums.length; index++) {
        
        if(nums[index] == nums[count]){
            delete nums[index];
        } else{
            count ++;
            if(index > count){
                nums[count] = nums[index];
                delete nums[index]
            }
        }


    }

    return count + 1;
};

export default removeDuplicates