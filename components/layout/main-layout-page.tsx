import React from "react"
import { Footer } from "./footer"
import { Header } from "./header"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const layoutVariants = cva("min-h-screen", {
  variants: {
    variant: {
      default: "w-[90%] mx-auto py-24 lg:py-36",
      with_section: "w-full"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export interface LayoutVariantsProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof layoutVariants> {
  children: React.ReactNode
}

export const MainLayoutPage = ({ variant, className, children, ...props }: LayoutVariantsProps) => {
  return (
    <>
      <Header />
      <div className={cn(layoutVariants({ variant }))} {...props}>
        {children}
      </div>
      <Footer />
    </>
  )
}