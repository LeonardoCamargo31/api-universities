import { IUniversityModel } from '../model/university'

export class CreateUniversity {
  async add (university: IUniversityModel): Promise<IUniversityModel> {
    const universityModel = university
    return new Promise(resolve => resolve(universityModel))
  }
}
