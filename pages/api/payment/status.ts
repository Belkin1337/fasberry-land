import { NextApiRequest, NextApiResponse } from "next";
import md5 from "md5";
import Rcon from "rcon-srcds";
import formidable from "formidable";
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

const token = "6387813452:AAG-rRe5PwNZ9m2TgpK9wrgCZXDn-O4wq00";
const ownerID = "1114061179";

const bot = new TelegramBot(token, { polling: false });

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const server = new Rcon({
  host: "89.23.177.171",
  port: 25934,
  encoding: "utf8",
});

const merchantId = "46028";
const merchantSecret = "QwWKOc04uZzef25Z";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    bad("метод не разрешен");

    return res.status(405).send("Method Not Allowed.");
  }

  if (req.method === "POST") {
    bad("пост запрос выполняется...");

    const { err, fields } = await new Promise<{
      err: Error | null;
      fields: any;
    }>((resolve, reject) => {
      formidable().parse(req, (err: Error, fields) => {
        if (err) reject(err);
        resolve({ err, fields });
      });
    });

    if (err) {
      bad("не получилось распарсить форму");

      return res.status(400).send("Error parsing form data.");
    }

    if (
      !fields ||
      !fields.MERCHANT_ID ||
      !fields.SIGN ||
      !fields.AMOUNT ||
      !fields.MERCHANT_ORDER_ID ||
      !fields.us_nickname ||
      !fields.us_subscription
    ) {
      bad("Не все есть в форме");

      return res.status(400).send("Not all form fields were received.");
    }

    bad("данные пришли? пришли");

    const MERCHANT_ID = Array.isArray(fields.MERCHANT_ID)
      ? fields.MERCHANT_ID[0]
      : "";
    const SIGN: string = Array.isArray(fields.SIGN) ? fields.SIGN[0] : "";
    const AMOUNT: string = Array.isArray(fields.AMOUNT) ? fields.AMOUNT[0] : "";
    const MERCHANT_ORDER_ID: string = Array.isArray(fields.MERCHANT_ORDER_ID)
      ? fields.MERCHANT_ORDER_ID[0]
      : "";
    const us_nickname: string = Array.isArray(fields.us_nickname)
      ? fields.us_nickname[0]
      : "";
    const us_subscription: string = Array.isArray(fields.us_subscription)
      ? fields.us_subscription[0]
      : "";

    const signature = md5(
      `${MERCHANT_ID}:${AMOUNT}:${merchantSecret}:${MERCHANT_ORDER_ID}`
    );

    if (MERCHANT_ID !== merchantId) {
      bad("Заказ неправильный");

      return res.status(400).send({
        success: false,
        message:
          "Merchant mismatch: The provided merchant does not match the expected value.",
      });
    }

    if (SIGN !== signature) {
      bad("Сигнатура неправильный");

      return res.status(400).send({
        success: false,
        message:
          "Signature mismatch: The provided signature does not match the expected value.",
      });
    }

    if (SIGN === signature && MERCHANT_ID === merchantId) {
      bad("Норм все до ркона есть коннект");

      await server.authenticate("t016qBPmx5K9ax6n1cU4W9N3nRNjSS1A");
      server.execute(`lp user ${us_nickname} parent add ${us_subscription}`);
      await server.disconnect();

      report(fields, true);

      return res.status(200).send({
        success: true,
        message: "Issued successfully.",
      });
    } else {
      report(fields, false);
    }

    return res.status(200).send("YES");
  }
}

async function bad(text: string) {
  await bot.sendMessage(ownerID, text)
}

async function report({
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
