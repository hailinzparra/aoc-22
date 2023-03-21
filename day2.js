const game_score = {
    'A X': 3,
    'A Y': 6,
    'A Z': 0,
    'B X': 0,
    'B Y': 3,
    'B Z': 6,
    'C X': 6,
    'C Y': 0,
    'C Z': 3,
}

const shape_score = {
    'A': 1,
    'B': 2,
    'C': 3,
    'X': 1,
    'Y': 2,
    'Z': 3,
}

const game_score2 = {
    'X': 0,
    'Y': 3,
    'Z': 6,
}

const shape_score2 = {
    'A X': shape_score['C'],
    'A Y': shape_score['A'],
    'A Z': shape_score['B'],
    'B X': shape_score['A'],
    'B Y': shape_score['B'],
    'B Z': shape_score['C'],
    'C X': shape_score['B'],
    'C Y': shape_score['C'],
    'C Z': shape_score['A'],
}

let total_score = 0
let total_score2 = 0
input = input.split('\n')
for (let i = 0; i < input.length; i++) {
    total_score += game_score[input[i]] + shape_score[input[i][2]]
    total_score2 += game_score2[input[i][2]] + shape_score2[input[i]]
}

console.log('Part One', total_score)
console.log('Part Two', total_score2)
