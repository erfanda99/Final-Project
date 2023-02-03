let prompt = require('prompt')
let validator = require('validatorjs')
let bcrypt = require('bcrypt')

prompt.start()

prompt.get(['username', 'email', 'password'], function (err, result) {
    if (err) {
        console.error(err)
        return 1
    }
    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(result.password, salt)

    console.log('Command line input')
    console.log('Username', result.username)
    console.log('Email', result.email)
    console.log('Password', result.password, password)

    let rules = {
        username: 'required',
        email: 'required|email',
        password: 'required|min:4|max:10'
    }

    let validation = new validator(result, rules)
    console.log('Status: ', validation.passes())
    console.log('Error: ', validation.errors.all())
})
