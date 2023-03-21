let contained_count = 0
let overlap_count = 0
input = input.split('\n')

for (let i = 0; i < input.length; i++) {
    const pair = input[i].split(',').map(n => n.split('-'))
    // pair = [[start1, end1], [start2, end2]]
    const start1 = +pair[0][0]
    const end1 = +pair[0][1]
    const start2 = +pair[1][0]
    const end2 = +pair[1][1]
    if ((start1 <= start2 && end1 >= end2) || (start2 <= start1 && end2 >= end1)) {
        contained_count++
    }

    if ((start1 <= start2 && end1 >= start2) || (start1 <= end2 && end1 >= end2)
        || (start2 <= start1 && end2 >= start1) || (start2 <= end1 && end2 >= end1)) {
        overlap_count++
    }
}

console.log('Part One', contained_count)
console.log('Part Two', overlap_count)
