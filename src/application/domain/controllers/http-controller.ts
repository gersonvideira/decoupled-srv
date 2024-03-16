import { IHttpServer } from "@infra/http/iServer/src/infra/http/iHttpServer";


export default class HttpController {
  constructor(private readonly  httpServer: IHttpServer){
    httpServer.on('get','/', async(req,res,next) => {
      res.send('Hello World')
    })
  }
}