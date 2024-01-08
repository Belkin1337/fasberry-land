import Head from "next/head"

import { Subscriptions } from "@/components/section/subscriptions";
import { Overlay } from "@/components/wrappers/main-overlay";
import { Wrapper } from '@/components/wrappers/main-wrapper';
import { WrapperTitle } from '@/components/wrappers/wrapper-title';
import Layout from '@/components/layout/Layout';

export default function Donate() {
  return (
    <>
      <Head>
        <title>Подписки</title>
        <meta name="keywords" content="Приобретение подписок, подписки, fasberry донат, донат minecraft, minecraft fasberry" />
      </Head>
      <div className="full-screen-section flex items-center justify-start bg-bottom md:bg-center" style={{ backgroundImage: `url("/images/minecraft_screen_5.png")` }}>
        <Overlay />
        <WrapperTitle>
          <div className="flex flex-col w-full lg:max-w-4xl items-start justify-center px-8 md:px-16 lg:px-28 xl:px-32">
            <h1 className="text-left text-5xl lg:text-6xl xl:text-8xl text-gold text-shadow-xl mb-2">
              Покупка подписок
            </h1>
            <p className="text-left text-xl xl:text-3xl">
              Здесь можно купить подписки, ну или узнать о каждой больше.
            </p>
          </div>
        </WrapperTitle>
      </div>
      <div id="subscription" className="flex flex-col min-h-screen items-center bg-cover bg-no-repeat full-screen-section bg-background-dark">
        <Wrapper>
          <Subscriptions />
        </Wrapper>
      </div>
    </>
  );
}

Donate.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}