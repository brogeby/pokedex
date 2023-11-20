import express from 'express'
import routes from './routes'

const app = express()

process.on('uncaughtException', (err) => {
  console.log(err)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

export default app
