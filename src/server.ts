
import App from './app'

const app = new App()

const server = app.listen().then(() => {
  console.log(
    `Application is running at http://localhost:${app.getPort}`
  )
})

export default server
