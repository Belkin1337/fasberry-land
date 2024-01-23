import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Block } from "./ui/block"
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog"
import Image from "next/image"

interface SubscriptionItemProps {
  name: string,
  rate: number | 0,
  description: string,
  commands: Array<string>,
  price: number,
  screenshot: string
}

export const SubscriptionItem = ({ 
  name, 
  rate, 
  description, 
  commands, 
  price, 
  screenshot 
}: SubscriptionItemProps) => {
  return (
    <Dialog modal>
      <DialogTrigger className="flex flex-col book h-[520px] w-full hover:-translate-y-1 transition ease-out duration-500 cursor-pointer justify-between">
        <div className="flex flex-col gap-y-4">
          <h1 className='text-black text-lg xl:text-2xl text-right -top-2 relative'>
            {name}
          </h1>
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
        <span className="cursor-pointer w-max self-end">
          узнать больше
        </span>
      </DialogTrigger>
      <DialogContent className="max-w-[520px] max-h-[80%] p-0 overflow-y-auto bg-transparent border-none gap-y-2 m-0">
        <Block type="column" className="gap-x-2 gap-y-2" rounded="big" blockItem>
          <div className="flex flex-col w-full gap-y-2 justify-center h-full">
            <div className="flex justify-between items-center">
              <p className="text-white text-lg lg:text-xl xl:text-2xl">
                {name}
              </p>
              <DialogClose className="text-white text-xl">
                &times;
              </DialogClose>
            </div>
            <p className="text-md lg:text-lg text-[#fabbfb]">
              Цена:
              <span className="text-white">
                &nbsp;{price + ' руб'}
              </span>
            </p>
            <p className="text-md lg:text-lg text-[#fabbfb]">
              Возможности, команды и бонусы
            </p>
            <Accordion type="single" collapsible>
              <AccordionItem value="sub-description">
                <AccordionTrigger className="text-xl text-white">
                  описание
                </AccordionTrigger>
                <AccordionContent>
                  <Image
                    width={600}
                    height={1000}
                    src={screenshot}
                    alt={name}
                    loading="lazy"
                    draggable="true"
                    className="h-[80%] w-full lg:h-full"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Block>
        <Block blockItem rounded="big" className="flex lg:flex-row flex-col justify-between gap-x-2 h-full lg:px-4">
          <Dialog>
            <DialogTrigger className="button px-2 py-1 h-max w-full lg:w-2/3 text-center lg:px-2 text-md lg:text-lg text-green-server-color">
              Перейти к покупке
            </DialogTrigger>
            <DialogContent className="max-w-[480px] h-[42%] block-item p-1 overflow-y-auto border-none gap-0 rounded-xl w-[90%] mx-auto">
              <div className="flex flex-col bg-wool-black/90 rounded-xl p-4 gap-y-4">
                <div className="flex flex-row justify-between">
                  <p className="text-white text-xl">
                    Выберите способ оплаты
                  </p>
                  <DialogClose className="text-white text-xl">
                    &times;
                  </DialogClose>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                  <div className="bg-black/60 rounded-md border-neutral-800 p-2 h-[142px]">
                    <p>Test</p>
                  </div>
                  <div className="bg-black/60 rounded-md border-neutral-800 p-2 h-[142px]">
                    <p>Test</p>
                  </div>
                  <div className="bg-black/60 rounded-md border-neutral-800 p-2 h-[142px]">
                    <p>Test</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <DialogClose className="lg:w-1/3 w-full h-max button py-1 px-4 lg:px-6 text-md lg:text-lg text-red-server-color">
            Не хочу
          </DialogClose>
        </Block>
      </DialogContent>
    </Dialog>
  )
}