const convert_input_to_moves = input => {
    const moves = []
    input = input.split('\n')
    for (let i = 0; i < input.length; i++) {
        let [act, amount] = input[i].split(' ')
        amount = +amount
        if (act === 'D') {
            for (let j = 0; j < amount; j++) {
                moves.push(0, 1)
            }
        }
        else if (act === 'L') {
            for (let j = 0; j < amount; j++) {
                moves.push(-1, 0)
            }
        }
        else if (act === 'R') {
            for (let j = 0; j < amount; j++) {
                moves.push(1, 0)
            }
        }
        else if (act === 'U') {
            for (let j = 0; j < amount; j++) {
                moves.push(0, -1)
            }
        }
    }
    return moves
}

const moves = convert_input_to_moves(input9)
const head = { x: 0, y: 0 }
const tail = []
for (let i = 0; i < 9; i++) {
    tail.push({ x: 0, y: 0 })
}
const visited = [{ x: 0, y: 0 }]
const visited2 = [{ x: 0, y: 0 }]

const move = (_head, _tail, x, y) => {
    _head.x += x
    _head.y += y
    const xdif = _head.x - _tail.x
    const ydif = _head.y - _tail.y
    if (Math.abs(xdif) > 0) {
        if (Math.abs(ydif) < 2) {
            if (Math.abs(xdif) >= 2) {
                _tail.x += Math.sign(xdif)
            }
        }
        else {
            if (Math.abs(ydif) >= 2) {
                _tail.x += Math.sign(xdif)
            }
        }
    }
    if (Math.abs(ydif) > 0) {
        if (Math.abs(xdif) < 2) {
            if (Math.abs(ydif) >= 2) {
                _tail.y += Math.sign(ydif)
            }
        }
        else {
            if (Math.abs(xdif) >= 2) {
                _tail.y += Math.sign(ydif)
            }
        }
    }
}

const is_visited = (data, x, y) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].x === x && data[i].y === y) {
            return true
        }
    }
    return false
}

for (let i = 0; i < moves.length; i += 2) {
    move(head, tail[0], moves[i], moves[i + 1])
    for (let j = 1; j < tail.length; j++) {
        move(tail[j - 1], tail[j], 0, 0)
    }
    if (!is_visited(visited, tail[0].x, tail[0].y)) {
        visited.push({ x: tail[0].x, y: tail[0].y })
    }
    const last_tail = tail[tail.length - 1]
    if (!is_visited(visited2, last_tail.x, last_tail.y)) {
        visited2.push({ x: last_tail.x, y: last_tail.y })
    }
}

console.log('Part One', visited.length)
console.log('Part Two', visited2.length)

// const canvas = document.createElement('canvas')
// canvas.width = 400
// canvas.height = 400
// const ctx = canvas.getContext('2d')
// const size = 10
// const offset = {
//     x: canvas.width / 2,
//     y: canvas.height / 2,
// }
// const draw = () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     for (let i = 0; i < tail.length; i++) {
//         ctx.fillStyle = 'red'
//         ctx.fillRect(offset.x + tail[i].x * size, offset.y + tail[i].y * size, size, size)
//     }
//     ctx.fillStyle = 'black'
//     ctx.fillRect(offset.x + head.x * size, offset.y + head.y * size, size, size)
// }

// document.addEventListener('DOMContentLoaded', () => {
//     document.body.appendChild(canvas)
//     let move_count = 0
//     window.addEventListener('keydown', ev => {
//         if (ev.code != 'Space') return
//         if (move_count >= moves.length) return
//         move(head, tail[0], moves[move_count], moves[move_count + 1])
//         for (let i = 1; i < tail.length; i++) {
//             move(tail[i - 1], tail[i], 0, 0)
//         }
//         move_count += 2
//         draw()
//     })
//     draw()
// })
