import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { JoinServer } from '@/components/ui/dialogs/join-server';
import { useState } from 'react';

export const IntroTitle = () => {
  const [opacities, setOpacities] = useState<number[]>([])
  const projectDesciption = [
    { title: "Атмосферный сервер", desc: "При создании сервера я учитывал множество факторов, основное из них - придание атмосферы и души.", descColor: '#00cdb0', },
    { title: "Тематика сервера", desc: "Здесь сочетаются элементы RP, RPG, а также немножко анархии.", descColor: '#8FFD8F', },
    { title: "Релиз", desc: "Релиз уже настал и я могу тебе честно сказать - это круто!", descColor: '#FABBFB', },
  ]

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
      <div className="full-screen-section flex flex-col items-start justify-center gap-y-6 group">
        <div className="absolute top-0 right-0 left-0 z-10 bg-black/30 min-h-screen group-hover:transition group-hover:duration-500 transition duration-500" />
        <div className="absolute top-0 right-0 left-0 overflow-hidden h-screen">
          <div className="w-full h-full absolute top-0 right-0 left-0 bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url("/images/winter.png")`
            }}
          />
        </div>
        <div className="w-[90%] flex justify-start mx-auto">
          <div ref={sliderRef} className="fader flex items-center relative z-20 w-full">
            {projectDesciption.map((item, idx) => (
              <div key={item.title} className="fader__slide w-full lg:w-2/4 xl:w-2/5 2xl-w-2/6 cursor-pointer absolute" style={{ opacity: opacities[idx] }}>
                <div className="flex flex-col w-full lg:max-w-xl justify-start h-[260px] md:h-[280px] lg:h-[360px] bg-black/60 rounded-xl p-4 lg:p-6">
                  <h1 className="text-shadow-xl mb-4 text-4xl lg:text-6xl" style={{ color: `${item.descColor}` }}>{item.title}</h1>
                  <h2 className="mb-1 text-shadow-xl text-lg lg:text-3xl">{item.desc}</h2>
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
    </>
  )
}