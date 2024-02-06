
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/ui/tooltip";
import { Typography } from "@/ui/typography";
import Image from "next/image"

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={1}>
        <TooltipTrigger>
          {theme === "light" && (
            <div onClick={() => {
              setTheme("dark")
            }}>
              <Image
                src="/images/minecraft/icons/black_baloon.webp"
                width={36}
                height={36}
                alt="Dark Theme"
                loading="lazy"
              />
            </div>
          )}
        </TooltipTrigger>
        <TooltipContent className="z-[1000]">
          <Typography className="text-neutral-400" size="md">
            Тёмная тема
          </Typography>
        </TooltipContent>
      </Tooltip>
      <Tooltip delayDuration={1}>
        <TooltipTrigger>
          {theme === "dark" && (
            <div onClick={() => {
              setTheme("light")
            }}>
              <Image
                src="/images/minecraft/icons/white_baloon.webp"
                width={36}
                height={36}
                loading="lazy"
                alt="Light Theme"
              />
            </div>
          )}
        </TooltipTrigger>
        <TooltipContent className="z-[1000]">
          <Typography className="text-neutral-400" size="md">
            Светлая тема
          </Typography>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}