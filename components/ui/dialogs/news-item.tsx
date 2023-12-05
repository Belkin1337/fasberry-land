import { Dialog, DialogContent } from "../dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import Image from "next/image"

interface NewsItemProps {
  title: string,
  description: string,
  createdDate: string,
  image: string,
  onClick?: () => void
}

export const NewsItem = ({ title, description, createdDate, image }: NewsItemProps) => {
  const newsElement = (
    <div className="flex flex-col grad-first-teal w-full h-[426px] max-h-[600px] overflow-hidden cursor-pointer">
      <div className="flex flex-col relative h-[256px] overflow-hidden">
        <Image src={image} height={1200} alt={title} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-neutral-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div>
      </div>
      <div className="flex flex-col px-3 py-2">
        <h1 className={`text-left text-xl md:text-2xl text-project-color text-shadow-xl`}>{title}</h1>
        <p className={`text-left text-sm md:text-base xl:text-lg `}>{description}</p>
      </div>
      <div className="flex flex-row px-2 mt-auto justify-end gap-x-4 items-center">
        <div className="flex flex-row">
          <Image src="/images/steve_looking.webp" width={20} height={20} alt={title} />
        </div>
        <div className="flex flex-row items-center justify-between py-2">
          <Image src="/images/minecraft/icons/clock_bossbar_big.webp" width={20} height={20} alt={createdDate} />
          <span className='pl-1 text-gray text-sm md:text-base'>{createdDate}</span>
        </div>
      </div>
    </div>
  )

  return (
    <Dialog>
      <DialogTrigger>
        {newsElement}
      </DialogTrigger>
      <DialogContent className="bg-neutral-900 outline-none p-4 rounded-none border border-project-color">
        <div className="flex flex-row w-full overflow-hidden cursor-pointer">
          <div className="flex flex-col px-2 lg:px-4 py-2 w-full gap-y-6 justify-between">
            <div className="flex flex-col gap-y-2 lg:gap-y-6">
              <h1 className={`text-2xl md:text-3xl text-project-color text-shadow-xl`}>{title}</h1>
              <p className={`text-base xl:text-lg font-normal`}>{description}</p>
            </div>
            <div className="flex flex-row justify-end items-center gap-x-4">
              <div className="flex flex-row">
                <Image src="/images/steve_looking.webp" width={20} height={20} alt={title} />
              </div>
              <div className="flex flex-row items-center justify-between gap-x-1">
                <Image src="/images/minecraft/icons/clock_bossbar_big.webp" width={20} height={20} alt={createdDate} />
                <span className='text-neutral-400 text-sm md:text-base'>{createdDate}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}