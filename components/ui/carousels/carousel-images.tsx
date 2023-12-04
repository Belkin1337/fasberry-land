import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const animation = { duration: 96000, easing: (t: number) => t }

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
      "(min-width: 1000px)": {
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
    { title: "Капибара собственной персоной.", src: "/images/minecraft_screen_17.webp" },
    { title: "Именно такая у нас генерация.", src: "/images/village.webp" },
    { title: "Отель Отиз. Город Оффенбург.", src: "/images/minecraft_screen_14.webp" },
    { title: "R. T. X. (нет)", src: "/images/screen_11.webp" },
  ]  

  return (
    <>
      <div
        ref={sliderRef}
        className="flex flex-row images items-center justify-start py-12 lg:py-14 overflow-hidden relative">
        {images.map((item, idx) => (
          <div key={idx} className="keen-slider__slide group cursor-pointer relative">
            <div className="rounded-xl overflow-hidden h-full">
              <div className="flex flex-row items-end justify-start p-2 absolute top-0 right-0 left-0 z-10 w-full h-full
                group-hover:opacity-100 group-hover:bg-black/40 group-hover:transition group-hover:duration-500 duration-500 transition opacity-0">
                <p className="text-white text-lg xl:text-xl 2xl:text-2xl">
                  {item.title}
                </p>
              </div>
              <img src={item.src} className="object-contain h-max" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}