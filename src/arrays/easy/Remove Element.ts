function removeElement(nums: number[], val: number): number {
    let sum = 0;
    let j = 0
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] == val){
            delete nums[index];
            sum ++;
            continue;
        }else{
            
            if(index != j){
                nums[j] = nums[index];
                delete nums[index];
            }
            j ++;
            
        }
    
    }

    return nums.length - sum;
};


export default removeElement;