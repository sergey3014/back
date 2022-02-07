const express = require('express')
const userRouter = require('./routes/user.routes')

const PORT = process.env.PORT|| 3000

const app = express()


/*app.get('/', (req, res) => {
    res.send('test start !!!')
})*/
app.use (express.json())
app.use ('/api', userRouter)

app.listen(PORT, () => console.log('server started on post ${PORT}'))
