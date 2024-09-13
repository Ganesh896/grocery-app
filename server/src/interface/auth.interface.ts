import { Request as ExpressRequest } from "express";
import { GetQuery } from "./query.interface";
import { User } from "./user.interface";

export interface Request extends ExpressRequest<any, any, any, GetQuery> {
    user?: User;
}
