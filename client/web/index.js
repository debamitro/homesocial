const express = require('express')
const session = require('express-session')
const app = express()

/** Port for browser-based client */
const port = 3000

/** Name of this social network - pick your own! */
const websitename = 'Homesocial'

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'login-name',
    saveUninitialized: false,
    resave: false
}))

app.set('view engine','pug')

app.get('/', (req, res) => {
    if (req.session.user && req.session.user != '')
    {
        res.render ('index',{
            sitename: websitename,
            username: req.session.user,
            serverurl: req.hostname
        })
    }
    else
    {
        res.render ('login', {
            sitename: websitename,
            serverurl : req.hostname
        })
    }
})

app.post('/authenticate', (req, res) => {
    if (req.body.username != '')
    {
        req.session.user = req.body.username
        res.redirect ('/')
    }
    else
    {
        res.render ('login',{status: "failed"})
    }
})

app.post('/logout', (req, res) => {
    req.session.user = ''
    res.redirect('/')
})

app.get('/profile/:person', (req, res) => {
    res.render ('profile', { 
        sitename: websitename,
        person : req.params.person,
        serverurl : req.hostname 
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
