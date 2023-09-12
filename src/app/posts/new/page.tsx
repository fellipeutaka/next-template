import { NewPostForm } from "./new-post-form";

export const metadata = {
  title: "New post",
};

export default function Page() {
  return (
    <main className="container grow py-6">
      <h1 className="text-5xl font-semibold">New Post</h1>
      <NewPostForm />
    </main>
  );
}
