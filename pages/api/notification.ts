import type { NextApiRequest, NextApiResponse } from "next";
import Rcon from "rcon-srcds";

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

  const server = new Rcon({
    host: process.env.RCON_HOST,
    port: 25934,
    encoding: "utf8",
  });

  const rcon_password = process.env.RCON_PASSWORD as string;

  if (req.method === "POST") {
    const { us_nickname, us_subscription } = req.query;

    // const checkSubscription = (value: string | string[] | undefined) => {
    //   if (value === "loyal") {
    //     return "Лоял";
    //   } else if (value === "authentic") {
    //     return "Аутентик";
    //   } else if (value === "arkhont") {
    //     return "Архонт";
    //   }
    // };

    try {
      await server.authenticate(rcon_password);
      await server.execute(
        `lp user ${us_nickname} parent add ${us_subscription}`
      );
      await server.disconnect();

      res.status(200).json({
        success: true,
        message: "Issued successfully.",
      });
    } catch (e) {
      throw new Error("Something wrong error!");
    }

    res.status(500).json({
      success: false,
      message: "Something Server Internal Error!",
    });

    res.status(403).json({
      success: false,
      message: "Access denied!",
    });
  }
}
