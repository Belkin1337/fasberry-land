import { z } from "zod";

export const formSchema = z
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