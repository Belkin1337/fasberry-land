import Rcon from "rcon-srcds";

const host = process.env.RCON_HOST;
const port = process.env.RCON_PORT;

export const server = new Rcon({
  host: host,
  port: port,
  encoding: "utf8",
});
