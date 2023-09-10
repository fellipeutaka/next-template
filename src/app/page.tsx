import Link from "next/link";

import { Button } from "~/components/ui/button";

export default function Page() {
  return (
    <main className="grid h-full grow place-content-center gap-4 text-center">
      <h1 className="text-5xl font-bold leading-tight tracking-tighter">
        Hello World
      </h1>
      <Button variant="link" asChild>
        <Link href="/posts">See all posts (@tanstack/react-query)</Link>
      </Button>
    </main>
  );
}
