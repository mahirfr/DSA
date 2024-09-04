export default class DoublyLinkedList<T> {
    public length: number;

    private head?: Node<T>; 
    private tail?: Node<T>; 

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode: Node<T> = {value: item};
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx >= this.length) {
            return;
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        const newNode: Node<T> = {value: item};
        let trav = this.head;

        if (!trav) return;
        let i = 0;
        while(trav.next) {
            trav = trav.next;
            if (++i === idx)
                break;
        }
        newNode.next = trav;
        newNode.prev = trav.prev;
        trav.next = undefined;
        trav.prev = undefined;
        this.length++;

    }
    
    append(item: T): void {
        const newNode: Node<T> = {value: item};
        if (this.length === 0) {
            this.tail = this.head = newNode; 
        } else {
            newNode.prev = this.tail;
            if (this.tail)
                this.tail.next = newNode;
            this.tail = newNode;
        } 
        this.length++;
        console.log("length: " + this.length + " tail: " + this.tail.value);
    }

    remove(item: T): T | undefined {
        if (this.length === 0) return undefined;

        let trav = this.head;

        for (let i = 0; i < this.length && trav !== undefined; ++i) {
            if (trav.value === item) {
                break;
            }
            trav = trav.next;
        }
       
        if (!trav) return undefined;

        // Handle head & tail
        if (trav === this.head) {
            this.head = trav.next;

            if (this.head) {
                this.head.prev = undefined;
            }
        }

        if (trav === this.tail) {
            this.tail = trav.prev;
            if (this.tail) this.tail.next = undefined;
        }

        if (trav.prev)
            trav.prev.next = trav.next;
        if (trav.next)
            trav.next.prev = trav.prev;
        trav.next = undefined;
        trav.prev = undefined;
        this.length--;
        return trav.value;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length || this.length === 0) {
            return;
        }

        let trav = this.head;
        if (idx === 0) {
            return trav?.value;
        }

        for (let i = 0; i < idx && trav !== undefined; ++i) {
            trav = trav.next;
        }

        return trav?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length || this.length === 0) {
            return undefined;
        }
    
        let trav = this.head;
    
        if (idx === 0) {
            if (this.length === 1) {
                const value = this.head?.value;
                this.head = this.tail = undefined;
                this.length--;
                return value;
            } else {
                const value = this.head?.value;
                this.head = this.head?.next;
                if (this.head) this.head.prev = undefined;
                this.length--;
                return value;
            }
        }
    
        for (let i = 0; i < idx && trav !== null; ++i) {
            trav = trav!.next;
        }
    
        if (!trav) return undefined;
    
        if (trav.prev) trav.prev.next = trav.next;
        if (trav.next) trav.next.prev = trav.prev;
    
        if (!trav.next) {
            this.tail = trav.prev;
        }
    
        trav.next = trav.prev = undefined;
        this.length--;
    
        return trav.value;
    }
    
}

type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>,
}