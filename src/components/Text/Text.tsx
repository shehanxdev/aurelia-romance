import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const textVariants = cva("", {
  variants: {
    variant: {
      heading1: "text-[80px] font-bold",
      heading2: "text-[60px] font-bold",
      body: "text-[30px]",
      link: "text-[24px] cursor-pointer",
      label1: "text-[16px]",
      label2: "text-[13px]",
    },
    textColor: {
      black: "text-black",
      white: "text-white",
    },
  },
  defaultVariants: {
    variant: "body",
    textColor: "black",
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
