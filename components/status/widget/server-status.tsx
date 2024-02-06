import Image from "next/image"
import { GetStatus } from '@/hooks/get-status';

export const ServerStatus = () => {
  const { data, isLoading } = GetStatus({ port: "25575"})

  return (
    <div className="rounded-xl p-1 block-item">
      <div className="flex flex-col rounded-xl bg-black/80">
        <div className="flex h-[48px] items-center p-3 rounded-t-xl bg-neutral-950/80">
          <p className="text-bisquite-server-color text-2xl">
            Bisquite Survival
          </p>
        </div>
        <div className="flex flex-col rounded-b-xl overflow-y-auto w-[350px] h-[496px] max-h-[496px] bg-black/80">
          <div className="flex flex-row items-center gap-x-1 py-2 px-3">
            <Image
              width={26}
              height={26}
              loading="lazy"
              alt="Список игроков"
              src="/images/minecraft/icons/search.webp"
            />
            <p className="text-green-server-color text-xl text-shadow-xl">
              Сейчас играют:
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            {isLoading ? (
              <p className="py-2 px-4 text-lg md:text-xl">...</p>
            ) : (
              <>
                {data?.players?.list.map((player: Player) => (
                  <div key={player.uuid} className="text-white text-xl cursor-pointer rounded-none hover:duration-200 duration-200 hover:bg-neutral-900 py-2 px-4">
                    {player.name_raw}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}