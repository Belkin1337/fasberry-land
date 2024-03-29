import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Typography } from "@/ui/typography";
import { Block } from "@/ui/block";
import { Dialog, DialogContent, DialogTrigger } from "@/ui/dialog";
import { MainLayoutPage } from "@/components/layout";
import { WrapperTitle } from "@/components/wrappers/wrapper-title";
import { Overlay } from "@/ui/overlay";

export default function Support() {
  return (
    <>
      <Head>
        <title>Fasberry &gt; Поддержка сервера</title>
        <meta name="keywords" content="поддержка сервера, саппорт, fasberry, minecraft, minecraft fasberry" />
      </Head>
      <MainLayoutPage variant="with_section">
        <div className="full-screen-section flex items-center justify-start bg-bottom bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("https://cdn.discordapp.com/attachments/904344676587417621/1197251042413379594/minecraft_screen_5.webp?ex=65f1f4ec&is=65df7fec&hm=8255576e2676ae0f734f6e6bb09d9192d0171fa34954b830b6a97f5e1d87eba0&")`
          }}>
          <Overlay variant="default" />
          <WrapperTitle>
            <div className="flex flex-col w-full lg:max-w-xl items-start justify-center">
              <div className="bg-black/80 rounded-xl p-4 lg:p-6">
                <Typography position="left" shadow="xl" className="text-2xl lg:text-3xl xl:text-4xl text-gold mb-2">
                  Поддержка
                </Typography>
                <Typography position="left" className="text-xl xl:text-2xl">
                  Здесь можно узнать о способах поддержки проекта. (не донат!)
                </Typography>
              </div>
            </div>
          </WrapperTitle>
        </div>
        <div className="full-screen-section flex flex-col justify-center items-center relative py-24 lg:py-36">
          <div className="flex flex-col justify-center gap-y-6 w-[90%] mx-auto">
            <div className="flex flex-col justify-center items-center mb-6">
              <Typography variant="block_title" className="text-black dark:text-white">
                Поддержка проекта
              </Typography>
              <Typography size="xl" position="center" className="text-dark-red dark:text-gold">
                ниже представлены пока что основные способы помочь проекту. Спасибо!
              </Typography>
            </div>
            <Block blockItem rounded="big" className="flex flex-col md:flex-row overflow-hidden md:items-center items-start gap-x-6 gap-y-4 w-full">
              <Image
                width={566}
                height={566}
                alt="Monitoring Steve"
                className="md:h-[322px] xl:h-[352px] w-fit"
                src="https://cdn.discordapp.com/attachments/904344676587417621/1197635139186999297/steve.webp?ex=65bbfba4&is=65a986a4&hm=60935ca158754837168e80f8fa57dc10b96ff6afce741af3826529fe1b823d59&"
              />
              <div className="flex flex-col items-start p-2 gap-y-2 md:p-0 lg:w-1/2 w-full">
                <h1 className="text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl text-fuchsia-400 mb-2">
                  Мониторинг
                </h1>
                <div className="flex flex-col">
                  <Typography variant="block_paragraph">
                    Я лично выставил сервер на несколько сайтов-мониторингов.
                  </Typography>
                  <Typography variant="block_paragraph">
                    "Зачем ты это сделал?" - задашь ты мне вопрос
                  </Typography>
                  <Typography variant="block_paragraph">
                    Ну, во-первых, это халявный трафик, хоть и малый.
                  </Typography>
                  <Typography variant="block_paragraph">
                    А во-вторых, тебе же легко просто проголосовать за сервер, да?
                  </Typography>
                </div>
                <div className="flex flex-col mt-4">
                  <Link target="_blank" href="https://hotmc.ru/vote-259308">
                    <div className="flex justify-between items-center button px-6 py-1">
                      <Typography hover_effects="fuchsia" size="xl">
                        Проголосовать
                      </Typography>
                    </div>
                  </Link>
                </div>
              </div>
            </Block>
            <Block blockItem rounded="big" className="flex flex-col md:flex-row overflow-hidden md:items-center items-start gap-x-6 gap-y-4 w-full">
              <Image
                width={512}
                height={512}
                className="md:w-[322px] md:h-[322px] xl:w-[352px] xl:h-[352px]"
                src="https://cdn.discordapp.com/attachments/904344676587417621/1198400532675559544/0314a801cea2a8587015cf23f8183417.jpg?ex=65bec478&is=65ac4f78&hm=1b027980c3575f5d9b8185e6e91c2e49270f798d6c1997e0f5af969ac777fcda&"
                alt="share Fasberry Project"
              />
              <div className="flex flex-col items-start p-2 gap-y-2 md:p-0 lg:w-1/2 w-full">
                <h1 className='text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl text-fuchsia-400 mb-4'>Материальная поддержка</h1>
                <Typography variant="block_paragraph">
                  В любом случае ты всегда можешь поддержать проект материально, это будет очень и очень большим возмещением времени, которое
                  я трачу на развитие проекта. Спасибо!
                </Typography>
                <div className="flex flex-col lg:flex-row mt-4">
                  <Dialog>
                    <DialogTrigger>
                      <div className="flex justify-between items-center button px-6 py-1">
                        <Typography hover_effects="fuchsia" size="xl">
                          Поддержать
                        </Typography>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="border border-neutral-900 rounded-xl p-4 max-w-2xl">
                      <Typography position="center" className="!text-[#00cdb0] text-shadow-xs text-lg sm:text-xl lg:text-2xl mb-4 lg:mb-8">
                        Вы можете поддержать проект разными способами:
                      </Typography>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                        <Link
                          target="_blank"
                          href="https://www.donationalerts.com/r/fasberry"
                        >
                          <Typography size="xl" className="text-black dark:text-white">
                            DonationAlerts:
                          </Typography>
                        </Link>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                        <Link
                          target="_blank"
                          href="https://yoomoney.ru/to/4100116751824060">
                          <Typography size="xl" className="text-black dark:text-white">
                            YooMoney (Юмани):
                          </Typography>
                        </Link>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Block>
            <Block blockItem rounded="big" className="flex flex-col md:flex-row overflow-hidden md:items-center items-start gap-x-6 gap-y-4 w-full">
              <Image
                width={512}
                height={512}
                className="md:w-[322px] md:h-[322px] xl:w-[352px] xl:h-[352px]"
                src="https://cdn.discordapp.com/attachments/904344676587417621/1197635138834669660/alex.webp?ex=65bbfba4&is=65a986a4&hm=7758613055827a6ca612150af5e90da354732c718146d91cc9cc8cf6fea287d4&"
                alt="share Fasberry Project"
              />
              <div className="flex flex-col items-start p-2 gap-y-2 md:p-0 lg:w-1/2 w-full">
                <h1 className='text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl text-fuchsia-400 mb-4'>
                  Знакомый знакомому
                </h1>
                <Typography variant="block_paragraph">
                  Расскажи об этом сервере своим друзьям, может знакомым, зайдите вечерком, поиграйте. Если зайдет, то возможно вы станете легендами.
                  Я думаю хороший обмен.
                </Typography>
                <div className="flex flex-col lg:flex-row justify-start w-full gap-x-4 mt-4 gap-y-2">
                  <Link href="https://telegram.me/share/url?url=https%3A%2F%2Ffasberry.ru&text=" target="_blank">
                    <div className="flex justify-between items-center button px-2 py-1">
                      <Typography hover_effects="fuchsia" size="xl">
                        Поделиться / Телеграмм
                      </Typography>
                    </div>
                  </Link>
                  <Link href="https://vk.com/share.php?url=https%3A%2F%2Ffasberry.ru&title=" target="_blank">
                    <div className="flex justify-between items-center button px-2 py-1">
                      <Typography hover_effects="fuchsia" size="xl">
                        Поделиться / ВКонтакте
                      </Typography>
                    </div>
                  </Link>
                </div>
              </div>
            </Block>
          </div>
        </div>
      </MainLayoutPage>
    </>
  )
}