import { useRouter } from "next/navigation"
import { Wrapper } from "./wrappers/main-wrapper";
import Image from "next/image"

export const Footer = () => {
  const router = useRouter();

  return (
    <footer
      className="sticky flex justify-center items-center py-16 md:pb-6 md:pt-14"
      style={{
        backgroundImage: `url("/images/static/bedrock.png")`,
        backgroundSize: '160px'
      }}>
      <Wrapper>
        <div className="flex flex-col lg:flex-row justify-between gap-y-6 items-center">
          <div className="flex flex-col justify-center items-start rounded-xl w-full lg:w-4/5 xl:w-1/2 p-4 gap-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <p
                onClick={() => router.push('/info/privacy')}
                className="cursor-pointer text-white text-md hover:underline hover:underline-offset-8 decoration-bisquite-server-color"
              >Политика конфиденциальности</p>
              <span className="text-white hidden lg:block">/</span>
              <p
                onClick={() => router.push('/info/terms')}
                className="cursor-pointer text-white text-md hover:underline hover:underline-offset-8 decoration-bisquite-server-color"
              >Пользовательское соглашение</p>
              <span className="text-white hidden lg:block">/</span>
              <p
                onClick={() => router.push('/info/contacts')}
                className="cursor-pointer text-white text-md hover:underline hover:underline-offset-8 decoration-bisquite-server-color"
              >Контакты</p>
            </div>
            <p className="text-md">
              Все права защищены. Оригинальные права принадлежат Mojang AB | {new Date().getFullYear()}
            </p>
          </div>
          <div className="overflow-hidden">
            <Image
              width={316}
              height={128}
              alt="Fasberry Project Logo"
              src="https://cdn.discordapp.com/attachments/904344676587417621/1190002158591029268/fasberry_logo.png?ex=65b2abdf&is=65a036df&hm=c16e7ad541151dae9288c99b354d81b9f44df931c2da7d69e59dc96238bfb62e&"
              className="relative top-2 cursor-pointer"
              onClick={() => router.push('/')}
            />
          </div>
        </div>
      </Wrapper>
    </footer >
  )
}