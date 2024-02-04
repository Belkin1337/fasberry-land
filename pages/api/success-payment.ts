/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from "next";
import Rcon from "rcon-srcds";

type PlayerStatus = {
  type: string,
  nickname: string,
  subscription: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const server = new Rcon({
    host: process.env.RCON_HOST,
    port: 25934
  });

  const rcon_password = process.env.RCON_PASSWORD as string

  try {
    await server.authenticate(rcon_password);
    console.log("authenticated");
    let status = await server.execute("status"); // You can read `status` reponse
    server.execute("mp_autokick 0"); // no need to read the response
  } catch (e) {
    console.error(e);
  }
}
