import { support } from '@/shared/content';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubscriptionItem } from "../ui/dialogs/subscription-dialog";
import { Title } from '../ui/title';

export const Subscriptions = () => {
  const tabsListData = [
    { name: "Подписки", value: "subscriptions" },
    { name: "Возможности", value: "functions" },
    { name: "Бусты", value: "boosts" },
  ]

  const subList = support.Support.content[0].donateElement.map((item) => ({
    title: item.title,
    level: item.level,
    desc: item.description,
    commands: item.commands,
    functions: item.functions,
    price: item.price,
    linkToBuy: item.link,
  }));

  const tabsList = tabsListData.map((item) => (
    <TabsTrigger
      key={item.name}
      value={item.value}
      className="raised-slot md:p-2 lg:p-3 w-full md:text-3xl text-xl text-zinc-700"
    >
      {item.name}
    </TabsTrigger>
  ))

  return (
    <div className="flex flex-col py-24" >
      <Title className="text-gold mb-24">Что есть и можно приобрести?</Title>
      <Tabs defaultValue="subscriptions" className="flex flex-col gap-y-12">
        <TabsList className="flex flex-col lg:flex-row gap-4 items-start justify-center bg-transparent mb-12">{tabsList}</TabsList>
        <TabsContent value="subscriptions">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 ">
            {subList.map((item) => (
              <SubscriptionItem
                key={item.level}
                name={item.title}
                description={item.desc}
                rate={item.level}
                commands={item.commands}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="functions">
          <p className='text-xl text-neutral-400'>пусто...</p>
        </TabsContent>
        <TabsContent value="boosts">
          <p className='text-xl text-neutral-400'>пусто...</p>
        </TabsContent>
      </Tabs>
    </div >
  );
}