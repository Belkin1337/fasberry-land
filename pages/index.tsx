import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { CarouselImages } from '@/components/carousel-images';
import { Status } from '@/components/status';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { commuinityGallery, contacts, gameplay, news, projectDesciption } from '@/shared/content';
import { Wrapper } from '@/components/wrappers/main-wrapper';
import { JoinServer } from '@/components/join-server';
import { Typography } from '@/components/ui/typography';
import { Block } from '@/components/ui/block';
import Image from "next/image"
import Link from "next/link"

export default function General() {
  const [opacities, setOpacities] = useState<number[]>([])

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: projectDesciption.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map((slide) => slide.portion)
      setOpacities(new_opacities)
    },
  })

  return (
    <>
      <Header />
      <div className="weather snow z-1000">
        <div className="full-screen-section flex flex-col items-start justify-center gap-y-6 group">
          <div className="absolute top-0 right-0 left-0 z-10 bg-black/30 min-h-screen group-hover:transition group-hover:duration-500 transition duration-500" />
          <div className="absolute top-0 right-0 left-0 overflow-hidden h-screen">
            <div className="w-full h-full absolute top-0 right-0 left-0 bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url("/images/winter.webp")`
              }}
            />
          </div>
          <div className="w-[90%] flex justify-start mx-auto">
            <div ref={sliderRef} className="fader flex items-center relative z-20 w-full">
              {projectDesciption.map((item, idx) => (
                <div
                  key={item.title}
                  className="fader__slide w-full lg:w-2/4 xl:w-2/5 2xl-w-2/6 cursor-pointer absolute"
                  style={{
                    opacity: opacities[idx]
                  }}
                >
                  <div className="flex flex-col w-full lg:max-w-xl justify-start h-[260px] md:h-[280px] lg:h-[360px] bg-black/60 rounded-xl p-4 lg:p-6">
                    <h1 className="text-shadow-xl mb-4 text-4xl lg:text-6xl"
                      style={{
                        color: `${item.descColor}`
                      }}>
                      {item.title}
                    </h1>
                    <h2 className="mb-1 text-shadow-xl text-lg lg:text-3xl">
                      {item.desc}
                    </h2>
                  </div>
                </div>
              ))}
              <div className="flex-col relative top-40 w-full lg:w-2/4 xl:w-2/5 2xl:w-2/6 md:top-44 lg:top-56 lg:flex-row gap-4 items-center hidden md:flex">
                <JoinServer />
              </div>
              <div className="flex-col relative top-40 w-full lg:w-2/4 xl:w-2/5 2xl:w-2/6 lg:top-56 lg:flex-row gap-4 items-center md:hidden flex">
                <div className="flex items-center justify-center relative w-full h-[54px] lg:h-[64px] border border-black rounded-md
                bg-black/10 z-20 cursor-pointer 
                  hover:shadow-[inset_24px_0px_0px_#fff] hover:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] 
                  hover:from-[#00cdb0] hover:via-[#a976f8] hover:to-[#ffc0cb] 
                  hover:duration-700 hover:transition transition hover:ease-out duration-500">
                  <p className="text-white text-shadow-xl font-bold text-xl lg:text-2xl" onClick={() => navigator.clipboard.writeText('play.fasberry.ru')}>
                    IP: play.fasberry.ru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="full-screen-section">
        <div className="flex xl:flex-row flex-col py-24 mx-auto gap-y-12 xl:gap-y-6 group gap-x-4 lg:gap-x-4 xl:gap-x-6 2xl:gap-x-8 w-[90%]">
          <div className="flex flex-col gap-y-6">
            <Typography text_color="black" className="text-3xl lg:text-4xl">
              Новости
            </Typography>
            {news.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger className="flex flex-col rounded-xl block-item p-1 overflow-hidden">
                  <div className="h-[220px] w-full sm:h-[360px] md:h-[420px] xl:w-[920px] xl:h-[500px] overflow-hidden rounded-t-xl bg-black">
                    <Image layout="responsive" loading="lazy" width={920} height={220} src={item.image} className="w-full h-full object-cover" alt="News" />
                  </div>
                  <div className="flex flex-col items-start relative rounded-b-xl self-end bg-black/80 dark:bg-black py-2 px-2 lg:py-4 lg:px-4 w-full gap-y-2 max-h-[96px] lg:h-[114px]">
                    <p className="text-white text-left font-normal text-base lg:text-3xl">{item.title}</p>
                    <p className="text-neutral-400 text-sm lg:text-lg font-normal">{item.date}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="flex flex-col w-[90%] mx-auto xl:flex-row bg-black/80 border border-neutral-900 rounded-xl p-2 w-6xl backdrop-filter backdrop-blur-md overflow-hidden gap-x-6">
                  <div className="h-[220px] sm:h-[360px] md:h-[420px] xl:w-2/3 xl:h-6/7 w-full overflow-hidden">
                    <Image
                      layout="responsive"
                      loading="lazy"
                      width={1024}
                      height={220}
                      src={item.image}
                      className="rounded-xl object-cover w-full h-full"
                      alt="News"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full xl:w-3/4 py-4">
                    <div className="flex flex-col gap-y-4">
                      <p className="text-project-color font-normal text-xl lg:text-3xl">{item.title}</p>
                      <p className="text-white font-normal text-md lg:text-xl">{item.body}</p>
                    </div>
                    <p className="text-neutral-400 text-sm self-end lg:text-base font-normal">{item.date}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          <div className="flex flex-col gap-y-6 w-full xl:w-1/2">
            <Typography text_color="black" className="text-3xl lg:text-4xl">
              Cообщество
            </Typography>
            <Status />
            <Block blockItem type="column" size="normal" rounded="big" className="h-max gap-y-8">
              <Typography className="text-xl lg:text-2xl">
                Скриншоты от игроков
              </Typography>
              <div className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-3 auto-rows-auto gap-2">
                {commuinityGallery.map((item, idx) => (
                  <Dialog key={idx}>
                    <DialogTrigger>
                      <div className="flex flex-col rounded-xl overflow-hidden">
                        <Image
                          width={1280}
                          height={720}
                          src={item}
                          loading="lazy"
                          alt="commuinity"
                          className="w-full sm:h-[60px] md:h-[120px] lg:w-[250px] lg:h-[136px] object-cover hover:brightness-50 cursor-pointer hover:duration-300 duration-300"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="w-4xl mx-auto w-[90%] bg-black/80 border p-2 border-neutral-900 rounded-xl">
                      <Carousel opts={{
                        loop: true
                      }}>
                        <CarouselContent>
                          {commuinityGallery.map((item, index) => (
                            <CarouselItem key={index}>
                              <Image
                                src={item}
                                width={1280}
                                loading="lazy"
                                height={720}
                                alt="commuinity"
                                className="w-full object-cover cursor-pointer h-full rounded-xl"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </Block>
          </div>
        </div>
      </div>
      <div className="full-screen-section flex flex-col items-center">
        <div className="flex flex-col lg:flex-row">
          {gameplay.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-end w-full min-h-screen lg:w-1/3 bg-top relative bg-cover lg:bg-center border-0 lg:border-r-2 border-project-color"
              style={{
                backgroundImage: `url(${item.image})`
              }}>
              <div className="absolute right-0 left-0 bg-gradient-to-b from-background-dark to-25% to-transparent min-h-screen bg-opacity-70" />
              <div className="absolute right-0 left-0 bg-gradient-to-t from-background-dark to-transparent min-h-screen bg-opacity-70" />
              <div className="flex flex-col items-center justify-center gap-y-2 py-16 px-6 relative bg-black bg-opacity-60 h-[360px]">
                <h1 className="text-2xl md:text-3xl 2xl:text-5xl text-red text-center">
                  {item.name}
                </h1>
                <p className="text-xl md:text-2xl 2xl:text-3xl text-white text-center">
                  {item.description}
                </p>
              </div>
              <div className="borders_up xl:hidden" />
              <div className="borders_down xl:hidden" />
            </div>
          ))}
        </div>
      </div>
      <div className="full-screen-section flex flex-col items-center justify-center py-32 xl:py-0">
        <Wrapper>
          <div className="flex flex-col gap-y-12">
            <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-7xl text-center">
              Где ещё существует проект?
            </h2>
            <div className="flex flex-col md:flex-row gap-x-4 gap-y-6 justify-between">
              {contacts.map((item) => (
                <div key={item.name} className="flex p-0 flex-col justify-between rounded-xl block-item">
                  <Block blockItem rounded="big" size="big" type="column">
                    <Typography className="text-[#fabbfb] text-3xl lg:text-4xl xl:text-5xl mb-4">
                      {item.name}
                    </Typography>
                    <h1 className="text-green text-lg xl:text-3xl text-left">+:</h1>
                    {item.content.map((item) => (
                      item.pluses && item.pluses.map((plus, plusIndex) => (
                        <Typography key={plusIndex} size="lg">
                          &gt;&nbsp;{plus}
                        </Typography>
                      ))
                    ))}
                    <h1 className="mt-2 xl:mt-3 text-rose-500 text-lg xl:text-3xl text-left">-:</h1>
                    {item.content.map((item) => (
                      item.minuses && item.minuses.map((minus, minusIndex) => (
                        <Typography key={minusIndex} size="xl">
                          &gt;&nbsp;{minus}
                        </Typography>
                      ))
                    ))}
                    <Link href={item.href} className="flex flex-row items-center gap-x-4 brightness-110 mt-4 py-4 cursor-pointer group">
                      <item.icon className="fill-white" size={32} />
                      <span className="text-white text-lg">Перейти в {item.name}!</span>
                    </Link>
                  </Block>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
      <CarouselImages />
      <Footer />
    </>
  );
}