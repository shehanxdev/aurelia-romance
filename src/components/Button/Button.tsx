import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "./../../lib/utils";
import { Text } from "../Text";

const buttonVariants = cva(
  "rounded-full w-full h-[2.25em] md:h-[3em] hover:bg-primary-dark active:bg-secondary cursor-pointer transition-colors duration-200 ease-in-out  ",
  {
    variants: {
      variant: {
        filled: "bg-primary text-white",
        outlined: "bg-transparent",
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
}

export function Button({
  children,
  testId,
  className,
  variant = "filled",

  ...props
}: ButtonProps) {
  return (
    <div className="text-[16px]">
      <button
        data-testid={testId}
        className={cn(buttonVariants({ variant, className }))}
        {...props}
      >
        {/* Note: leading none and contents were used to correct centering
        is most probably caused by line height */}
        <Text
          className="leading-none contents"
          variant="button"
          textColor="white"
        >
          {children}
        </Text>
      </button>
    </div>
  );
}
