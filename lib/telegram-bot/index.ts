import TelegramBot from "node-telegram-bot-api";

type DataMessage = {
  us_nickname: string;
  us_subscription: string;
  MERCHANT_ID: number;
  MERCHANT_ORDER_ID: number;
  SIGN: string;
  P_EMAIL?: string;
  P_PHONE?: number;
};

const token = process.env.TELEGRAM_BOT_TOKEN;
const ownerID = process.env.TELEGRAM_OWNER_ID;

const bot = new TelegramBot(token, { 
  polling: false 
});

export async function report({
  us_nickname,
  us_subscription,
  MERCHANT_ID,
  MERCHANT_ORDER_ID,
  SIGN,
  P_EMAIL,
  P_PHONE,
}: DataMessage,
success: boolean
) {
const status = success ? "✅" : "❌";
await bot.sendMessage(
  ownerID,
  `
  Время: ${new Date()} 
  Статус: ${status} 
  Ник: ${us_nickname} 
  Привилегия: ${us_subscription} 
  Магазин: ${MERCHANT_ID}
  Заказ: #${MERCHANT_ORDER_ID} 
  Подпись: ${SIGN} 
  Почта: ${P_EMAIL} 
  Телефон: ${P_PHONE}`
);
}


export async function bad(text: string) {
  await bot.sendMessage(ownerID, text)
}
