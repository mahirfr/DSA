export default class Queue<T> {
    public length: number;

    private head?: Node<T>; 
    private tail?: Node<T>; 


    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode: Node<T> = {value: item};
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }
        
        this.tail!.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    deque(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        let curr = this.head;
        this.head = this.head!.next as Node<T>;
        curr!.next = undefined;
        this.length--;

        if (this.length === 0) {
            this.tail = undefined;
        }
        return curr!.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

type Node<T> = {
    value: T;
    next?: Node<T>;
}