import 'express-async-errors';
import express, {type Request, type Response, type NextFunction} from 'express';
import { type IHttpServer } from './iHttpServer';
import cors from 'cors';
import {json , urlencoded} from 'body-parser';


export default class ExpressApter implements IHttpServer {
	app: any;
	constructor(){
		this.app = express();
		this.app.use(cors());
		this.app.use(json(),urlencoded({extended:true}));
	}
	on(method: string, url:string, callback:(req:Request, res:Response, next:NextFunction) => void){
		this.app[method](url, async(req:Request, res:Response, next:NextFunction) => {
			try {
				const output  = await callback(req,res,next);
				res.json(output);
			} catch (error: any) {
				next(error);
			}
		});
	}

	listen(port: number) {
		this.app.listen(port);
		console.log(`Server running at port ${port}`);
	}

	close():void {
		const server = this.app.listen();
		server.close();
	}
}
