import request from 'supertest'
import app from '../../server'
import assert from 'assert'
import { seedDb } from '../setup'

describe('Pokedex', () => {
  let token
  before(async () => {
    await seedDb()

    const { body } = await request(app).post('/auth/login').send()
    token = body.token
  })

  describe('GET /pokemons', () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app)
        .get('/pokemons')
        .set('Authorization', `Bearer ${token}`)

      assert.strictEqual(response.statusCode, 200)
    })

    it('should respond with a list of pokemons', async () => {
      const { body } = await request(app)
        .get('/pokemons')
        .set('Authorization', `Bearer ${token}`)

      assert.strictEqual(Array.isArray(body), true)
    })
  })

  describe('POST /pokemons', () => {
    it('should respond with a 201 status code', async () => {
      const response = await request(app)
        .post('/pokemons')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'Pikachu',
          url: 'https://pokeapi.co/api/v2/pokemon/1337',
          details: {
            height: 40,
          },
        })

      assert.strictEqual(response.statusCode, 201)
    })

    it('should respond with the created pokemon', async () => {
      const { body } = await request(app)
        .post('/pokemons')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'Pikachu',
          url: 'https://pokeapi.co/api/v2/pokemon/1337',
          details: {
            height: 40,
          },
        })

      assert.strictEqual(typeof body, 'object')
    })

    it('should respond a 400 status code with invalid input', async () => {
      const response = await request(app)
        .post('/pokemons')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: null,
          url: 123,
          details: {},
        })

      assert.strictEqual(response.statusCode, 400)
    })
  })

  describe('GET /pokemons/:id', () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app)
        .get('/pokemons/1')
        .set('Authorization', `Bearer ${token}`)

      assert.strictEqual(response.statusCode, 200)
    })

    it('should respond with a pokemon', async () => {
      const { body } = await request(app)
        .get('/pokemons/1')
        .set('Authorization', `Bearer ${token}`)

      assert.strictEqual(typeof body, 'object')
    })

    it('should respond with a 404 status code when getting a non-existent pokemon', async () => {
      const response = await request(app)
        .get('/pokemons/13456')
        .set('Authorization', `Bearer ${token}`)

      assert.strictEqual(response.statusCode, 404)
    })
  })

  describe('PUT /pokemons/:id', () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app)
        .put('/pokemons/1')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'Random Name',
          url: 'https://pokeapi.co/api/v2/pokemon/43345',
          details: {
            height: 64,
          },
        })

      assert.strictEqual(response.statusCode, 200)
    })

    it('should respond with the updated pokemon', async () => {
      const { body } = await request(app)
        .put('/pokemons/1')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'Random Name',
          url: 'https://pokeapi.co/api/v2/pokemon/43345',
          details: {
            height: 64,
          },
        })

      assert.strictEqual(typeof body, 'object')
    })

    it('should respond a 400 status code with invalid input', async () => {
      const response = await request(app)
        .put('/pokemons/1')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: null,
          url: 123,
          details: {},
        })

      assert.strictEqual(response.statusCode, 400)
    })
  })

  describe('DELETE /pokemons/:id', () => {
    it('should respond with a 204 status code', async () => {
      const response = await request(app)
        .delete('/pokemons/1')
        .set('Authorization', `Bearer ${token}`)

      assert.strictEqual(response.statusCode, 204)
    })

    it('should respond with the deleted pokemon', async () => {
      const { body } = await request(app)
        .delete('/pokemons/1')
        .set('Authorization', `Bearer ${token}`)

      assert.strictEqual(typeof body, 'object')
    })

    it('should respond with a 404 status code when deleting a non-existent pokemon', async () => {
      const response = await request(app)
        .delete('/pokemons/13456')
        .set('Authorization', `Bearer ${token}`)

      assert.strictEqual(response.statusCode, 404)
    })
  })
})
