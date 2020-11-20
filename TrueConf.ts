class Recatangle {
    height: number;
    weight: number;
    x: number; // x coordinate of left top angle 
    y: number; // y coordinate of left top angle 
    getSquare(): number {  // return square of the rectangle
        return this.x * this.y
    }

    randomNumber(min: number, max: number): number {  
        return Math.random() * (max - min) + min; 
    }  

    generatePointInside(): [number, number] {
        return [this.randomNumber(this.x, this.x+this.weight), this.randomNumber(this.y, this.y-this.height)]
    }
}

class Triangle {
    x1: number; 
    y1: number; 
    x2: number; 
    y2: number; 
    x3: number; 
    y3: number; 
    getSquare(): number {
        return Math.abs((this.x1*(this.y2-this.y3) + this.x2*(this.y3-this.y1) + this.x3*(this.y1-this.y2)) / 2)
    }
    getRandomPointInside(): [number, number] {  // return random point inside the triangle 
		const r1 = Math.random()
		const r2 = Math.random()
		let X = (1 - Math.sqrt(r1)) * this.x1 + (Math.sqrt(r1) * (1 - r2)) * this.x2 + (Math.sqrt(r1) * r2) * this.x3
		let Y = (1 - Math.sqrt(r1)) * this.y1 + (Math.sqrt(r1) * (1 - r2)) * this.y2 + (Math.sqrt(r1) * r2) * this.y3	
		return [X, Y]
	}

}

class Circle {
    x: number; 
    y: number; 
    r: number; 
    getSquare(): number {
        return this.r * this.r * Math.PI
    }
}


class Polygon {

}


let rec: Recatangle = new Recatangle
rec.x = 0
rec.y = 0
rec.weight = 10
rec.height = 5

let circle: Circle = new Circle
circle.x = 0
circle.y = 0
circle.r = 1


let triangle: Triangle = new Triangle
triangle.x1 = 0
triangle.y1 = 0
triangle.x2 = 0
triangle.y2 = 5
triangle.x3 = 10
triangle.y3 = 0

// console.log(triangle.getRandomPointInside())
// console.log(triangle.getSquare())
console.log(rec.generatePointInside())





// op = sum;
// console.log(op(2, 4));  // 6
 
// op = subtract;
// console.log(op(6, 4));  // 2






// tsc --version
// tsc --help