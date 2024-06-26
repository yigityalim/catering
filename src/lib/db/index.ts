import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'nextjs_drizzle_orm_mysql2',
});

const db = drizzle(connection);

export * from './schema';
export { connection, db };
