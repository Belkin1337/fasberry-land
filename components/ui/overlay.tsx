import { cva } from "class-variance-authority";
import { VariantProps } from "class-variance-authority";

const overlayVariants = cva("absolute right-0 left-0 bg-gradient-to-r from-black to-transparent min-h-screen bg-opacity-100", {
  variants: {
    variant: {
      default: "to-40%",
      over: "to-90%",
      mini: "to-20%"
    },
    defaultVariants: {
      variant: "default"
    }
  }
})

export interface OverlayVariantsProps
  extends React.HTMLAttributes<HTMLVideoElement>,
  VariantProps<typeof overlayVariants> { }

export const Overlay = ({ className, variant, ...props }: OverlayVariantsProps) => {
  return (
    <div className={overlayVariants({ className, variant })} />
  )
}