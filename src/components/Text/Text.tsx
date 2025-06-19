import { cva, VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "../../lib";

const textVariants = cva("", {
  variants: {
    variant: {
      headingxl: "text-[50px] md:text-[100px] xl:text-[200px] font-bold",
      heading1:
        "text-[2.9em] md:text-[4.2em] lg:text-[4.5em] xl:text-[5em] 2xl:text-[5.5em] font-extrabold",
      heading2:
        "text-[2em] md:text-[2.8125em] lg:text-[3em] xl:text-[3em] 2xl:text-[3em]",
      body: "text-[1.5em] md:text-[1.9em] xl:text-[2em] 2xl:text-[2em] ",
      bodyItalic:
        "text-[1.5em] md:text-[1.9em] xl:text-[2em] 2xl:text-[2em] italic",
      button:
        "text-[1em] md:text-[1.125em] lg:text-[1.25em] xl:text-[2em] 2xl:text-[1.625em] cursor-pointer",

      label1: "text-[1em] md:text-[1.125em]",
      label2:
        "text-[0.5em] md:text-[0.5625em] lg:text-[0.6875em] xl:text-[0.8125em] 2xl:text-[0.875em]",
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
    <div className="text-[16px]">
      <Comp
        className={cn(textVariants({ variant, textColor }), className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </Comp>
    </div>
  );
}
