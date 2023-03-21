class Directory {
    name = '/'
    items = {}
    parent = null
    constructor(name = '/', parent = null) {
        this.name = name
        this.parent = parent
    }
    add_dir(name) {
        this.items[name] = new Directory(name, this)
    }
    add_file(name, size) {
        this.items[name] = { name, size, parent: this }
    }
    get size() {
        let size = 0
        for (const item of Object.values(this.items)) {
            size += item.size
        }
        return size
    }
    is_item_exists(name) {
        for (const key of Object.keys(this.items)) {
            if (name === key) return true
        }
        return false
    }
    get_contained_dirs() {
        let dirs = []
        for (const item of Object.values(this.items)) {
            if (item instanceof Directory) {
                dirs.push(item)
                dirs = dirs.concat(item.get_contained_dirs())
            }
        }
        return dirs
    }
}

const read_line = (line, state) => {
    const line_components = line.split(' ')
    if (line_components[0] === '$') {
        // command
        state.last_command = line_components[1]
        switch (state.last_command) {
            case 'cd':
                // change directory
                if (line_components[2] === '..') {
                    state.current_directory = state.current_directory.parent
                }
                else {
                    if (!state.current_directory.is_item_exists(line_components[2])) {
                        state.current_directory.add_dir(line_components[2])
                    }
                    state.current_directory = state.current_directory.items[line_components[2]]
                }
                break
            default:
                break
        }
    }
    else {
        switch (state.last_command) {
            case 'ls':
                // list
                if (line_components[0] === 'dir') {
                    state.current_directory.add_dir(line_components[1])
                }
                else {
                    state.current_directory.add_file(line_components[1], +line_components[0])
                }
                break
            default:
                break
        }
    }
}

const rebuild_from_log = input => {
    input = input.split('\n')
    const state = {
        last_command: '',
        outermost_dir: new Directory(),
        current_directory: null,
    }
    state.current_directory = state.outermost_dir
    for (let i = 1; i < input.length; i++) {
        read_line(input[i], state)
    }
    return state.outermost_dir
}

let total_size = 0
let smallest_dir_to_delete_size = Infinity
const outermost_dir1 = rebuild_from_log(input7)
const outermost_dir1_size = outermost_dir1.size
for (const dir of outermost_dir1.get_contained_dirs()) {
    let size = dir.size
    if (size <= 100000) {
        total_size += size
    }
    if ((70000000 - outermost_dir1_size + size) >= 30000000) {
        if (size < smallest_dir_to_delete_size) {
            smallest_dir_to_delete_size = size
        }
    }
}

console.log('Part One', total_size)
console.log('Part Two', smallest_dir_to_delete_size)
