export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FREEKASSA_SECRET_1: string;
      FREEKASSA_SECRET_2: string;
      FREEKASSA_MERCHANT_ID: number;
      FREEKASSA_API_KEY: string
      RCON_HOST: string;
      RCON_PORT: number;
      RCON_PASSWORD: string
      TELEGRAM_BOT_TOKEN: string;
      TELEGRAM_OWNER_ID: string
    }
  }
}