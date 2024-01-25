import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import "keen-slider/keen-slider.min.css"
import { gallery } from "@/shared/content"
import { Typography } from "../ui/typography"

const ScreenItem = ({ title, src }: { title: string, src: string }) => {
  return (
    <>
      <div className="flex flex-row items-end justify-start p-2 absolute top-0 right-0 left-0 z-10 w-full h-full 
        md:group-hover:opacity-100 md:group-hover:bg-black/50 md:group-hover:transition md:group-hover:duration-500 duration-500 transition opacity-0">
        <Typography className="text-lg xl:text-xl 2xl:text-2xl">
          {title}
        </Typography>
      </div>
      <div className="overflow-hidden w-[220px] h-[260px] sm:w-[220px] sm:h-[320px] md:w-[360px] md:h-[410px] lg:w-[440px] lg:h-[350px]">
        <Image
          loading="lazy"
          src={src}
          alt={title}
          fill
          className="rounded-xl"
        />
      </div>
    </>
  )
}

export const CarouselImages = () => {
  const animation = {
    duration: 72000, easing: (t: number) => t
  }

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
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

  return (
    <div ref={sliderRef} className="flex flex-row items-center justify-start py-24 lg:py-16 overflow-hidden relative bg-background-dark">
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
            <DialogContent className="lg:max-w-3xl xl:max-w-4xl w-[90%] mx-auto bg-black/80 border p-2 border-neutral-900 rounded-xl">
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
  );
}