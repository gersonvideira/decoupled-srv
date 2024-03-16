import {type  Request } from 'express';
import { IHttpRequest } from './iHttpRequest';


export default class HttpRquestAdapter implements IHttpRequest {
	constructor(private readonly req: Request){}

	get body(): any {
		return this.req.body;
	}
	get headers(): any{
		return this.req.headers;
	}
	get params(): any {
		return this.req.params;
	}

}
