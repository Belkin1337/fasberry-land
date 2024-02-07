import * as z from "zod"
import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/ui/form"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/ui/tooltip"
import { Input } from "@/ui/input"
import { Typography } from "@/ui/typography"
import { Checkbox } from "@/ui/checkbox"

const formSchema = z
  .object({
    nickname: z.string().transform(value => value.replace(/\s+/g, '')).pipe(z.string().min(1, {
      message: "Никнейм должен состоять из минимум 1 символов."
    })),
    privacy: z.boolean().refine((value) => value === true, {
      message: 'Вы должны ознакомиться с правилами!',
    }),
    email: z.string().email({
      message: "Поле обязательно!"
    }).min(5, {
      message: "Почта должна состоять из минимум 5 символов"
    }),
    phone: z.string().transform((value) => value.replace(/[-+()\s]/g, "")).optional()
    })
  .required()

type FormFields = z.infer<typeof formSchema>;

type SubForm = {
  handlePayment: (values: Payment) => void;
}

export const SubForm = ({ handlePayment }: SubForm) => {
  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: "",
      privacy: false,
      email: "",
      phone: ""
    },
  })

  const onSubmit: SubmitHandler<FormFields> = (values) => {
    handlePayment(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-between gap-y-6">
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-x-2">
                <FormLabel className="text-lg text-white">
                  Игровой никнейм
                </FormLabel>
                <TooltipProvider>
                  <Tooltip delayDuration={1}>
                    <TooltipTrigger>
                      <Image
                        src="/images/minecraft/icons/minecart_chest_big.webp"
                        width={16}
                        height={16}
                        alt="Nickname Requirements"
                      />
                    </TooltipTrigger>
                    <TooltipContent className="flex flex-col gap-y-1">
                      <Typography size="md" className="text-red">
                        Пожалуйста, перепроверьте ник перед оплатой!
                      </Typography>
                      <Typography size="md" className="text-red">
                        А также запрещены пробелы в нике!
                      </Typography>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <FormControl>
                <Input
                  placeholder="Введите никнейм"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start gap-x-2">
                <FormLabel className="text-lg text-white">
                  Почта
                </FormLabel>
              </div>
              <FormControl>
                <Input
                  placeholder="Почта"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start gap-x-2">
                <FormLabel className="text-lg text-white">
                  Телефон (опционально)
                </FormLabel>
              </div>
              <FormControl>
                <Input
                  placeholder="Телефон"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start gap-x-2">
                <FormControl>
                  <Typography size="lg">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />&nbsp;Я согласен с <Link href="rules" className="text-red">правилами</Link> проекта.
                  </Typography>
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <button className={`text-green-server-color text-lg w-full button px-4 py-1`} type="submit">
          Купить
        </button>
      </form>
    </Form>
  )
}