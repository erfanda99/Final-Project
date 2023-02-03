let express = require('express')
let moment = require('moment')
let app = express()
let port = 3000
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

let models = require('./models/index')

app.use(express.json())

app.listen(port, () => {
    console.log('Example app listen to port '+ port)
})

app.get('/', (req, res) => {
    res.send('Hello world!')
})

// app.post('/login', (req, res) => {
//     let user = models.Users.findOne({where: {email: req.body.email}}).then(function(result){
//         if (result.length < 1) {
//             res.send("User Not Found")
//         }
//         let payload = {
//             id : result.id,
//             name : result.name,
//             email : result.email
//         }

//         let token = jwt.sign(payload, 'secret')
//         res.json({message : "Login Success", access_token : token})
//     })
// })

function logUrl(req, res, next) {
    console.log('Request URL ', req.originalUrl)
    next()
}


// NOTE

app.get('/note', logUrl, (req, res) => {
    models.Note.findAll({include: models.Category}).then(function(result) {
        if (result.length < 1) {
            res.json({message: ""})
        }
        else {
            res.json(result)
        }
    })
})
app.get('/note/:id', (req, res) => {
    models.Note.findOne({ where: {id: req.params.id} }).then(function(result) {
        if (!result || result.length < 1) {
            res.json({message: ""})
        }
        else {
            res.json(result)
        }
    })
})
app.post('/note', (req, res) => {
    let createNote = models.Note.create(req.body)
    if (!createNote) {
        console.error('Smoething went wrong')
    } else {
        res.send('Data save successfully ' + req.body.title)
        
    }
    // res.json(req.body)
})
app.put('/note/:id', (req, res) => {
    noteId = req.params.id
    let updateNote = models.Note.update(
        req.body,
        {
            where: 
            {
                id: req.params.id
            }
        }
    ).then(res => {
    return res
    });
    if (updateNote) {
        res.send("Success update note: "+noteId)
    }
    else {
        res.send("Failed to Update Data")
    }
})
app.delete('/note/:id', (req, res) => {
    models.Note.findOne({ where: {id: req.params.id} }).then(function(result) {
        if (result.length < 1) {
            res.json({message: "Note not available"})
        }
        result.destroy()
        res.send("Success delete Note with ID: " +req.params.id)
    })
})

// User

app.get('/user', logUrl, (req, res) => {
    models.User.findAll().then(function(result) {
        if (!result || result.length < 1) {
            res.json({message: "Data not available"})
        }
        
        res.json(result)
    })
})
app.get('/user/:id', (req, res) => {
    models.User.findOne({ where: {id: req.params.id} }).then(function(result) {
        if (!result || result.length < 1) {
            res.json({message: "Data not available"})
        }
        else {
            res.json(result)
        }
        
    })
})
app.post('/user', (req, res) => {
    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(req.body.password, salt)
    req.body.password = password

    let createUser = models.User.create(req.body)
    if (!createUser) {
        console.error('Error create User')
    } else {
        res.send('New User created! Name: '+ req.body.username)
        
    }
    // res.json(req.body)
})
app.put('/user/:id', (req, res) => {
    if (req.body.password){
        let salt = bcrypt.genSaltSync(10);
        let password = bcrypt.hashSync(req.body.password, salt)
        req.body.password = password
    }
    userId = req.params.id
    let updateUser = models.User.update(
        req.body,
        {
            where: 
            {
                id: req.params.id
            }
        }
    ).then(res => {
        return res
    });
    if(updateUser) {
        res.send("Success update User with ID: "+userId)
    } else {
        res.send("Faileds update User with ID: "+userId)
    }
})
app.delete('/user/:id', (req, res) => {
    models.User.findOne({ where: {id: req.params.id} }).then(function(result) {
        if (result.length < 1) {
            res.json({message: "Data not available"})
        }
        result.destroy()
        res.send("Success delete User with ID: " +req.params.id)
    })
})

//CATEGORY

app.get('/category', logUrl, (req, res) => {
    models.Category.findAll().then(function(result) {
        if (result.length < 1) {
            res.json({message: ""})
        }
        else {
            res.json(result)
        }
    })
})
app.get('/category/:id', (req, res) => {
    models.Category.findOne({ where: {id: req.params.id} }).then(function(result) {
        if (!result || result.length < 1) {
            res.json({message: ""})
        }
        else {
            res.json(result)
        }
    })
})
app.post('/category', (req, res) => {
    let createCategory = models.Category.create(req.body)
    if (!createCategory) {
        console.error('Smoething went wrong')
    } else {
        res.send('Data save successfully '+ req.body.title)
        
    }
    // res.json(req.body)
})
app.put('/category/:id', (req, res) => {
    categoryId = req.params.id
    let updateCategory = models.Category.update(
        req.body,
        {
            where: 
            {
                id: req.params.id
            }
        }
    ).then(res => {
    return res
    });
    if (updateCategory) {
        res.send("Success update category: "+categoryId)
    }
    else {
        res.send("Failed to Update Data")
    }
})
app.delete('/category/:id', (req, res) => {
    models.Category.findOne({ where: {id: req.params.id} }).then(function(result) {
        if (result.length < 1) {
            res.json({message: "Category not available"})
        }
        result.destroy()
        res.send("Success delete Category with ID: " +req.params.id)
    })
})

//REMINDER

app.get('/reminder', logUrl, (req, res) => {
    models.Reminder.findAll({include: [{model:models.Note, include: [{model: models.Category}]}]}).then(function(result) {
        if (result.length < 1) {
            res.json({message: ""})
        }
        else {
            res.json(result)
        }
    })
})
app.get('/reminder/:id', (req, res) => {
    models.Reminder.findOne({ where: {id: req.params.id} }).then(function(result) {
        if (!result || result.length < 1) {
            res.json({message: ""})
        }
        else {
            res.json(result)
        }
    })
})
app.post('/reminder', (req, res) => {
    let createReminder = models.Reminder.create(req.body)
    if (!createReminder) {
        console.error('Smoething went wrong')
    } else {
        res.send('Data save successfully'+ req.body.title)
        
    }
    // res.json(req.body)
})
app.put('/reminder/:id', (req, res) => {
    reminderId = req.params.id
    let updateReminder = models.Reminder.update(
        req.body,
        {
            where: 
            {
                id: req.params.id
            }
        }
    ).then(res => {
    return res
    });
    if (updateReminder) {
        res.send("Success update note: "+reminderId)
    }
    else {
        res.send("Failed to Update Data")
    }
})
app.delete('/reminder/:id', (req, res) => {
    models.Reminder.findOne({ where: {id: req.params.id} }).then(function(result) {
        if (result.length < 1) {
            res.json({message: "Reminder not available"})
        }
        result.destroy()
        res.send("Success delete Reminder with ID: " +req.params.id)
    })
})

//LOGIN

app.post('/login', (req, res) => {
    
    models.User.findOne({ where: {email: req.body.email} }).then(function(result) 
    {
        if (!result || result.length < 1 ) {
            res.json({message: "Email is Not Registered"})
        }
        else {
            bcrypt.compare(req.body.password, result.password, function (err, status) {
                if(err) {
                    res.status(500).json({message:err})
                }
                if(status) {
                    res.json({message: "Login Success"})
                }
                else {res.status(400).json({message: "Invalid Password"})}

            })
        }
    })
})


//REGISTER

app.post('/register', (req, res) => {
    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(req.body.password, salt)
    req.body.password = password

    let createUser = models.User.create(req.body)
    if (!createUser) {
        console.error('Register Error')
    } else {
        res.send('New User created! Name: '+ req.body.username)
        
    }
})