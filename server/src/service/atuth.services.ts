import { sign } from "jsonwebtoken";
import config from "../config";
import { User } from "../interface/user.interface";

export async function generateAccessRefreshToken(user: User) {
    const payload = {
        id: user.id,
        name: user.name,
        role: user.role,
        email: user.email,
        phone: user.phone,
        address: user.address,
    };

    // access token with a specific expiry time
    const accessToken = await sign(payload, config.jwt.secret!, {
        expiresIn: config.jwt.accessTokenExpiryMS,
    });

    // access token with a specific expiry time
    const refreshToken = await sign(payload, config.jwt.secret!, {
        expiresIn: config.jwt.refreshTokenExpiryMS,
    });

    return { accessToken, refreshToken };
}
