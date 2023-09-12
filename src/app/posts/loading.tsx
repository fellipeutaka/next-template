import { Loader } from "lucide-react";

import { Button } from "~/components/ui/button";

export default function Loading() {
  return (
    <div className="container flex grow flex-col py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-semibold">Posts</h1>
        <Button disabled>Create a new post</Button>
      </div>
      <div className="grid grow place-content-center">
        <Loader className="h-8 w-8 animate-spin" />
      </div>
    </div>
  );
}
