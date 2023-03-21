input = input.split('\n').map(x => +x)
const calories = []
let index = 0
for (let i = 0; i < input.length; i++) {
    if (input[i]) {
        if (!calories[index]) calories[index] = 0
        calories[index] += input[i]
    }
    else {
        index++
    }
}
console.log('Part One', Math.max(...calories))
calories.sort((a, b) => b - a)
console.log('Part Two', calories[0] + calories[1] + calories[2])
