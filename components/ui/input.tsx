import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 focus-visible:border-none px-2 py-4 ring-offset-background  placeholder:text-neutral-600 dark:placeholder:text-neutral-400 outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fabbfb] focus:duration-300 focus-visible:duration-300 duration-300 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
