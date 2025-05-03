import React from "react";

import { cn } from "../../lib";

export interface LinkProps
  extends Readonly<React.HTMLAttributes<HTMLAnchorElement>> {
  readonly children: React.ReactNode;
  readonly testId?: string;
  readonly className?: string;
}

export function Link({ className, testId, children, ...props }: LinkProps) {
  return (
    <a
      className={cn(
        "underline cursor-pointer flex font-bold text-primary-dark hover:text-primary transition-colors duration-100 ease-in-out",
        className
      )}
      data-testid={testId}
      {...props}
    >
      {children}
    </a>
  );
}
