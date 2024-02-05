import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { Typography } from "@/components/ui/typography";
import Image from "next/image"

type QueryParameters = {
  MERCHANT_ID: string | undefined | string[],
  MERCHANT_ORDER_ID: string | undefined | string[],
  us_nickname: string | undefined | string[],
  us_subscription: string | undefined | string[],
  P_EMAIL?: string | string[]
}

export const ReqProvider = () => {
  const [paymentState, setPaymentState] = useState<QueryParameters>();
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter()

  useEffect(() => {
    if (router.query.success === 'true') {
      setOpen(true)

      setPaymentState({
        MERCHANT_ID: router.query.MERCHANT_ID,
        MERCHANT_ORDER_ID: router.query.MERCHANT_ORDER_ID,
        us_nickname: router.query.us_nickname,
        us_subscription: router.query.us_subscription,
        P_EMAIL: router.query.P_EMAIL
      });

      router.replace('',
        undefined, {
        shallow: true
      });
    }

    if (router.query.success === 'false') {
      toast({
        title: "Ошибка",
        variant: "neutral",
        className: "border border-red",
        description: "Что-то пошло не так, сообщите об ошибке администратору!",
      })
    }
  }, [router.query.success, router, open])

  return (
    open && (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex flex-col md:flex-row items-center pl-4 lg:pl-4 py-0 pr-0 max-w-6xl border border-none">
          <div className="flex flex-col h-full w-full py-4">
            <Typography size="xl">
              Заказ: <span className="text-project-color">
                #{paymentState?.MERCHANT_ORDER_ID}
              </span>
            </Typography>
            <Typography size="xl">
              Привилегия: <span className="text-project-color">
                {paymentState?.us_subscription}
              </span>
            </Typography>
            <Typography size="xl">
              Выдано игроку: <span className="text-project-color">
                {paymentState?.us_nickname}
              </span>
            </Typography>
            {paymentState?.P_EMAIL && (
              <Typography size="xl">
                Почта, куда придёт уведомление: <span className="text-project-color">
                  {paymentState?.P_EMAIL}
                </span>
              </Typography>
            )}
            <Typography size="xl" className="mt-6 text-[#fabbfb]">
              Спасибо за покупку. Приятной игры!
            </Typography>
          </div>
          <Image
            src="https://cdn.discordapp.com/attachments/904344676587417621/1204167614398603285/edd9f462cd82f8eb9617ddbc06c9f709.jpg?ex=65d3bf7b&is=65c14a7b&hm=ca7382c69d4d67ab03936cf1e70cdf91027814745f6b004a0b72403a669bdf3a&"
            alt={paymentState?.us_subscription as string}
            width={400}
            height={400}
          />
        </DialogContent>
      </Dialog>
    )
  )
}