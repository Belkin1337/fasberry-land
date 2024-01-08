import { useRouter } from "next/navigation";
import Image from "next/image"

const serverMap = [
  {
    name: "Bisquite Survival",
    href: "http://map.fasberry.ru:80",
    image: "/images/minecraft/icons/map_zoom.webp"
  },
]

export default function Map() {
  const router = useRouter();

  return (
    <div className="bg-right lg:bg-center"
      style={{
        backgroundImage: `url("/images/static/dirt.png")`
      }}
    >
      <div className="flex flex-row flex-wrap gap-x-12 gap-y-4 items-center justify-center w-full min-h-screen">
        {serverMap.map((item, idx) => (
          <div key={idx} onClick={() => router.push(`${item.href}`)} className="flex flex-col group cursor-pointer items-center">
            <Image layout="responsive" width={420} height={420} src={item.image} alt={item.name} className="w-1/2 h-1/2 lg:w-[420px] lg:h-[420px] group-hover:scale-105 group-hover:duration-300 duration-300" />
            <div className="hidden lg:flex flex-col group-hover:opacity-100 group-hover:duration-300 w-[88%] duration-300 opacity-0 bg-black/40 p-4 relative -top-28">
              <h1 className="text-center text-xl sm:text-2xl text-bisquite-server-color text-shadow-xl">
                {item.name}
              </h1>
              <p className="text-white text-center sm:text-xl text-md">RP, RPG, survival, quests</p>
            </div>
            <div className="lg:hidden flex flex-col relative top-4">
              <h1 className="text-center text-base xl:text-xl sm:text-2xl text-bisquite-server-color text-shadow-xl">
                {item.name}
              </h1>
              <p className="text-white text-center text-sm sm:text-xl">RP, RPG, survival, quests</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}