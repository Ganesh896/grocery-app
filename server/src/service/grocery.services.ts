import { GroceryItem } from "../interface/groceryItem.interface";
import { GroceryModel } from "../model/grocery.model";

// add a new Item, only allowed for users with "admin" role
export function addItem(item: GroceryItem) {
    GroceryModel.addItem(item);

    return { message: "Item added successfully!" };
}
