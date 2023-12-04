import Layout from "@/components/layout/Layout";
import type { Metadata } from "next"

import Head from "next/head"
import WikiLayout from "@/components/layout/wiki-layout";

export const metadata: Metadata = {
  title: "Рецепты"
}

export default function Recipes() {
  return (
    <>
      <Head>
        <title>Рецепты</title>
      </Head>
      <div className="flex flex-col gap-y-1 relative">
        <div className="flex flex-col relative bg-neutral-900 px-6 py-6 rounded-sm gap-y-2">
          <div className="flex flex-col text-white">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white">Рецепты</h1>
          </div>
        </div>
        <div className="flex flex-col bg-neutral-900 rounded-sm py-6 px-6 gap-y-2">
          <div className="flex flex-col text-white">
            <h1 className="text-xl lg:text-2xl text-neutral-400">Пока ничего нет ;</h1>
          </div>
          <div className="flex flex-wrap flex-row gap-x-6">
            <p className="text-red text-2xl"></p>
          </div>
        </div>
      </div>
    </>
  );
}

Recipes.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <WikiLayout>
        {page}
      </WikiLayout>
    </Layout>
  )
}