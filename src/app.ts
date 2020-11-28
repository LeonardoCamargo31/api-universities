import express from 'express'
import routes from './routes'

export default class App {
  public app: express.Application
  public port: Number

  constructor () {
    this.app = express()
    this.port = 3000

    this.setupExpress()
    this.setupRoutes()
  }

  get getPort (): Number {
    return this.port
  }

  private setupExpress (): void {
    this.app.set('port', process.env.PORT)
  }

  private setupRoutes (): void {
    this.app.use('/api', routes)
  }

  async listen (): Promise<void> {
    return new Promise((resolve) => {
      this.app.listen(this.port, () => {
        console.log(`App listening on the port ${this.port.toString()}`)
        resolve()
      })
    })
  }
}
