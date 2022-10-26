/* TODO: AJEITAR BANCO DE DADOS */

import pg from 'pg';

const { Pool } = pg;

const databaseConfig = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Bomb15087751',
    database: 'linkr'
}

const connection = new Pool(databaseConfig);

export default connection;