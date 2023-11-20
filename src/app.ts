import dotenv from 'dotenv'
import server from './server'

dotenv.config()

const startServer = async () => {
  const PORT = process.env.PORT || 3000
  server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
  })
}

startServer()
