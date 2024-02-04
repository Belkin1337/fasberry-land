import type { NextApiRequest, NextApiResponse } from "next";
import Rcon from "rcon-srcds";
import querystring from "querystring";
 
interface IQuery {
  us_nickname: string;
  us_subscription: string;
  [key: string]: string | string[]; 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const server = new Rcon({
    host: process.env.RCON_HOST,
    port: 25934,
    encoding: 'utf8', 
  });

  const rcon_password = process.env.RCON_PASSWORD as string;

  if (req.method === "POST") {
    const query = querystring.parse(req.url as string) as unknown as IQuery;

    const { us_nickname, us_subscription } = query;

    const nickname = us_nickname as string;
    const subscription = us_subscription as string;

    try {
      await server.authenticate(rcon_password);
      server.execute(`say Tested!`)
      server.execute(`lp user ${nickname} parent add ${subscription}`);
      await server.disconnect();
    } catch (e) {
      throw new Error("Something wrong error!")
    }

    res.status(200).json({
      success: true,
      message: "Donate given to successful for the player on the server.",
    });

    res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });

    res.status(500).json({
      success: false,
      message: "Something Server Internal Error",
    });
  }
}
