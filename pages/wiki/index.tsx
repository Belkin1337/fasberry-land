import { useState } from "react"
import { useRouter } from "next/router"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogClose, DialogTrigger } from "@/components/ui/dialog"
import { headers } from "@/shared/content"
import { WikiContent } from "@/components/wiki-content"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Block } from "@/components/ui/block"
import { Typography } from "@/components/ui/typography"
import Head from "next/head"
import Image from "next/image"

export default function Wiki() {
  const router = useRouter();
  const initialTab = Array.isArray(router.query.tab) ? router.query.tab[0] : router.query.tab;
  const [activeTab, setActiveTab] = useState<string | undefined>(initialTab);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    router.push({
      pathname: "/wiki", query: {
        tab: value
      }
    }, undefined, {
      shallow: true
    });
  };

  return (
    <>
      <Head>
        <title>Вики</title>
        <meta name="description" content="Вики проекта Fasberry. Здесь можно узнать о всех аспектах игры на нашем сервере." />
        <meta property="keywords" content="википедия, fasberry, справочник по серверу, minecraft wiki, fasberry wiki, 
        wiki fasberry, вики fasberry, вики фасберри, фасберри сервер" />
      </Head>
      <Header />
      <div className="min-h-screen w-[90%] mx-auto py-36">
        <Tabs
          value={activeTab}
          defaultValue="general"
          onValueChange={handleTabChange}
          className="flex flex-col lg:flex-row items-start justify-between bg-transparent w-full gap-x-4"
        >
          <WikiContent />
          <Dialog>
            <DialogTrigger className="xl:hidden fixed bottom-6 right-6 z-30 flex px-2 py-1 rounded-md
            bg-[#553C7D] border border-neutral-700">
              <Typography text_color="black" size="md">
                Навигация
              </Typography>
            </DialogTrigger>
            <DialogContent className="xl:hidden bg-transparent border-none max-w-4xl max-h-[68%] overflow-y-auto">
              <TabsList className="flex flex-col p-0 rounded-xl w-full items-start">
                <Block border="mini_gray" className="gap-y-12 h-full" size="normal" rounded="big" type="column">
                  <div className="flex flex-col gap-y-2">
                    <Typography className="text-3xl">
                      Общая информация
                    </Typography>
                    <div className="flex flex-col gap-y-2">
                      <div className="flex flex-row justify-between items-center group cursor-pointer">
                        <TabsTrigger value="general">
                          <Typography size="xl" hover_effects="pink_drop">
                            Основной раздел
                          </Typography>
                        </TabsTrigger>
                        <Image
                          src="/images/minecraft/icons/spyglass_big.webp"
                          className="group-hover:rotate-45 w-[16px] h-[20px] group-hover:duration-300 duration-300"
                          width={16}
                          alt="General"
                          height={16}
                        />
                      </div>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="aspects">
                          <AccordionTrigger className="py-0 my-0 group">
                            <Typography size="xl" hover_effects="pink_drop">
                              Аспекты игры
                            </Typography>
                          </AccordionTrigger>
                          <AccordionContent>
                            {headers.map((item) => (
                              item.aspect?.map((item, idx) => (
                                <div key={idx} className="group cursor-pointer">
                                  <DialogClose>
                                    <TabsTrigger value={item.value}>
                                      <Typography size="base" hover_effects="pink_drop">
                                        &nbsp;&nbsp;{item.title}
                                      </Typography>
                                    </TabsTrigger>
                                  </DialogClose>
                                </div>
                              ))
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      {headers.map((item) => (
                        item.links?.map((item, idx) => (
                          <div key={idx} className="flex flex-row items-center justify-between group cursor-pointer">
                            <DialogClose>
                              <TabsTrigger value={item.value}>
                                <Typography size="xl" hover_effects="pink_drop">
                                  {item.title}
                                </Typography>
                              </TabsTrigger>
                            </DialogClose>
                            <Image
                              src="/images/minecraft/icons/spyglass_big.webp"
                              className="group-hover:rotate-45 w-[16px] h-[20px] group-hover:duration-300 duration-300"
                              width={26}
                              height={16}
                              alt="Spyglass Down"
                            />
                          </div>
                        ))
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Typography className="text-3xl">
                      Прочее
                    </Typography>
                    <div className="flex flex-col gap-y-4">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="servers">
                          <AccordionTrigger className="py-0 my-0 group">
                            <Typography size="xl" hover_effects="pink_drop">
                              Сервера
                            </Typography>
                          </AccordionTrigger>
                          <AccordionContent className="">
                            {headers.map((item) => (
                              item.servers?.map((item, idx) => (
                                <div className="group cursor-pointer" key={idx}>
                                  <DialogClose>
                                    <TabsTrigger value={item.value}>
                                      <Typography size="xl" hover_effects="pink_drop">
                                        &nbsp;&nbsp;{item.title}
                                      </Typography>
                                    </TabsTrigger>
                                  </DialogClose>
                                </div>
                              ))
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div onClick={() => router.push(router.pathname + '/modpack')} className="group cursor-pointer">
                      <Typography size="base" hover_effects="pink_drop">
                        Сборки модов
                      </Typography>
                    </div>
                  </div>
                </Block>
              </TabsList>
            </DialogContent>
          </Dialog>
          <TabsList className="hidden xl:flex flex-col p-0 rounded-xl w-full xl:w-[30%] items-start sticky top-0">
            <Block border="mini_gray" className="gap-y-12 h-full" size="normal" rounded="big" type="column">
              <div className="flex flex-col gap-y-2">
                <Typography className="text-3xl">
                  Общая информация
                </Typography>
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-row justify-between items-center group cursor-pointer">
                    <TabsTrigger value="general">
                      <Typography size="xl" hover_effects="pink_drop">
                        Основной раздел
                      </Typography>
                    </TabsTrigger>
                    <Image
                      src="/images/minecraft/icons/spyglass_big.webp"
                      className="group-hover:rotate-45 w-[16px] h-[20px] group-hover:duration-300 duration-300"
                      width={16}
                      alt="General"
                      height={16}
                    />
                  </div>
                  <Accordion type="single" collapsible defaultValue="aspects">
                    <AccordionItem value="aspects">
                      <AccordionTrigger className="py-0 my-0 group">
                        <Typography size="xl" hover_effects="pink_drop">
                          Аспекты игры
                        </Typography>
                      </AccordionTrigger>
                      <AccordionContent>
                        {headers.map((item) => (
                          item.aspect?.map((item, idx) => (
                            <div key={idx} className="group cursor-pointer">
                              <TabsTrigger value={item.value}>
                                <Typography size="base" hover_effects="pink_drop">
                                  &nbsp;&nbsp;{item.title}
                                </Typography>
                              </TabsTrigger>
                            </div>
                          ))
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  {headers.map((item) => (
                    item.links?.map((item, idx) => (
                      <div key={idx} className="flex flex-row items-center justify-between group cursor-pointer">
                        <TabsTrigger value={item.value}>
                          <Typography size="xl" hover_effects="pink_drop">
                            {item.title}
                          </Typography>
                        </TabsTrigger>
                        <Image
                          src="/images/minecraft/icons/spyglass_big.webp"
                          className="group-hover:rotate-45 w-[16px] h-[20px] group-hover:duration-300 duration-300"
                          width={26}
                          height={16}
                          alt="Spyglass Down"
                        />
                      </div>
                    ))
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <Typography className="text-3xl">
                  Прочее
                </Typography>
                <div className="flex flex-col gap-y-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="servers">
                      <AccordionTrigger className="py-0 my-0 group">
                        <Typography size="xl" hover_effects="pink_drop">
                          Сервера
                        </Typography>
                      </AccordionTrigger>
                      <AccordionContent className="">
                        {headers.map((item) => (
                          item.servers?.map((item, idx) => (
                            <div className="group cursor-pointer" key={idx}>
                              <TabsTrigger value={item.value}>
                                <Typography size="xl" hover_effects="pink_drop">
                                  &nbsp;&nbsp;{item.title}
                                </Typography>
                              </TabsTrigger>
                            </div>
                          ))
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div onClick={() => router.push(router.pathname + '/modpack')} className="group cursor-pointer">
                  <Typography size="base" hover_effects="pink_drop">
                    Сборки модов
                  </Typography>
                </div>
              </div>
            </Block>
          </TabsList>
        </Tabs>
      </div>
      <Footer />
    </>
  )
}