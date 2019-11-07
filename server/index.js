const express = require('express')
const app = express()
const port = 3001

const posts = require('./posts')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/posts', (req, res) => posts.create_posts_json (res))
app.post('/post', (req, res, next) => {
    posts.new_post (req.body)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
