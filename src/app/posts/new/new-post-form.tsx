"use client";

import { Loader } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Form, useForm } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { useToast } from "~/components/ui/toast";
import { createNewPost, createPostSchema } from "~/services/posts";

export function NewPostForm() {
  const form = useForm({
    schema: createPostSchema,
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const { toast } = useToast();

  const handleCreateNewPost = form.handleSubmit(async ({ title, body }) => {
    try {
      await createNewPost({ title, body });

      toast({
        title: "Post created",
        description: (
          <pre className="mt-4">
            <code>{JSON.stringify({ title, body }, null, 2)}</code>
          </pre>
        ),
      });

      form.reset();
    } catch (err) {
      console.error(err);

      toast({
        title: "Error",
        description: "Something went wrong",
      });
    }
  });

  return (
    <Form.Root {...form}>
      <form className="mt-6 space-y-6" onSubmit={handleCreateNewPost}>
        <Form.Field
          control={form.control}
          name="title"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Title</Form.Label>
              <Form.Control>
                <Input placeholder="How to use react-hook-form" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="body"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Body</Form.Label>
              <Form.Control>
                <Textarea placeholder="Your post content" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Button className="gap-2" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && (
            <Loader className="h-4 w-4 animate-spin" />
          )}
          <span>Create</span>
        </Button>
      </form>
    </Form.Root>
  );
}
