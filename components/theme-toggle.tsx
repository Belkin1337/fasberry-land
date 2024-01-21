
import Image from "next/image"
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

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
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {theme === "light" && (
              <div onClick={() => {
                setTheme("dark")
              }}>
                <Image src="/images/minecraft/icons/black_baloon.webp" width={36} height={36} alt="Dark Theme" />
              </div>
            )}
          </TooltipTrigger>
          <TooltipContent className="z-[1000] bg-black/80 rounded-md">
            <p className="text-neutral-400 text-base">
              Тёмная тема
            </p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            {theme === "dark" && (
              <div onClick={() => {
                setTheme("light")
              }}>
                <Image src="/images/minecraft/icons/white_baloon.webp" width={36} height={36} alt="Light Theme" />
              </div>
            )}
          </TooltipTrigger>
          <TooltipContent className="z-[1000] bg-black/80 rounded-md">
            <p className="text-neutral-400 text-base">
              Светлая тема
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}