import Image from "next/image"
import { headerLinks } from "@/shared/content";

interface DesktopHeaderProps {
  onClick: (href: string) => void;
}

export const DesktopHeader = ({ onClick }: DesktopHeaderProps) => {
  return (
    <div className="hidden xl:flex flex-row gap-x-4 items-center justify-start pr-[80px]">
      {headerLinks.map((item, idx) => (
        <div onClick={() => onClick(item.href)} key={idx} className="flex flex-row items-center gap-1 text-lg cursor-pointer">
          <Image src={item.image} width={20} height={20} alt={item.name} />
          <span className={`hover:brightness-150 ${item.name == "Подписки" ? 'text-gold' : 'text-project-color'}`}>{item.name}</span>
        </div>
      ))}
    </div>
  )
}