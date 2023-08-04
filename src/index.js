import express from 'express'
import paymentRoutes from './routes/payments.routes.js'
import path from 'path'

const app = express()

app.use(express.json())

app.use(paymentRoutes)

app.use(express.static(path.resolve('src/public')))

app.listen(3000)
console.log('Server port :', 3000)