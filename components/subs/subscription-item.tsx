/* eslint-disable no-console */
import Image from "next/image"
import { Block } from "../../ui/block"
import { Typography } from "../../ui/typography"
import { SubForm } from "./sub-form"
import { useCallback, useState } from "react"
import { useRouter } from "next/router"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../../ui/accordion"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger
} from "../../ui/dialog"
import { useToast } from "../../ui/use-toast"

// type PaymentResponse = {
//   message: string
// }

export const SubscriptionItem = ({ name, id, description, price, image }: SubItem) => {
  const [state, setState] = useState<boolean>(false);
  const router = useRouter();
  const { toast } = useToast();

  const handlePayment = useCallback(async (values: Payment) => {
    const paymentObject = {
      paymentId: id,
        amount: price,
        phone: values.phone,
        email: values.email,
        us_subscription: name,
        us_nickname: values.nickname,
    }

    async function postPayment(values: Payment) {
      const res = await fetch("/api/payment/create", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentObject)
      })

      if (!res.ok) {
        throw new Error("Ошибка: проблемы с подключением...");
      }

      const data = await res.json()

      return data;
    }

    try {
      const data = await postPayment(values);
      const href = data.message;

      if (data) {
        toast({
          title: "Переадресация на страницу оплаты...",
          variant: "neutral",
          className: "border border-green"
        });

        router.push(href);
      }
    } catch (error) {
      toast({
        title: "Ошибка при создании оплаты",
        variant: "neutral",
        className: "border border-red"
      });
    }
  }, [router, toast, price, id, name]);

  return (
    <Dialog modal open={state} onOpenChange={setState}>
      <DialogTrigger className="flex flex-col book h-[540px] w-full hover:-translate-y-1 transition ease-out duration-500 cursor-pointer justify-between">
        <div className="flex flex-col gap-y-4">
          <h1 className='text-black text-lg xl:text-2xl text-right -top-2 relative'>
            {name}
          </h1>
          <div className="flex flex-col items-start">
            <Typography size="xl" position="left" className="text-water-meadow">
              Описание:
            </Typography>
            <Typography size="lg" className="text-black" position="left">
              {description}
            </Typography>
          </div>
        </div>
        <Typography className="text-black cursor-pointer w-max self-end">
          узнать больше
        </Typography>
      </DialogTrigger>
      <DialogContent className="max-w-[520px] max-h-[80%] p-0 overflow-y-auto bg-transparent border-none gap-y-2 m-0">
        <Block type="column" className="gap-x-2 gap-y-2" rounded="big" blockItem>
          <div className="flex flex-col w-full gap-y-2 justify-center h-full">
            <Typography size="xl">
              {name}
            </Typography>
            <Typography size="lg" className="text-[#fabbfb]">
              Цена:
              <span className="text-white">
                &nbsp;{price + ' руб'}
              </span>
            </Typography>
            <Typography size="lg" className="text-[#fabbfb]">
              Возможности, команды и бонусы
            </Typography>
            <Accordion type="single" collapsible>
              <AccordionItem value="sub-description">
                <AccordionTrigger className="text-xl text-white">
                  описание
                </AccordionTrigger>
                <AccordionContent>
                  <Image
                    width={600}
                    height={1000}
                    src={image}
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
            <DialogContent className="max-w-[600px] h-auto bg-transparent p-0 overflow-y-auto border-none gap-0 rounded-xl w-[90%] mx-auto">
              <Block blockItem type="column" rounded="big" className="h-full w-full">
                <Typography size="xl" position="center" className="mb-4 lg:mb-8">
                  Покупка привилегии ({name})
                </Typography>
                <SubForm handlePayment={handlePayment} />
              </Block>
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
