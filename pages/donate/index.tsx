
import Head from "next/head"
import { WrapperTitle } from '@/components/wrappers/wrapper-title';
import { Overlay } from "@/ui/overlay";
import { SubscriptionItem } from "@/components/subs";
import { Typography } from "@/ui/typography";
import { MainLayoutPage } from "@/components/layout";
import { donateList } from "@/shared/data/donate";

export default function Donate() {
  return (
    <>
      <Head>
        <title>Подписки</title>
        <meta name="keywords" content="Приобретение привилегий, подписки, fasberry донат, донат minecraft, minecraft fasberry" />
      </Head>
      <MainLayoutPage variant="with_section">
        <div className="full-screen-section flex items-center justify-start bg-bottom md:bg-center overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              `url("https://media.discordapp.net/attachments/904344676587417621/1197251168443834408/2024-01-17_21.42.43.png?ex=65ba960a&is=65a8210a&hm=ed256149a115bd8d84d344c63f2851a0a3ceb31a2b57f107cc04604585f2c3d3&=&format=webp&quality=lossless&width=1193&height=671")`
          }}>
          <Overlay />
          <WrapperTitle>
            <div className="flex flex-col items-start justify-center w-full lg:max-w-4xl px-4 sm:px-8 md:px-16 lg:px-28 xl:px-32">
              <div className="bg-black/60 rounded-xl p-4 lg:p-6">
                <Typography variant="page_title" position="left" shadow="lg" className="text-gold mb-2">
                  Покупка привилегий
                </Typography>
                <Typography position="left" className="text-lg xl:text-2xl">
                  Здесь можно купить привилегии, ну или узнать о каждой больше.
                </Typography>
              </div>
            </div>
          </WrapperTitle>
        </div>
        <div className="full-screen-section flex flex-col min-h-screen items-center bg-cover bg-no-repeat mx-auto w-[90%]">
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
                {donateList.map((item, idx) => (
                  <SubscriptionItem
                    key={idx}
                    id={item.id}
                    origin_name={item.origin_name}
                    name={item.name}
                    description={item.description.text}
                    price={item.price}
                    image={item.description.screen}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </MainLayoutPage>
    </>
  );
}