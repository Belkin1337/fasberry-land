import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Wrapper } from "@/components/wrappers/main-wrapper";
import { Title } from "@/components/ui/title";
import { Header } from "@/components/section/header";
import { Footer } from "@/components/section/footer";


export default function Support() {
  return (
    <>
      <Head>
        <title>Поддержка сервера</title>
        <meta name="keywords" content="поддержка сервера, саппорт, fasberry, minecraft, minecraft fasberry" />
      </Head>
      <Header />
      <div className="full-screen-section flex flex-col justify-center items-center py-32 relative">
        <Wrapper>
          <div className="flex flex-col justify-center gap-y-6">
            <div className="flex flex-col justify-center items-center mb-6">
              <Title className="text-black dark:text-white">
                Поддержка проекта
              </Title>
              <p className="text-xl text-dark-red dark:text-gold md:text-xl text-center">
                ниже представлены пока что основные способы помочь проекту. Спасибо!
              </p>
            </div>
            <div className="p-1 rounded-xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#00cdb0] via-[#a976f8] to-[#ffc0cb] w-full">
              <div className="flex rounded-xl flex-col md:flex-row overflow-hidden md:items-center items-start bg-wool-black py-4 px-2 gap-x-6 gap-y-4 w-full">
                <Image
                  width={512}
                  height={512}
                  alt="Monitoring Steve"
                  className="md:w-[322px] md:h-[322px] xl:w-[352px] xl:h-[352px]"
                  src="https://cdn.discordapp.com/attachments/904344676587417621/1197635139186999297/steve.webp?ex=65bbfba4&is=65a986a4&hm=60935ca158754837168e80f8fa57dc10b96ff6afce741af3826529fe1b823d59&"
                />
                <div className="flex flex-col items-start p-2 gap-y-2 md:p-0 lg:w-1/2 w-full">
                  <h1 className="text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl text-fuchsia-400 mb-2">Мониторинг</h1>
                  <div className="flex flex-col">
                    <p className="text-md lg:text-lg xl:text-xl 2xl:text-2xl">Я лично выставил сервер на несколько сайтов-мониторингов.</p>
                    <p className="text-md lg:text-lg xl:text-xl 2xl:text-2xl">"Зачем ты это сделал?" - скажешь ты?</p>
                    <p className="text-md lg:text-lg xl:text-xl 2xl:text-2xl">Ну, во-первых, это халявный трафик, хоть и малый.</p>
                    <p className="text-md lg:text-lg xl:text-xl 2xl:text-2xl">А во-вторых, тебе же легко просто проголосовать за сервер, да?</p>
                  </div>
                  <div className="flex flex-col mt-4">
                    <Link
                      target="_blank"
                      className="button px-8 py-1 text-white hover:text-fuchsia-400 hover:duration-200 duration-200 text-xl"
                      href="https://hotmc.ru/vote-259308">
                      Проголосовать
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1 rounded-xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#00cdb0] via-[#a976f8] to-[#ffc0cb] w-full">
              <div className="flex rounded-xl flex-col md:flex-row overflow-hidden md:items-center items-start bg-wool-black py-4 px-2 gap-x-6 gap-y-4 w-full">
                <Image
                  width={512}
                  height={512}
                  className="md:w-[322px] md:h-[322px] xl:w-[352px] xl:h-[352px]"
                  src="https://cdn.discordapp.com/attachments/904344676587417621/1198400532675559544/0314a801cea2a8587015cf23f8183417.jpg?ex=65bec478&is=65ac4f78&hm=1b027980c3575f5d9b8185e6e91c2e49270f798d6c1997e0f5af969ac777fcda&"
                  alt="share Fasberry Project"
                />
                <div className="flex flex-col items-start p-2 gap-y-2 md:p-0 lg:w-1/2 w-full">
                  <h1 className='text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl text-fuchsia-400 mb-4'>Материальная поддержка</h1>
                  <p className="text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                    В любом случае ты всегда можешь поддержать проект материально, это будет очень и очень большим возмещением времени, которое
                    я трачу на развитие проекта. Спасибо!
                  </p>
                  <div className="flex flex-col mt-4">
                    <Link
                      target="_blank"
                      className="button px-8 py-1 text-white hover:text-fuchsia-400 hover:duration-200 duration-200 text-xl"
                      href="https://www.donationalerts.com/r/fasberry">
                      Поддержать
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1 rounded-xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#00cdb0] via-[#a976f8] to-[#ffc0cb] w-full">
              <div className="flex flex-col rounded-xl md:flex-row overflow-hidden md:items-center items-start bg-wool-black py-4 px-2 gap-x-6 gap-y-4 w-full">
                <Image
                  width={512}
                  height={512}
                  className="md:w-[322px] md:h-[322px] xl:w-[352px] xl:h-[352px]"
                  src="https://cdn.discordapp.com/attachments/904344676587417621/1197635138834669660/alex.webp?ex=65bbfba4&is=65a986a4&hm=7758613055827a6ca612150af5e90da354732c718146d91cc9cc8cf6fea287d4&"
                  alt="share Fasberry Project"
                />
                <div className="flex flex-col items-start p-2 gap-y-2 md:p-0 lg:w-1/2 w-full">
                  <h1 className='text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl text-fuchsia-400 mb-4'>Знакомый знакомому</h1>
                  <p className="text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                    Расскажи об этом сервере своим друзьям, может знакомым, зайдите вечерком, поиграйте. Если зайдет, то возможно вы станете легендами.
                    Я думаю хороший обмен.
                  </p>
                  <div className="flex items-center gap-x-4 mt-4">
                    <Link className="button px-8 py-1 text-white hover:text-fuchsia-400 hover:duration-200 duration-200 text-xl"
                      href="https://telegram.me/share/url?url=https%3A%2F%2Ffasberry.ru&text="
                      target="_blank"
                    >
                      Поделиться / Телеграм
                    </Link>
                    <Link className="flex justify-between items-center button px-8 py-1 text-white hover:text-fuchsia-400 hover:duration-200 duration-200 text-xl"
                      href="https://vk.com/share.php?url=https%3A%2F%2Ffasberry.ru&title="
                      target="_blank"
                    >
                      Поделиться / ВКонтакте 
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </>
  )
}
