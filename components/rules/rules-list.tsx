import { ChangeEvent, useMemo, useState } from 'react';
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Wrapper } from "@/components/wrappers/main-wrapper";
import { rulesList } from "@/shared/content"
import { Typography } from '@/components/ui/typography';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '../ui/Badge';

export const RulesList = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const searchFindWords = useMemo(
    () => (event: ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(event.target.value);
    }, [setSearchKeyword]);

  return (
    <div className="full-screen-section py-32">
      <Wrapper>
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
            <input
              type="search"
              className="anvil-textbox p-2 text-neutral-200 w-full md:w-[50%] text-md md:text-lg xl:text-xl placeholder:text-neutral-600 focus:placeholder:text-neutral-900"
              placeholder="Поиск по ключевому слову..."
              value={searchKeyword}
              onChange={searchFindWords}
            />
          </div>
          {/* <Accordion type="single" collapsible>
            <AccordionItem value="termin">
              <AccordionTrigger className="bg-wool-black border border-white/10 py-2 px-4 w-full text-xl md:text-4xl 
                text-center text-white text-shadow-xl">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white hover:no-underline">Терминология...</p>
              </AccordionTrigger>
              <AccordionContent>
                {termins.map((item, idx) => (
                  <div key={idx} id={item.sectionId} className="flex flex-col py-4 px-2 md:px-4 gap-y-4 border border-red bg-transparent overflow-hidden">
                    {item.content.map((paragraph, idx) => (
                      <div key={idx} className="flex flex-row flex-wrap">
                        <p className="text-red text-md md:text-lg">{paragraph.articleTitle}&nbsp;</p>
                        <p className="text-white text-md md:text-lg break-words">-&nbsp;{paragraph.articleDesc}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
          {rulesList.map((item, idx) =>
            item.content && item.content.length > 0 ? (
              <div key={idx} id={item.sectionId} className="flex flex-col py-2 md:py-4 px-2 md:px-4 border-2 border-transparent
               dark:hover:border-white hover:duration-300 duration-300 bg-black/80 dark:bg-transparent rounded-xl">
                <h1 className="text-gold text-xl md:text-4xl text-shadow-xl mb-6">
                  {item.title}
                </h1>
                {item.content.map((article, idx) => (
                  <div key={idx} className="flex flex-col last:-mb-1 mb-6 lg:mb-4">
                    <div className="inline-flex lg:items-center">
                      <Typography className="text-project-color text-[12px] sm:text-sm md:text-base">
                        {idx + 1})&nbsp;
                      </Typography>
                      <Typography className="text-sm sm:text-md md:text-lg" dangerouslySetInnerHTML={{
                        __html: article.article.replace(new RegExp(searchKeyword, 'gi'),
                          '<span class="bg-project-color rounded-sm">$&</span>'),
                      }}>
                      </Typography>
                    </div>
                    {article.description && article.description.length > 0 ? (
                      <Typography className="text-sm sm:text-md md:text-lg" dangerouslySetInnerHTML={{
                        __html: `(?) ${article.description.replace(new RegExp(searchKeyword, 'gi'),
                          '<span class="bg-project-color rounded-sm">$&</span>')}`
                      }} />
                    ) : null}
                    <div className="flex flex-col">
                      {article.subtitle && article.subtitle.length > 0 ? (
                        <Typography className="text-sm sm:text-md md:text-lg text-neutral-400" dangerouslySetInnerHTML={{
                          __html: `*${article.subtitle.replace(new RegExp(searchKeyword, 'gi'),
                            '<span class="bg-project-color rounded-sm">$&</span>')}*`
                        }}></Typography>
                      ) : null}
                      {article.punishment ? (
                        <Typography className="text-sm sm:text-md md:text-lg text-rose-500 mt-2">Наказание:&nbsp;
                          <span className="text-white" dangerouslySetInnerHTML={{
                            __html: article.punishment.replace(new RegExp(searchKeyword, 'gi'),
                              '<span class="bg-project-color rounded-sm">$&</span>')
                          }}></span>
                        </Typography>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : null
          )}
        </div>
      </Wrapper>
    </div>
  );
}