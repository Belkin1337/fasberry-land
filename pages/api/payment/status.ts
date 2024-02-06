import { NextApiRequest, NextApiResponse } from "next";
import md5 from "md5";
import Rcon from "rcon-srcds";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
  runtime: 'edge', // this is a pre-requisite
  // execute this function on iad1 or hnd1, based on the connecting client location
  regions: ['fra1'],
};

const server = new Rcon({
  host: process.env.RCON_HOST,
  port: 25934,
  encoding: "utf8",
});

const rcon_password = process.env.RCON_PASSWORD as string;
const merchantId = 46028;
const merchantSecret = "QwWKOc04uZzef25Z";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  if (
    req.method === "POST" &&
    req.headers["content-type"]?.startsWith("multipart/form-data")
  ) {
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

      const {
        MERCHANT_ID,
        SIGN,
        AMOUNT,
        MERCHANT_ORDER_ID,
        us_nickname,
        us_subscription,
      } = fields;

      const signature = md5(
        `${MERCHANT_ID}:${AMOUNT}:${merchantSecret}:${MERCHANT_ORDER_ID}`
      );

      if (parseInt(MERCHANT_ID) !== merchantId) {
        res.status(400).send({
          success: false,
          message:
            "Merchant mismatch: The provided merchant does not match the expected value.",
        });
      }

      if (SIGN.toString() !== signature) {
        res.status(400).send({
          success: false,
          message:
            "Signature mismatch: The provided signature does not match the expected value.",
        });
      }

      if (
        SIGN.toString() === signature &&
        parseInt(MERCHANT_ID) === merchantId
      ) {
        await server.authenticate(rcon_password);
        server.execute(
          `say выдано ${us_nickname} parent add ${us_subscription}`
        );
        await server.disconnect();

        return res.status(200).send({
          success: true,
          message: "Issued successfully.",
        });
      }

      return res.status(200).json({
        status: "ok",
      });
    } catch {
      return res.status(500).send("Internal Server Error");
    }
  }
}
