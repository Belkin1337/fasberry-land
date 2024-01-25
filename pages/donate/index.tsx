import Head from "next/head"
import { Wrapper } from '@/components/wrappers/main-wrapper';
import { WrapperTitle } from '@/components/wrappers/wrapper-title';
import { Overlay } from "@/components/ui/overlay";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SubscriptionItem } from "@/components/subs/subscription-item";
import { support } from "@/shared/content";
import { Typography } from "@/components/ui/typography";

export default function Donate() {
  const subList = support.Support.content[0].donateElement.map((item) => ({
    title: item.title,
    rate: item.rate,
    description: item.description,
    commands: item.commands,
    price: item.price,
    screenshot: item.screenshot
  }));

  return (
    <>
      <Head>
        <title>Подписки</title>
        <meta name="keywords" content="Приобретение привилегий, подписки, fasberry донат, донат minecraft, minecraft fasberry" />
      </Head>
      <Header />
      <div className="full-screen-section flex items-center justify-start bg-bottom md:bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            `url("https://media.discordapp.net/attachments/904344676587417621/1197251168443834408/2024-01-17_21.42.43.png?ex=65ba960a&is=65a8210a&hm=ed256149a115bd8d84d344c63f2851a0a3ceb31a2b57f107cc04604585f2c3d3&=&format=webp&quality=lossless&width=1193&height=671")`
        }}>
        <Overlay />
        <WrapperTitle>
          <div className="flex flex-col items-start justify-center w-full lg:max-w-4xl px-8 md:px-16 lg:px-28 xl:px-32">
            <div className="bg-black/60 rounded-xl p-4 lg:p-6">
              <Typography variant="page_title" position="left" shadow="xl" className="text-gold mb-2">
                Покупка привилегий
              </Typography>
              <Typography position="left" className="text-xl xl:text-2xl">
                Здесь можно купить привилегии, ну или узнать о каждой больше.
              </Typography>
            </div>
          </div>
        </WrapperTitle>
      </div>
      <div className="full-screen-section flex flex-col min-h-screen items-center bg-cover bg-no-repeat">
        <Wrapper>
          <div className="flex flex-col py-32">
            <div className="flex flex-col items-center justify-center mb-6">
              <Typography text_color="black" position="center" variant="block_title">
                Привилегии сервера
              </Typography>
              <Typography size="xl" position="center" className="text-dark-red dark:text-gold">
                привилегии и всё, что с ними связано
              </Typography>
            </div>
            <div defaultValue="subscriptions" className="flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
                {subList.map((item, idx) => (
                  <SubscriptionItem 
                    key={idx}
                    name={item.title} 
                    description={item.description} 
                    commands={item.commands}
                    rate={item.rate}
                    screenshot={item.screenshot}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
}