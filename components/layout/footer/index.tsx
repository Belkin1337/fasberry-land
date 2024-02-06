import { Typography } from "@/ui/typography";
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="sticky flex justify-center items-center py-12"
      style={{ backgroundImage: `url("/images/static/bedrock.png")`, backgroundSize: '160px' }}>
      <div className="flex flex-col lg:flex-row justify-between gap-y-6 items-center w-[90%] mx-auto">
        <div className="flex flex-col justify-center items-start rounded-xl w-full lg:w-4/5 xl:w-1/2 gap-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <Link href="/info/privacy">
              <Typography className="cursor-pointer text-white text-md hover:underline hover:underline-offset-8 decoration-bisquite-server-color">
                Политика конфиденциальности
              </Typography>
            </Link>
            <span className="text-white hidden lg:block">/</span>
            <Link href="/info/terms">
              <Typography className="cursor-pointer text-white text-md hover:underline hover:underline-offset-8 decoration-bisquite-server-color">
                Пользовательское соглашение
              </Typography>
            </Link>
            <span className="text-white hidden lg:block">/</span>
            <Link href="/info/contacts">
              <Typography className="cursor-pointer text-white text-md hover:underline hover:underline-offset-8 decoration-bisquite-server-color">
                Контакты
              </Typography>
            </Link>
          </div>
          <Typography size="md">
            Все права защищены. Оригинальные права принадлежат Mojang AB / {new Date().getFullYear()}
          </Typography>
        </div>
        <div className="overflow-hidden">
          <Link href="/">
            <Image
              width={316}
              height={128}
              alt="Fasberry Project Logo"
              src="https://cdn.discordapp.com/attachments/904344676587417621/1190002158591029268/fasberry_logo.png?ex=65b2abdf&is=65a036df&hm=c16e7ad541151dae9288c99b354d81b9f44df931c2da7d69e59dc96238bfb62e&"
              className="relative top-2 cursor-pointer"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </footer >
  )
}