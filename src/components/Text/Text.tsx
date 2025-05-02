import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const textVariants = cva(" m-0 p-0 ", {
  variants: {
    variant: {
      heading1: "text-[3.75em] md:text-[5em] font-bold",
      heading2: "text-[2.8125em] md:text-[3.75em] font-bold",
      body: "text-[1.375em] md:text-[1.875em]",
      link: "text-[1.125em] md:text-[1.5em] cursor-pointer",
      label1: "text-[0.75em] md:text-[1em]",
      label2: "text-[0.5625em] md:text-[0.8125em]",
    },
    textColor: {
      secondary: "text-secondary",
      black: "text-black",
      white: "text-white",
    },
  },
  defaultVariants: {
    variant: "body",
    textColor: "secondary",
  },
});

type RequiredVariantProps = Omit<
  VariantProps<typeof textVariants>,
  "variant"
> & {
  variant: NonNullable<VariantProps<typeof textVariants>["variant"]>;
};

export interface TextProps
  extends Readonly<React.HTMLAttributes<HTMLElement>>,
    Readonly<RequiredVariantProps> {
  readonly as?: React.ElementType;
  readonly children: React.ReactNode;
  readonly testId?: string;
}

export function Text({
  as: Comp = "p",
  variant,
  textColor,
  className,
  testId,
  children,
  ...props
}: TextProps) {
  return (
    <Comp
      className={cn(textVariants({ variant, textColor }), className)}
      data-testid={testId}
      {...props}
    >
      {children}
    </Comp>
  );
}
