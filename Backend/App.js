const express = require('express');
const connectDb = require('./Config/DBconfig');
var cors = require('cors')
connectDb();
const app = express()

app.use(cors())
app.use(express.json());
// Body-parser middleware
// app.use(bodyparser.urlencoded({ extended: true }))
// app.use(bodyparser.json())

app.use('/api',require('./Routes/StudentRoute'))
app.use('/api',require('./Routes/teacherRoute'))


app.listen(3000,()=>{
    console.log('app is listening on port no. 3000 ');
})