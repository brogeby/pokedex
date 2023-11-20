import { pokedex } from './pokedex'
import { Pokemon } from './pokemonDTO'

export class PokemonRepository {
  private static latestId: number = 0

  findAll() {
    return pokedex
  }

  findById(id: number): Pokemon {
    const pokemon = pokedex.find((pokemon) => pokemon.id === id)

    if (!pokemon) {
      throw new Error(`Pokemon with id ${id} not found.`)
    }

    return pokemon
  }

  create(inputData: any): Pokemon {
    PokemonRepository.latestId++
    const newPokemon = { ...inputData, id: PokemonRepository.latestId }

    pokedex.push(newPokemon)

    return newPokemon
  }

  update(id: number, inputData: any): Pokemon {
    const pokemonIndex = pokedex.findIndex((pokemon) => pokemon.id === id)

    if (pokemonIndex !== -1) {
      pokedex[pokemonIndex] = {
        ...pokedex[pokemonIndex],
        ...inputData,
      }
    } else {
      throw new Error(`Pokemon with id ${id} not found.`)
    }

    return pokedex[pokemonIndex]
  }

  delete(id: number): void {
    const pokemonIndex = pokedex.findIndex((pokemon) => pokemon.id === id)

    if (pokemonIndex !== -1) {
      pokedex.splice(pokemonIndex, 1)
    } else {
      throw new Error(`Pokemon with id ${id} not found.`)
    }
  }
}
