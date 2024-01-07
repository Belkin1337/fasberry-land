import { support } from '@/shared/content';
import { SubscriptionItem } from "@/components/subscription-dialog";
import { Title } from '@/components/ui/title';

export const Subscriptions = () => {
  const subList = support.Support.content[0].donateElement.map((item) => ({
    title: item.title,
    level: item.level,
    desc: item.description,
    commands: item.commands,
    functions: item.functions,
    price: item.price,
    linkToBuy: item.link,
    screenshot: item.screenshot
  }));

  return (
    <div className="flex flex-col py-24" >
      <Title className="text-3xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-16 text-gold text-center">Подписки сервера</Title>
      <div defaultValue="subscriptions" className="flex flex-col gap-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 ">
          {subList.map((item) => (
            <SubscriptionItem
              key={item.level}
              price={item.price}
              name={item.title}
              description={item.desc}
              rate={item.level}
              commands={item.commands}
              screenshot={item.screenshot}
            />
          ))}
        </div>
      </div>
    </div >
  );
}