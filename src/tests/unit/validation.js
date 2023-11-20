const assert = require('assert')
const { z } = require('zod')
const {
  validateSchema,
  ValidationError,
} = require('../../utils/schemaValidator') // Replace with the actual module path

describe('Utils', () => {
  describe('validateSchema', () => {
    const schema = z.object({
      name: z.string(),
      age: z.number(),
    })

    it('should return the parsed data when validation passes', () => {
      const validData = { name: 'Ash Ketchum', age: 10 }
      const result = validateSchema(schema, validData)
      assert.deepStrictEqual(result, validData)
    })

    it('should throw a ValidationError when validation fails', () => {
      const invalidData = { name: 'Ash Ketchum', age: 'not a number' }
      assert.throws(() => validateSchema(schema, invalidData), ValidationError)
    })
  })
})
