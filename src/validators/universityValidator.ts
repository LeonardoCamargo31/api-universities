import * as Joi from 'joi'
import { IValidator } from '../protocols/validator'

export class UniversityValidator implements IValidator {
  async validateBody (body: any): Promise<any> {
    const { name, fullName, city, uf } = body
    const result = await universitySchema.validate({ name, fullName, city, uf })

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
  name: Joi.string().max(20).trim().required(),
  fullName: Joi.string().max(100).trim().required(),
  city: Joi.string().max(40).trim().required(),
  uf: Joi.string().min(2).max(2).trim().required()
})
