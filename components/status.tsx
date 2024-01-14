import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { useRouter } from "next/navigation"

interface StatusProps {
  online: boolean,
  players: {
    online: number,
    max: number
  }
}

export const Status = ({ online, players }: StatusProps) => {
  const router = useRouter();

  let status_msg = online ? 'работает' : 'не работает';

  return (
    <HoverCard openDelay={4} closeDelay={1}>
      <HoverCardTrigger>
        <div onClick={() => router.push('/status')} className="block-item p-1 rounded-xl overflow-hidden cursor-pointer">
          <div className="flex flex-col bg-black rounded-xl h-max gap-y-8 p-3">
            <div className="flex flex-row justify-between items-center">
              <p className="text-white text-xl lg:text-2xl">Текущий онлайн</p>
              <p className="text-white text-xl lg:text-2xl cursor-pointer">
                {players?.online || 0} из {players?.max || 94}
              </p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-white text-xl lg:text-2xl">Статус:</p>
              <p className="text-white text-xl lg:text-2xl cursor-pointer">
                {status_msg}
              </p>
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-[400px] relative -top-44 bg-black/50 backdrop-filter backdrop-blur-md border-none p-2 rounded-xl">
        <p className="text-neutral-400 text-lg">Перейти на страницу мониторинга</p>
      </HoverCardContent>
    </HoverCard>
  )
}