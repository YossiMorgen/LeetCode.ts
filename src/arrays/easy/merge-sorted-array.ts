function merge(nums1: Array<number>, m: number, nums2:Array<number>, n: number){
    for(let i = nums1.length - 1; i >= 0; i--){        
        if(nums1[m - 1] > nums2[n - 1] || n == 0){            
            nums1[i] = nums1[m - 1]
            m--;
        } else {
            nums1[i] = nums2[n - 1]
            n--; 
        }        
    }
}

function runMerge(){    
    let nums1 = [0,1,2,3,0,0,0];
    let m = 4;
    let nums2: Array<number> = [2,5,6];
    let n = 3;
    const date = new Date().getTime()
    console.log(date);
    
    merge(nums1, m, nums2, n);

    console.log(nums1);
    console.log(new Date().getTime() - date);
    
    
}

export default runMerge;