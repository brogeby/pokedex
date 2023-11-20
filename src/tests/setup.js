import { PokemonRepository } from '../db/PokemonRepository'
import fixtures from './fixtures'

export const seedDb = async () => {
  const pokemonRepository = new PokemonRepository()
  const promise = fixtures.map(async (pokemon) => {
    pokemonRepository.create(pokemon)
  })
  await Promise.all(promise)
}
