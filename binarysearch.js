// creates array of unordered data
const data = [ 2, 4, 6, 8, 10, 11, 12, 20, 30, 100];
// binary Search Algorithm
function binarySearch(data,num){
    let length = data.length;
    let left = 0;
    let right = length - 1;
    let index;
    let attempt = 0 ;
    //
    while(left<=right){
        attempt++;
        //create a middle pointer
        const middle = left + Math.floor((right-left)/2);
        //if the num is equal to middle
        if(num==data[middle]){
            index=middle;
            return `${num} is found at index of ${index} with ${attempt} attempt/s!`;
        }
        //update left right counter
        if(num<data[middle]){
            right=middle-1;
        }else{
            left=middle+1;
        }
    }
    return `${num} is not found with ${attempt} attempt/s!`;
}
console.log(binarySearch(data,4));
console.log(binarySearch(data,11));
console.log(binarySearch(data,1000));
console.log(binarySearch(data,1));