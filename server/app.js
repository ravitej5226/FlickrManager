const express=require('express');
const bodyParser=require('body-parser');
const helmet = require('helmet');

const app=express()

let port = 5000 || process.env.PORT

app.use(bodyParser.json())
app.use(helmet())

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
app.get('/', function (req, res) {
    res.send('hello world')
  })