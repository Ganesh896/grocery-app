import { Response, NextFunction } from "express";
import { Request } from "../interface/auth.interface";
import HttpStatusCodes from "http-status-codes";
import { verify } from "jsonwebtoken";

import { ApiError } from "../utils/ApiErrors";
import config from "../config";
import { User } from "../interface/user.interface";
import { PermissionModel } from "../helper/checkPermissions";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
        throw new ApiError(HttpStatusCodes.UNAUTHORIZED, "Access token not found!");
    }

    const token = authorization.split(" ");

    if (token.length !== 2 || token[0] != "Bearer") {
        throw new ApiError(HttpStatusCodes.UNAUTHORIZED, "Invalid access token!");
    }

    try {
        const payload: User = verify(token[1], config.jwt.secret!) as User;

        req.user = payload;
        next();
    } catch (error) {
        throw new ApiError(HttpStatusCodes.UNAUTHORIZED, "Unauthorized!");
    }
}

// middleware to authorize user based on permissions
export function authorize() {
    return async (req: Request, res: Response, next: NextFunction) => {
        const user = req.user!;

        if (!user) {
            next(new ApiError(HttpStatusCodes.FORBIDDEN, "Unauthorized!"));
            return;
        }

        const permission = await PermissionModel.chekPermissions(user.id);

        // check if user has the required permission
        if (permission != "admin") {
            next(new ApiError(HttpStatusCodes.FORBIDDEN, "Permissions required!"));
            return;
        }

        next();
    };
}
