import { User } from "../interface/user.interface";
import { BaseModel } from "./base.model";

export class UserModel extends BaseModel {
    //user register
    static registerUser(user: User) {
        // const { name, email, password, phone, address } = user;
        const id = crypto.randomUUID();

        const newUser = {
            id,
            ...user,
        };

        return this.queryBuilder().insert(newUser).table("users");
    }

    // get user by email
    static getUserByEmail(email: string) {
        return this.queryBuilder().select("*").table("users").where({ email }).first();
    }
}
