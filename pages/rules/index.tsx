import Head from "next/head"
import Layout from '@/components/layout/Layout';
import { Overlay } from '@/components/wrappers/main-overlay';
import { WrapperTitle } from '@/components/wrappers/wrapper-title';
import { RulesList } from '@/components/section/rules-list';

export default function RulesPage() {
  return (
    <>
      <Head>
        <title>Правила</title>
      </Head>
      <div className="full-screen-section flex items-center justify-start bg-bottom md:bg-center" 
      style={{ 
        backgroundImage: `url("https://cdn.discordapp.com/attachments/904344676587417621/1197634958408290406/minecraft_screen_13.webp?ex=65bbfb79&is=65a98679&hm=4ab397c0c45719831c9d9a56d3cf8f38aba84aa3c8a0fe47697cb841b7722366&")` 
        }}>
        <Overlay />
        <WrapperTitle>
          <div className="flex flex-col w-full lg:max-w-4xl items-start justify-center px-8 md:px-16 lg:px-28 xl:px-32">
            <h1 className="text-left text-5xl lg:text-6xl xl:text-8xl text-gold text-shadow-xl mb-2">Правила</h1>
            <p className="text-left text-xl xl:text-3xl">Правила созданы для чего? Правильно, чтобы их не читать.</p>
          </div>
        </WrapperTitle>
      </div>
      <RulesList />
    </>
  )
}

RulesPage.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}