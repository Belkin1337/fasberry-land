import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { WrapperTitle } from '../wrappers/wrapper-title';
import { JoinServer } from '@/components/ui/dialogs/join-server';

export const IntroTitle = () => {
  const projectDesciption = [
    { title: "Cамый гениальный сервер.", desc: "Проект который ты возможно искал долгое время. Сервер не претендует на титул лучшего в мире, но может быть иначе?", descColor: '#00E375', },
    { title: "Самый мудрый сервер.", desc: "Этот проект подарит вам расслабленные моменты, оправдав тем самым ожидания... или нет?", descColor: '#8FFD8F', },
    { title: "Скорорелизный сервер.", desc: "Этот проект когда-нибудь откроется. Абсолютно точно!", descColor: '#A976F8', },
  ]

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    { loop: true, },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 6000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div className="full-screen-section flex flex-col items-start justify-center gap-y-6 group">
        <div className="absolute top-0 right-0 left-0 z-10 bg-black/40 min-h-screen group-hover:bg-black/70 group-hover:transition group-hover:duration-500 transition duration-500" />
        <div className="absolute top-0 right-0 left-0 overflow-hidden h-screen">
          <div className="w-full h-full absolute top-0 right-0 left-0">
            <video className="h-full object-cover scale-[1.7] md:scale-[1.3]" autoPlay muted poster="/images/preview/render_preview.png" loop controls tabIndex={0}>
              <source
                width="1920"
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                height="1080"
                src="https://dl.dropboxusercontent.com/scl/fi/ycka5k8zuhc6bukxzh9lf/render2.mp4?rlkey=wv9n4zvmo0yjh2etb9c0wxvdk&dl=0"
              />
            </video>
          </div>
        </div>
        <div ref={sliderRef} className="keen-slider flex flex-row items-end z-20 px-8 md:px-16 lg:px-28 xl:px-32">
          {projectDesciption.map((item) => (
            <div key={item.title} className="keen-slider__slide relative">
              <WrapperTitle>
                <div className="flex flex-col w-full lg:max-w-xl items-center justify-start">
                  <h1 className={`text-shadow-xl mb-4 text-4xl md:text-6xl`} style={{ color: `${item.descColor}` }}>
                    {item.title}
                  </h1>
                  <h2 className="mb-1 text-shadow-xl text-lg md:text-3xl">{item.desc}</h2>
                </div>
              </WrapperTitle>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-4 w-full items-center px-8 md:px-16 lg:px-28 xl:px-32">
          <JoinServer />
        </div>
      </div>
    </>
  )
}