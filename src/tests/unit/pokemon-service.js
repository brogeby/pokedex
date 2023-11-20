import { strict as assert } from 'assert'
import sinon from 'sinon'
import {
  getPokemons,
  getPokemon,
  updatePokemon,
  createPokemon,
  deletePokemon,
} from '../../services/pokemons'

import { PokemonRepository } from '../../db/PokemonRepository'
import * as pokedexModule from '../../db/pokedex'

describe('Services', () => {
  let pokemonRepository
  let pokedexStub

  beforeEach(() => {
    pokemonRepository = new PokemonRepository()
    pokedexStub = sinon.stub(pokedexModule, 'pokedex').value([])
    PokemonRepository.latestId = 0
  })

  afterEach(() => {
    sinon.restore()
  })

  it('getPokemons should return an array of Pokemon', async () => {
    const pokemons = await getPokemons()
    assert.deepStrictEqual(pokemons, [])
  })

  it('getPokemon should return a specific Pokemon', async () => {
    const samplePokemon = { id: 1, name: 'Bulbasaur', url: '...' }
    pokedexStub.value([samplePokemon])

    const result = await getPokemon(1)
    assert.deepStrictEqual(result, samplePokemon)
  })

  it('updatePokemon should update a specific Pokemon', async () => {
    const samplePokemon = { id: 1, name: 'Bulbasaur', url: '...' }
    pokedexStub.value([samplePokemon])

    const updatedData = { name: 'Ivysaur' }
    const result = await updatePokemon(1, updatedData)
    assert.deepStrictEqual(result, { id: 1, name: 'Ivysaur', url: '...' })
  })

  it('createPokemon should create a new Pokemon', async () => {
    const newPokemon = { name: 'Charmander', url: '...' }

    const result = await createPokemon(newPokemon)
    assert.deepStrictEqual(result, { id: 1, ...newPokemon })
  })

  it('deletePokemon should delete a specific Pokemon', async () => {
    const samplePokemon = { id: 1, name: 'Bulbasaur', url: '...' }
    pokedexStub.value([samplePokemon])

    await deletePokemon(1)
    const pokemons = await getPokemons()
    assert.deepStrictEqual(pokemons, [])
  })
})
