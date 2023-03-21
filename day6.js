const get_marker_index = (unique_number) => {
    for (let i = 0; i < input.length; i++) {
        let is_marker = true
        const ch = []
        for (let j = 0; j < unique_number; j++) {
            ch.push(input[i + j])
        }
        for (let j = 0; j < unique_number; j++) {
            for (let k = j + 1; k < unique_number; k++) {
                if (ch[j] === ch[k]) {
                    is_marker = false
                    break
                }
            }
            if (!is_marker) break
        }
        if (is_marker) {
            return i + unique_number
        }
    }
    return null
}

console.log('Part One', get_marker_index(4))
console.log('Part One', get_marker_index(14))
