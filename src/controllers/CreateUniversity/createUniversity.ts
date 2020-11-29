
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'
import { UniversityValidator } from '../../validators/universityValidator'
import { IUniversityModel } from '../../model/university'

export class CreateUniversityController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const university: IUniversityModel = {
      name: httpRequest.body.name,
      fullName: httpRequest.body.fullName,
      city: httpRequest.body.city,
      uf: httpRequest.body.uf
    }

    const resultValidate = await new UniversityValidator().validateBody(university)
    if (resultValidate.isValid) {
      return {
        statusCode: 200,
        body: { }
      }
    } else {
      return {
        statusCode: 400,
        body: { errors: resultValidate.errors }
      }
    }
  }
}
