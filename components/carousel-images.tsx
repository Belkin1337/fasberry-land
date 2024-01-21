import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import { Dialog,  DialogContent, DialogTrigger } from "./ui/dialog"
import "keen-slider/keen-slider.min.css"

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

  const images = [{ 
      title: "Ночь на Бисквите.", 
      src: "https://cdn.discordapp.com/attachments/904344676587417621/1197251043176751164/minecraft_screen_10.webp?ex=65ba95ec&is=65a820ec&hm=74820af6a26ec0f20b18f72afcac9fa88813d874d021595304d7c3645a8de28b&" 
    }, { 
      title: "Капибара собственной персоной.", 
      src: "https://cdn.discordapp.com/attachments/904344676587417621/1197251042413379594/minecraft_screen_5.webp?ex=65ba95ec&is=65a820ec&hm=7e9826b846066a7f69778a69548b38760d744d4e62758cce645c5b1522d70ca8&" 
    }, { 
      title: "Именно такая у нас генерация.", 
      src: "https://cdn.discordapp.com/attachments/904344676587417621/1197633995706478732/village.webp?ex=65bbfa93&is=65a98593&hm=3ec1b76ad65bef91b705b7e02dfe821ca8bc410497f5fcc199857069c711e0a5&" 
    }, { 
      title: "Отель «Отиз». Город Оффенбург.", 
      src: "https://cdn.discordapp.com/attachments/904344676587417621/1197251044133064754/minecraft_screen_14.webp?ex=65ba95ec&is=65a820ec&hm=2129aad6295d330b539443e63e786364024ba5bc3e1f7e4573af836a3d2f2649&" 
    }, { 
      title: "Столовая «Пятка».", 
      src: "https://cdn.discordapp.com/attachments/904344676587417621/1197251045915644005/minecraft_screen_21.png?ex=65ba95ed&is=65a820ed&hm=195c00f2ddd1c031071d6db1a7ea0e1f9cd81d59d4dcadcade92a2b166ee33a6&" 
    }, { 
      title: "Бар «Брат».", 
      src: "https://cdn.discordapp.com/attachments/904344676587417621/1197251046582526073/minecraft_screen_22.png?ex=65ba95ed&is=65a820ed&hm=8bb9ac4fa564efacb2bbf6fbd7efa7560a5fb12b51433c680fb77d264d6032cc&" 
    }, { 
      title: "Торговец Амадей и Шок.", 
      src: "https://cdn.discordapp.com/attachments/904344676587417621/1197251048482558022/minecraft_screen_23.png?ex=65ba95ed&is=65a820ed&hm=e6313f8a44720945559ea6b1b5ae1b976abc0876b7fe84895af013f872b0768b&" 
    }, { 
      title: "RTX в лужах (нет).", 
      src: "https://cdn.discordapp.com/attachments/904344676587417621/1197634181019222206/screen_11.webp?ex=65bbfabf&is=65a985bf&hm=7eb66fb74a2a6c6aad038d9caac2fb8c564eac0025e3e38e0dc483c96014012f&"
    },
  ]

  return (
    <div ref={sliderRef} className="flex flex-row items-center justify-start py-24 lg:py-16 overflow-hidden relative bg-background-dark">
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
              <Image 
                src={item.src} 
                alt={item.title} 
                width={1000}
                height={800}
                className="w-full h-full"
              />
              <p className="text-white text-base">{item.title}</p>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
}