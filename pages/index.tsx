

import { Contacts } from '@/components/section/contacts';
import { IntroTitle } from '@/components/section/intro';
import { CarouselImages } from '@/components/carousel-images';
import Layout from '@/components/layout/Layout';
import { News } from '@/components/section/news';

export default function General() {
  return (
    <>
      <div className="weather snow z-1000">
        <IntroTitle />
      </div>
      <News/>
      <Contacts/>
      <CarouselImages />
    </>
  );
}

General.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}