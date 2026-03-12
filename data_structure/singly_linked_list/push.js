class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        if (this.length === 0) {
            this.head = val;
            this.tail = val;
        }
        if (this.length > 0) {
            this.tail = val
        }

        this.length += 1
    }
}