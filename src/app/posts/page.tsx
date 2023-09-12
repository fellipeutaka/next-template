import Link from "next/link";

import { Button } from "~/components/ui/button";

import { PostList } from "./post-list";

export const metadata = {
  title: "Posts",
};

export default function Page() {
  return (
    <main className="container flex grow flex-col py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-semibold">Posts</h1>
        <Button asChild>
          <Link href="/posts/new">Create a new post</Link>
        </Button>
      </div>
      <PostList />
    </main>
  );
}
