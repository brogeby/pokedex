// The name pokedex represents a database type such as Postgres, but hence the data is stored in memory, we can call it a pokedex just for fun.

import axios from 'axios'
import { Pokemon, PokemonDetails } from './pokemonDTO'
import { PokemonRepository } from './PokemonRepository'

type PokeApiList = {
  name: string
  url: string
}

const pokeapiBaseURL = 'https://pokeapi.co/api/v2'

export let pokedex: Pokemon[] = []

export const initializePokedex = async () => {
  const response = await axios.get(
    `${pokeapiBaseURL}/pokemon?limit=200&offset=0`
  )

  pokedex = await Promise.all(
    response.data.results.map(async (pokemon: PokeApiList) => {
      const { data } = await axios.get(pokemon.url)
      const { order, height, weight, abilities }: PokemonDetails = data

      const inputData = {
        ...pokemon,
        details: {
          order,
          height,
          weight,
          abilities,
        },
      }

      const pokemonRepository = new PokemonRepository()
      return pokemonRepository.create(inputData)
    })
  )
}
