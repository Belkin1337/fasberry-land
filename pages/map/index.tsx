import { useRouter } from "next/navigation";
import Image from "next/image"
import Head from "next/head"
import { Typography } from "@/ui/typography";
import { MainLayoutPage } from "@/components/layout";

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
    <>
      <Head>
        <title>Карта мира</title>
      </Head>
      <MainLayoutPage variant="with_section">
        <div className="bg-right lg:bg-center"
          style={{ backgroundImage: `url("/images/static/dirt.png")` }}>
          <div className="flex flex-row flex-wrap gap-x-12 gap-y-4 items-center justify-center w-full min-h-screen">
            {serverMap.map((item, idx) => (
              <div key={idx} onClick={() => router.push(`${item.href}`)} className="flex flex-col group cursor-pointer items-center">
                <Image
                  width={420}
                  height={420}
                  src={item.image}
                  alt={item.name}
                  className="w-[80%] h-[80%] lg:w-[420px] lg:h-[420px] group-hover:scale-105 group-hover:duration-300 duration-300"
                />
                <div className="hidden lg:flex flex-col group-hover:opacity-100 group-hover:duration-300 w-[90%] duration-300 opacity-0 bg-black/60 rounded-xl p-2 relative -top-24">
                  <h1 className="text-center text-xl sm:text-2xl text-bisquite-server-color text-shadow-xl">
                    {item.name}
                  </h1>
                  <Typography className="text-white text-center sm:text-xl text-md">
                    (RP, RPG, survival, quests)
                  </Typography>
                </div>
                <div className="lg:hidden flex flex-col relative top-4">
                  <Typography position="center" shadow="xl" className="text-center text-xl sm:text-2xl text-bisquite-server-color">
                    {item.name}
                  </Typography>
                  <Typography className="text-white text-center text-md sm:text-xl">
                    (RP, RPG, survival, quests)
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainLayoutPage>
    </>
  );
}