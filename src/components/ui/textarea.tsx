import { forwardRef } from "react";

import { tv } from "tailwind-variants";

export const TextareaStyles = tv({
  base: "flex min-h-[5rem] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
});

export const Textarea = forwardRef<
  React.ComponentRef<"textarea">,
  React.ComponentProps<"textarea">
>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea className={TextareaStyles({ className })} ref={ref} {...props} />
  );
});
