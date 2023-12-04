import '@/styles/globals.scss'
import Head from 'next/head'

import { type ReactElement, type ReactNode} from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import localFont from 'next/font/local'

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
        <meta property="description" content="Официальная страница майнкрафт-проекта Fasberry. Жанр: RP, RPG, modern, SMP. Ждём тебя в нашем дискорде или телеграмме. Гы!" />
        <meta name="url" content="http://fasberry.ru/"/>
        <meta name="robots" content="index, follow"/>
        <meta name="author" content="pureawake"/>
        <meta name="owner" content="pureawake"/>
        <meta name="copyright" content="pureawake"/>
        <meta name="reply-to" content="fank.tomphson@gmail.com"/>
        <meta property="keywords" content="fasberry, minecraft, майнкрафт, minecraft server, выживание, survival minecraft, survival, smp, fasberry project, minecraft fasberry, minecraft server play, майнкрафт сервер"/>
        <meta property="og:title" content="Fasberry Project" key="title" />
        <meta property="twitter:title" content="Fasberry Project" key="title" />
        <meta property="og:image" content="/images/minecraft_screen_14.webp" />
        <meta property="twitter:image" content="/images/minecraft_screen_14.webp" />
        <meta property="og:url" content="http://fasberry.ru/" />
        <meta property="twitter:url" content="http://fasberry.ru/" />
        <meta http-equiv="content-language" content="ru"/>
        <meta property="og:description" content="Сколько хороших и комфортных для вас майнкрафт-серверов вы знаете/знали? Теперь знаете на один больше."/>
        <meta property="og:site_name" content="Официальный сайт майнкрафт сервера Fasberry."/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" href="/fonts/Monocraft.otf" crossOrigin="" type="font/otf" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}