export default function convert(str: string, numRows: number): string {
    if(str.length <= numRows || str.length <= 2 || numRows < 2) return str;
    let str2 = '';
    for(let k = 0; k < numRows; k++){ 
        let i = 0       
        while( i < str.length + 2*numRows - 2 ){


            if( k != numRows - 1 && k != 0 && i-k < str.length ){
                str2 += str.charAt(i-k)
                console.log(str.charAt(i-k));
                
            }

            if(i+k < str.length){
                str2 += str.charAt(i+k)                
            }
            
            i += 2*numRows - 2;
        }
    }

    return str2;
};