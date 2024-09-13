import { BaseModel } from "../model/base.model";

//get users
export class PermissionModel extends BaseModel {
    static async chekPermissions(userId: string) {
        const query = await this.queryBuilder().select("role").from("users").where("id", userId).first();

        return query;
    }
}
