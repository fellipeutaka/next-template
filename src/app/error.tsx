"use client";

import { useEffect } from "react";

import { Button } from "~/components/ui/button";

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid grow place-content-center gap-4 text-center">
      <h2 className="text-3xl font-bold">Something went wrong!</h2>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
