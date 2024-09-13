import { Knex } from "knex";

const TABLE_NAME = "groceryItems";

/**
 * Create table groceryItems.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable(TABLE_NAME, (table) => {
        table.decimal("price", 10, 1).notNullable().alter();
    });
}

/**
 * Drop table groceryItems.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable(TABLE_NAME, (table) => {
        table.decimal("price").notNullable().alter();
    });
}
