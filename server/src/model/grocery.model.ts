import { GroceryItem } from "../interface/groceryItem.interface";
import { BaseModel } from "./base.model";

export class GroceryModel extends BaseModel {
    //add item
    static addItem(item: GroceryItem) {
        return this.queryBuilder().insert(item).table("groceryItems");
    }

    //get items
    static async getAllItems() {
        this.queryBuilder().select("*").table("groceryItems");
    }

    // update item
    static updateItem(id: string, item: GroceryItem) {
        // const { title, categoryId, paymentMethod, amount, groupId } = item;
        // const expenseToUpdate = {
        //     title,
        //     categoryId,
        //     paymentMethod,
        //     amount,
        //     groupId,
        // };

        return this.queryBuilder().update(item).table("groceryItems").where({ id });
    }

    // delete item
    static deleteItem(id: string) {
        return this.queryBuilder().delete().table("groceryItems").where({ id });
    }
}
