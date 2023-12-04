import { ContactLink } from '@/components/section/contacts';
import { IntroTitle } from '@/components/section/intro';
import { Gameplay } from '@/components/section/gameplay';
import { Servers } from '@/components/section/servers';
import { CarouselImages } from '@/components/ui/carousels/carousel-images';
import Layout from '@/components/layout/Layout';

export default function General() {
  return (
    <>
      <IntroTitle />
      <Servers />
      <Gameplay />
      <ContactLink />
      <CarouselImages/>
    </>
  );
}

General.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}