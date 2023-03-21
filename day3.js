const is_lower_case = s => s === s.toLowerCase()
const get_priority_score = ch => ch.charCodeAt(0) - (is_lower_case(ch) ? 96 : 38)
const find_common = (s1, s2) => {
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                return s1[i]
            }
        }
    }
    return ''
}

const find_common3 = (s1, s2, s3) => {
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            for (let k = 0; k < s3.length; k++) {
                if (s1[i] === s2[j] && s1[i] === s3[k]) {
                    return s1[i]
                }
            }
        }
    }
    return ''
}

let total_priority_score = 0
input = input.split('\n')

for (let i = 0; i < input.length; i++) {
    const rucksack = input[i]
    const compartment1 = rucksack.substring(0, rucksack.length / 2)
    const compartment2 = rucksack.substring(rucksack.length / 2)
    const common = find_common(compartment1, compartment2)
    if (common) {
        total_priority_score += get_priority_score(common)
    }
}

console.log('Part One', total_priority_score)

let total_badges_priority_score = 0
for (let i = 0; i < input.length; i += 3) {
    const rucksack1 = input[i]
    const rucksack2 = input[i + 1]
    const rucksack3 = input[i + 2]
    const common = find_common3(rucksack1, rucksack2, rucksack3)
    if (common) {
        total_badges_priority_score += get_priority_score(common)
    }
}

console.log('Part Two', total_badges_priority_score)
