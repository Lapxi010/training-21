class TwoArray {
    constructor (children, value, prev, next) {
        this.children = children
        this.value = value
        this.prev = prev
        this.next = next
    }
}

class Queue {
    constructor () {
        this.head = null
        this.tail = null
        this.length = 0
    }

    add (el) {
        let tmp = new TwoArray(el.children, el.value, this.tail, null)
        if (this.head === null) {
            this.head = tmp;
        }
        this.tail = tmp
        this.length += 1
    };

    shift () {
        if (this.length === 0) {
            throw new Error('Так нельзя')
        }
        let tmp = this.head 

        if (this.head.next === null) {
            this.head = this.tail
        } else {
            this.head = this.head.next
        }
        if (this.length > 0) {
            this.length -= 1
        }

        return tmp
    };

    length () {
        return length
    }
};

function bfs (three, cb) {
    if (three) {
        let queue = new Queue();

        queue.add(three)
        
        while (queue.length !== 0) {
            let level = queue.length;

            for (let i = 0; i < level; i++) {
                let node = queue.shift();

                if (node.value === null) {
                    continue
                }
                
                cb(node.value)
                if (!node.children) {
                    continue
                }
                let l = node.children.length
                for (let i = 0; i < l; i++) {
                    queue.add(node.children[i]);
                }
            }
        }
    }
}

class Three {
    constructor (value, children) {
        this.value = value
        this.children = children
    }
}

let three = new Three (1, null)
let three1 = new Three(2, null)
let three2 = new Three(3, null)
let three3 = new Three(4, null)
three.children = [three1, three2]
three2.children = [three3]

bfs(three, (el) => console.log(el))