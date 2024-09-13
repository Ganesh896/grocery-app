import { Knex } from "knex";

const TABLE_NAME = "users";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
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
                    id: "thisisuseradminid@1234",
                    name: "Ganesh Saud",
                    role: "admin",
                    email: "ganesh@gmail.com",
                    password: "Ganesh@123",
                    phone: "9898987678",
                    address: "Tikapur, Kailali",
                },
                {
                    id: "thisisuserid@12345",
                    name: "Hary Style",
                    role: "user",
                    email: "harry@gmail.com",
                    password: "Harry@123",
                    phone: "9898987678",
                    address: "New York, USA",
                },
            ]);
        });
}