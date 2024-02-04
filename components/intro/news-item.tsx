import { Typography } from "../ui/typography"
import Image from "next/image"

interface NewsItemProps {
  image: string,
  title: string,
  body: string,
  date: string
}

export const NewsItem = ({ image, title, body, date }: NewsItemProps) => {
  return (
    <>
      <div className="h-[220px] sm:h-[360px] md:h-[420px] xl:w-2/3 xl:h-6/7 w-full overflow-hidden">
        <Image
          loading="lazy"
          width={1024}
          height={220}
          src={image}
          className="rounded-xl object-cover w-full h-full"
          alt="News"
        />
      </div>
      <div className="flex flex-col justify-between w-full xl:w-3/4 py-4">
        <div className="flex flex-col gap-y-4">
          <Typography className="!text-project-color shadow-black text-shadow-xs text-xl lg:text-3xl">
            {title}
          </Typography>
          <Typography className="text-black dark:text-white text-md lg:text-xl">
            {body}
          </Typography>
        </div>
        <Typography className="text-black dark:text-white text-sm self-end lg:text-base">
          {date}
        </Typography>
      </div>
    </>
  )
}