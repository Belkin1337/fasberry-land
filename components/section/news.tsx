import { News } from '../news'
import { Community } from './community'
import { Status } from '@/components/status'

interface StatusProps {
  online: boolean,
  players: {
    online: number,
    max: number
  }
}

export const Home = ({ online, players }: StatusProps) => {
  return (
    <div className="full-screen-section">
      <div className="flex lg:flex-row flex-col py-24 mx-auto gap-y-12 lg:gap-y-6 group gap-x-4 lg:gap-x-4 xl:gap-x-8 2xl:gap-x-12 w-[90%]">
        <News/>
        <div className="flex flex-col gap-y-6 w-full lg:w-1/2">
          <p className="text-white text-4xl">Cообщество</p>
          <Status online={online} players={players}/>
          <Community />
        </div>
      </div>
    </div>
  )
}