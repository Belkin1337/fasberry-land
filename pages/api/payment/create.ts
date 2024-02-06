import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const freekassa = require("@alex-kondakov/freekassa").init();

  freekassa.secret1 = process.env.FREEKASSA_SECRET_1;
  freekassa.secret2 = process.env.FREEKASSA_SECRET_2;
  freekassa.shopId = process.env.FREEKASSA_MERCHANT_ID;
  freekassa.key = process.env.FREEKASSA_API_KEY;
  freekassa.paymentId = req.body.paymentId;
  freekassa.amount = req.body.amount;
  freekassa.tel = req.body.phone;
  freekassa.email = req.body.email;
  freekassa.us_subscription = req.body.us_subscription;
  freekassa.us_nickname = req.body.us_nickname;
  freekassa.sign();

  const data = await freekassa.create();
  
  return res.json({
    message: data
  });
}