window.addEventListener('load', () => {
    const playground = document.querySelector('#playground')
    const input = document.querySelector('#input')

    const DIRECTION = {
        TOP: 0,
        LEFT: 1,
        RIGHT: 2,
        BOTTOM: 3
    }

    var map = new Array(20)
    for(let i = 0; i < 20;i ++) {
        map[i] = new Array(10).fill(0)
    }

    var sx = 4, sy = 5, length = 1, direction = DIRECTION.RIGHT

    var fx = 8, fy = 2

    function handleInput() {
        let str = input.value
        let d = str[str.length - 1]
        switch(d) {
            case 'w':
                direction = DIRECTION.TOP
                break
            case 'a':
                direction = DIRECTION.LEFT
                break
            case 'd':
                direction = DIRECTION.RIGHT
                break
            case 's':
                direction = DIRECTION.BOTTOM
                break
        }
    }

    function updateDirection() {
        switch(direction) {
            case DIRECTION.TOP:
                sy -= 1
                break
            case DIRECTION.LEFT:
                sx -= 1
                break
            case DIRECTION.RIGHT:
                sx += 1
                break
            case DIRECTION.BOTTOM:
                sy += 1
                break
        }
    }

    function updateFood() {
        let emptyBlock = []
        map.forEach((row, y) => {
            row.forEach((value, x) => {
                if(value == 0) {
                    emptyBlock.push({'x': x, 'y': y})
                }
            })
        })
        let nextFood = emptyBlock[parseInt(Math.random() * emptyBlock.length - 1) + 1]
        fx = nextFood.x
        fy = nextFood.y
    }

    function updateMap() {
        if(sy == fy && sx == fx) {
            length += 1
            updateFood()
        } else {
            map.forEach((row) => {
                row.forEach((value, index) => {
                    if(value != 0) {
                        row[index] -= 1;
                    }
                })
            })
        }
        map[sy][sx] = length
    }
    
    function update() {
        updateDirection()
        updateMap()
    }
    
    function render() {
        playground.innerHTML = ''
        map.forEach((row, y) => {
            row.forEach((value, x) => {
                if(value != 0) {
                    let node = document.createElement('div')
                    node.classList = 'node'
                    if(x == sx && y == sy) {
                        node.classList += ' head'
                    }
                    node.style.top = y * 40 + 'px'
                    node.style.left = x * 40 + 'px'
                    playground.appendChild(node)
                }
            })
        })
        let node = document.createElement('div')
        node.classList = 'node food'
        node.style.top = fy * 40 + 'px'
        node.style.left = fx * 40 + 'px'
        playground.appendChild(node)
    }

    input.focus()

    var loopTimer = setInterval(()=>{
        handleInput()
        update()
        render()
    }, 350)

    clearInterval(loopTimer)
})