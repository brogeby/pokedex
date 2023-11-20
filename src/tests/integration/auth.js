import request from 'supertest'
import app from '../../server'
import assert from 'assert'

describe('Authorization', () => {
  describe('Public routes', () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app).post('/auth/login').send({
        user: 'user',
        password: 'password',
      })

      assert(response.statusCode, 200)
    })

    it('should respond with a JWT token', async () => {
      const { body } = await request(app).post('/auth/login').send({
        user: 'user',
        password: 'password',
      })

      assert.strictEqual(typeof body.token, 'string')
    })
  })

  describe('Protected routes', () => {
    it('should respond with 401 when trying to access endpoints without valid auth', async () => {
      const response = await request(app).get('/pokemons')

      assert.strictEqual(response.statusCode, 401)
    })

    it('should respond with 200 when trying to access endpoints with valid auth', async () => {
      const { body } = await request(app).post('/auth/login').send({
        user: 'user',
        password: 'password',
      })

      const response = await request(app)
        .get('/pokemons')
        .set('Authorization', `Bearer ${body.token}`)

      assert.strictEqual(response.statusCode, 200)
    })
  })
})
