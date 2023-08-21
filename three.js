// че то затупил в начале

function threeSort (arr) {
    if (arr.length === 0) {
        return a;
    }

    let a = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (a[a.length - 1] > arr[i]) {
            a.push(arr[i]);
            for (let j = a.length - 1; j !== 0; j--) {
                if (a[j] <= a[j - 1]) {
                    let tmp = a[j]
                    a[j] = a[j-1]
                    a[j-1] = tmp
                }
            }
        } else {
            a.push(arr[i])
        }
    }

    return a
}

let arr = [2, 8, 3, 4, 5, 10, 1, 12, 3]

console.log(threeSort(arr));
