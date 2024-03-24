function findFloor(arr, num) {
    let lowIdx= 0
    let highIdx = arr.length-1
    while (lowIdx <= highIdx){
        let midIdx = Math.floor((lowIdx + highIdx)/2)
        if ((arr[midIdx]<= num && (arr[midIdx+1]>num) || arr[midIdx]==arr[arr.length-1])){
            return arr[midIdx]
        }else if (arr[midIdx]>num){
            highIdx = midIdx-1
        }else{
            lowIdx = midIdx+1
        }
    }return -1
}

module.exports = findFloor