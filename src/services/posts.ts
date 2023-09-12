import ky, { type Options } from "ky";
import { z } from "zod";

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
  return await api.get("posts", options).json<Post[]>();
}

export const createPostSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
});

export async function createNewPost(data: OmitKeys<Post, "id" | "userId">) {
  console.log(data);
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
}
