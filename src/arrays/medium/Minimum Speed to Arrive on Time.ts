// need more work
export function minSpeedOnTime(dist: number[], hour: number): number {
    if(dist.length > Math.ceil(hour)) return -1;

    let arr = Array(dist.length).fill(1);
    if((hour % 1 > 0)){
        arr[arr.length - 1] = hour % 1;
        hour ++;
    }
    hour = Math.floor(hour - arr.length)
    console.log("hour", hour);
    
    while(hour > 0){        
        hour --;
        arr[longest(dist, arr)] += 1;
        // console.log(arr);
        
    }
    const index = longest(dist, arr)
    return dist[index] / arr[index];
};

function longest(dist: Array<number>, arr: Array<number>){
    let maxIndex = 0
    for(let i = 0; i < dist.length; i++){
        console.log(dist[i] +"/"+ arr[i] +"="+ (dist[i] / arr[i]), dist[maxIndex] +"/"+ arr[maxIndex] +"="+ (dist[maxIndex] / arr[maxIndex]));        
        
        if(dist[i] / arr[i] > dist[maxIndex] / arr[maxIndex]){
            console.log(dist[i] / arr[i], dist[maxIndex] / arr[maxIndex]);
            maxIndex = i;
            
        }
    }

    return maxIndex;
}
