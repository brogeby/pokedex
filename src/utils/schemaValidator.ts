import { ZodError, ZodSchema } from 'zod'

export class ValidationError extends Error {
  constructor(public errors: ZodError) {
    super('Validation failed')
  }
}

export const validateSchema = (schema: ZodSchema, data: unknown) => {
  try {
    return schema.parse(data)
  } catch (error) {
    if (error instanceof ZodError) {
      throw new ValidationError(error)
    } else {
      throw error
    }
  }
}
