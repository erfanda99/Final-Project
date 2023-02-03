let moment = require('moment')

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
console.log(moment().format('dddd'))
console.log(moment().format('MMM Do YY'))
console.log(moment().format())
console.log(moment(1389878466730).toString())
console.log(moment([2022, 0, 1]).format('ddd/MM/YYYY'))

let dateA = moment([2022, 2, 5])
let dateB = moment([2022, 2, 1])
let diff = dateB.diff(dateA, 'days')
console.log('difference: ', diff, 'days')