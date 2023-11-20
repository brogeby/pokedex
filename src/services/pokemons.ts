import { PokemonInput, PokemonUpdateInput } from '../db/pokemonDTO'
import { PokemonRepository } from '../db/PokemonRepository'

const pokemonRepository = new PokemonRepository()

export const getPokemons = async () => {
  // Random business logic.. Aggregate data from multiple sources etc..
  return pokemonRepository.findAll()
}

export const getPokemon = async (id: number) => {
  // Random business logic.. Aggregate data from multiple sources etc..
  return pokemonRepository.findById(id)
}

export const updatePokemon = async (
  id: number,
  inputData: PokemonUpdateInput
) => {
  // Random business logic.. Mail the admin when a pokemon is updated etc..
  return pokemonRepository.update(id, inputData)
}

export const createPokemon = async (inputData: PokemonInput) => {
  // Random business logic.. Mail the admin when a pokemon is created etc..
  return pokemonRepository.create(inputData)
}

export const deletePokemon = async (id: number) => {
  // Random business logic.. Mail the admin when a pokemon is deleted etc..
  return pokemonRepository.delete(id)
}
