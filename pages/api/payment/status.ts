import { NextApiRequest, NextApiResponse } from "next";
import { bad, report } from "@/lib/telegram-bot";
import { server } from "@/lib/rcon-protocol";
import md5 from "md5";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const merchantId = process.env.FREEKASSA_MERCHANT_ID;
const merchantSecret = process.env.FREEKASSA_SECRET_2;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed.");
  }

  if (req.method === "POST") {
    bad("пост запрос выполняется...");

    const { err, fields } = await new Promise<{
      err: Error | null;
      fields: any;
    }>((resolve, reject) => {
      formidable({ keepExtensions: true }).parse(req, (err: Error, fields) => {
        if (err) reject(err);
        resolve({ err, fields });
      });
    });

    if (err) {
      bad("не получилось распарсить форму");

      return res.status(400).send("Error parsing form data.");
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