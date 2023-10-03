export function numIdenticalPairs(nums: number[]): number {
    const map = new Map();
    let sum = 0;
    nums.forEach((num)=> {
        const oldNum = map.get(num) 
        oldNum ? map.set(num, oldNum + 1) : map.set(num, 1);
    })

    map.forEach((num) =>{
        if(num  > 1) {
            let add = 0;
            for(let i = 1; i < num; i++){
                add += i
            }

            sum += add;
        };
        
    })

    return sum;
};

// export function numIdenticalPairs(nums: number[]): number {
//     let sum = 0;
//     let map = new Map();
//     nums.forEach((num)=>{
//         const temp = map.get(num) || 0;
//         sum += temp;
//         map.set(num, temp + 1);        
//     })

//     return sum; 
// }