function findRotatedIndex(arr, num) {
    let changeIdx = findChangeIdx(arr)
    if (arr[changeIdx] < num && arr[0]<num){
        return binarySearch(arr, num, 0, changeIdx-1)
    }else{
        return binarySearch(arr, num, changeIdx, arr.length-1)
    }
}

function findChangeIdx(arr) {
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

function binarySearch(arr, num, lowIdx, highIdx){ 
    while (lowIdx <= highIdx){
        let midIdx = Math.floor((lowIdx + highIdx)/2)
        let midVal = arr[midIdx]
        if (midVal < num){
            lowIdx = midIdx + 1
        }else if (midVal > num){
            highIdx = midIdx - 1
        }else{
            return midIdx
        }
    }return -1
}


module.exports = findRotatedIndex