import { useRouter } from "next/navigation"
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Typography } from "../ui/typography"
import { Block } from "../ui/block"
import { GetStatus } from "@/hooks/get-status"

export const Status = () => {
  const router = useRouter();
  const { data, isLoading } = GetStatus({ port: "25565" });

  return (
    <HoverCard openDelay={4} closeDelay={1}>
      <HoverCardTrigger>
        <Block
          onClick={() => router.push('/status')}
          blockItem
          type="column"
          size="normal"
          rounded="big"
          className="h-max gap-y-4 cursor-pointer"
        >
          <Typography className="text-xl lg:text-2xl">
            Статус
          </Typography>
          <div className="flex flex-col items-start gap-y-2">
            <div className="flex flex-row items-center gap-x-2">
              <Typography className="text-base md:text-lg lg:text-xl">
                Состояние:
              </Typography>
              {isLoading ? (
                <Typography className="text-white text-md sm:text-base md:text-lg lg:text-xl">
                  работает?
                </Typography>
              ) : (
                <Typography className="text-white text-md sm:text-base md:text-lg lg:text-xl">
                  {data?.online ? 'работает' : 'не работает'}
                </Typography>
              )}
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Typography className="text-md sm:text-base md:text-lg lg:text-xl">
                Сейчас на сервере:
              </Typography>
              {isLoading ? (
                <Typography className="text-white text-md sm:text-base md:text-lg lg:text-xl">
                  0 игроков
                </Typography>
              ) : (
                <Typography className="text-white text-md sm:text-lg lg:text-xl">
                  {data?.players?.online || 0} игроков
                </Typography>
              )}
            </div>
          </div>
        </Block>
      </HoverCardTrigger>
      <HoverCardContent className="w-[400px] relative -top-40 bg-black/50 backdrop-filter backdrop-blur-md border-none p-2 rounded-xl">
        <p className="text-neutral-400 text-lg">
          Перейти на страницу мониторинга
        </p>
      </HoverCardContent>
    </HoverCard>
  )
}