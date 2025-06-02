function area() {

return Math.abs(this.x * this.y);

};

function vol() {

return Math.abs(this.x * this.y * this.z);

}

function solve(area, vol, input) {
    const figures = JSON.parse(input);

    return figures.map(figure => {
        const x = Number(figure.x);
        const y = Number(figure.y);
        const z = Number(figure.z);

        const context = { x, y, z };

        return {
            area: area.call(context),
            volume: vol.call(context)
        };
    });
}