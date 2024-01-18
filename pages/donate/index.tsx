import Head from "next/head"
import Layout from '@/components/layout/Layout';
import { Subscriptions } from "@/components/section/subscriptions";
import { Overlay } from "@/components/wrappers/main-overlay";
import { Wrapper } from '@/components/wrappers/main-wrapper';
import { WrapperTitle } from '@/components/wrappers/wrapper-title';

export default function Donate() {
  return (
    <>
      <Head>
        <title>Подписки</title>
        <meta name="keywords" content="Приобретение привилегий, подписки, fasberry донат, донат minecraft, minecraft fasberry" />
      </Head>
      <div className="full-screen-section flex items-center justify-start bg-bottom md:bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("https://media.discordapp.net/attachments/904344676587417621/1197251168443834408/2024-01-17_21.42.43.png?ex=65ba960a&is=65a8210a&hm=ed256149a115bd8d84d344c63f2851a0a3ceb31a2b57f107cc04604585f2c3d3&=&format=webp&quality=lossless&width=1193&height=671")`
        }}>
        <Overlay />
        <WrapperTitle>
          <div className="flex flex-col w-full lg:max-w-4xl items-start justify-center px-8 md:px-16 lg:px-28 xl:px-32">
            <h1 className="text-left text-5xl lg:text-6xl xl:text-8xl text-gold text-shadow-xl mb-2">
              Покупка привилегий
            </h1>
            <p className="text-left text-xl xl:text-3xl">
              Здесь можно купить привилегии, ну или узнать о каждой больше.
            </p>
          </div>
        </WrapperTitle>
      </div>
      <div className="flex flex-col min-h-screen items-center bg-cover bg-no-repeat full-screen-section bg-background-dark">
        <Wrapper>
          <Subscriptions />
        </Wrapper>
      </div>
    </>
  );
}

Donate.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}