import '@/styles/globals.css'
import '@/styles/minecraft-weather.css'
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head'

import { type ReactElement, type ReactNode} from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import localFont from 'next/font/local'
import { ToastContainer } from 'react-toastify';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const font = localFont({ 
  src: '../public/fonts/Monocraft.otf' 
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  
  return getLayout(
    <>
      <Head>
        <title>Fasberry</title>
        <meta name="title" content="Fasberry"/>
        <meta name="description" content="Официальная страница майнкрафт-проекта Fasberry. Жанр: RP, RPG, полу-ванила. Ждём тебя в нашем дискорде или телеграмме. Гы!" />
        <meta name="url" content="http://fasberry.ru/"/>
        <meta name="robots" content="index, follow"/>
        <meta name="author" content="pureawake"/>
        <meta name="owner" content="pureawake"/>
        <meta name="copyright" content="pureawake"/>
        <meta name="reply-to" content="fank.tomphson@gmail.com"/>
        <meta property="keywords" content="
        fasberry, фесберри, фесберри проект, фасберри, fasberryproject, minecraft, майнкрафт, майнкрафт играть, minecraft play, сервера майнкрафт бесплатно, список серверов майнкрафта, 
        полу-ванильные сервера майнкрафта, полуванила майнкрафт, rp сервер майнкрафт, rpg сервер майнкрафт, rp rpg сервер майнкрафт, город в майнкрафте сервер,
        minecraft server, выживание, survival minecraft, survival, smp, fasberry project, minecraft fasberry, minecraft server play, майнкрафт сервер"/>
        <meta property="og:title" content="Fasberry Project" key="title" />
        <meta property="twitter:title" content="Fasberry Project" key="title" />
        <meta property="og:image" content="/images/alex_in_cave.jpg" />
        <meta property="twitter:image" content="/images/alex_in_cave.jpg" />
        <meta property="og:url" content="http://fasberry.ru/" />
        <meta property="twitter:url" content="http://fasberry.ru/" />
        <meta httpEquiv="content-language" content="ru"/>
        <meta property="og:description" content="Сколько хороших и комфортных для вас майнкрафт-серверов вы знаете/знали? Теперь знаете на один больше."/>
        <meta property="og:site_name" content="Официальный сайт майнкрафт сервера Fasberry."/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="Ed0r_TcL9H1r4PN-h_19cs2Tuk_mzVL7bteUNsSgAQc" />
        <link rel="preload" href="/fonts/Monocraft.otf" as="font" crossOrigin='' type="font/otf" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main className={font.className}>
      <ToastContainer/>
        <Component {...pageProps} />
      </main>
    </>
  )
}