import { useState } from 'react'
import Image from "next/image"

interface ServerItemProps {
  image: string,
  title: string,
  description: string
}

const ServerItem = ({ image, title, description }: ServerItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex full-page-section overflow-hidden items-center justify-center bg-background-dark"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={image} alt={title} width={1000} height={600} priority
        className={`${image === "/images/muffin.webp" ? 'blur-md' : ''} h-screen cursor-pointer object-cover hover:scale-105 transition brightness-50 hover:brightness-100`}
      />
      <div className={`flex xl:${isHovered ? 'visible' : 'hidden'} flex-col absolute z-2 self-end pb-12`}>
        <h2 className="font-bold text-shadow-xl text-center text-muffin-server-color 2xl:text-5xl text-xl md:text-3xl">{title}</h2>
        <p className="text-center 2xl:text-2xl text-shadow-md sm:text-sm">{description}</p>
      </div>
    </div>
  );
};

export const Servers = () => {
  return (
    <div className="full-screen-section flex flex-col lg:flex-row justify-center items-center">
      <h1 className="absolute z-50 text-project-color font-bold text-shadow-xl uppercase 2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl">Сервера</h1>
      <ServerItem image="/images/bisquite_prev.webp" title="Bisquite Survival" description="[1.19.2 - 1.20+]" />
      <ServerItem image="/images/muffin.webp" title="Muffin Survival" description="[1.20+] [в разработке]" />
    </div>
  )
}