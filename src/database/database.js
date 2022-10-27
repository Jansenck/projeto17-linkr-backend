import pg from 'pg';

const { Pool } = pg;

const databaseConfig = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'linkr'
}

const connection = new Pool(databaseConfig);

export default connection;

//Usar a versão original do github. AMBIENTE de TESTE na MÀQUINA