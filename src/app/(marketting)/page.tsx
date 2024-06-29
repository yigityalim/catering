import Link from 'next/link';

export const revalidate = false;

export default async function MarkettingPage() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-8">
      <h1 className="text-4xl font-semibold text-primary">Marketting page</h1>
      <Link
        href="/dashboard"
        className="cursor-pointer text-lg text-primary underline underline-offset-4 hover:text-foreground"
      >
        Dashboard {Math.random()}
      </Link>
    </div>
  );
}
