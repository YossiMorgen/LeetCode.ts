export default function convert(str: string, numRows: number): string {
    if(str.length < numRows || str.length < 2) return str;
    let str2 = '';
    for(let k = 0; k < numRows; k++){
        for(let i = 0; i < str.length; i = i + numRows * 2 - 2){
            console.log(i);
            if(k == 0){
                str2 += str.charAt(i)
                continue;
            }

            if(k == numRows - 1){
                str2 += str.charAt(i-k)
                continue;
            }

            if(str.charAt(i-k)){
                str2 += str.charAt(i-k)
            }

            if(str.charAt(i+1)){
                str2 += str.charAt(i+1)
            }
            // console.log(str2);
            
        }
    }

    return str2;
};