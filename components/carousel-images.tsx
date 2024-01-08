import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { Dialog,  DialogContent, DialogTrigger } from "./ui/dialog"

const animation = {
  duration: 72000, easing: (t: number) => t
}

interface ScreenItemProps {
  title: string,
  src: string
}

const ScreenItem = ({ title, src }: ScreenItemProps) => {
  return (
    <>
      <div className="flex flex-row items-end justify-start p-2 absolute top-0 right-0 left-0 z-10 w-full h-full 
        md:group-hover:opacity-100 md:group-hover:bg-black/40 md:group-hover:transition md:group-hover:duration-500 duration-500 transition opacity-0"
      >
        <p className="text-white text-lg xl:text-xl 2xl:text-2xl">
          {title}
        </p>
      </div>
      <div className="overflow-hidden w-[220px] h-[260px] sm:w-[220px] sm:h-[320px] md:w-[360px] md:h-[410px] lg:w-[440px] lg:h-[350px] rounded-xl">
        <Image priority src={src} alt={title} fill />
      </div>
    </>
  )
}

export const CarouselImages = () => {
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

  const images = [
    { title: "Ночь на Бисквите.", src: "/images/minecraft_screen_10.webp" },
    { title: "Капибара собственной персоной.", src: "/images/minecraft_screen_5.webp" },
    { title: "Именно такая у нас генерация.", src: "/images/village.webp" },
    { title: "Отель «Отиз». Город Оффенбург.", src: "/images/minecraft_screen_14.webp" },
    { title: "Столовая «Пятка».", src: "/images/minecraft_screen_21.png" },
    { title: "Бар «Брат».", src: "/images/minecraft_screen_22.png" },
    { title: "Торговец Амадей и Шок.", src: "/images/minecraft_screen_23.png" },
    { title: "RTX в лужах (нет).", src: "/images/screen_11.webp" },
  ]

  return (
    <div ref={sliderRef} className="flex flex-row items-center justify-start py-24 lg:py-16 overflow-hidden relative">
      <div className="borders_up" />
      {images.map((item, idx) => (
        <div key={idx} className="keen-slider__slide group cursor-pointer relative">
          <Dialog modal>
            <DialogTrigger>
              <ScreenItem
                title={item.title}
                src={item.src}
              />
            </DialogTrigger>
            <DialogContent className="bg-black/80 lg:max-w-3xl xl:max-w-4xl max-w-xl border-0 mx-auto">
              <img src={item.src} alt={item.title} className="w-full h-full"/>
              <p className="text-white text-base">{item.title}</p>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
}