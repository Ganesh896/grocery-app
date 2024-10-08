import { Knex } from "knex";

const TABLE_NAME = "order_items";

/**
 * Create table order_items.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(TABLE_NAME, (table) => {
        table.bigIncrements();

        table.bigInteger("order_id").notNullable().references("id").inTable("orders").onDelete("cascade");
        table.bigInteger("item_id").notNullable().references("id").inTable("grocery_items").onDelete("cascade");
        table.bigInteger("quantity").notNullable();
        table.decimal("price", 10, 2).notNullable();

        table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));

        table.bigInteger("created_by").unsigned().nullable().references("id").inTable(TABLE_NAME);

        table.timestamp("updated_at").nullable();

        table.bigInteger("updated_by").unsigned().references("id").inTable(TABLE_NAME).nullable();
    });
}

/**
 * Drop table order_items.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(TABLE_NAME);
}
