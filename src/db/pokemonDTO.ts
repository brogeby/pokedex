import { z } from 'zod'

export const pokemonDetailsSchema = z
  .object({
    height: z.number(),
    order: z.number().optional(),
    weight: z.number().optional(),
    abilities: z.array(z.any()).optional(),
  })
  .strict()

export const pokemonSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    url: z.string(),
    details: pokemonDetailsSchema,
  })
  .strict()

export const pokemonInputSchema = pokemonSchema.omit({ id: true })
export const pokemonUpdateSchema = pokemonInputSchema.partial()

export type PokemonDetails = z.infer<typeof pokemonDetailsSchema>
export type Pokemon = z.infer<typeof pokemonSchema>
export type PokemonInput = z.infer<typeof pokemonInputSchema>
export type PokemonUpdateInput = z.infer<typeof pokemonUpdateSchema>
