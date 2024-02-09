import { Pool } from 'pg';
import dotenv from 'dotenv';


dotenv.config();


export const pool = new Pool({
    user: 'postgres',
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: 5432,
});

// pool.on('connect', () => {
//     console.log('Connected to PostgreSQL database');
// });


// Handle pool errors
pool.on('error', (error, client) => {
    console.error('Unexpected error on idle client', error);
    process.exit(-1);
});
