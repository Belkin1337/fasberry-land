import { useRouter } from "next/navigation"
import { useEffect } from 'react'
import useSWR from "swr"
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
 
type Status = {
  online: boolean,
  players: {
    online: number,
    max: number
  }
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const Status = () => {
  const { data, mutate, isLoading } = useSWR<Status>("https://api.mcstatus.io/v2/status/java/play.fasberry.ru", fetcher);
  const router = useRouter();
  
  useEffect(() => {
    if (data) {
      mutate();
    }
  }, [data, mutate])
  
  if (isLoading) {
    return (
      <p>загружаем...</p>
    )
  }

  return (
    <HoverCard openDelay={4} closeDelay={1}>
      <HoverCardTrigger>
        <div onClick={() => router.push('/status')} className="block-item p-1 rounded-xl overflow-hidden cursor-pointer">
          <div className="flex flex-col bg-black rounded-xl h-max gap-y-8 p-3">
            <div className="flex flex-row justify-between items-center">
              <p className="text-white text-xl lg:text-2xl">Текущий онлайн</p>
              <p className="text-white text-xl lg:text-2xl cursor-pointer">
                {data?.players?.online || 0} из {data?.players?.max || 94}
              </p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-white text-xl lg:text-2xl">Статус:</p>
              <p className="text-white text-xl lg:text-2xl cursor-pointer">
                {data?.online ? 'работает' : 'не работает'}
              </p>
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-[400px] relative -top-44 bg-black/50 backdrop-filter backdrop-blur-md border-none p-2 rounded-xl">
        <p className="text-neutral-400 text-lg">
          Перейти на страницу мониторинга
        </p>
      </HoverCardContent>
    </HoverCard>
  )
}