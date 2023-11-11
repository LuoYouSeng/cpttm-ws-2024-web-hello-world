window.addEventListener('load', ()=>{
    var expression = ''
    var screen = document.querySelector('.screen')
    document.querySelectorAll('button:not(.operator, .three)')
    .forEach((button)=>{
        button.addEventListener('click', (e)=>{
            expression += e.target.innerText
            let arr = expression.replaceAll('+', ' ')
            .replaceAll('-', ' ')
            .replaceAll('*', ' ')
            .replaceAll('/', ' ')
            .split(' ')
            screen.innerText = arr[arr.length - 1]
        })
    })
    document.querySelectorAll('button.operator:not(#eq)')
    .forEach((button)=>{
        button.addEventListener('click', (e)=>{
            expression += e.target.innerText
        })
    })
    document.querySelector('button#ac')
    .addEventListener('click', (e)=>{
        expression = ''
        screen.innerText = '0'
    })
    document.querySelector('button#eq')
    .addEventListener('click', (e)=>{
        console.log(expression)
        screen.innerText = eval(expression)
    })
})