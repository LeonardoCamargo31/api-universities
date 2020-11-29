
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'
import { UniversityValidator } from '../../validators/universityValidator'
import { IUniversityModel } from '../../model/university'

export class CreateUniversityController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const university: IUniversityModel = { name: httpRequest.body.name }
    const resultValidate = await new UniversityValidator().validateBody(university)

    if (resultValidate.isValid) {
      return new Promise(resolve => resolve({
        statusCode: 200,
        body: { resultValidate }
      }))
    } else {
      return new Promise(resolve => resolve({
        statusCode: 400,
        body: resultValidate.data
      }))
    }
  }
}
