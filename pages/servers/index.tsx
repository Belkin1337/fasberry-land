import Layout from '@/components/layout/Layout';
import Head from "next/head"

const serversList = [
  {
    name: "Bisquite Survival",
    versions: "1.19.4 - 1.20+",
    genre: "выживание, RP, RPG, квесты + вайб",
    image: "/images/server_bisquite.png"
  },
  {
    name: "Muffin",
    versions: "1.20.2 - 1.20+",
    genre: "[в разработке]",
    image: "/images/server_muffin.webp"
  }
]

export default function ServersList() {
  return (
    <>
      <Head>
        <title>Сервера</title>
      </Head>
      <div className="full-screen-section flex flex-col 2xl:flex-row justify-center items-center">
        <h1 className="absolute z-50 text-[#fabbfb] font-bold text-shadow-xl uppercase 22xl:text-7xl 2xl:text-6xl 2xl:text-5xl text-4xl">Сервера</h1>
        <div className="flex flex-col 2xl:flex-row items-center justify-between">
          <div className="flex flex-col h-screen overflow-hidden transform 2xl:rotate-6 2xl:scale-125 relative group w-full 2xl:w-1/2 2xl:border-r-4 2xl:border-[#00cdb0]">
            <img src="/images/server_bisquite.png" className="object-cover h-screen 2xl:group-hover:blur-[2px] 2xl:group-hover:duration-300 2xl:duration-300 cursor-pointer" />
            <div className="flex flex-col items-center 2xl:-rotate-6 absolute bottom-0 right-0 left-0 2xl:bottom-[104px] 2xl:left-12 2xl:-right-4 px-14 py-12 bg-black/50 backdrop-filter backdrop-blur-md
            opacity-100 2xl:opacity-0 2xl:group-hover:duration-300 2xl:duration-300 2xl:group-hover:opacity-100 ">
              <p className="text-bisquite-server-color text-2xl text-center">Bisquite Survival</p>
              <p className="text-neutral-400 text-xl">[1.19.4 - 1.20+]</p>
              <p className="text-white text-xl text-center">выживание, RP, RPG, квесты + вайб</p>
            </div>
          </div>
          <div className="h-screen overflow-hidden w-full 2xl:w-1/2 2xl:scale-125 relative 2xl:left-28 group transform 2xl:rotate-6 2xl:border-l-4 2xl:border-[#00cdb0]">
            <img src="/images/server_muffin.webp" className="object-cover h-screen 2xl:group-hover:blur-[2px] 2xl:group-hover:duration-300 duration-300 cursor-pointer"/>
            <div className="flex flex-col items-center 2xl:-rotate-6 absolute bottom-0 2xl:bottom-24 right-0 left-0 2xl:-left-4 2xl:right-16 px-14 py-12 bg-black/50 backdrop-filter backdrop-blur-md
            opacity-100 2xl:opacity-0 2xl:group-hover:duration-300 duration-300 2xl:group-hover:opacity-100 ">
              <p className="text-bisquite-server-color text-2xl text-center">Muffin</p>
              <p className="text-neutral-400 text-xl">[1.20.2 - 1.20+]</p>
              <p className="text-white text-xl text-center">[в разработке]</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ServersList.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}