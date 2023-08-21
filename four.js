class Three {
    constructor(value, children) {
        this.value = value
        this.children = children
    }
}

function dfs (three, cb) {
    let stack = [three];
    
    while (stack.length !== 0) {
        let node = stack.pop();
        
        if (node.value === null) {
            continue
        }
        
        cb(node.value);

        for (let i of node.children) {
            stack.push(i);
        }
    }
}

