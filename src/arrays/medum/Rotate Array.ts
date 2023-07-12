function rotate(nums: number[], k: number): void {
    const arr = Array(nums.length);

    for(let i = 0; i < nums.length; i++){
        arr[(i + k ) % nums.length] = nums[i]
    }
    
    for (let index = 0; index < nums.length; index++) {
        nums[index] = arr[index]
    }
};

export default rotate;