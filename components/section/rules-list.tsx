import { ChangeEvent, useMemo, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Wrapper } from "@/components/wrappers/main-wrapper";
import { Badge } from '@/components/ui/Badge';
import { rulesList, termins } from "@/shared/content"

export const RulesList = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const searchFindWords = useMemo(
    () => (event: ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(event.target.value);
    }, [setSearchKeyword]);

  return (
    <div className="full-screen-section py-24 bg-background-dark">
      <Wrapper>
        <div className="flex flex-col gap-y-6">
          <input
            type="search"
            className="anvil-textbox p-2 self-center text-neutral-200 w-full md:w-[50%] text-xl placeholder:text-neutral-600 focus:placeholder:text-neutral-900"
            placeholder="Поиск по ключевому слову..."
            value={searchKeyword}
            onChange={searchFindWords}
          />
          <div className="flex flex-wrap gap-2">
            <Badge>#правила</Badge>
            <Badge variant="blue">#база</Badge>
            <Badge>#кодекс</Badge>
            <Badge variant="violet">#никтонечитает</Badge>
          </div>
          <Accordion type="single" collapsible>
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
          </Accordion>
          <hr />
          {rulesList.map((item, idx) =>
            item.content && item.content.length > 0 ? (
              <div key={idx} id={item.sectionId} className="flex flex-col py-4 px-2 md:px-4 border border-transparent hover:border-white hover:duration-500 duration-500 bg-transparent">
                <h1 className="text-gold text-xl md:text-4xl text-shadow-xl mb-6">{item.title}</h1>
                {item.content.map((article, idx) => (
                  <div key={idx} className="flex flex-col mb-4">
                    <div className="flex flex-row flex-wrap lg:flex-nowrap">
                      <p className="text-project-color text-md md:text-lg">{idx + 1}]&nbsp;</p>
                      <p className="text-md md:text-lg text-white" dangerouslySetInnerHTML={{
                        __html: article.article.replace(new RegExp(searchKeyword, 'gi'),
                          '<span class="bg-project-color rounded-sm">$&</span>'),
                      }}>
                      </p>
                    </div>
                    {article.description && article.description.length > 0 ? (
                      <p className="text-md md:text-lg text-neutral-300" dangerouslySetInnerHTML={{
                        __html: `(?) ${article.description.replace(new RegExp(searchKeyword, 'gi'),
                          '<span class="bg-project-color rounded-sm">$&</span>')}`
                      }} />
                    ) : null}
                    <div className="flex flex-col">
                      {article.subtitle && article.subtitle.length > 0 ? (
                        <p className="text-md md:text-lg text-neutral-400" dangerouslySetInnerHTML={{
                          __html: `*${article.subtitle.replace(new RegExp(searchKeyword, 'gi'),
                            '<span class="bg-project-color rounded-sm">$&</span>')}*`
                        }}></p>
                      ) : null}
                      {article.punishment ? (
                        <p className="text-rose-500 text-shadow-sm text-md md:text-lg">Наказание:&nbsp;
                          <span className="text-white" dangerouslySetInnerHTML={{
                            __html: article.punishment.replace(new RegExp(searchKeyword, 'gi'),
                              '<span class="bg-project-color rounded-sm">$&</span>')
                          }}></span>
                        </p>
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