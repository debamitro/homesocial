const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000

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
            username: req.session.user,
            serverurl: req.session.serverurl
        })
    }
    else
    {
        res.render ('login')
    }
})

app.post('/authenticate', (req, res) => {
    if (req.body.username != '')
    {
        req.session.user = req.body.username
        req.session.serverurl = req.body.serverurl
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
