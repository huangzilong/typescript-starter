import http from "http"
import { getIp } from "../utils/ip"

export default class App {

  constructor(port: number) {
    this.port = port
  }

  port = 8080

  run() {
    http.createServer((req, res) =>  {
      res.writeHead(200, {"Content-Type": "text/plain"})
      res.end("Hello World! \n")
    }).listen(this.port)
    console.log(`your sever is running on: \n  http://127.0.0.1:${this.port} \n  http://${getIp()}:${this.port}`)
  }
}