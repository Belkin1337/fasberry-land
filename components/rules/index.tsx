import { ruless } from "@/shared/data"
import { Typography } from '@/ui/typography';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/ui/tooltip';
import { Badge } from '../../ui/Badge';

export const RulesList = () => {
  return (
    <div className="full-screen-section py-32 w-[90%] mx-auto">
      <div className="flex flex-col gap-y-14">
        <div className="flex flex-col md:flex-row gap-y-4 border-2 border-transparent
               dark:hover:border-white hover:duration-300 duration-300 lg:gap-y-2 py-4 bg-black/80 dark:bg-transparent p-2 rounded-xl justify-between">
          <div className="flex items-start lg:items-center gap-x-2">
            <TooltipProvider>
              <Tooltip delayDuration={1}>
                <TooltipTrigger>
                  <Typography size="xl">
                    Теги:
                  </Typography>
                </TooltipTrigger>
                <TooltipContent>
                  <Typography className="text-neutral-400">
                    Типа теги, чтобы было круто
                  </Typography>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="flex flex-wrap gap-2">
              <Badge>#правила</Badge>
              <Badge variant="destructive">#база</Badge>
              <Badge>#кодекс</Badge>
              <Badge variant="violet">#никтонечитает</Badge>
            </div>
          </div>
        </div>
        {ruless.map((item, idx) => (
          <div key={idx} id={item.id}
            className="flex flex-col py-2 md:py-4 px-2 md:px-4 border-2 border-transparent
               dark:hover:border-white hover:duration-300 duration-300 bg-black/80 dark:bg-transparent rounded-xl">
            <h1 className="text-gold text-xl md:text-4xl text-shadow-xl mb-6">
              {item.name}
            </h1>
            {item.content.map((item, idx) => (
              <div key={idx} className="flex flex-col last:-mb-1 mb-6 lg:mb-4">
                <div className="flex-col flex gap-1">
                  <Typography className="text-project-color text-md md:text-lg">
                    {idx + 1})&nbsp;<span className="text-white">{item.title}</span>
                  </Typography>
                  {item.description && (
                    <Typography>
                      [?] {item.description}
                    </Typography>
                  )}
                  {item.punishment && (
                    <div className="flex flex-row gap-2 items-start md:items-center">
                      <span className="text-red">Наказание: </span>
                      <Typography className="text-sm md:text-lg">
                        {item.punishment}
                      </Typography>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}