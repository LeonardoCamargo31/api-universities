
import { CreateUniversitiesController } from './create'

interface SutTypes {
  sut: CreateUniversitiesController

}

const makeSut = (): SutTypes => {
  const sut = new CreateUniversitiesController()
  return { sut }
}

describe('Create Universities Controller', () => {
  test('Should return 400 if no name is provided', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      body: {
        full_name: 'any_full_name',
        name: 'any_name',
        ibge: 'any_ibge',
        city: 'any_city',
        uf: 'any_uf',
        zipcode: 'any_zipcode',
        street: 'any_street',
        number: 'any_number',
        neighborhood: 'any_neighborhood',
        phone: 'any_phone'
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(true)
  })
})
