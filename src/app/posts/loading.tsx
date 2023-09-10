import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="container py-6">
      <h1 className="text-5xl font-semibold">Posts</h1>
      <Loader className="mt-6 h-8 w-8 animate-spin" />
    </div>
  );
}
