import ky, { type Options } from "ky";

import { env } from "~/constants/env.mjs";

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const api = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL,
});

export async function getPosts(options?: Options) {
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return await api.get("posts", options).json<Post[]>();
}
