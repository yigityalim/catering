import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'mysql',
  schema: './src/lib/db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nextjs_drizzle_orm_mysql2',
  },
});
