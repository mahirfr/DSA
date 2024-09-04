export default class SinglyLinkedList<T> {
    public length: number;

    private head?: Node<T>;
    
    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode: Node<T> = { value: item };
    
        if (this.head) {
            newNode.next = this.head;
        }
    
        this.head = newNode;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
    }

    append(item: T): void {
        const newNode: Node<T> = { value: item };
    
        if (this.length === 0) {
            this.head = newNode;
        } else {
            let trav = this.head;
            while (trav?.next) {
                trav = trav.next;
            }
            if (trav)
                trav.next = newNode;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        if (this.length === 0 || !this.head) {
            return undefined;
        }
    
        if (this.head.value === item) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            this.length--;
            return removedValue;
        }
    
        let prev = this.head;
        let trav = this.head.next;
    
        while (trav) {
            if (trav.value === item) {
                prev.next = trav.next;
                this.length--;
                return trav.value;
            }
            prev = trav;
            trav = trav.next;
        }
    
        return undefined;
    }
    

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let trav = this.head;

        for (let i = 0; i < idx; ++i) {
            if (trav) {
                trav = trav.next;
            }
        }

        return trav?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let trav = this.head; 
        if (idx === 0) {
            this.head = trav?.next;    
            if (trav) {
                trav.next = undefined;
                this.length--;
            }
            return trav?.value;
        }

        let curr = trav;

        let i = 0;
        while(trav) {
            curr = trav
            trav = trav.next;
            if (++i === idx) {
                break;
            }
        }

        if (curr && trav) {
            curr.next = trav.next;
            trav.next = undefined;
            this.length--;
            return trav.value
        }

        return trav?.value;

    }

}

type Node<T> = {
    value: T,
    next?: Node<T>,
}
