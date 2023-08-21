function valid (str) {
    let dict = {
        '{' : '}',
        '(' : ')',
        '[' : ']'
    }

    if (str.length === 0) {
        return true
    }

    let stack = []
    
    for (let i of str) {
        if (i in dict) {
            stack.push(i)
        } else {
            if (dict[stack[stack.length - 1]] !== i) {
                return false
            }  else {
                stack.pop()
            }
        }
    }

    if (stack.length !== 0) {
        return false
    }
    return true
}

console.log(valid('()'))
console.log(valid('()('))
console.log(valid('())'))
console.log(valid('((])'))
console.log(valid('[]{}'))