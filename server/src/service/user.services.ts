import HttpStatusCodes from "http-status-codes";
import bcrypt from "bcrypt";

import { User } from "../interface/user.interface";
import { UserModel } from "../model/user.model";
import { ApiError } from "../utils/ApiErrors";
import { generateAccessRefreshToken } from "./atuth.services";

// register user
export async function registerUser(user: User) {
    const existingUser = await UserModel.getUserByEmail(user.email);
    if (existingUser) {
        throw new ApiError(HttpStatusCodes.CONFLICT, "User with this email already exist!");
    }

    try {
        const password = await bcrypt.hash(user.password, 12);
        await UserModel.registerUser({ ...user, password: password });

        return { message: "User registered successfully!" };
    } catch (error) {
        if (error.stack) {
            console.log(error.stack);
        }
        throw new ApiError(HttpStatusCodes.INTERNAL_SERVER_ERROR, "User insertion fail!");
    }
}

// login user
export async function loginUser(user: Pick<User, "email" | "password">) {
    const existingUser = await UserModel.getUserByEmail(user.email);

    if (!existingUser) {
        throw new ApiError(HttpStatusCodes.UNAUTHORIZED, "Invalid email or password");
    }

    const isValidPassword = await bcrypt.compare(user.password, existingUser.password);

    if (!isValidPassword) {
        throw new ApiError(HttpStatusCodes.UNAUTHORIZED, "Invalid email or password"); //log message
    }

    const { accessToken, refreshToken } = await generateAccessRefreshToken(existingUser);

    delete existingUser.password;

    return { accessToken, refreshToken, userDetails: existingUser };
}
