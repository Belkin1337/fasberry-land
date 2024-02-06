import { NextApiRequest, NextApiResponse } from "next";
import md5 from "md5";
import Rcon from "rcon-srcds";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const server = new Rcon({
  host: process.env.RCON_HOST,
  port: 25934,
  encoding: "utf8",
});

const rcon_password = process.env.RCON_PASSWORD as string;
const merchantId = process.env.FREEKASSA_MERCHANT_ID;
const merchantSecret = process.env.FREEKASSA_SECRET_2 as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  if (req.method === "POST") {
    try {
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
        return res.status(400).send("Ошибка при парсинге данных формы");
      }

      if (!fields) {
        return res.status(400).send("Поля формы не были получены");
      }

      const MERCHANT_ID = fields.MERCHANT_ID[0];
      const SIGN: string = fields.SIGN[0];
      const AMOUNT: string = fields.AMOUNT[0];
      const MERCHANT_ORDER_ID: string = fields.MERCHANT_ORDER_ID[0];
      const us_nickname: string = fields.us_nickname[0];
      const us_subscription: string = fields.us_subscription[0];

      const signature = md5(
        `${MERCHANT_ID}:${AMOUNT}:${merchantSecret}:${MERCHANT_ORDER_ID}`
      );
      
      if (MERCHANT_ID !== merchantId) {
        return res.status(400).send({
          success: false,
          message:
            "Merchant mismatch: The provided merchant does not match the expected value.",
        });
      }

      if (SIGN !== signature) {
        return res.status(400).send({
          success: false,
          message:
            "Signature mismatch: The provided signature does not match the expected value.",
        });
      }

      try {
        if (
          SIGN === signature &&
          MERCHANT_ID === merchantId
        ) {
          await server.authenticate(rcon_password);
          server.execute(
            `lp user ${us_nickname} parent add ${us_subscription}`
          );
          await server.disconnect();

          return res.status(200).send({
            success: true,
            message: "Issued successfully.",
          });
        }
      } catch (e) {
        return res.status(400).send({
          message: "Don't given subscription for player.",
        });
      }

      return res.status(200).send("YES");
    } catch (e) {
      return res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }
}
