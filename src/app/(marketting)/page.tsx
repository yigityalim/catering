import { signIn } from '@/lib/auth';
import { db } from '@/lib/db';
import { users as usersTable } from '@/lib/db/schema';
import Link from 'next/link';
import React from 'react';

export default async function MarkettingPage() {
  const users = await db.select().from(usersTable);
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-8">
      <h1 className="text-4xl font-semibold text-primary">Marketting page</h1>
      <Link
        href="/dashboard"
        className="cursor-pointer text-lg text-primary underline underline-offset-4 hover:text-foreground"
      >
        Dashboard
      </Link>
      <form
        action={async () => {
          'use server';
          await signIn();
        }}
      >
        <button type="submit">Sign in</button>
      </form>
      <pre>
        <code>{JSON.stringify(users, null, 2)}</code>
      </pre>
    </div>
  );
}
