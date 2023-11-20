import { Router, Request, Response } from 'express'
import pokemonRouter from './pokemons'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is your Pokédex!')
})

router.use('/pokemons', pokemonRouter)

export default router
