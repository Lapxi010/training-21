function er (n) {
    if (n === 0 || n === 1) {
        return 0
    }

    let arr = [];

    for (let i = 2; i < n + 1; i++) {
        arr.push(i);
    }

    for (let i = 2; i < n + 1; i++) {
        for (let j = i; j < n; j++) {
            if (arr[j] === null) {
                continue
            }
    
            if (arr[j] % i === 0) {
                arr[j] = null
            }
        }
    }

    return arr.reduce((acc, el) => el !== null ? acc = [...acc, el] : acc, [])
}

console.log(er(9))