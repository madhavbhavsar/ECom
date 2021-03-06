const express = require('express')
const app = express()
const connectDB = require('./config/db')
const cors = require('cors')

connectDB()

app.use(cors())
app.use(express.json({ extended: false }))
app.get('/', (req, res) => res.send("API running"))

app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/products', require('./routes/api/products'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/enquiry', require('./routes/api/enquiry'))
app.use('/api/orders', require('./routes/api/orders'))
app.use('/api/payment', require('./routes/api/payment'))
app.use('/api/cart', require('./routes/api/cart'))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))

