import { problems } from "@/shared/content";

import Head from "next/head"

import Layout from "@/components/layout/Layout";
import WikiLayout from "@/components/layout/wiki-layout";

export default function Problems() {
  const content = problems.map((item, idx) => (
    <div className="flex flex-col items-center justify-center p-8 rounded-md bg-black/90 min-h-[200px] w-[350px]" key={idx}>
      <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl">
        {item.title}
      </h1>
    </div>
  ))

  return (
    <>
      <Head>
        <title>Популярные проблемы</title>
      </Head>
      <div className="flex flex-col gap-y-1">
        <div className="flex flex-col relative bg-neutral-900 px-6 py-6 rounded-sm gap-y-2">
          <div className="flex flex-col text-white">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white">Проблемы</h1>
          </div>
        </div>
        <div className="flex flex-col bg-neutral-900 rounded-sm py-6 px-6 gap-y-2">
          <div className="flex flex-col text-white">
            <h1 className="text-xl lg:text-2xl text-neutral-400">Ресурс-пак</h1>
          </div>
          <div className="flex flex-wrap flex-row gap-x-6">{content}</div>
        </div>
      </div>
    </>
  );
}

Problems.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <WikiLayout>
        {page}
      </WikiLayout>
    </Layout>
  )
}