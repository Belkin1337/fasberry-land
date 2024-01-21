import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

export const Community = () => {
  const images = [
    "https://cdn.discordapp.com/attachments/904344676587417621/1197250388722720808/gluckoz_1.png?ex=65ba9550&is=65a82050&hm=017ada489a76e34dc9df0f67a1ec18e319eabd8c3ea1657bc9e35f3799839d34&", 
    "https://cdn.discordapp.com/attachments/904344676587417621/1197250389305741432/gluckoz_2.png?ex=65ba9550&is=65a82050&hm=038197d02ef05d753d0253023cd9c4ad43eb632da345646c297d591774a64707&",
    "https://cdn.discordapp.com/attachments/904344676587417621/1197250389834203136/gluckoz_3.png?ex=65ba9550&is=65a82050&hm=3768d72c9663f4de63e3b9f5395faf502d33cd4ddbf052c15e84913630e37e45&", 
    "https://cdn.discordapp.com/attachments/904344676587417621/1197250391323181107/pureawake_1.png?ex=65ba9551&is=65a82051&hm=b42f383868c0a560f0d30e85d770035560b9b5e0b8b9ef4de0ecb325cdcbfa48&",
    "https://cdn.discordapp.com/attachments/904344676587417621/1197250388089372732/ded_inside_1.png?ex=65ba9550&is=65a82050&hm=87d9eb4ec8e5bb05601e469d59d0f4ab7dceeae9107fcf41fb66470b81b30c0b&", 
    "https://cdn.discordapp.com/attachments/904344676587417621/1197250390186532905/kirill.webp?ex=65ba9550&is=65a82050&hm=2f037ff6d700b45b97c40e97a1ded650ab1466e7e617a93d742794c680917bda&",
    "https://cdn.discordapp.com/attachments/904344676587417621/1197250387560910918/camel.webp?ex=65ba9550&is=65a82050&hm=128657405a5aeb60860be416cc21052936d95509dc9aff4083bc40468fd245db&", 
    "https://cdn.discordapp.com/attachments/904344676587417621/1197250394477297695/reze.png?ex=65ba9551&is=65a82051&hm=205bdc66d0882174ebd3d09f167bf73f047962d1209a61a8cac8cf3fa365db90&",
    "https://cdn.discordapp.com/attachments/904344676587417621/1197250387149856918/aurastepp.png?ex=65ba9550&is=65a82050&hm=9cfec230e5609f016e6f5bb9b92ea7b797a7947bc297f7d5e9fd58fcc2a8bd4b&",
    "https://cdn.discordapp.com/attachments/904344676587417621/1197250390727610438/maxsal.png?ex=65ba9550&is=65a82050&hm=9dd55a9f909398b0e3c78de09646e4cad70c414df37e5ee99c143dc40a21b02f&",
    "https://cdn.discordapp.com/attachments/903343341561847848/1197680924536615062/2024-01-19_02.15.49.png?ex=65bc2648&is=65a9b148&hm=befb93593b26914e2524e3a77e40b0653827109b9ebb66b2046f64d44ede8cda&"
  ]

  return ( 
    <div className="block-item p-1 rounded-xl overflow-hidden">
      <div className="flex flex-col p-3 bg-black/80 dark:bg-black rounded-xl h-max gap-y-8">
        <p className="text-white text-2xl">
          Скриншоты от игроков
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-3 auto-rows-auto gap-2">
          {images.map((item, idx) => (
            <Dialog key={idx}>
              <DialogTrigger>
                <div className="flex flex-col rounded-xl overflow-hidden">
                  <Image
                    width={1280}
                    height={720}
                    src={item}
                    loading="lazy"
                    alt="commuinity"
                    className="w-full sm:h-[60px] md:h-[120px] lg:w-[250px] lg:h-[136px] object-cover hover:brightness-50 cursor-pointer hover:duration-300 duration-300"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="w-4xl mx-auto w-[90%] bg-transparent border-none">
                <Carousel opts={{
                  loop: true
                }}>
                  <CarouselContent>
                  {images.map((item, index) => (
                      <CarouselItem key={index}>
                        <Image
                          src={item}
                          width={1280}
                          loading="lazy"
                          height={720}
                          alt="commuinity"
                          className="w-full object-cover cursor-pointer h-full"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
}