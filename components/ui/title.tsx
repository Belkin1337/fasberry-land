import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const titleVariants = cva(
  "text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl underline underline-offset-8",
  {
    variants: {
      variant: {
        default: "text-white",
        blue: "text-blue",
        yellow: "text-yellow",
        teal: "text-teal-600",
        project: "text-[#00cdb]"
      },
    },
    defaultVariants: {
      variant: "default"
    },
  }
)

interface TitleProps extends React.HTMLAttributes<HTMLElement>, 
  VariantProps<typeof titleVariants> { }

export const Title = React.forwardRef<HTMLInputElement, TitleProps>(
  ({ className, ...props }, ref) => {
    return ( 
    <h1  className={cn(
      "text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl underline underline-offset-8 text-center",
      className
    )} {...props} /> )
  }
);
Title.displayName = "Title";