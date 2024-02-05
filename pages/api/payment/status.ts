import { NextApiRequest, NextApiResponse } from "next";
import md5 from "md5";

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
  }

  if (req.method === "POST") {
    try {
      const {
        MERCHANT_ID,
        AMOUNT,
        MERCHANT_ORDER_ID,
        SIGN,
        us_nickname,
        us_subscription,
      } = req.query;

      const signature = md5(
        `${MERCHANT_ID}:${AMOUNT}:${merchantSecret}:${MERCHANT_ORDER_ID}`
      );

      if (merchantId !== MERCHANT_ID) {
        res.status(400).json({
          success: false,
          message: 'Merchant mismatch: The provided merchant does not match the expected value.',
        });
      }

      if (SIGN !== signature) {
        res.status(400).json({
          success: false,
          message: 'Signature mismatch: The provided signature does not match the expected value.',
        });
      }
      if (SIGN == signature && merchantId == MERCHANT_ID) {
        const redirectUrl = `http://fasberry.ru/?success=true&MERCHANT_ID=${MERCHANT_ID}&MERCHANT_ORDER_ID=${MERCHANT_ORDER_ID}&us_nickname=${us_nickname}&us_subscription=${us_subscription}`;
      
        res.status(200).send('YES');
        res.redirect(redirectUrl);
      }
      
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  } 
}
