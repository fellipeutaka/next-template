/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "lucide-react";
import { z } from "zod";

import { Button } from "./button";
import { Form, useForm } from "./form";
import { Input } from "./input";
import { useToast } from "./toast";

const meta = {
  title: "Components/Form",
  render: () => {
    const form = useForm({
      schema: z.object({
        name: z.string().min(3).max(10),
        email: z.string().email(),
      }),
      defaultValues: {
        name: "",
        email: "",
      },
    });

    const { toast } = useToast();

    const onSubmit = form.handleSubmit(async ({ name, email }) => {
      await new Promise((resolve) => setTimeout(resolve, 4000));

      toast({
        title: "Success",
        description: (
          <pre>
            <code>{JSON.stringify({ name, email }, null, 2)}</code>
          </pre>
        ),
      });
    });

    return (
      <Form.Root {...form}>
        <form className="space-y-6" onSubmit={onSubmit}>
          <Form.Field
            control={form.control}
            name="name"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Name</Form.Label>
                <Form.Control>
                  <Input placeholder="Your name" {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="email"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>E-mail</Form.Label>
                <Form.Control>
                  <Input placeholder="Your e-mail" {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Button className="gap-2" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting && (
              <Loader className="h-4 w-4 animate-spin" />
            )}
            <span>Submit</span>
          </Button>
        </form>
      </Form.Root>
    );
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
