"use client";

import { useQuery } from "@tanstack/react-query";

import { getPosts } from "~/services/posts";

export function PostList() {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn({ signal }) {
      return getPosts({ signal, cache: "no-cache" });
    },
  });

  if (data?.length === 0) {
    return (
      <div className="grid grow place-content-center">
        <p className="text-center">No posts found.</p>
      </div>
    );
  }

  return (
    <ul className="mt-6 grid justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((post) => (
        <li className="max-w-xs rounded-md border p-6" key={post.id}>
          <h2 className="text-lg font-medium">{post.title}</h2>
          <p className="text-sm text-muted-foreground">{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
