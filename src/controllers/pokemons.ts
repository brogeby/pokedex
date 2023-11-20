import { Request, Response } from 'express'
import * as pokemonService from '../services/pokemons'
import { pokemonInputSchema, pokemonUpdateSchema } from '../db/pokemonDTO'
import { validateSchema, ValidationError } from '../utils/schemaValidator'

export const getPokemons = async (req: Request, res: Response) => {
  const pokemons = await pokemonService.getPokemons()
  res.json(pokemons)
}

export const getPokemon = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    res.status(400).json({ message: 'Missing pokemon id' })
    return
  }

  try {
    const pokemon = await pokemonService.getPokemon(Number(id))

    res.json(pokemon)
  } catch (error) {
    let errorMessage = 'Internal Server Error'
    if (error instanceof Error) {
      errorMessage = error.message
    }

    res.status(404).json({ message: errorMessage })
  }
}

export const createPokemon = async (req: Request, res: Response) => {
  const inputData = req.body

  try {
    const validatedData = validateSchema(pokemonInputSchema, inputData)

    const createdPokemon = await pokemonService.createPokemon(validatedData)

    res.status(201).json(createdPokemon)
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.errors.issues })
    } else {
      let errorMessage = 'Internal Server Error'
      if (error instanceof Error) {
        errorMessage = error.message
      }

      res.status(404).json({ message: errorMessage })
    }
  }
}

export const updatePokemon = async (req: Request, res: Response) => {
  const { id } = req.params
  const inputData = req.body

  try {
    const validatedData = validateSchema(pokemonUpdateSchema, inputData)

    const updatedPokemon = await pokemonService.updatePokemon(
      Number(id),
      validatedData
    )

    res.status(200).json(updatedPokemon)
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.errors.issues })
    } else {
      let errorMessage = 'Internal Server Error'
      if (error instanceof Error) {
        errorMessage = error.message
      }

      res.status(404).json({ message: errorMessage })
    }
  }
}

export const deletePokemon = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    res.status(400).json({ message: 'Missing pokemon id' })
    return
  }

  try {
    await pokemonService.deletePokemon(Number(id))

    res.status(204).json({ message: `Deleted pokemon ${id}` })
  } catch (error) {
    let errorMessage = 'Internal Server Error'
    if (error instanceof Error) {
      errorMessage = error.message
    }

    res.status(404).json({ message: errorMessage })
  }
}
