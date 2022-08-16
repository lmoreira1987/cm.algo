// Time: O(nLog(n)) | Space: O(1)
export function tandemBicycle(redShirtSpeeds: number[], blueShirtSpeeds: number[], fastest: boolean) {
    let redSorted = redShirtSpeeds.sort((a,b) => b - a);
    let blueSorted = blueShirtSpeeds.sort((a,b) => fastest ? a - b : b - a);
    let tandem = 0;
    
    for (let i in blueShirtSpeeds) {
        tandem += Math.max(redSorted[i], blueSorted[i]) 
    }
    
    return tandem;
  }

const redShirtSpeeds: number[] = [5,5,3,9,2];
const blueShirtSpeeds: number[] = [3,6,7,2,1];
const fastest = false;

console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest));
