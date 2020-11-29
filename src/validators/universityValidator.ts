import * as Joi from 'joi'
import { IValidator } from '../protocols/validator'

export class UniversityValidator implements IValidator {
  async validateBody (body: any): Promise<any> {
    const result = await universitySchema.validate({ name: body.name })

    if (result.error) {
      const errors = []
      result.error.details.forEach(function (detail) {
        errors.push({
          key: detail.path[0],
          message: detail.message
        })
      })

      return {
        isValid: false,
        errors
      }
    }
    return {
      isValid: true
    }
  }
}

const universitySchema = Joi.object().keys({
  name: Joi.string().trim().required(),
  fullName: Joi.string().trim().required()
})
