
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

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toEqual(400)
    expect(httpResponse.body.errorFields).toEqual(['name'])
    expect(httpResponse.body.errorDetail).toEqual({ name: ['any.required'] })
  })
})
