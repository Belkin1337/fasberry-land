import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { useRouter } from "next/navigation"

const headers = [
  {
    aspect: [
      {
        title: "профиль",
        value: "profile"
      },
      {
        title: "регионы",
        value: "regions"
      },
      {
        title: "квесты",
        value: "quests"
      },
      {
        title: "валюты",
        value: "wallets"
      },
      {
        title: "кланы",
        value: "clans"
      },
      {
        title: "работы",
        value: "jobs"
      },
      {
        title: "бусты",
        value: "boosts"
      },
      {
        title: "репутация",
        value: "reputation"
      },
      {
        title: "питомцы",
        value: "pets"
      },
      {
        title: "новые мобы",
        value: "mobs"
      },
      {
        title: "новая броня",
        value: "armor"
      }
    ],
  },
  {
    links: [
      {
        title: "Защита аккаунта",
        value: "safety"
      },
      {
        title: "Технические проблемы",
        value: "problems"
      },
      {
        title: "Жалобы на игроков",
        value: "reports"
      },
      {
        title: "Донат",
        value: "donate"
      },
    ]
  },
  {
    servers: [
      {
        title: "Bisquite Survival",
        href: "bisquite"
      },
      {
        title: "Muffin RP",
        href: "muffin"
      }
    ],
  }
]


export const WikiBar = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col block-item p-1 rounded-xl w-1/3">
      <Tabs defaultValue="general">
        <div className="flex flex-col p-4 bg-black gap-y-12 rounded-xl h-full">
          <div className="flex flex-col gap-y-4">
            <p className="text-white text-3xl">Общая информация</p>
            <TabsList className="flex flex-col gap-y-2">
              <div className="flex flex-row justify-between group cursor-pointer">
                <TabsTrigger value="general" className="text-white text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                  Основной раздел
                </TabsTrigger>
                <Image
                  src="/images/minecraft/icons/spyglass_big.webp"
                  className="group-hover:rotate-45 group-hover:duration-300 duration-300"
                  width={26}
                  alt="Spyglass Down"
                  height={16}
                />
              </div>
              <Accordion type="single" collapsible defaultValue="aspects">
                <AccordionItem value="aspects">
                  <AccordionTrigger className="py-0 my-0 group">
                    <p className="text-white text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                      Аспекты игры
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="relative top-3">
                    {headers.map((item, idx) => (
                      item.aspect?.map((item, idx) => (
                        <div className="group cursor-pointer" key={idx}>
                          <TabsTrigger value={item.value} className="text-white text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                            &nbsp;&gt;&nbsp;{item.title}
                          </TabsTrigger>
                        </div>
                      ))
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {headers.map((item, idx) => (
                item.links?.map((item, idx) => (
                  <div key={idx} className="flex flex-row justify-between group cursor-pointer">
                    <p className="text-white text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                      {item.title}
                    </p>
                    <Image
                      src="/images/minecraft/icons/spyglass_big.webp"
                      className="group-hover:rotate-45 group-hover:duration-300 duration-300"
                      width={26}
                      alt="Spyglass Down"
                      height={16}
                    />
                  </div>
                ))
              ))}
            </TabsList>
          </div>
          <div className="flex flex-col gap-y-4">
            <Accordion type="single" collapsible defaultValue="servers">
              <AccordionItem value="servers">
                <AccordionTrigger className="py-0 my-0 group">
                  <p className="text-white text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                    Сервера
                  </p>
                </AccordionTrigger>
                <AccordionContent className="relative top-3">
                  {headers.map((item, idx) => (
                    item.servers?.map((item, idx) => (
                      <div className="group cursor-pointer" key={idx}>
                        <p className="text-white text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                          &nbsp;&gt;&nbsp;{item.title}
                        </p>
                      </div>
                    ))
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Tabs>
    </div>
  )
}