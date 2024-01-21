import { useState } from "react"
import { useRouter } from "next/router"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogClose, DialogTrigger } from "@/components/ui/dialog"
import { headers } from "@/shared/content"
import { WikiContent } from "@/components/wiki-content"
import Head from "next/head"
import Image from "next/image"
import { Header } from "@/components/section/header"
import { Footer } from "@/components/section/footer"

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
        <meta property="keywords" content="википедия, fasberry, справочник по серверу, minecraft wiki, fasberry wiki, wiki fasberry, вики fasberry, вики фасберри, фасберри сервер" />
      </Head>
      <Header/>
      <div className="min-h-screen w-[90%] mx-auto py-36">
        <Tabs
          value={activeTab}
          defaultValue="general"
          onValueChange={handleTabChange}
          className="flex flex-col lg:flex-row items-start justify-between bg-transparent gap-x-4"
        >
          <div className="flex flex-col block-item p-1 w-full lg:w-2/3 rounded-xl">
            <div className="flex flex-col p-4 bg-black/80 dark:bg-black rounded-xl">
              <WikiContent />
            </div>
          </div>
          <Dialog>
            <DialogTrigger className="lg:hidden fixed bottom-6 right-6 z-30 flex px-4 py-2 rounded-xl bg-[#fabbfb] border border-neutral-700">
              <p className="text-black text-2xl">
                Навигация
              </p>
            </DialogTrigger>
            <DialogContent className="lg:hidden bg-transparent border-none max-w-4xl max-h-[68%] overflow-y-auto">
              <TabsList className="flex flex-col block-item p-1 rounded-xl w-full items-start">
                <div className="flex flex-col p-2 bg-neutral-600 dark:bg-black gap-y-4 rounded-xl h-full w-full">
                  <div className="flex flex-col gap-y-2">
                    <div className="flex flex-row justify-between">
                      <p className="text-white text-lg md:text-xl lg:text-2xl">Общая информация</p>
                      <DialogClose className="relative top-0 right-0">
                        <span className="text-2xl text-white">&times;</span>
                      </DialogClose>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between group cursor-pointer">
                        <DialogClose>
                          <TabsTrigger
                            value="general"
                            className="text-white text-base md:text-xl dark:group-hover:text-[#FABBFB] group-hover:duration-300 duration-300 bg-transparent"
                          >
                            Основной раздел
                          </TabsTrigger>
                        </DialogClose>
                      </div>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="aspects">
                          <AccordionTrigger className="py-0 my-0 group">
                            <p className="text-white text-base md:text-xl dark:group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                              Аспекты игры
                            </p>
                          </AccordionTrigger>
                          <AccordionContent className="relative top-1">
                            {headers.map((item) => (
                              item.aspect?.map((item, idx) => (
                                <div className="group cursor-pointer" key={idx}>
                                  <DialogClose>
                                    <TabsTrigger
                                      value={item.value}
                                      className="flex items-start flex-col justify-start text-white text-base md:text-xl 
                                      dark:group-hover:text-[#FABBFB] group-hover:duration-300 duration-300 bg-transparent"
                                    >
                                      &nbsp;&gt;&nbsp;{item.title}
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
                          <div key={idx} className="flex flex-row justify-between group cursor-pointer relative -top-1">
                            <DialogClose>
                              <TabsTrigger
                                value={item.value}
                                className="text-white text-base md:text-xl dark:group-hover:text-[#FABBFB] group-hover:duration-300 duration-300"
                              >
                                {item.title}
                              </TabsTrigger>
                            </DialogClose>
                          </div>
                        ))
                      ))}
                    </div>
                  </div>
                  <Accordion type="single" collapsible className="flex flex-col">
                    <AccordionItem value="servers">
                      <AccordionTrigger className="py-0 my-0 group">
                        <p className="text-white text-base md:text-xl dark:group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                          Сервера
                        </p>
                      </AccordionTrigger>
                      <AccordionContent className="relative top-2">
                        {headers.map((item) => (
                          item.servers?.map((item, idx) => (
                            <div className="group cursor-pointer" key={idx}>
                              <DialogClose>
                                <TabsTrigger
                                  value={item.value}
                                  className="text-white text-base md:text-xl dark:group-hover:text-[#FABBFB] group-hover:duration-300 duration-300"
                                >
                                  &nbsp;&gt;&nbsp;{item.title}
                                </TabsTrigger>
                              </DialogClose>
                            </div>
                          ))
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsList>
            </DialogContent>
          </Dialog>
          <TabsList className="hidden lg:flex flex-col block-item p-1 rounded-xl w-full lg:w-1/3 items-start">
            <div className="flex flex-col p-4 bg-black/80 dark:bg-black gap-y-12 rounded-xl h-full w-full">
              <div className="flex flex-col gap-y-4">
                <p className="text-white text-3xl">
                  Общая информация
                </p>
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-row justify-between group cursor-pointer">
                    <TabsTrigger
                      value="general"
                      className="text-white text-xl dark:group-hover:text-[#FABBFB] group-hover:duration-300 duration-300 bg-transparent"
                    >
                      Основной раздел
                    </TabsTrigger>
                    <Image
                      src="/images/minecraft/icons/spyglass_big.webp"
                      className="group-hover:rotate-45 group-hover:duration-300 duration-300"
                      width={26}
                      alt="Spyglass Down"
                      height={8}
                    />
                  </div>
                  <Accordion type="single" collapsible defaultValue="aspects">
                    <AccordionItem value="aspects">
                      <AccordionTrigger className="py-0 my-0 group ">
                        <p className="text-white text-xl dark:group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                          Аспекты игры
                        </p>
                      </AccordionTrigger>
                      <AccordionContent className="relative top-3">
                        {headers.map((item) => (
                          item.aspect?.map((item, idx) => (
                            <div key={idx} className="group cursor-pointer">
                              <TabsTrigger
                                value={item.value}
                                className="flex items-start flex-col justify-start 
                                text-white text-lg lg:text-xl dark:group-hover:text-[#FABBFB] 
                                group-hover:duration-300 duration-300 bg-transparent"
                              >
                                &nbsp;&gt;&nbsp;{item.title}
                              </TabsTrigger>
                            </div>
                          ))
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  {headers.map((item) => (
                    item.links?.map((item, idx) => (
                      <div key={idx} className="flex flex-row justify-between group cursor-pointer">
                        <TabsTrigger value={item.value} className="text-white text-xl dark:group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                          {item.title}
                        </TabsTrigger>
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
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <Accordion type="single" collapsible defaultValue="servers">
                  <AccordionItem value="servers">
                    <AccordionTrigger className="py-0 my-0 group">
                      <p className="text-white text-xl dark:group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                        Сервера
                      </p>
                    </AccordionTrigger>
                    <AccordionContent className="relative top-3">
                      {headers.map((item) => (
                        item.servers?.map((item, idx) => (
                          <div className="group cursor-pointer" key={idx}>
                            <TabsTrigger value={item.value} className="text-white text-xl dark:group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                              &nbsp;&gt;&nbsp;{item.title}
                            </TabsTrigger>
                          </div>
                        ))
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </TabsList>
        </Tabs>
      </div>
      <Footer/>
    </>
  )
}
