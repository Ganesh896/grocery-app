import HttpStatusCodes from "http-status-codes";

import { GroceryItem } from "../interface/groceryItem.interface";
import { GroceryModel } from "../model/grocery.model";
import { ApiError } from "../utils/ApiErrors";

// add a new Item, only allowed for users with "admin" role
export async function addItem(item: GroceryItem) {
    await GroceryModel.addItem(item);

    return { message: "Item added successfully!" };
}

// add a new Item, only allowed for users with "admin" role
export function getAllItems() {
    return GroceryModel.getAllItems();
}

// update expense
export async function updateItem(itemId: string, item: GroceryItem) {
    try {
        await GroceryModel.updateItem(itemId, item);

        return { message: "Item update Successfully!" };
    } catch (error) {
        throw new ApiError(HttpStatusCodes.INTERNAL_SERVER_ERROR, "Insertion fail!");
    }
}

// delete item
export async function deleteItem(itemId: string) {
    try {
        await GroceryModel.deleteItem(itemId);

        return { message: "item deleted successfully" };
    } catch (error) {
        throw new ApiError(HttpStatusCodes.INTERNAL_SERVER_ERROR, "Deletion fail!");
    }
}
