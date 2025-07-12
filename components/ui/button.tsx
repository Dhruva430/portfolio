import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center mx-auto gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none    ",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        flicker:
          "text-primary-foreground text-gradiant-primary text-sm flex justify-center rounded-full  font-medium shadow-2xl shadow-primary hover:scale-105 transition-transform delay cursor-none bg-gradient-to-r from-primary/50 to-primary",
        secondaryFlicker:
          "flex gap-4 justify-center bg-secondary/90 border-3 border-border font-medium px-8 py-4 text-sm rounded-full hover:scale-105 transition-transform delay cursor-none",
        footer:
          "gap-1 text-sm text-muted-foreground hover:text-primary/80 transition-colors",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-9",
        secondaryXL: "gap-4 px-8 py-[18px] w-50",
        xl: " gap-4 px-8 py-5 w-50",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
