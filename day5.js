input = input.split('\n')

const stacks_list = []

for (let i = 0; i < input.length; i++) {
    if (input[i] === '') {
        input.splice(0, i + 1)
        break
    }
    stacks_list.push(input[i])
}

// generate stacks
const stacks = []
for (let i = stacks_list.length - 2; i >= 0; i--) {
    for (j = 1, k = 0; j < stacks_list[i].length; j += 4, k++) {
        const crate = stacks_list[i][j]
        if (crate !== ' ') {
            stacks[k] = stacks[k] || []
            stacks[k].push(crate)
        }
    }
}

// apply moves
const move = (amount, from, to) => {
    stacks[to - 1] = stacks[to - 1].concat(stacks[from - 1].splice(-amount).reverse())
}

// clone stacks
const stacks2 = []
for (let i = 0; i < stacks.length; i++) {
    stacks2.push(stacks[i].slice(0))
}
const move2 = (amount, from, to) => {
    stacks2[to - 1] = stacks2[to - 1].concat(stacks2[from - 1].splice(-amount))
}

for (let i = 0; i < input.length; i++) {
    const words = input[i].split(' ')
    move(words[1], words[3], words[5])
    move2(words[1], words[3], words[5])
}

let top_crates = ''
let top_crates2 = ''
for (let i = 0; i < stacks.length; i++) {
    top_crates += stacks[i][stacks[i].length - 1]
    top_crates2 += stacks2[i][stacks2[i].length - 1]
}

console.log('Part One', top_crates)
console.log('Part Two', top_crates2)
