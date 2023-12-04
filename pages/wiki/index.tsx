import Head from "next/head"

import { FAQ } from '@/components/section/faq';
import Layout from '@/components/layout/Layout';
import { Wrapper } from '@/components/wrappers/main-wrapper';
import { NewsItem } from "@/components/ui/dialogs/news-item";
import { newsList } from "@/shared/content";

export default function Wiki() {
  return (
    <>
      <Head>
        <title>База знаний</title>
      </Head>
      <Wrapper>
        <div className="flex flex-col gap-y-4 py-32">
          <div className="flex flex-col relative bg-neutral-900 py-6 rounded-sm gap-y-2">
            <FAQ />
            <div className="flex flex-col grad-first-teal rounded-sm py-2 px-6">
              <p className="text-base md:text-lg">Добро пожаловать на вики проекта. Здесь расположено FAQ, рецепты редких преметов и многое другое.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-24 xl:py-0">
            <div className="flex flex-col relative bg-neutral-900 px-6 py-6 rounded-sm gap-y-2">
              <div className="flex flex-col text-white">
                <h1 className="text-xl lg:text-2xl text-neutral-400">Последние новости проекта</h1>
              </div>
              <div className='grid grid-flow-row auto-rows-max xl:grid-cols-3 md:grid-cols-2 gap-3'>
                {newsList.reverse().map((news) => (
                  <NewsItem
                    key={news.title}
                    title={news.title}
                    description={news.description}
                    image={news.image}
                    createdDate={news.datePublished}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

Wiki.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}