import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

const commuinity = [
  "/images/commuinity/gluckoz_1.png", "/images/commuinity/gluckoz_2.png",
  "/images/commuinity/gluckoz_3.png", "/images/commuinity/pureawake_1.png",
  "/images/commuinity/ded_inside_1.png", "/images/commuinity/kirill.webp",
  "/images/commuinity/camel.webp", "/images/commuinity/reze.png",
  "/images/commuinity/schevchenko.webp", "/images/commuinity/aurastepp.png",
  "/images/commuinity/maxsal.png"
]

export const Community = () => {
  return (
    <div className="block-item p-1 rounded-xl overflow-hidden">
      <div className="flex flex-col p-3 bg-black rounded-xl h-max gap-y-8">
        <p className="text-white text-2xl">Скриншоты от игроков</p>
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 auto-rows-auto gap-2">
          {commuinity.map((item, idx) => (
            <Dialog key={idx}>
              <DialogTrigger>
                <div className="flex flex-col rounded-xl overflow-hidden">
                  <img
                    src={item}
                    alt="commuinity"
                    className="w-full sm:h-[60px] md:h-[120px] lg:w-[250px] lg:h-[136px] object-cover hover:brightness-50 cursor-pointer hover:duration-300 duration-300"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="w-4xl bg-transparent border-none">
                <img
                  src={item}
                  alt="commuinity"
                  className="w-full object-cover cursor-pointer h-full"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
}