import { NextApiRequest, NextApiResponse } from "next";
import md5 from "md5";
import Rcon from "rcon-srcds";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const upload = multer();

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

  if (req.method === "POST") {
    await upload.array("formData")(req, res, async (err: Error) => {
      if (err) {
        return res.status(400).send({
          success: false,
          message: "File upload error",
        });
      }

      const formData = req.body;

      const {
        MERCHANT_ID,
        AMOUNT,
        MERCHANT_ORDER_ID,
        SIGN,
        us_nickname,
        us_subscription,
      } = formData;

      const signature = md5(
        `${MERCHANT_ID}:${AMOUNT}:${merchantSecret}:${MERCHANT_ORDER_ID}`
      );

      if (parseInt(MERCHANT_ID) !== merchantId) {
        return res.status(400).send({
          success: false,
          message:
            "Merchant mismatch: The provided merchant does not match the expected value.",
        });
      } else if (SIGN !== signature) {
        return res.status(400).send({
          success: false,
          message:
            "Signature mismatch: The provided signature does not match the expected value.",
        });
      } else if (SIGN === signature && parseInt(MERCHANT_ID) === merchantId) {
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
    });
  }
}
