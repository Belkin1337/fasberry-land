import { useState, useEffect } from 'react'
import { Community } from './community'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

const news = [
  {
    id: 0,
    title: "Релиз уже!",
    date: "02.01.2024 12:00",
    image: "/images/glowingcave.png",
    body:
      `Если вы еще не знали, я уже открыл сервер, написав об этом в дискорде и телеграмме проекта. 
    Кстати советую подписаться там. Любой желающий сможет зайти на сервер, имея у себя майнкрафт версии не ниже 1.19.4.`
  },
  {
    id: 1,
    title: "Теперь у сервера есть свой дискорд канал",
    date: "06.07.2023 16:00",
    image: "/images/discord.jpg",
    body:
      `Да, ты не ослышался, целый дискорд канал. Зачем? Для того, чтобы собирать именно там всё коммьюнити сервера, а также это место, где я сижу постоянно и готов ответить на все твои вопросы.`
  }
]

export const News = () => {
  // const [data, setData] = useState(null)
  // const [isLoading, setLoading] = useState(true)

  // useEffect(() => {
  //   fetch('/api/news')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [])

  return (
    <div className="full-screen-section">
      <div className="flex lg:flex-row flex-col py-24 mx-auto gap-y-12 lg:gap-y-6 group gap-x-4 lg:gap-x-4 xl:gap-x-8 2xl:gap-x-12 w-[90%]">
        <div className="flex flex-col gap-y-6">
          <p className="text-white text-4xl">Новости</p>
          {news.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger className="flex flex-col rounded-xl block-item p-1 overflow-hidden">
                <div className="h-[220px] w-full sm:h-[360px] md:h-[420px] lg:w-[920px] lg:h-[500px] overflow-hidden rounded-t-xl bg-black">
                  <img src={item.image} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex flex-col items-start relative rounded-b-xl self-end bg-black py-2 px-2 lg:py-4 lg:px-4 w-full gap-y-2 max-h-[96px] lg:h-[114px]">
                  <p className="text-white text-left font-normal text-base lg:text-3xl">
                    {item.title}
                  </p>
                  <p className="text-neutral-400 text-sm lg:text-lg font-normal">
                    {item.date}
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="flex flex-col lg:flex-row bg-black/50 rounded-xl px-4 py-8 w-6xl border-none backdrop-filter backdrop-blur-md overflow-hidden gap-x-6">
                <div className="h-[220px] sm:h-[360px] md:h-[420px] lg:w-2/3 lg:h-6/7 w-full overflow-hidden">
                  <img src={item.image} className="object-cover w-full h-full" alt="" />
                </div>
                <div className="flex flex-col justify-between w-full lg:w-3/4">
                  <div className="flex flex-col gap-y-4">
                    <p className="text-project-color font-normal text-xl lg:text-3xl">
                      {item.title}
                    </p>
                    <p className="text-white font-normal text-md lg:text-xl">
                      {item.body}
                    </p>
                  </div>
                  <p className="text-neutral-400 text-sm self-end lg:text-base font-normal">
                    {item.date}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <div className="flex flex-col gap-y-6 w-full lg:w-1/2">
          <p className="text-white text-4xl">Cообщество</p>
          {/* <div className="flex flex-col bg-black/50 backdrop-filter backdrop-blur-md rounded-xl overflow-hidden h-max p-4 gap-y-8">
          <p className="text-white text-2xl">Текущий онлайн</p>
          <div className="flex flex-col gap-y-1">
            <div className="w-full flex justify-between">
              <p className="text-white font-normal text-xl">Название</p>
              <p className="text-white font-normal text-xl">Онлайн</p>
            </div>
            <hr className="border-neutral-800" />
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-white font-normal text-2xl">Bisquite</p>
            <p className="text-white font-normal text-2xl">0</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-white font-normal text-2xl">Muffin</p>
            <p className="text-white font-normal text-2xl">0</p>
          </div>
        </div> */}
          <Community />
        </div>
      </div>
    </div>
  )
}