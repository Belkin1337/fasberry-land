import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import Head from "next/head"
import { useRouter } from "next/navigation"

export default function Contacts() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      <Header/>
      <div className="flex flex-col min-h-screen w-[90%] mx-auto py-36 gap-y-6">
        <p className="text-black dark:text-white text-3xl">
          Контакты
        </p>
        <div className="flex flex-col gap-y-8 bg-black/80 dark:bg-transparent rounded-md">
          <div className="flex flex-col gap-y-4 border border-transparent dark:hover:border-white hover:duration-500 duration-500 p-4">
            <p className="text-project-color text-xl">Социальные сети и мессенджеры</p>
            <div className="flex flex-col text-white text-md lg:text-lg gap-y-4">
              <p>Группа VK: <span 
                onClick={() => router.push('https://vk.com/fasberry')}
                className="cursor-pointer hover:underline hover:underline-offset-8 decoration-[#fabbfb]">
                  https://vk.com/fasberry
                </span>
              </p>
              <p>Канал в Telegram: <span onClick={() => router.push('https://t.me/fasberry')}
                className="cursor-pointer hover:underline hover:underline-offset-8 decoration-[#fabbfb]">
                https://t.me/fasberry
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 border border-transparent dark:hover:border-white hover:duration-500 duration-500 p-4">
            <p className="text-project-color text-xl">Электронная почта</p>
            <div className="flex flex-col text-white text-md lg:text-lg gap-y-4">
              <p>support@fasberry.ru</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </> 
  )
}
