const playground = document.querySelector('#playground')
const input = document.querySelector('#input')

var map = new Array(20)
for(let i = 0; i < 20;i ++) {
    map[i] = new Array(10).fill(0)
}

var blocks = {
    I: [
        {
            shape: [
                [1],
                [1],
                [1],
                [1]
            ],
            offset: {x: 0, y: -4},
            isOverlap: function(map) {
                return map[y + 1][x] === 1
            }
        }, {
            shape: [
                [1, 1, 1, 1]
            ],
            offset: {x: -1, y: -1},
            isOverlap: function(map) {
                return map[y + 1][x] === 1 || 
                    map[y + 1][x + 1] === 1 || 
                    map[y + 1][x + 2] === 1 || 
                    map[y + 1][x + 3] === 1
            }
        }
    ]
}

var x = 4, y = 0, rotation = 1, block = blocks.I

function drawBlock() {
    let rb = block[rotation % block.length]
    rb.shape.forEach((row, by) => {
        row.forEach((col, bx) => {
            map[y + by + rb.offset.y] = 1
            map[x + bx + rb.offset.x] = 1
        })
    })
}

function render(playground) {
    map.forEach((row, y) => {
        row.forEach((col, x) => {
            if(col === 1) {
                let div = document.createElement('div')
                div.style.top = y * 40 + 'px'
                div.style.left = x * 40 + 'px'
                div.classList.add('block')
                playground.appendChild(div)
            }
        })
    })
}

setInterval(() => {
    drawBlock()
    render(playground)
    y += 1
}, 1000)