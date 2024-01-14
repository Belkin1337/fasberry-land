import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface SubscriptionItemProps {
  rate: number,
  name: string,
  description: string,
  commands: string[],
  screenshot: string,
  price: string
}

export const SubscriptionItem = ({ rate, name, description, commands, screenshot, price }: SubscriptionItemProps) => {
  const subscriptionElement = (
    <div className="flex flex-col book h-[520px] w-full hover:-translate-y-1 
    transition ease-out duration-500 cursor-pointer justify-between overflow-hidden">
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
      <span className="cursor-pointer w-max self-end">кликни, чтобы узнать больше</span>
    </div>
  )

  return (
    <Dialog modal>
      <DialogTrigger>
        {subscriptionElement}
      </DialogTrigger>
      <DialogContent className="max-w-[520px] h-[60%] lg:h-[81%] block-item p-1 overflow-y-auto border-none gap-0">
        <div className="flex flex-col p-2 lg:p-4 gap-x-2 gap-y-2 bg-black backdrop-filter backdrop-blur-md">
          <div className="flex flex-col w-full gap-y-2 justify-center h-full">
            <p className="text-white text-lg lg:text-xl xl:text-2xl">{name}</p>
            <p className="text-md lg:text-lg text-[#fabbfb]">Цена:
              <span className="text-white">
                &nbsp;{price}
              </span>
            </p>
            <p className="text-md lg:text-lg text-[#fabbfb]">Возможности, команды и бонусы</p>
            <img src={screenshot} alt={name} draggable="true" className="h-[80%] w-full lg:h-full" />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-x-2 bg-black h-full py-4 px-2 lg:px-4 relative -top-1">
          <p className="button px-2 py-1 h-max w-full lg:w-2/3 text-center lg:px-2 text-md lg:text-lg text-green-server-color">Перейти к покупке</p>
          <DialogClose className="lg:w-1/3 w-full h-max button py-1 px-4 lg:px-6 text-md lg:text-lg text-red-server-color">Не хочу</DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}