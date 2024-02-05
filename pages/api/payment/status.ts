import { NextApiRequest, NextApiResponse } from 'next';
import md5 from "md5"

const merchantId = process.env.FREEKASSA_SHOP_ID;
const merchantSecret = "QwWKOc04uZzef25Z";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { MERCHANT_ID, AMOUNT, MERCHANT_ORDER_ID, SIGN, us_nickname, us_subscription } = req.body;

      res.redirect(`/?MERCHANT_ID=${MERCHANT_ID}&MERCHAND_ORDER_ID=${MERCHANT_ORDER_ID}&us_nickname=${us_nickname}&us_subscription=${us_subscription}`);
      res.status(200).send('YES');

    } catch (error) {


      res.status(500).json({ 
        success: false, 
        error: 'Internal Server Error' 
      });
    }
  } else {
    res.status(405).json({ 
      success: false, 
      error: 'Method Not Allowed'
    });
  }
}