import { Knex } from "knex";

const TABLE_NAME = "grocery_items";

/**
 * Delete existing entries and seed values for table grocery_items.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export function seed(knex: Knex): Promise<void> {
    return knex(TABLE_NAME)
        .del()
        .then(() => {
            return knex(TABLE_NAME).insert([
                {
                    item_name: "Apple",
                    description: "Sweet apple all the way from Jumla, Nepal",
                    price: 250.99,
                    quantity: 5,
                },
                {
                    item_name: "Rice",
                    description: "Long grain rice",
                    price: 210,
                    quantity: 2,
                },
            ]);
        });
}
