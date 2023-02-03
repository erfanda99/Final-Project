let validator = require('validatorjs')

let data = {
    name: 'Erfanda',
    email: 'erfandaandri99@gmail.com',
    age: 23
}

let rules = {
    name: 'required',
    email: 'required|email',
    age: 'min:18|max:30'
}

let validation = new validator(data, rules)

console.log('Status: ', validation.passes())
console.log('Error: ', validation.errors.all())