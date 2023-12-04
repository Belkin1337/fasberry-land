import { useRouter } from "next/router"

import { faq } from "@/shared/content";

export const FAQ = () => {
  const router = useRouter();

  const HeaderCategories = [
    { name: "FAQ", icon: "/images/minecraft/icons/brewing_stand.webp", href: "faq" },
    { name: "Рецепты", icon: "/images/minecraft/icons/book_big.webp", href: "recipes" },
    { name: "Проблемы", icon: "/images/minecraft/icons/red_candle.webp", href: "problems" },
    { name: "Игровой контент", icon: "/images/minecraft/icons/ender_dragon_egg.webp", href: "content" },
  ]

  return (
    <>
      <div className="flex flex-col px-6">
        <h1 onClick={() => router.push(`/wiki`)} className="cursor-pointer hover:brightness-150 transition text-xl lg:text-4xl text-neutral-400">База знаний</h1>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row teal-gradient-block md:items-center justify-between rounded-sm py-6 px-6 gap-y-4 md:gap-y-2 mt-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white">Категории</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-y-4 gap-x-6 lg:gap-x-12">
          {HeaderCategories.map((item) => (
            <div
              key={item.href}
              onClick={() => router.push(`/wiki/${item.href}`)}
              className="flex flex-row items-center text-white gap-2 hover:brightness-150 hover:underline hover:underline-offset-8 cursor-pointer">
              <img
                src={item.icon}
                alt={item.name}
                width={32}
                height={32}
              />
              <span className="text-lg md:text-xl hover:text-project-color">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}