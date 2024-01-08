import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Layout from "@/components/layout/Layout"

interface Player {
  uuid: string;
  name_raw: string;
}

type Status = {
  players: {
    list: Player[]
  }
}

export const getServerSideProps = (async (context) => {
  const url = new URL('https://api.mcstatus.io/v2/status/java/play.fasberry.ru:25575');
  url.searchParams.set('timeout', '10');

  const res = await fetch(url);
  const status = await res.json()

  return { props: { status } }
}) satisfies GetServerSideProps<{
  status: Status
}>

export default function Status(props: { status: Status }) {
  const { status } = props;
  const { list } = status.players;

  return (
    <div className="flex items-center min-h-screen py-36 bg-cover bg-no-repeat" style={{ backgroundImage: `url("/images/alex_in_cave.jpg")` }}>
      <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-black/80 from-70% to-transparent min-h-screen group-hover:transition group-hover:duration-500 transition duration-500" />
      <div className="relative flex flex-col lg:flex-row items-center justify-start -right-24 h-full w-[90%] mx-auto gap-x-12 gap-y-6">
        <div className="flex flex-col rounded-xl p-1 ">
          <div className="flex h-[48px] items-center p-3 bg-neutral-900/80">
            <p className="text-bisquite-server-color text-2xl cursor-pointer">
              Bisquite Survival
            </p>
          </div>
          <div className="flex flex-col p-3 rounded-b-xl overflow-y-auto gap-y-4 w-[350px] h-[496px] max-h-[496px] bg-black/80">
            <div className="flex flex-row items-center gap-x-1">
              <img alt="Список игроков" src="/images/minecraft/icons/search.webp" className="w-[26px] h-[26px]" />
              <p className="text-green-server-color text-xl text-shadow-xl">Сейчас играют:</p>
            </div>
            <div className="flex flex-col gap-y-1">
              {list.map((player: Player) => (
                <li className="text-white text-xl" key={player.uuid}>
                  {player.name_raw}
                </li>
              ))}
            </div>
          </div>
        </div>
        <iframe src="https://discord.com/widget?id=958086036393689098&theme=dark"
          width="350"
          className="block-item p-1 rounded-xl"
          height="500"
          allowTransparency={true}
          frameBorder={0}
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        />
      </div>
    </div>
  )
}

Status.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}