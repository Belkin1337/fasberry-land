import Head from "next/head"
import { Overlay } from '@/components/ui/overlay';
import { WrapperTitle } from '@/components/wrappers/wrapper-title';
import { RulesList } from '@/components/rules-list';
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Typography } from "@/components/ui/typography";

export default function RulesPage() {
  return (
    <>
      <Head>
        <title>Правила</title>
      </Head>
      <Header/>
      <div className="full-screen-section flex items-center justify-start bg-bottom md:bg-center"
        style={{
          backgroundImage: `url("https://cdn.discordapp.com/attachments/904344676587417621/1197634958408290406/minecraft_screen_13.webp?ex=65bbfb79&is=65a98679&hm=4ab397c0c45719831c9d9a56d3cf8f38aba84aa3c8a0fe47697cb841b7722366&")`
        }}>
        <Overlay variant="default" />
        <WrapperTitle>
          <div className="flex flex-col w-full lg:max-w-4xl items-start justify-center px-8 md:px-16 lg:px-28 xl:px-32">
            <div className="bg-black/60 rounded-xl p-4 lg:p-6">
              <Typography variant="page_title" position="left" shadow="xl" className="text-gold mb-2">
                Правила
              </Typography>
              <Typography position="left" className="text-xl xl:text-2xl">
                Правила созданы для чего? Правильно, чтобы их не читать.
              </Typography>
            </div>
          </div>
        </WrapperTitle>
      </div>
      <RulesList />
      <Footer/>
    </>
  )
}
