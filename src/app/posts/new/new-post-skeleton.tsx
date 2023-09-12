import { Button } from "~/components/ui/button";
import { InputStyles } from "~/components/ui/input";
import { TextareaStyles } from "~/components/ui/textarea";

export function NewPostSkeleton() {
  return (
    <form className="mt-6 space-y-6">
      <div className="space-y-2">
        <p>Title</p>
        <div
          aria-busy
          className={InputStyles({ className: "animate-pulse bg-muted" })}
        />
      </div>
      <div className="space-y-2">
        <p>Body</p>
        <div
          aria-busy
          className={TextareaStyles({ className: "animate-pulse bg-muted" })}
        />
      </div>
      <Button className="gap-2" disabled>
        <span>Create</span>
      </Button>
    </form>
  );
}
