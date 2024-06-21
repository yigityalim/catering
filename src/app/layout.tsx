import { ThemeProvider } from '@/components/providers';
import { GeistMono, GeistSans } from '@/lib/fonts';
import { generateStaticMetadata } from '@/lib/metadata';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { PropsWithChildren } from '@/types';

export const metadata = generateStaticMetadata({
  title: {
    default: 'Root layout',
    template: '%s | Catering APP',
  },
  description: 'Catering APP is a web application for managing catering orders.',
  keywords: ['catering', 'app', 'orders', 'management'],
});

export default async function RootLayout({
  children,
}: PropsWithChildren): Promise<React.ReactElement> {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen w-dvw overflow-x-hidden bg-background antialiased',
          GeistSans.className,
          GeistMono.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="theme"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
