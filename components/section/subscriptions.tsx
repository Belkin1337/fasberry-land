import Image from "next/image"
import { support } from '@/shared/content';
import { Title } from '@/components/ui/title';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useRouter } from "next/navigation"

export const Subscriptions = () => {
  const router = useRouter();
  const subList = support.Support.content[0].donateElement.map((item) => ({
    title: item.title,
    rate: item.rate,
    description: item.description,
    commands: item.commands,
    price: item.price,
    screenshot: item.screenshot
  }));

  return (
    <div className="flex flex-col py-24" >
      <Title className="text-3xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-16 text-gold text-center">
        Привилегии сервера
      </Title>
      <div defaultValue="subscriptions" className="flex flex-col gap-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
          {subList.map((item, idx) => (
            <Dialog modal key={idx}>
              <DialogTrigger>
                <div className="flex flex-col book h-[520px] w-full hover:-translate-y-1 transition ease-out duration-500 cursor-pointer justify-between">
                  <div className="flex flex-col gap-y-4">
                    <h1 className='text-black text-lg xl:text-2xl text-right -top-2 relative'>
                      {item.title}
                    </h1>
                    <div className="flex items-center">
                      <h2 className={`text-xl text-water-meadow`}>Уровень:</h2>
                      <span className="text-black text-xl">&nbsp;{item.rate}</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className={`text-xl text-left text-water-meadow`}>Описание:</h3>
                      <p className="text-black text-left">{item.description}</p>
                    </div>
                    <div className="flex flex-col">
                      <h3 className={`text-xl text-left text-water-meadow`}>Команды:</h3>
                      <p className="text-black text-left whitespace-pre-line">
                        {item.commands.slice(0, 3).map(command => `> ${command}`).join('\n')}
                      </p>
                    </div>
                  </div>
                  <span className="cursor-pointer w-max self-end">узнать больше</span>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[520px] h-[60%] lg:h-[81%] block-item p-1 overflow-y-auto border-none gap-0">
                <div className="flex flex-col p-2 lg:p-4 gap-x-2 gap-y-2 bg-black backdrop-filter backdrop-blur-md">
                  <div className="flex flex-col w-full gap-y-2 justify-center h-full">
                    <div className="flex justify-between items-center">
                      <p className="text-white text-lg lg:text-xl xl:text-2xl">{item.title}</p>
                      <DialogClose className="text-white text-xl">
                        &times;
                      </DialogClose>
                    </div>
                    <p className="text-md lg:text-lg text-[#fabbfb]">Цена:
                      <span className="text-white">
                        &nbsp;{item.price}
                      </span>
                    </p>
                    <p className="text-md lg:text-lg text-[#fabbfb]">Возможности, команды и бонусы</p>
                    <Image width={600} height={1000} src={item.screenshot} alt={item.title} draggable="true" className="h-[80%] w-full lg:h-full" />
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col justify-between gap-x-2 bg-black h-full py-4 px-2 lg:px-4 relative -top-1">
                  <Dialog>
                    <DialogTrigger className="button px-2 py-1 h-max w-full lg:w-2/3 text-center lg:px-2 text-md lg:text-lg text-green-server-color">
                      Перейти к покупке
                    </DialogTrigger>
                    <DialogContent className="max-w-[480px] h-[42%] block-item p-1 overflow-y-auto border-none gap-0 rounded-xl w-[90%] mx-auto">
                      <div className="flex flex-col bg-wool-black/90 rounded-xl p-4 gap-y-4">
                        <div className="flex flex-row justify-between">
                          <p className="text-white text-xl">Выберите способ оплаты</p>
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
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div >
  );
}