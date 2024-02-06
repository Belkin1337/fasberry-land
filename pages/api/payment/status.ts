import { NextApiRequest, NextApiResponse } from "next";
import md5 from "md5";
import Rcon from "rcon-srcds";

const merchantId = process.env.FREEKASSA_SHOP_ID;
const merchantSecret = "QwWKOc04uZzef25Z";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });

    return
  }

  const server = new Rcon({
    host: process.env.RCON_HOST,
    port: 25934,
    encoding: "utf8",
  });

  const rcon_password = process.env.RCON_PASSWORD as string;

  if (req.method === "POST") {
    try {
      const {
        MERCHANT_ID,
        AMOUNT,
        MERCHANT_ORDER_ID,
        SIGN,
        us_nickname,
        us_subscription,
      } = req.body;

      const signature = md5(
        `${MERCHANT_ID}:${AMOUNT}:${merchantSecret}:${MERCHANT_ORDER_ID}`
      );

      if (merchantId !== MERCHANT_ID) {
        res.status(400).json({
          success: false,
          message:
            "Merchant mismatch: The provided merchant does not match the expected value.",
        });

        return
      } else if (SIGN !== signature) {
        res.status(400).json({
          success: false,
          message:
            "Signature mismatch: The provided signature does not match the expected value.",
        });

        return
      } else if (SIGN == signature && merchantId == MERCHANT_ID) {
        await server.authenticate(rcon_password);
        await server.execute(
          `say выдано ${us_nickname} parent add ${us_subscription}`
        );
        await server.disconnect();

        res.status(200).json({
          success: true,
          message: "Issued successfully.",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });

      return
    }
  }
}
