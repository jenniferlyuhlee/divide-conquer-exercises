function findRotationCount(arr) {
    let lowIdx= 0
    let highIdx = arr.length-1
    while (lowIdx <= highIdx){
        let midIdx = Math.floor((lowIdx + highIdx)/2)
        if ((arr[midIdx-1]>arr[midIdx])){
            return midIdx
        }else if (arr[midIdx]>arr[midIdx+1]){
            return midIdx+1
        }
        else if (arr[midIdx-1]<arr[midIdx]){
            lowIdx = midIdx+1
        }else{
            highIdx = midIdx-1
        }
    }return 0
}

module.exports = findRotationCount