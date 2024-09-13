import { Response } from "express";
import { Request } from "../interface/auth.interface";
import HttpStatusCodes from "http-status-codes";

import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/response";
import * as userService from "../service/user.services";

// register user
export const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const user = req.body;
    const message = await userService.registerUser(user);

    res.status(HttpStatusCodes.OK).json(new ApiResponse(HttpStatusCodes.OK, message));
});

// login user
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);
    const data = await userService.loginUser(user);
    console.log(data);
    res.status(HttpStatusCodes.OK).json(new ApiResponse(HttpStatusCodes.OK, data));
});
