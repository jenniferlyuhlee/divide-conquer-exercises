function sortedFrequency(arr, num) {
    let firstIdx = findFirstIdx(arr, num)
    let lastIdx = findLastIdx(arr, num)
    if (firstIdx || lastIdx)
        return (lastIdx+1)-firstIdx
    return -1
}

function findFirstIdx(arr, num){
    let lowIdx= 0
    let highIdx = arr.length-1
    while (lowIdx <= highIdx){
        let midIdx = Math.floor((lowIdx + highIdx)/2)
        if (arr[midIdx]=== num && (arr[midIdx-1]!==num || midIdx===0)){
            return midIdx
        }else if (arr[midIdx] < num){
            lowIdx = midIdx+1
        }else{
            highIdx = midIdx-1
        }
    }return 0
}

function findLastIdx(arr, num){
    let lowIdx= 0
    let highIdx = arr.length-1
    while (lowIdx <= highIdx){
        let midIdx = Math.floor((lowIdx + highIdx)/2)
        if (arr[midIdx]=== num && (arr[midIdx+1]!==num || midIdx===0)){
            return midIdx
        }else if (arr[midIdx] > num){
            highIdx = midIdx-1
        }else{
            lowIdx = midIdx+1
        }
    }return 0
}


module.exports = sortedFrequency