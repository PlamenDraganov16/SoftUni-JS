function rectangle(width, height, color) {
    return {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() {
            return this.width * this.height;
        }
    };
}