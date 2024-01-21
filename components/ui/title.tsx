import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const titleVariants = cva(
  "text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
  {
    variants: {
      variant: {
        default: "text-black dark:text-white",
        gold: "text-gold",
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
      "text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center",
      className
    )} {...props} /> )
  }
);
Title.displayName = "Title";