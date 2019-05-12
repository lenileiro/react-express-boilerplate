import { app } from './app'
import supertest from 'supertest'

describe('app', () => {
  let request: supertest.SuperTest<supertest.Test>

  beforeEach(() => {
    request = supertest(app)
  })

  it('should return a successful response for GET /', done => {
    request.get('/').expect(200, done)
  })
})
