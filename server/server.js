require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const connectDB = require('./utils/db')
const globalErrorHandler = require('./middlewares/errorHandler')
const app = express()
const path = require('path');

app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors())

app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/stripe', require('./routes/paymentRoutes'))

app.use(express.static(path.join(__dirname , '../client/build')));

app.get('*' , (req ,res) => {
  res.sendFile(path.resolve(__dirname , '../client/build/index.html'));
})

connectDB();

app.use(globalErrorHandler)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
