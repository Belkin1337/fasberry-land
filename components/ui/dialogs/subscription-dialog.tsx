import { useRouter } from "next/router"
import useTransliterate from "@/hooks/use-Transliterate";
import { 
  Dialog, 
  DialogClose, 
  DialogContent, 
  DialogFooter, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { support } from "@/shared/content";

interface SubscriptionItemProps {
  rate: number,
  name: string,
  description: string,
  commands: string[],
}

export const SubscriptionItem = ({ rate, name, description, commands }: SubscriptionItemProps) => {
  const router = useRouter();
  const translateItem = useTransliterate(name);

  const contentList = [
    { name: support.Support.headers[0].description, content: description },
    { name: support.Support.headers[0].commands, content: commands.map((command) => `> ${command}`).join(';\n') + ';' },
  ]

  const subscriptionElement = (
    <div className="flex flex-col book h-[520px] w-full hover:-translate-y-1 transition ease-out duration-500 cursor-pointer justify-between">
      <div className="flex flex-col gap-y-4">
        <h1 className='text-black text-lg xl:text-2xl text-right -top-2 relative'>{name}</h1>
        <div className="flex items-center">
          <h2 className={`text-xl text-water-meadow`}>{support.Support.headers[0].level}</h2>
          <span className="text-black text-xl">&nbsp;{rate}</span>
        </div>
        <div className="flex flex-col items-start">
          <h3 className={`text-xl text-left text-water-meadow`}>{support.Support.headers[0].description}</h3>
          <p className="text-black text-left">{description}</p>
        </div>
        <div className="flex flex-col">
          <h3 className={`text-xl text-left text-water-meadow`}>{support.Support.headers[0].commands}</h3>
          <p className="text-black text-left whitespace-pre-line">{commands.slice(0, 3).map(command => `> ${command}`).join('\n')}</p>
        </div>
      </div>
      <span className="cursor-pointer w-max self-end">{support.Support.headers[0].more}</span>
    </div>
  )

  return (
    <Dialog modal>
      <DialogTrigger>
        {subscriptionElement}
      </DialogTrigger>
      <DialogContent className="flex flex-col book h-[620px] max-w-lg overflow-hidden justify-between items-center cursor-pointer bg-transparent border-none">
        <div className="flex flex-col gap-y-4 overflow-y-auto w-full relative z-2">
          <h1 className='text-black text-lg xl:text-2xl text-right relative'>{name}</h1>
          <div className="flex items-center">
            <p className={`text-xl text-water-meadow`}>{support.Support.headers[0].level}</p>
            <span className="text-black text-xl">{rate}</span>
          </div>
          {contentList.map((item) => (
            <div key={item.name} className="flex flex-col">
              <p className={`text-xl text-water-meadow`}>{item.name}</p>
              <span className="text-black text-base whitespace-pre-line">{item.content}</span>
            </div>
          ))}
        </div>
        <DialogFooter>
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push(`/order/${translateItem}`)}
              className="button py-2 px-6 text-green"
            >
              Купить
            </button>
            <DialogClose>
              <button className="button py-2 px-6 text-red">Не хочу</button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}