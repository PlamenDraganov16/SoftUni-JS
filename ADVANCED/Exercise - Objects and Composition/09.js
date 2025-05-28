function createSortedList() {
    return {
        list: [],
        add(element) {
            this.list.push(element);
            this.list.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
            }
        },
        get(index) {
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }
        },
        get size() {
            return this.list.length;
        }
    };
}