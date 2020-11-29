
import { CreateUniversityController } from './createUniversity'

interface SutTypes {
  sut: CreateUniversityController
}

const makeSut = (): SutTypes => {
  const sut = new CreateUniversityController()
  return { sut }
}

describe('Create Universities Controller', () => {
  test('Should return 400 if no name is provided', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      body: {}
    }

    const { statusCode, body } = await sut.handle(httpRequest)
    expect(statusCode).toEqual(400)
    expect(body.errors[0].key).toEqual('name')
    expect(body.errors[0].message).toEqual('"name" is required')
  })

  test('Should return 400 if no fullName is provided', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      body: { name: 'any_name' }
    }

    const { statusCode, body } = await sut.handle(httpRequest)
    expect(statusCode).toEqual(400)
    expect(body.errors[0].key).toEqual('fullName')
    expect(body.errors[0].message).toEqual('"fullName" is required')
  })

  test('Should return 400 if no city is provided', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      body: {
        name: 'any_name',
        fullName: 'any_fullName'
      }
    }

    const { statusCode, body } = await sut.handle(httpRequest)
    expect(statusCode).toEqual(400)
    expect(body.errors[0].key).toEqual('city')
    expect(body.errors[0].message).toEqual('"city" is required')
  })

  test('Should return 400 if no uf is provided', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      body: {
        name: 'any_name',
        fullName: 'any_fullName',
        city: 'any_city'
      }
    }

    const { statusCode, body } = await sut.handle(httpRequest)
    expect(statusCode).toEqual(400)
    expect(body.errors[0].key).toEqual('uf')
    expect(body.errors[0].message).toEqual('"uf" is required')
  })

  test('Should return 200 if valid data is provided', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      body: {
        name: 'any_name',
        fullName: 'any_fullName',
        city: 'any_city',
        uf: 'uf'
      }
    }

    const { statusCode } = await sut.handle(httpRequest)
    expect(statusCode).toEqual(200)
  })
})
