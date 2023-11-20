import dotenv from 'dotenv'
import server from './server'
import { initializePokedex } from './db/pokedex'

dotenv.config()

const startServer = async () => {
  await initializePokedex()

  const PORT = process.env.PORT || 3000
  server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
  })
}

startServer()
