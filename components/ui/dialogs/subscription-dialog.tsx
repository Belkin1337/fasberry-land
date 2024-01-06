import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog"

interface SubscriptionItemProps {
  rate: number,
  name: string,
  description: string,
  commands: string[],
  screenshot: string,
}

export const SubscriptionItem = ({ rate, name, description, commands, screenshot }: SubscriptionItemProps) => {
  const subscriptionElement = (
    <div className="flex flex-col book h-[520px] w-full hover:-translate-y-1 
    transition ease-out duration-500 cursor-pointer justify-between">
      <div className="flex flex-col gap-y-4">
        <h1 className='text-black text-lg xl:text-2xl text-right -top-2 relative'>{name}</h1>
        <div className="flex items-center">
          <h2 className={`text-xl text-water-meadow`}>Уровень:</h2>
          <span className="text-black text-xl">&nbsp;{rate}</span>
        </div>
        <div className="flex flex-col items-start">
          <h3 className={`text-xl text-left text-water-meadow`}>Описание:</h3>
          <p className="text-black text-left">{description}</p>
        </div>
        <div className="flex flex-col">
          <h3 className={`text-xl text-left text-water-meadow`}>Команды:</h3>
          <p className="text-black text-left whitespace-pre-line">
            {commands.slice(0, 3).map(command => `> ${command}`).join('\n')}
          </p>
        </div>
      </div>
      <span className="cursor-pointer w-max self-end">подробнее</span>
    </div>
  )

  return (
    <Dialog modal>
      <DialogTrigger>
        {subscriptionElement}
      </DialogTrigger>
      <DialogContent className="flex flex-col max-w-xl overflow-hidden 
      justify-between items-center cursor-pointer bg-transparent border-none">
        <img
          src={screenshot}
          alt={name}
          draggable="true"
          className="w-[90%] h-[90%]"
        />
        <DialogFooter>
          <div className="flex items-center gap-4">
            <button className="button py-2 px-6 text-green">Купить</button>
            <DialogClose>
              <button className="button py-2 px-6 text-red">Не хочу</button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}