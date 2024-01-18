import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { DialogClose } from "@radix-ui/react-dialog"
import { Zoom, toast } from "react-toastify"
import Image from "next/image"

export const JoinServer = () => {
  const toast_custom_id = "alert_duplicate_toast";

  const actionCopyboard = () => {
    navigator.clipboard.writeText('play.fasberry.ru')

    toast.success('IP успешно скопирован!', {
      toastId: toast_custom_id,
      className: "bg-black text-white text-[0.9rem]",
      autoClose: 1900,
      role: "alert",
      position: toast.POSITION.TOP_RIGHT,
      transition: Zoom,
      icon: ({ theme, type }) =>
        <Image
          width={40}
          height={40}
          alt="Toast Pic"
          loading="lazy"
          src="/images/minecraft/icons/book_big.webp"
        />,
    })
  }

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="flex items-center justify-center relative w-full h-[54px] lg:h-[64px] rounded-md
          bg-black/10 z-20 cursor-pointer backdrop-filter backdrop-blur-md
          hover:shadow-[inset_24px_0px_0px_#fff] hover:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] hover:from-[#00cdb0] hover:via-[#a976f8] hover:to-[#ffc0cb] 
          hover:duration-700 hover:transition transition hover:ease-out duration-500">
          <p className=" text-white text-shadow-xl font-bold text-xl lg:text-2xl">
            Начать играть
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-6xl h-3/4 bg-transparent border-none">
        <div className="flex justify-center items-center p-12 bg-repeat border-4 border-black h-full w-full"
          style={{
            backgroundImage: `url("/images/static/dirt.png")`
          }}>
          <div className="flex flex-col gap-y-6 justify-between">
            <div className="flex flex-col gap-y-2">
              <p className="text-neutral-400 text-base">
                Название сервера
              </p>
              <div className="text-base bg-black py-2 px-2 border-2 text-white text-left border-neutral-500 w-100 md:w-96">
                Сервер Minecraft
              </div>
              <p className="text-neutral-400 text-base">
                Адрес сервера
              </p>
              <HoverCard closeDelay={0} openDelay={0}>
                <HoverCardTrigger>
                  <p onClick={() => actionCopyboard()} className="text-base cursor-pointer bg-black py-2 px-2 border-2 text-white text-left border-neutral-500 w-100 md:w-96">
                    play.fasberry.ru
                  </p>
                </HoverCardTrigger>
                <HoverCardContent className="bg-black p-2 relative -top-20 border-none">
                  <span className="text-md text-neutral-400">
                    Скопировать IP
                  </span>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="flex flex-col gap-y-2">
              <HoverCard closeDelay={0} openDelay={0}>
                <HoverCardTrigger>
                  <div className="button w-full text-center md:w-96 px-2 py-1 text-[0.8rem] lg:text-base">
                    Наборы ресурсов: Включены
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-[400px] relative -top-32 bg-black p-2 border-none">
                  <span className="text-md text-neutral-400">
                    На сервере используется свой ресурспак. Эту опцию рекомендуется оставить включенной!
                  </span>
                </HoverCardContent>
              </HoverCard>
              <DialogClose>
                <div className="button w-full text-center md:w-96 px-2 py-1 text-[0.8rem] lg:text-base">
                  Готово
                </div>
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}