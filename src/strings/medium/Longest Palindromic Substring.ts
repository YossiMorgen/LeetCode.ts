export default function longestPalindrome(s: string): number {
    if(s.length < 2) return s.length;
    let maxLength = 1;

    for(let i = 0; i < s.length - 1; i++){
        let odd = expandAroundCenter(s, i, i);
        let even = expandAroundCenter(s, i, i + 1);
        let length = Math.max(odd, even);
        if(length > maxLength){
            maxLength = length;
        }
    }

    return maxLength;
};

function expandAroundCenter(s: string, left: number, right: number): number{
    let l = left;
    let r = right;
    while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)){
        l--;
        r++;
    }
    return r - l - 1;
}

