type Node<T> = {
    value: T;
    next?: Node<T>;
}

export default class Stack<T> {
    public length: number;

    private head?: Node<T>;    

    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        const newNode: Node<T> = {value: item};
        if (this.length === 0) {
            this.head = newNode;
            this.length++;
            return; 
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    pop(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        const curr = this.head;
        this.head = this.head?.next;
        curr!.next = undefined;
        this.length--;

        return curr?.value;
    }
    
    peek(): T | undefined {
        return this.head?.value;
    }
}