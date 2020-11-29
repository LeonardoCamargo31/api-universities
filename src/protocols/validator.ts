export interface IValidator{
  validateBody (body: any): Promise<any>
}
