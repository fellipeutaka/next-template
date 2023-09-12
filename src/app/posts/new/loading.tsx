import { NewPostSkeleton } from "./new-post-skeleton";

export default function Page() {
  return (
    <main className="container grow py-6">
      <h1 className="text-5xl font-semibold">New Post</h1>
      <NewPostSkeleton />
    </main>
  );
}
