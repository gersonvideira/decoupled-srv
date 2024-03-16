import LoadEnv from '@infra/helper/loadEnv';
import ExpressAdapter from '@infra/http/express-adapter';


export class App {
  readonly httpServer = new ExpressAdapter();
  async stop(): Promise<void>{
    this.httpServer.close();
  }
}

const app = new App();
app.httpServer.listen(5000);