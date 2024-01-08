
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { Contacts } from '@/components/section/contacts';
import { IntroTitle } from '@/components/section/intro';
import { CarouselImages } from '@/components/carousel-images';
import Layout from '@/components/layout/Layout';
import { Home } from '@/components/section/news';

type Status = {
  online: boolean,
  players: {
    online: number,
    max: number
  }
}

export const getStaticProps = (async (context) => {
  const url = new URL('https://api.mcstatus.io/v2/status/java/play.fasberry.ru');
  url.searchParams.set('timeout', '30');

  const res = await fetch(url);
  const status = await res.json()

  return { props: { status } }
}) satisfies GetStaticProps<{
  status: Status
}>

export default function General({ status }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="weather snow z-1000">
        <IntroTitle />
      </div>
      <Home
        online={status.online}
        players={status.players}
      />
      <Contacts />
      <CarouselImages />
    </>
  );
}

General.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}