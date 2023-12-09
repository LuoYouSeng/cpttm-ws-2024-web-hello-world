const playground = document.querySelector('#playground')

class Shape {
    get rows() {
        return this.shape.length;
    }
    get cols() {
        return this.shape[0].length;
    }
    rotate() {
        const nArr = Array.from({
            length: this.cols
        }, () => []);

        this.shape.forEach((row, i) => {
            row.forEach((val, j) => {
                nArr[j][this.rows - i - 1] = val;
            });
        });

        this.shape = nArr;
    }
}

class IShape extends Shape {
    constructor() {
        super()
        this.shape = [
            [1, 1, 1, 1]
        ]
    }
}

class LShape extends Shape {
    constructor() {
        super()
        this.shape = [
            [1, 1, 1],
            [1, 0, 0]
        ]
    }
}

class JShape extends Shape {
    constructor() {
        super()
        this.shape = [
            [1, 0, 0],
            [1, 1, 1]
        ]
    }
}

class OShape extends Shape {
    constructor() {
        super()
        this.shape = [
            [1, 1],
            [1, 1]
        ]
    }
}

class ZShape extends Shape {
    constructor() {
        super()
        this.shape = [
            [1, 1, 0],
            [0, 1, 1]
        ]
    }
}

class SShape extends Shape {
    constructor() {
        super()
        this.shape = [
            [0, 1, 1],
            [1, 1, 0]
        ]
    }
}

var shapes = new Array()

shapes.push(new IShape())
shapes.push(new LShape())
shapes.push(new JShape())
shapes.push(new OShape())
shapes.push(new ZShape())
shapes.push(new SShape())
  
class Game {
    constructor() {
        this.map = new Array(20)
        this.y = 0
        this.x = 0
        this.shape = this.randomShape()
        for(let i = 0; i < 20;i ++) {
            this.map[i] = new Array(10).fill(0)
        }
    }

    randomShape() {
        return shapes[Math.floor(Math.random() * shapes.length)]
    }

    renderBlock(x, y, shape) {
        shape.forEach((row, sy) => {
            row.forEach((col, sx) => {
                if(col == 1) {
                    let block = document.createElement('div')
                    block.classList = 'block'
                    block.style.top = (y + sy) * 40 + 'px'
                    block.style.left = (x + sx) * 40 + 'px'
                    playground.appendChild(block)
                }
            })
        })
    }

    render() {
        playground.innerHTML = ''
        this.renderBlock(this.x, this.y, this.shape.shape)
        this.map.forEach((row, fy) => {
            row.forEach((col, fx) => {
                if(col == 1) {
                    this.renderBlock(fx, fy, [1])
                }
            })
        })
    }
    
    loop() {
        this.render()
        this.y += 1
    }
}

var game = new Game()

document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'KeyD':
            game.x += 1
    }
})

setInterval(() => {
    game.loop()
}, 1000)