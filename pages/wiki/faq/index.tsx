import { faq } from '@/shared/content'
import Layout from '@/components/layout/Layout';
import Head from "next/head"
import WikiLayout from '@/components/layout/wiki-layout';

export default function Faq() {
  {/* todo: add article-item for article-section */}
  const content = faq.map((item, idx) => (
    <div className="flex flex-col items-center justify-center p-8 rounded-md bg-black/90 min-h-[200px] w-[350px]" key={idx}>
      <h1 className="text-white text-center text-xl md:text-2xl lg:text-3xl">
        {item.title}
      </h1>
    </div>
  ))

  return (
    <>
      <Head>
        <title>Часто задаваемые вопросы</title>
      </Head>
      <div className="flex flex-col gap-y-1">
        <div className="flex flex-col relative bg-neutral-900 px-6 py-6 rounded-sm gap-y-2">
          <div className="flex flex-col text-white">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white">Часто задаваемые вопросы</h1>
          </div>
        </div>
        <div className="flex flex-col bg-neutral-900 rounded-sm py-6 px-6 gap-y-2">
          <div className="flex flex-col text-white">
            <h1 className="text-xl lg:text-2xl text-neutral-400">Техническая часть</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-4">
            {content}
          </div>
        </div>
      </div>
    </>
  );
}

Faq.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <WikiLayout>
        {page}
      </WikiLayout>
    </Layout>
  )
}