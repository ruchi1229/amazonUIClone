const express = require('express')
const app = express()
const port = 4000

app.use(express.json());

const credentials = [
    {
        username: "jane@yahoo.com",
        password: "doe123"
    },
    {
        username: "mickey@gmail.com",
        password: "Password123!"
    }
]

app.post('/auth', (req, res) => {
    if (req.body == undefined) return res.send('req is undefined')
    const req_user = req.body.username
    const req_pass = req.body.password
    for (const i in credentials) {
        if (credentials[i].username == req_user && 
            credentials[i].password == req_pass) {
            res.send("successful")
        }
    }
    res.send("Username or password doesn't match")
})

app.get('/user/:username', (req, res) => {
    const user_data = 
        {
            first_name: "Mickey",
            last_name: "Mouse",
            city: "Disney",
            zip_code: "10001",
        }
    if (req.body == undefined) return res.send('req is undefined')
    const req_user = req.params.username
    if (req_user != "mickey@gmail.com") {
        res.send("Unsuccessful")
    }
    res.send(user_data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})