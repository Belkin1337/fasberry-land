import { MainLayoutPage } from "@/components/layout";
import { useRouter } from "next/navigation"
import { Typography } from "@/ui/typography";
import Head from "next/head"

export default function Contacts() {
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>Fasberry &gt; Контакты</title>
      </Head>
      <MainLayoutPage variant="with_section">
        <div className="flex flex-col min-h-screen w-[90%] mx-auto py-36 gap-y-6">
          <Typography className="text-black dark:text-white text-3xl">
            Контакты
          </Typography>
          <div className="flex flex-col gap-y-8 bg-black/80 dark:bg-transparent rounded-md">
            <div className="flex flex-col gap-y-4 border border-transparent dark:hover:border-white hover:duration-500 duration-500 p-4">
              <Typography className="text-project-color text-xl">
                Социальные сети и мессенджеры
              </Typography>
              <div className="flex flex-col text-white text-md lg:text-lg gap-y-4">
                <Typography>
                  Группа VK:
                  <span
                    onClick={() => push('https://vk.com/fasberry')}
                    className="cursor-pointer hover:underline hover:underline-offset-8 decoration-[#fabbfb]"
                  >
                    https://vk.com/fasberry
                  </span>
                </Typography>
                <Typography>
                  Канал в Telegram:
                  <span
                    onClick={() => push('https://t.me/fasberry')}
                    className="cursor-pointer hover:underline hover:underline-offset-8 decoration-[#fabbfb]"
                  >
                    https://t.me/fasberry
                  </span>
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 border border-transparent dark:hover:border-white hover:duration-500 duration-500 p-4">
              <Typography className="text-project-color text-xl">
                Электронная почта
              </Typography>
              <div className="flex flex-col gap-y-4">
                <Typography className="text-white text-md lg:text-lg">
                  support@fasberry.ru
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </MainLayoutPage>
    </>
  )
}
