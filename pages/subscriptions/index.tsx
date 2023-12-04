import Head from "next/head"

import { Subscriptions } from "@/components/section/subscriptions";
import { Overlay } from "@/components/wrappers/main-overlay";
import { Wrapper } from '@/components/wrappers/main-wrapper';
import { WrapperTitle } from '@/components/wrappers/wrapper-title';
import { Title } from "@/components/ui/title";
import Layout from '@/components/layout/Layout';

export default function Donate() {
  const shareList = [
    {
      name: "Мониторинг.",
      content: `Я ЛИЧНО выставил сервер на несколько сайтов-мониторингов. 
      Зачем скажешь ты? Ну во-первых это халявный трафик, хоть и малый, 
      а во-вторых, тебе же легко просто поставить рейтинг серверу, перейдя по ссылкам...`,
      image: "/images/steve.webp",
    },
    {
      name: "А ещё",
      content: `Расскажи об этом проекте своим друзьям и возможно вы станете легендами. 
      Я думаю хороший обмен.`,
      image: "/images/alex.webp"
    }
  ]

  return (
    <>
      <Head>
        <title>Подписки</title>
        <meta name="keywords" content="Приобретение подписок, подписки, fasberry донат, донат minecraft, minecraft fasberry" />
      </Head>
      <div className="full-screen-section flex items-center justify-start bg-bottom md:bg-center" style={{ backgroundImage: `url("/images/minecraft_screen_5.webp")` }}>
        <Overlay />
        <WrapperTitle>
          <div className="flex flex-col w-full lg:max-w-4xl items-start justify-center px-8 md:px-16 lg:px-28 xl:px-32">
            <h1 className="text-left text-5xl lg:text-6xl xl:text-8xl text-gold text-shadow-xl mb-2">
              Поддержка и покупка подписок
            </h1>
            <p className="text-left text-xl xl:text-3xl">
              Если ты сюда зашёл, значит у тебя (наверно) есть желание поддержать проект.
            </p>
          </div>
        </WrapperTitle>
      </div>
      <div id="subscription" className="flex flex-col min-h-screen items-center bg-cover bg-no-repeat full-screen-section" style={{ backgroundImage: `url("/images/chest_screen.webp")` }}>
        <Wrapper>
          <Subscriptions />
        </Wrapper>
      </div>
      <div id="monitoring" className="full-screen-section flex flex-col justify-center items-center bg-background-dark xl:py-32 relative">
        <Wrapper>
          <div className="flex flex-col justify-center gap-y-12">
            <Title variant="blue" className='text-[#00cdb0]'>А также</Title>
            {shareList.map((item) => (
              <div key={item.name} className="flex flex-col lg:flex-row overflow-hidden lg:items-center items-start py-4 px-2 grad-first-purple gap-x-6 gap-y-4 w-full">
                <img
                  className="md:w-[322px] md:h-[322px] xl:w-[456px] xl:h-[456px] hover:scale-[2]"
                  src={item.image}
                  alt="мониторинг"
                />
                <div className="flex flex-col items-start p-2 gap-y-2 md:p-0 lg:w-1/2 w-full">
                  <h1 className='text-xl lg:text-5xl text-fuchsia-400 mb-4'>{item.name}</h1>
                  <p className="text-md lg:text-xl">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    </>
  );
}

Donate.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}