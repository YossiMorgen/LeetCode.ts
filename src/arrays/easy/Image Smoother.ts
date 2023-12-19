function imageSmoother(img: number[][]): number[][] {
    const newImage: Array<Array<number>> = new Array<Array<number>>(img.length);
    for(let i = 0; i < img.length; i++) {
        newImage[i] = new Array<number>(img[i].length);
        for(let j = 0; j < img[i].length; j++) {
            newImage[i][j] = getAverage(img, i, j);
        }
    }
    return newImage;
};

function getAverage(img: number[][], i: number, j: number): number {
    let sum = 0;
    let count = 0;
    for(let row = i - 1; row <= i + 1; row++) {
        for(let col = j - 1; col <= j + 1; col++) {
            if(row >= 0 && row < img.length && col >= 0 && col < img[row].length) {
                sum += img[row][col];
                count++;
            }
        }
    }    
    return Math.floor(sum / count);
}

export default imageSmoother;