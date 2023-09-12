import Link from "next/link";

import { Button } from "~/components/ui/button";

export default function Page() {
  return (
    <main className="grid grow place-content-center gap-4 text-center">
      <h1 className="text-5xl font-bold leading-tight tracking-tighter">
        Hello World
      </h1>
      <div>
        <Button variant="link" asChild>
          <Link href="/posts">See all posts (@tanstack/react-query)</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="/posts/new">Create a new post (react-hook-form)</Link>
        </Button>
      </div>
    </main>
  );
}
