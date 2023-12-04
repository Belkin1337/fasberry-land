import Head from "next/head"

import { Overlay } from '@/components/wrappers/main-overlay';
import Layout from '@/components/layout/Layout';

import { WrapperTitle } from '@/components/wrappers/wrapper-title';
import { RulesList } from '@/components/section/rules-list';

export default function Rules() {
  return (
    <>
      <Head>
        <title>Правила</title>
      </Head>
      <div className="full-screen-section flex items-center justify-start bg-bottom md:bg-center" style={{ backgroundImage: `url("/images/minecraft_screen_13.webp")` }}>
        <Overlay />
        <WrapperTitle>
          <div className="flex flex-col w-full lg:max-w-4xl items-start justify-center px-8 md:px-16 lg:px-28 xl:px-32">
            <h1 className="text-left text-5xl lg:text-6xl xl:text-8xl text-gold text-shadow-xl mb-2">Правила</h1>
            <p className="text-left text-xl xl:text-3xl">Правила созданы для чего? Правильно, чтобы их не читать.</p>
          </div>
        </WrapperTitle>
      </div>
      <RulesList/>
    </>
  )
}

Rules.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}