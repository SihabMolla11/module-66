const express = require("express")
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


app.use(cors())
app.get('/', (req, res) => {
    res.send('hellow world')
})

const users = require("./data/data.json");

app.get(('/users'), (req, res) => {
    res.send(users)
})

app.post(('/user', (req, res) => {
    console.log(req.body);
}))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})