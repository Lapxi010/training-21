function minA(arr, start, end) {
    let min = start
    
    for (let i = start; i < end; i++) {
        if (arr[i] < arr[min]) {
            min = i
        }        
    }

    return min
}

function twoSort (arr) {
    for (let i = 0; i < arr.length; i++) {
            let min = minA(arr, i, arr.length);
            let tmp = arr[i];
            arr[i] = arr[min]
            arr[min] = tmp
    }

    return arr
}

let arr = [2, 8, 3, 4, 5, 10, 1, 12]

console.log(twoSort(arr));