import { cva, VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "../../lib/utils";
import { Text } from "../Text";

const buttonVariants = cva(
  "rounded-full w-full h-[3.3em] md:h-[4em] cursor-pointer transition-colors duration-200 ease-in-out",
  {
    variants: {
      variant: {
        filled:
          "bg-primary text-white hover:bg-primary-dark active:bg-secondary ",
        outlined:
          "bg-transparent outline-1 outline-black text-black hover:outline-primary-dark hover:text-primary-dark active:outline-secondary active:text-secondary",
        iconButton: "",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  }
);

export interface ButtonProps
  extends Readonly<
    React.ButtonHTMLAttributes<HTMLButtonElement> &
      VariantProps<typeof buttonVariants>
  > {
  readonly children: React.ReactNode;
  readonly testId?: string;
  readonly textClassName?: string;
}

export function Button({
  children,
  testId,
  className,
  variant = "filled",
  textClassName,
  ...props
}: ButtonProps) {
  return (
    <button
      data-testid={testId}
      className={cn("text-[16px]", buttonVariants({ variant, className }))}
      {...props}
    >
      {variant === "iconButton" ? (
        <span>{children}</span>
      ) : (
        <Text
          as="span"
          className={`leading-none ${textClassName ?? ""}`}
          variant="button"
          textColor={variant === "filled" ? "white" : "black"}
        >
          {children}
        </Text>
      )}
    </button>
  );
}
