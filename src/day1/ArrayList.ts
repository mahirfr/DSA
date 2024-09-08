export default class ArrayList<T> {
    public length: number;  
    private capacity: number; 
    private data: T[];  

    constructor(initialCapacity: number = 10) {
        this.length = 0;
        this.capacity = initialCapacity;
        this.data = new Array(this.capacity);
    }

    prepend(item: T): void {
        this.resizeIfNeeded();
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }
        this.resizeIfNeeded();
        for (let i = this.length; i > idx; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[idx] = item;
        this.length++;
    }

    append(item: T): void {
        this.resizeIfNeeded();
        this.data[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) {
                const removedItem = this.data[i];
                this.removeAt(i);
                return removedItem;
            }
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        return this.data[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        const removedItem = this.data[idx];
        for (let i = idx; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.length--;
        return removedItem;
    }

    private resizeIfNeeded(): void {
        if (this.length >= this.capacity) {
            this.capacity *= 2;
            const newData = new Array(this.capacity);
            for (let i = 0; i < this.length; i++) {
                newData[i] = this.data[i];
            }
            this.data = newData;
        }
    }
}
