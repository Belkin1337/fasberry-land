import { Button } from "@/ui/button";
import { Typography } from "@/ui/typography";
import { useRouter } from "next/navigation"

export default function NotFound() {
  const { back } = useRouter();

  return (
    <div className="flex min-h-screen justify-center items-center px-8"
      style={{
        backgroundImage: 'url("/images/static/dirt.png")'
      }}>
      <div className="flex flex-col items-center gap-y-2">
        <Typography className="text-neutral-400 text-base md:text-xl font-normal">
          Отключено
        </Typography>
        <Typography className="text-white text-base md:text-xl text-center font-normal">
          Не удалось найти нужный ресурс.
        </Typography>
        <Button
          onClick={() => back()}
          className="w-full md:w-max mt-6 raised-slot-button text-center text-neutral-800 text-base md:text-xl py-1 px-4 md:px-6"
        >
          Вернуться в безопасное место
        </Button>
      </div>
    </div>
  );
}