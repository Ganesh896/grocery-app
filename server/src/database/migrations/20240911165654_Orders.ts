import { Knex } from "knex";

const TABLE_NAME = "orders";

/**
 * Create table orders.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(TABLE_NAME, (table) => {
        table.bigIncrements();

        table.string("user_id").notNullable().references("id").inTable("users").onDelete("cascade");
        table.timestamp("order_date").notNullable().defaultTo(knex.raw("now()"));
        table.bigInteger("total_amount").notNullable();
        table.enu("status", ["pending", "completed", "canceled"]).notNullable().defaultTo("pending");

        table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));

        table.bigInteger("created_by").unsigned().nullable().references("id").inTable(TABLE_NAME);

        table.timestamp("updated_at").nullable();

        table.bigInteger("updated_by").unsigned().references("id").inTable(TABLE_NAME).nullable();
    });
}

/**
 * Drop table orders.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(TABLE_NAME);
}
