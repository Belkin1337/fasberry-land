import * as React from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "flex items-center rounded-md px-2 text-xs md:text-base lg:text-md font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-neutral-200 text-black",
        violet: "bg-violet-400 text-black",
        destructive: "bg-neutral-700 text-white",
        outline: "border border-neutral-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeVariantsProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

export const Badge = ({ className, variant, ...props }: BadgeVariantsProps) => {
  return (
    <div className={cn(
      badgeVariants({ variant }), className)}
      {...props}
    />
  )
}