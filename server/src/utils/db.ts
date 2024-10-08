import knex, { Knex } from "knex";
import { baseKnexConfig } from "../knexConfig";
import toSnakeCase from "to-snake-case";
import camelize from "camelize";

const knexConfig: Knex.Config = {
    ...baseKnexConfig,

    wrapIdentifier: (value, originalImpl) => {
        if (value === "*") {
            return originalImpl(value);
        }

        return originalImpl(toSnakeCase(value));
    },

    postProcessResponse: (result) => {
        return camelize(result);
    },
};

export default knex(knexConfig);