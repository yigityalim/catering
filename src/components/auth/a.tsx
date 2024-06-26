'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ProvidersButton } from '@/components/login-providers-button';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { and, eq } from 'drizzle-orm';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().email({ message: 'Eposta adresi geçerli bir eposta adresi olmalıdır.' }),
  password: z.string().min(8, { message: 'Şifre en az 8 karakter olmalıdır.' }),
});

export function SignInView() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const user = db
      .select()
      .from(users)
      .where(and(eq(users.email, values.email), eq(users.password, values.password)));

    console.log(user);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4 p-5 md:p-3">
        <h1 className="text-start text-4xl font-black">Giriş Yap</h1>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Eposta</FormLabel>
              <FormControl>
                <Input placeholder="test@mail.com" className="placeholder:font-bold" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          font-bold
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-between font-bold">
                Şifreniz
                <Link
                  href="#"
                  className="font-bold text-muted-foreground underline focus:outline-none"
                >
                  Şifrenizi mi unuttunuz?
                </Link>
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="şifre"
                  className="placeholder:font-bold"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-bold">
          Giriş yap
        </Button>
        <ProvidersButton providers={['google', 'github']} />

        <Link
          href="/auth/signup"
          className="my-4 inline-flex w-full items-center justify-end text-sm font-bold text-muted-foreground underline focus:outline-none"
        >
          Hesabınız yok mu? Kayıt olun
        </Link>
      </form>
    </Form>
  );
}
