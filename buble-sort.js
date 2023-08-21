function bubleSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }

    return arr
}

let arr = [2, 8, 3, 4, 5, 10, 1, 12]

console.log(bubleSort(arr));