import Image from "next/image"
import Link from "next/link"
import dynamic from 'next/dynamic'
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose
} from '@/ui/dialog';
import {
  commuinityGallery,
  contacts,
  gallery,
  gameplay,
  projectDesciption
} from '@/shared/data';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/ui/tooltip';
import { Typography } from '@/ui/typography';
import { Block } from '@/ui/block';
import { MainLayoutPage } from '@/components/layout';
import { useToast } from "@/ui/use-toast";
import { Button } from "@/ui/button";
import { NewsItem } from "@/components/news/item";
import { Overlay } from "@/ui/overlay";
import { ScreenItem } from "@/components/intro/item";
import "keen-slider/keen-slider.min.css"
import { Status } from "@/components/intro/status/item";
import { news } from "@/shared/data/news";

const ReqProvider = dynamic(() =>
  import('../providers/request-provider')
    .then((mod) => ({
      default: mod.ReqProvider
    }))
)

export default function General() {
  const { toast } = useToast();
  const [opacities, setOpacities] = useState<number[]>([]);

  const actionCopyboard = () => {
    navigator.clipboard.writeText('play.fasberry.ru')
    toast({
      title: "IP успешно скопирован!",
      variant: "neutral",
      action:
        <Image
          width={40}
          height={40}
          alt="IP copied!"
          loading="lazy"
          src="/images/minecraft/icons/book_big.webp"
        />
    })
  }

  const animation = {
    duration: 72000, easing: (t: number) => t
  }

  const [sliderRef_carousel] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 24 },
      },
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 24 },
      },
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 24 }
      },
      "(min-width: 860px)": {
        slides: { perView: 2, spacing: 24 }
      },
      "(min-width: 1500px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
    created(s) {
      s.moveToIdx(3, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  const [sliderRef_commuinity] = useKeenSlider<HTMLDivElement>({
    slides: projectDesciption.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map((slide) => slide.portion)
      setOpacities(new_opacities)
    },
  })

  return (
    <MainLayoutPage variant="with_section">
      <div className="full-screen-section flex flex-col items-start justify-center group">
        <div className="absolute top-0 right-0 left-0 overflow-hidden h-screen">
          <div className="w-full h-full absolute top-0 right-0 left-0 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url("/images/winter.webp")` }}
          />
          <Overlay variant="default" />
        </div>
        <ReqProvider />
        <div className="w-[90%] mx-auto">
          <div ref={sliderRef_commuinity} className="fader flex items-center relative z-20 w-full ">
            {projectDesciption.map((item, idx) => (
              <div key={item.title} className="fader__slide max-w-xl cursor-pointer absolute"
                style={{ opacity: opacities[idx] }}>
                <div className="flex flex-col w-full lg:max-w-xl justify-start h-[260px] md:h-[280px] lg:h-[360px] bg-black/80 rounded-xl p-4 lg:p-6">
                  <Typography className="text-project-color-pink mb-4 text-4xl lg:text-6xl">
                    {item.title}
                  </Typography>
                  <Typography shadow="xl" className="text-white text-lg lg:text-3xl">
                    {item.desc}
                  </Typography>
                </div>
              </div>
            ))}
            <div className="flex-col relative top-40 w-full lg:w-2/4 xl:w-2/5 2xl:w-2/6 md:top-44 lg:top-56 lg:flex-row gap-4 items-center hidden md:flex">
              <Dialog>
                <DialogTrigger asChild className="w-full">
                  <Button
                    variant="blurred"
                    shadow="swipe"
                    className="w-full h-[54px] lg:h-[64px] hover:from-[#00cdb0] hover:via-[#a976f8] hover:to-[#ffc0cb]"
                  >
                    <Typography className="!text-white text-2xl text-shadow-xl">
                      Начать играть
                    </Typography>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl h-3/4 bg-transparent border-none p-0">
                  <div className="flex justify-center items-center bg-repeat border-4 border-black h-full w-full"
                    style={{ backgroundImage: `url("/images/static/dirt.png")` }}>
                    <div className="flex flex-col gap-y-6 justify-between">
                      <div className="flex flex-col gap-y-2">
                        <Typography className="text-neutral-400" size="base">
                          Название сервера
                        </Typography>
                        <div className="bg-black py-2 px-2 border-2 border-neutral-500 w-100 md:w-96">
                          <Typography size="base" position="left" className="text-white">
                            Сервер Minecraft
                          </Typography>
                        </div>
                        <Typography size="base" className="text-neutral-400">
                          Адрес сервера
                        </Typography>
                        <TooltipProvider delayDuration={1}>
                          <Tooltip>
                            <TooltipTrigger>
                              <Typography
                                size="base"
                                position="left"
                                onClick={() => actionCopyboard()}
                                className="cursor-pointer bg-black py-2 px-2 border-2 text-white border-neutral-500 w-100 md:w-96"
                              >
                                play.fasberry.ru
                              </Typography>
                            </TooltipTrigger>
                            <TooltipContent>
                              <Typography size="lg" className="text-neutral-400">
                                Скопировать IP
                              </Typography>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <TooltipProvider delayDuration={1}>
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="button w-full md:w-96 px-2 py-1">
                                <Typography
                                  shadow="xl"
                                  className="text-shadow-xl text-[0.8rem] lg:text-base text-white"
                                  position="center"
                                >
                                  Наборы ресурсов: Включены
                                </Typography>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="w-[460px]">
                              <Typography size="lg" className="text-neutral-400">
                                На сервере используется свой ресурспак. Эту опцию рекомендуется оставить включенной!
                              </Typography>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <DialogClose>
                          <div className="button w-full md:w-96 px-2 py-1">
                            <Typography className="text-shadow-xl text-[0.8rem] text-white lg:text-base" position="center">
                              Готово
                            </Typography>
                          </div>
                        </DialogClose>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex-col relative top-40 w-full lg:w-2/4 xl:w-2/5 2xl:w-2/6 lg:top-56 lg:flex-row gap-4 items-center md:hidden flex">
              <Button
                onClick={() => actionCopyboard()}
                variant="blurred"
                shadow="swipe"
                className="w-full h-[54px] lg:h-[64px] hover:from-[#00cdb0] hover:via-[#a976f8] hover:to-[#ffc0cb]"
              >
                <Typography shadow="xl" className="font-bold text-xl">
                  IP: play.fasberry.ru
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="full-screen-section flex flex-col items-center">
        <div className="flex flex-col lg:flex-row">
          {gameplay.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-end w-full min-h-screen 
              lg:w-1/3 relative bg-top bg-cover lg:bg-center border-0 lg:border-r-2 border-project-color"
              style={{ backgroundImage: `url(${item.image})` }}>
              <Overlay />
              <div className="flex flex-col items-center justify-center gap-y-2 py-16 px-6 relative bg-black bg-opacity-60 h-[360px]">
                <h1 className="text-2xl md:text-3xl 2xl:text-5xl text-red text-center">
                  {item.name}
                </h1>
                <Typography position="center" className="text-xl md:text-2xl 2xl:text-3xl">
                  {item.description}
                </Typography>
              </div>
              <div className="borders_up xl:hidden" />
              <div className="borders_down xl:hidden" />
            </div>
          ))}
        </div>
      </div>
      <div className="full-screen-section">
        <div className="flex xl:flex-row flex-col py-24 mx-auto gap-y-12 xl:gap-y-6 group gap-x-6 w-[90%]">
          <div className="flex flex-col gap-y-6">
            <Typography text_color="black" className="text-3xl lg:text-4xl">
              Новости
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-4">
              {news.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger className="rounded-xl overflow-hidden">
                    <div className="h-[200px] lg:h-[400px] w-full overflow-hidden">
                      <Image
                        loading="lazy"
                        width={500}
                        height={220}
                        src={item.image}
                        className="min-h-[400px] w-full h-full object-cover"
                        alt="News"
                      />
                    </div>
                    <div className="flex flex-col justify-between items-start overflow-hidden bg-black/80 dark:bg-black p-2 w-full gap-y-2 max-h-[96px]">
                      <Typography color="black" position="left" size="xl" className="text-project-color truncate">
                        {item.title}
                      </Typography>
                      <Typography color="black" size="lg" className="text-neutral-400">
                        {item.date}
                      </Typography>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="flex flex-col xl:flex-row rounded-xl p-2 w-6xl overflow-hidden gap-x-6">
                    <NewsItem
                      image={item.image}
                      body={item.body}
                      title={item.title}
                      date={item.date}
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
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
                      <div className="flex flex-col rounded-xl overflow-hidden cursor-pointer hover:duration-300 hover:brightness-50 duration-300">
                        <Image
                          width={1280}
                          height={720}
                          src={item}
                          loading="lazy"
                          alt="commuinity"
                          className="w-full sm:h-[60px] md:h-[120px] lg:w-[250px] lg:h-[136px] object-cover"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="w-4xl border p-2 rounded-xl">
                      <Image
                        src={item}
                        width={1280}
                        loading="lazy"
                        height={720}
                        alt="commuinity"
                        className="w-full object-cover h-full rounded-xl"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </Block>
          </div>
        </div>
      </div>
      <div className="full-screen-section flex flex-col items-center justify-center py-32 xl:py-0">
        <div className="flex flex-col gap-y-12 w-[90%] mx-auto">
          <h2 className="text-3xl md:text-6xl lg:text-6xl xl:text-7xl text-center text-red">
            Где ещё существует проект?
          </h2>
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-6 justify-between">
            {contacts.map((item) => (
              <Block key={item.name} blockItem rounded="big" size="big" type="column">
                <Typography className="text-project-color-pink text-3xl lg:text-4xl xl:text-5xl mb-4">
                  {item.name}
                </Typography>
                <h1 className="text-green text-lg xl:text-3xl">
                  +:
                </h1>
                {item.content.map((item) => (
                  item.pluses && item.pluses.map((plus, plusIndex) => (
                    <Typography key={plusIndex} size="lg">
                      &gt;&nbsp;{plus}
                    </Typography>
                  ))
                ))}
                <h1 className="mt-2 xl:mt-3 text-rose-500 text-lg xl:text-3xl">
                  -:
                </h1>
                {item.content.map((item) => (
                  item.minuses && item.minuses.map((minus, minusIndex) => (
                    <Typography key={minusIndex} size="xl">
                      &gt;&nbsp;{minus}
                    </Typography>
                  ))
                ))}
                <Link href={item.href} className="flex flex-row items-center gap-x-4 group brightness-110 mt-4 py-4 cursor-pointer group">
                  <item.icon className="fill-white group-hover:fill-[#fabbfb] duration-300 group-hover:duration-300" size={32} />
                  <Typography size="lg">
                    Перейти в {item.name}!
                  </Typography>
                </Link>
              </Block>
            ))}
          </div>
        </div>
      </div>
      <div ref={sliderRef_carousel} className="flex flex-row items-center justify-start py-24 lg:py-16 overflow-hidden relative">
        <div className="borders_up" />
        {gallery.map((item, idx) => (
          <div key={idx} className="keen-slider__slide group cursor-pointer relative">
            <Dialog modal>
              <DialogTrigger>
                <ScreenItem
                  title={item.title}
                  src={item.src}
                />
              </DialogTrigger>
              <DialogContent className="lg:max-w-5xl xl:max-w-6xl max-h-[720px] w-[90%] mx-auto  border p-2 border-neutral-900 rounded-xl">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={1000}
                  height={800}
                  className="w-full h-full rounded-xl"
                />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </MainLayoutPage>
  );
}