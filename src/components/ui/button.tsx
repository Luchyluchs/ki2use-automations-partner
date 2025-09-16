import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-card",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-card",
        accent: "bg-accent text-accent-foreground hover:bg-accent-hover shadow-primary font-semibold",
        outline: "border border-card-border bg-background hover:bg-muted text-foreground shadow-card",
        ghost: "hover:bg-muted text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "gradient-primary text-primary-foreground hover:shadow-primary font-semibold text-base transform hover:scale-105 transition-all duration-200",
        cta: "bg-accent text-accent-foreground hover:bg-accent-hover shadow-primary font-semibold tracking-wide",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    // Guard: asChild requires exactly one valid React element child
    if (asChild) {
      const count = React.Children.count(children);
      const isValid = React.isValidElement(children as React.ReactElement);
      if (count !== 1 || !isValid) {
        console.error('[ui/button] asChild requires exactly one React element child. Falling back to regular button. Received:', children);
        return (
          <button
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref as React.Ref<HTMLButtonElement>}
            {...props}
          >
            {children}
          </button>
        );
      }
    }

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
