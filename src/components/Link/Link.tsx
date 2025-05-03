import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const linkVariants = cva(" cursor-pointer  font-semibold ", {
  variants: {
    decoration: {
      underline: "underline",
      noUnderline: "no-underline",
    },
    variant: {
      default: "text-[1.125em] md:text-[1.5em]",
      large: "text-[2em]",
    },
    textColor: {
      primary: "text-primary hover:text-secondary",
      secondary: "text-secondary hover:text-primary",
      black: "text-black",
      white: "text-white hover:text-secondary",
    },
  },
  defaultVariants: {
    textColor: "primary",
    decoration: "underline",
    variant: "default",
  },
});

export interface LinkProps
  extends Readonly<React.HTMLAttributes<HTMLAnchorElement>>,
    VariantProps<typeof linkVariants> {
  readonly children: React.ReactNode;
  readonly testId?: string;
  readonly className?: string;
}

export function Link({
  textColor,
  className,
  testId,
  children,
  decoration,
  variant,
  ...props
}: LinkProps) {
  return (
    <a
      className={cn(
        linkVariants({ decoration, textColor, variant }),
        className
      )}
      data-testid={testId}
      {...props}
    >
      {children}
    </a>
  );
}
