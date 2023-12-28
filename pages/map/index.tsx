import type { Metadata } from 'next';
import Image from "next/image"
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: 'Карта мира'
}

export default function Map() {
  const router = useRouter();

  const serverMap = [
    { name: "Bisquite Survival", href: "http://map.fasberry.ru:80", image: "/images/map_bisquite.png" },
    // { name: "Muffin Survival", href: "muffin", image: "/images/map_muffin.png" }
  ]

  return (
    <div className={`bg-right lg:bg-center`} style={{ backgroundImage: `url("/images/static/dirt.png")` }}>
      <div className="flex flex-row flex-wrap gap-x-12 gap-y-4 items-center justify-center w-full min-h-screen">
        {serverMap.map((item, idx) => (
          <div
            key={idx}
            onClick={() => router.push(`${item.href}`)}
            className="flex flex-col transition bg-black hover:bg-opacity-90 bg-opacity-60 rounded-sm cursor-pointer"
          >
            <Image src={item.image} width={400} height={300} alt={item.name} />
            <h1 className="p-2 text-xl sm:text-2xl text-white">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}