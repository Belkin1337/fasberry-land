import { Typography } from "@/ui/typography"
import Image from "next/image"

export const ScreenItem = ({ 
  title, 
  src 
}: { 
  title: string, 
  src: string 
}) => {
  return (
    <>
      <div className="flex flex-row items-end justify-start p-2 absolute top-0 right-0 left-0 z-10 w-full h-full rounded-xl
        md:group-hover:opacity-100 md:group-hover:bg-black/50 md:group-hover:transition md:group-hover:duration-500 duration-500 transition opacity-0">
        <Typography className="text-lg xl:text-xl 2xl:text-2xl">
          {title}
        </Typography>
      </div>
      <div className="overflow-hidden rounded-xl w-[220px] h-[260px] sm:w-[220px] sm:h-[320px] md:w-[360px] md:h-[410px] lg:w-[440px] lg:h-[350px]">
        <Image
          loading="lazy"
          src={src}
          alt={title}
          fill
          className="rounded-xl"
        />
      </div>
    </>
  )
}