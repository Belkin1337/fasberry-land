import * as z from "zod"
import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Typography } from "@/components/ui/typography"
import { Checkbox } from "@/components/ui/checkbox"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

const formSchema = z
  .object({
    nickname: z.string().min(1, {
      message: "Никнейм должен состоять из минимум 1 символов."
    }),
    privacy: z.boolean().refine((value) => value === true, {
      message: 'Вы должны ознакомиться с правилами!',
    }),
  })
  .required()

type FormFields = z.infer<typeof formSchema>;

export const SubForm = ({
  dialogState
}: { dialogState: () => void }) => {
  const { toast } = useToast();

  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: "",
      privacy: false
    },
  })

  const onSubmit: SubmitHandler<FormFields> = (values) => {
    // console.log(values);
    dialogState();
    toast({
      title: "Тест",
      variant: "neutral",
      description: "Стоп. Это тестовое уведомление!",
      action:
        <ToastAction altText="Try again">
          Ок
        </ToastAction>,
    })
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
                        alt="Nickname Requirement"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <Typography
                        size="md" className="text-red">
                        Пожалуйста, перепроверьте ник перед оплатой!
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
        <button
          className={`text-green-server-color text-lg w-full button px-4 py-1`}
          type="submit">
          Купить
        </button>
      </form>
    </Form>
  )
}