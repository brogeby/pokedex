import { Router } from 'express'
import * as pokemonController from '../controllers/pokemons'
const router = Router()

/**
 * @path /pokemons
 */
router.get('/', pokemonController.getPokemons)
router.post('/', pokemonController.createPokemon)

/**
 * @path /pokemons/:id
 */
router.get('/:id', pokemonController.getPokemon)
router.put('/:id', pokemonController.updatePokemon)
router.delete('/:id', pokemonController.deletePokemon)

export default router
