const scan_tree = (grid, i, j) => {
    const blocker_count = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }

    const nearest_blocker_distance = {
        top: i,
        bottom: grid.length - 1 - i,
        left: j,
        right: grid[i].length - 1 - j,
    }

    for (let y = 0; y < grid.length; y++) {
        if (y === i) continue
        // scan top
        if (y < i) {
            if (grid[y][j] >= grid[i][j]) {
                blocker_count.top++
                const blocker_distance = Math.abs(y - i)
                if (blocker_distance < nearest_blocker_distance.top) {
                    nearest_blocker_distance.top = blocker_distance
                }
            }
        }
        // scan bottom
        else if (y > i) {
            if (grid[y][j] >= grid[i][j]) {
                blocker_count.bottom++
                const blocker_distance = Math.abs(y - i)
                if (blocker_distance < nearest_blocker_distance.bottom) {
                    nearest_blocker_distance.bottom = blocker_distance
                }
            }
        }
    }
    for (let x = 0; x < grid[i].length; x++) {
        if (x === j) continue
        // scan left
        if (x < j) {
            if (grid[i][x] >= grid[i][j]) {
                blocker_count.left++
                blocker_count.left++
                const blocker_distance = Math.abs(x - j)
                if (blocker_distance < nearest_blocker_distance.left) {
                    nearest_blocker_distance.left = blocker_distance
                }
            }
        }
        // scan right
        else if (x > j) {
            if (grid[i][x] >= grid[i][j]) {
                blocker_count.right++
                blocker_count.right++
                const blocker_distance = Math.abs(x - j)
                if (blocker_distance < nearest_blocker_distance.right) {
                    nearest_blocker_distance.right = blocker_distance
                }
            }
        }
    }
    const is_visible_from_outside = blocker_count.top === 0
        || blocker_count.bottom === 0
        || blocker_count.left === 0
        || blocker_count.right === 0
    const scenic_score = nearest_blocker_distance.top
        * nearest_blocker_distance.bottom
        * nearest_blocker_distance.left
        * nearest_blocker_distance.right
    return { is_visible_from_outside, scenic_score }
}

const get_trees = (input) => {
    let total_visible_trees = 0
    const grid = []
    const flat_scenic_scores = []
    input = input.split('\n')
    for (let i = 0; i < input.length; i++) {
        grid[i] = input[i].split('').map(n => +n)
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const data = scan_tree(grid, i, j)
            if (data.is_visible_from_outside) {
                total_visible_trees++
            }
            flat_scenic_scores.push(data.scenic_score)
        }
    }
    return { grid, total_visible_trees, flat_scenic_scores }
}

const trees = get_trees(input8)

console.log('Part One', trees.total_visible_trees)
console.log('Part Two', Math.max(...trees.flat_scenic_scores))
