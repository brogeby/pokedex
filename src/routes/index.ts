import { Router, Request, Response } from 'express'
import authRouter from './auth'
import pokemonRouter from './pokemons'
import { authenticateJWT } from './middlewares/gatekeeper'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is your Pokédex!')
})

router.use('/auth', authRouter)
router.use('/pokemons', authenticateJWT, pokemonRouter)

export default router
