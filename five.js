class Three {
    constructor(value, children) {
        this.value = value
        this.children = children
    }
}

function dfs (three, cb) {
    if (three) {
        let queue = [three];
        
        while (queue.length !== 0) {
            let node = queue.shift();

            if (node.value === null) {
                continue
            }
            
            cb(node.value);
            
            let level = queue.length;

            for (let i = 0; i < level; i++) {
                queue.push(node.children[i]);
            }
        }
    }
}

