export function removeDuplicateLetters(s: string): string {
    let arr = new Array<string>(26);
    for(let i =0; i < arr.length; i++){
        arr[s.charCodeAt(i)] = s.charAt(i);
    }

    return arr.join('');
};