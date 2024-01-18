
import { Contacts } from '@/components/section/contacts';
import { IntroTitle } from '@/components/section/intro';
import { CarouselImages } from '@/components/carousel-images';
import Layout from '@/components/layout/Layout';
import { Community } from '@/components/section/community';
import { Status } from '@/components/status';
import { News } from '@/components/news';
import { Gameplay } from '@/components/section/gameplay';

export default function General() {
  return (
    <>
      <div className="weather snow z-1000">
        <IntroTitle />
      </div>
      <div className="full-screen-section">
        <div className="flex xl:flex-row flex-col py-24 mx-auto gap-y-12 xl:gap-y-6 group gap-x-4 lg:gap-x-4 xl:gap-x-8 2xl:gap-x-12 w-[90%]">
          <News />
          <div className="flex flex-col gap-y-6 w-full xl:w-1/2">
            <p className="text-white text-4xl">Cообщество</p>
            <Status />
            <Community />
          </div>
        </div>
      </div>
      <Gameplay/>
      <Contacts />
      <CarouselImages />
    </>
  );
}

General.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}