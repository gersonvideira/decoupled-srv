import ExpressAdapter from '@infra/http/ExpressAdapter';


export class App {
	readonly httpServer = new ExpressAdapter();
	async stop(): Promise<void>{
		this.httpServer.close();
	}
}

const app = new App();
app.httpServer.listen(6000);