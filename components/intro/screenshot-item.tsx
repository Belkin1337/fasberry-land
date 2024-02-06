import Image from "next/image"
import { Dialog, DialogTrigger, DialogContent } from "@/ui/dialog"

interface ScreenshotItemProps {
  title: string,
  description?: string,
  createdDate: string,
  image: string,
}

export const ScreenshotItem = ({ title, description, createdDate, image }: ScreenshotItemProps) => {
  const screenItem = (
    <div className="flex flex-col overflow-hidden justify-between grad-first-purple">
      <Image
        src={image}
        alt={title}
        width={540}
        height={420}
        className="cursor-pointer object-cover hover:brightness-75 transition ease-in-out duration-300"
      />
      <span className="text-left text-2xl p-2 text-md text-white transition ease-out duration-300">
        {title}
      </span>
      <div className="flex flex-row px-2 gap-x-1 mt-auto justify-end items-center">
        <Image
          layout="responsive"
          loading="lazy"
          src="/images/steve_looking.webp"
          width={20}
          height={20}
          alt={title}
        />
      </div>
    </div>
  )

  return (
    <Dialog>
      <DialogTrigger>
        {screenItem}
      </DialogTrigger>
      <DialogContent className="bg-neutral-900 outline-none p-4 rounded-none border border-project-color">
        <div className="flex flex-col">
          <Image
            src={image}
            alt={title}
            width={1280}
            height={720}
          />
          <span className="text-2xl py-2 text-md text-white transition ease-out duration-300">
            {title}
          </span>
          <div className="flex flex-row px-2 gap-x-1 mt-auto justify-end items-center">
            <Image
              layout="responsive"
              loading="lazy"
              src="/images/steve_looking.webp"
              width={20}
              height={20}
              alt={title}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}