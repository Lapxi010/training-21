class LinkedList {
    constructor (value, next) {
        this.value = value
        this.next = next
    }
}

function reverceLinkedList (node) {
    let dummy = node
    let cur = null 

    while (dummy) {
        let tmp = dummy.next
        dummy.next = cur
        cur = dummy
        dummy = tmp 
    }

    return cur
}

let one = new LinkedList(1, null);
let two = new LinkedList(2, null);
let three = new LinkedList(3, null);

one.next = two
two.next = three
console.log(one)
console.log(reverceLinkedList(one))