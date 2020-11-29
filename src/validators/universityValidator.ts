import * as Joi from 'joi'
import { IValidator } from '../protocols/validator'
import { extractErrors } from '../utils/extractErrors'

export class UniversityValidator implements IValidator {
  async validateBody (body: any): Promise<any> {
    const result = await universitySchema.validate({ name: body.name })

    if (result.error) {
      return {
        isValid: false,
        data: extractErrors(result.error)
      }
    }
    return {
      isValid: true
    }
  }
}

const universitySchema = Joi.object().keys({
  name: Joi.string().trim().required()
})
