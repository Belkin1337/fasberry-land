import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from "next/image"

const news = [
  {
    id: 2,
    title: "Добавление вики сервера",
    date: "14.01.2024 09:00",
    image: "https://cdn.discordapp.com/attachments/904344676587417621/1195996733419819099/96b92030-80a9-4c5d-9806-b038c422627d.jpg?ex=65b605c1&is=65a390c1&hm=ebd9f9674751fb2836340e74d21700ce20b22cebb1ae12f0392fd42f0401db78&",
    body:
      `Теперь всю полезную информацию по игре можно узнать на странице вики. Меньше тупых вопросов!`
  },
  {
    id: 1,
    title: "Релиз уже!",
    date: "02.01.2024 12:00",
    image: "https://cdn.discordapp.com/attachments/904344676587417621/1197250888864116866/glowingcave.png?ex=65ba95c7&is=65a820c7&hm=81d499b2a020920b1f53dec0aa165056231089f3ff755a476f180e903fe65c84&",
    body:
      `Если вы еще не знали, я уже открыл сервер, написав об этом в дискорде и телеграмме проекта. 
    Кстати советую подписаться там. Любой желающий сможет зайти на сервер, имея у себя майнкрафт версии не ниже 1.19.4.`
  },
  {
    id: 0,
    title: "Теперь у сервера есть свой дискорд канал",
    date: "06.07.2023 16:00",
    image: "https://cdn.discordapp.com/attachments/904344676587417621/1197250820819918940/discord.jpg?ex=65ba95b7&is=65a820b7&hm=f87c8bd9d41b4e54d5176cdd5d67648237a9fc0ffcfc5dd4f0078ad2fa8cc891&",
    body:
      `Да, ты не ослышался, целый дискорд канал. Зачем? Для того, чтобы собирать именно там всё коммьюнити сервера, а также это место, где я сижу постоянно и готов ответить на все твои вопросы.`
  },
]

export const News = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <p className="text-black dark:text-white text-4xl">Новости</p>
      {news.map((item) => (
        <Dialog key={item.id}>
          <DialogTrigger className="flex flex-col rounded-xl block-item p-1 overflow-hidden">
            <div className="h-[220px] w-full sm:h-[360px] md:h-[420px] xl:w-[920px] xl:h-[500px] overflow-hidden rounded-t-xl bg-black">
              <Image layout="responsive" loading="lazy" width={920} height={220} src={item.image} className="w-full h-full object-cover" alt="News" />
            </div>
            <div className="flex flex-col items-start relative rounded-b-xl self-end bg-black/80 dark:bg-black py-2 px-2 lg:py-4 lg:px-4 w-full gap-y-2 max-h-[96px] lg:h-[114px]">
              <p className="text-white text-left font-normal text-base lg:text-3xl">{item.title}</p>
              <p className="text-neutral-400 text-sm lg:text-lg font-normal">{item.date}</p>
            </div>
          </DialogTrigger>
          <DialogContent className="flex flex-col xl:flex-row bg-black/80 border border-neutral-900 rounded-xl px-4 py-8 w-6xl backdrop-filter backdrop-blur-md overflow-hidden gap-x-6">
            <div className="h-[220px] sm:h-[360px] md:h-[420px] xl:w-2/3 xl:h-6/7 w-full overflow-hidden">
              <Image layout="responsive" loading="lazy" width={1024} height={220} src={item.image} className="object-cover w-full h-full" alt="News" />
            </div>
            <div className="flex flex-col justify-between w-full xl:w-3/4">
              <div className="flex flex-col gap-y-4">
                <p className="text-project-color font-normal text-xl lg:text-3xl">{item.title}</p>
                <p className="text-white font-normal text-md lg:text-xl">{item.body}</p>
              </div>
              <p className="text-neutral-400 text-sm self-end lg:text-base font-normal">{item.date}</p>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}