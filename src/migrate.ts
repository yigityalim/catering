import 'dotenv/config';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { db, connection } from './lib/db';

await migrate(db, { migrationsFolder: './drizzle' });
await connection.end();
