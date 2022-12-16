// my sol
function solution(nums) {
    let count = 0;
    let arr = [];
    let fir, sec, thr;
    for (let i=0; i<nums.length; i++) {
        fir = nums[i];
        for (let j=i+1; j<nums.length-1;j++) {
            sec = nums[j]
            for (let k=j+1; k<nums.length; k++) {
                thr = nums[k];
                arr.push(fir+sec+thr);
            }
        }
    }
    for (let i in arr) {
        let base = arr[i];
        let baseCount = 0;
        for (let i=1; i<=base; i++) {
            if (base%i === 0) {
                baseCount++
            }
        }
        if (baseCount<3) {
                count++
        }
    }
    return count
}
