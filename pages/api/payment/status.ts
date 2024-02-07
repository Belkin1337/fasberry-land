/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from "next";
import { report } from "@/lib/telegram-bot";
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

type RconConn = {
  us_nickname: string;
  us_subscription: string;
};

async function rcon_connect({ us_nickname, us_subscription }: RconConn) {
  const rcon_port = process.env.RCON_PASSWORD;

  await server.authenticate(rcon_port);

  await server.execute(`lp user ${us_nickname} parent add ${us_subscription}`);

  server.disconnect();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed.");
  }

  if (req.method === "POST") {
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
      return res.status(400).send("Error parsing form data.");
    }

    const MERCHANT_ID = String(Array(fields.MERCHANT_ID)[0]);
    const SIGN = String(Array(fields.SIGN)[0]);
    const AMOUNT = String(Array(fields.AMOUNT)[0]);
    const MERCHANT_ORDER_ID = String(Array(fields.MERCHANT_ORDER_ID)[0]);
    const us_nickname = String(Array(fields.us_nickname)[0]);
    const us_subscription = String(Array(fields.us_subscription)[0]);

    const donateList = ["loyal", "authentic", "arkhont"];

    const signature = md5(
      `${MERCHANT_ID}:${AMOUNT}:${merchantSecret}:${MERCHANT_ORDER_ID}`
    );

    const rcon_conn_data = {
      us_nickname: us_nickname,
      us_subscription: us_subscription,
    };

    if (MERCHANT_ID !== merchantId) {
      return res.status(400).send({
        success: false,
        message: "The specified merchant does not exist. ❌",
      });
    }

    if (SIGN !== signature) {
      return res.status(400).send({
        success: false,
        message: "The provided signature does not match the expected value. ❌",
      });
    }

    if (SIGN === signature && MERCHANT_ID === merchantId) {
      if (us_nickname === "" || undefined) {
        return res.status(400).send("Nickname unknown.");
      } else {
        if (!donateList.includes(us_subscription)) {
          return res.status(400).send("Privilege unknown.");
        } else {
          try {
            rcon_connect(rcon_conn_data)
              .then(() => {
                console.log(
                  "The connection was successfully established and terminated. ✅"
                );
              })
              .catch((error) => {
                console.error(
                  "An error occurred while establishing or terminating the connection. ❌",
                  error
                );
              });

            report(fields, true);
          } catch (e) {
            return res.status(400).send("Something went wrong during the connection to RCON.");
          }
        }
      }
    } else {
      report(fields, false);
    }

    return res.status(200).send("YES");
  }
}