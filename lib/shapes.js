// classes for each shape

class Triangle {
    constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.side = side;
    }
// renders the color and text from input in order to fill the shape
    render(color, text) {
        const height = (Math.sqrt(3) / 2) * this.side;
        const path = `M ${this.x} ${this.y - height / 2} ` +
                    `L ${this.x - this.side / 2} ${this.y + height / 2} ` +
                    `L ${this.x + this.side / 2} ${this.y + height / 2} ` +
                    `Z`;
        const fill = color ? `fill="${color}"` : '';
        return `
            ${text}
            <path d="${path}" ${fill}/>
        `;
    }
}

class Circle {
    constructor(cx, cy, r) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    render(color, text) {
        const fill = color ? `fill="${color}"` : '';
        return `
            ${text}
            <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" ${fill}/>
        `;
    }
}

class Square {
    constructor(x, y, side) {
        this.x = x;
        this. y = y;
        this.side = side;
    }
    render(color, text) {
        const fill = color ? `fill="${color}"` : '';
        return `
            ${text}
            <rect x="${this.x - this.side / 2}" y="${this.y - this.side / 2}" width="${this.side}" height="${this.side}" ${fill}/>
        `;
    }
}

// exports out to index.js
module.exports = { Triangle, Circle, Square };
