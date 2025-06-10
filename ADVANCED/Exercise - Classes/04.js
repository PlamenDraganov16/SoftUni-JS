class List {
    constructor() {
        this.elements = [];
        this.size = 0;  
    }

    add(element) {
        this.elements.push(element);
        this.elements.sort((a, b) => a - b);
        this.size = this.elements.length;
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.elements.length) {
            return this;
        }
        this.elements.splice(index, 1);
        this.size = this.elements.length;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.elements.length) {
            return undefined;
        }
        return this.elements[index];
    }
}
