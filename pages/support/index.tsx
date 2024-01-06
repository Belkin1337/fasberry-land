import Head from "next/head"

import Layout from '@/components/layout/Layout';
import { Wrapper } from "@/components/wrappers/main-wrapper";
import { Title } from "@/components/ui/title";
import Link from "next/link"

export default function Support() {
  return (
    <>
      <Head>
        <title>Поддержка сервера</title>
        <meta name="keywords" content="поддержка сервера, саппорт, fasberry, minecraft, minecraft fasberry" />
      </Head>
      <div className="full-screen-section flex flex-col justify-center items-center bg-background-dark py-32 relative">
        <Wrapper>
          <div className="flex flex-col justify-center gap-y-12">
            <Title variant="blue" className='text-[#00cdb0]'>Спасибо!</Title>
            <div className="p-1 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#00cdb0] via-[#a976f8] to-[#ffc0cb] w-full">
              <div className="flex flex-col lg:flex-row overflow-hidden lg:items-center items-start bg-wool-black py-4 px-2 gap-x-6 gap-y-4 w-full">
                <img
                  className="md:w-[322px] md:h-[322px] xl:w-[456px] xl:h-[456px]"
                  src="/images/steve.webp" alt="monitoring Fasberry Project"
                />
                <div className="flex flex-col items-start p-2 gap-y-2 md:p-0 lg:w-1/2 w-full">
                  <h1 className='text-xl lg:text-6xl text-fuchsia-400 mb-4'>Мониторинг</h1>
                  <p className="text-md lg:text-2xl">
                    Я лично выставил сервер на несколько сайтов-мониторингов.
                    <p>"Зачем ты это сделал?" - скажешь ты?</p>
                    <p>Ну, во-первых, это халявный трафик, хоть и малый.</p>
                    <p>А во-вторых, тебе же легко просто проголосовать за сервер, да?</p>
                  </p>
                  <div className="flex flex-col">
                    <Link
                      target="_blank"
                      className="text-white hover:underline hover:text-fuchsia-400 hover:transition hover:underline-offset-8 text-xl" href="https://hotmc.ru/minecraft-server-259308"
                    >
                      [#1] голосовать
                    </Link>
                    <Link
                      target="_blank"
                      className="text-white hover:underline hover:text-fuchsia-400 hover:transition hover:underline-offset-8 text-xl" href="https://minecraftrating.ru/server/fasberry/"
                    >
                      [#2] голосовать
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#00cdb0] via-[#a976f8] to-[#ffc0cb] w-full">
              <div className="flex flex-col lg:flex-row overflow-hidden lg:items-center items-start bg-wool-black py-4 px-2 gap-x-6 gap-y-4 w-full">
                <img
                  className="md:w-[322px] md:h-[322px] xl:w-[456px] xl:h-[456px]"
                  src="/images/alex.webp" alt="share Fasberry Project"
                />
                <div className="flex flex-col items-start p-2 gap-y-2 md:p-0 lg:w-1/2 w-full">
                  <h1 className='text-xl lg:text-6xl text-fuchsia-400 mb-4'>Знакомый знакомому</h1>
                  <p className="text-md lg:text-2xl">
                    Расскажи об этом сервере своим друзьям, может знакомым, зайдите вечерком, поиграйте. Если зайдет, то возможно вы станете легендами.
                    Я думаю хороший обмен.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  )
}

Support.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}