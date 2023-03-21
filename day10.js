// // const create_events = (id, cycle, event = () => { }) => {
// //     return {
// //         id,
// //         cycle,
// //         event,
// //     }
// // }

// // const events_contain_id = (events, id) => {
// //     for (let i = 0; i < events.length; i++) {
// //         if (events[i].id === id) return true
// //     }
// //     return false
// // }

// // const run = (input, cycle_to_check) => {
// //     input = input.split('\n')
// //     let cycle = 0
// //     let input_index = 0
// //     let xvalue = 1
// //     const signals_to_check = []
// //     const events = []
// //     // while we still have inputs
// //     while (input_index < input.length) {
// //         const [cmd, value] = input[input_index].split(' ')
// //         switch (cmd) {
// //             case 'noop':
// //                 if (!events_contain_id(events, input_index)) {
// //                     events.push(create_events(input_index, cycle + 1))
// //                 }
// //                 break
// //             case 'addx':
// //                 if (!events_contain_id(events, input_index)) {
// //                     events.push(create_events(input_index, cycle + 2, () => {
// //                         xvalue += +value
// //                     }))
// //                 }
// //                 break
// //             default:
// //                 break
// //         }
// //         if (cycle_to_check.includes(cycle)) {
// //             signals_to_check.push(cycle * xvalue)
// //         }

// //         // console.log(cycle, xvalue)
// //         cycle++

// //         for (let i = events.length - 1; i >= 0; i--) {
// //             if (events[i].cycle === cycle) {
// //                 events[i].event()
// //                 events.splice(i, 1)
// //                 input_index++
// //             }
// //         }
// //     }
// //     return {
// //         cycle,
// //         xvalue,
// //         cycle_to_check,
// //         signals_to_check,
// //     }
// // }

// // const raytube = run(input10, [20, 60, 100, 140, 180, 220])
// // console.log(raytube)
// // console.log('Part One', raytube.signals_to_check.reduce((sum, a) => sum + a, 0))

// const run = (instructions) => {
//     let x = 1
//     let wait = 0
//     let cycle = 1
//     let current_instruction = ['', null]
//     while (instructions.length > 0 || wait > 0) {
//         // start of cycle
//         clog('cstart', cycle)
//         if (wait <= 0) {
//             if (instructions.length === 0) break
//             current_instruction = instructions.splice(0, 1)[0].split(' ')
//             switch (current_instruction[0]) {
//                 case 'noop':
//                     wait = 1
//                     break
//                 case 'addx':
//                     wait = 2
//                     break
//             }
//             clog('begin', current_instruction[0])
//         }

//         // end of cycle
//         clog('cend', cycle, wait)
//         wait--
//         if (wait <= 0) {
//             clog('exec', current_instruction[0])
//             switch (current_instruction[0]) {
//                 case 'addx':
//                     x += +current_instruction[1]
//                     break
//             }
//         }

//         cycle++

//         if ([20, 60, 100, 140, 180, 220].includes(cycle)) {
//             console.log(cycle, x, cycle * x)
//         }
//     }
//     return { x, wait, cycle, current_instruction }
// }

// const clog = (...data) => {
//     // console.log(...data)
// }

// const raytube = run(input10.split('\n'))

// console.log('Part One', 0)

const cycle = () => {
    // fetch stage
    
    // decode stage
    // execute stage
}
