'use server';

import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { and, eq } from 'drizzle-orm';

export async function signInAction(data: FormData) {
  const user = db
    .select()
    .from(users)
    .where(and(eq(users.email, data.get('email')), eq(users.password, data.get('password')));

  if (user) {
    return { status: 200, data: user };
  }
}
