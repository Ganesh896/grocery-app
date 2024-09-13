import { GroceryItem } from "../interface/groceryItem.interface";
import { BaseModel } from "./base.model";

export class GroceryModel extends BaseModel {
    //add item
    static async addItem(item: GroceryItem) {
        await this.queryBuilder().insert(item).table("groceryItems");
    }
}
