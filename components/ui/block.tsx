import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const blockVariants = cva("flex bg-black/80 dark:bg-black",
  {
    variants: {
      type: {
        row: "flex-row",
        column: "flex-col"
      },
      border: {
        none: "border-none",
        mini_gray: "border-[1px] border-neutral-700",
        normal_gray: "border-[2px] border-neutral-700",
        big_gray: "border-[4px] border-neutral-700"
      },
      size: {
        none: "p-0",
        micro: "p-1",
        mini: "p-2",
        normal: "p-4",
        big: "p-6"
      },
      rounded: {
        none: "rounded-none",
        normal: "rounded-md",
        big: "rounded-xl",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      border: "none",
      size: "normal",
      type: "row",
      rounded: "none",
    }
  }
)


export interface BlockVariantsProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof blockVariants> {
    blockItem?: boolean
   }

export const Block = ({ 
  className, 
  border,
  children, 
  size,
  rounded, 
  blockItem,
  type, 
  ...props 
}: BlockVariantsProps) => {
  return (
    <div className={`${blockItem ? 'block-item p-1 rounded-xl' : ''} w-full`}>
      <div className={cn(blockVariants({ 
        className, 
        rounded, 
        border,
        type, 
        size
      }))}
        {...props}>
        {children}
      </div>
    </div>
  )
}


