import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import {
  Tabs,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger
} from "@/components/ui/dialog"
import {
  armorColumnsArmor,
  armorColumnsDurability,
  armorColumnsEffects,
  armorColumnsPopulators,
  armorColumnsToughness
} from "@/shared/column-models"
import {
  armorList,
  headers
} from "@/shared/content"
import { Block } from "@/components/ui/block"
import { Typography } from "@/components/ui/typography"
import { ImageAnnotation } from "@/components/wiki/image-annotation"
import { CommandLine } from "@/components/ui/command-line"
import { ContentModule } from "@/components/ui/content-module"
import { WikiTableComponent } from "@/components/wiki/table-wiki-component"
import { MainLayoutPage } from "@/components/layout/main-layout-page"

export default function Wiki() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [valueTab, setValueTab] = useState<string>("general");

  useEffect(() => {
    const search = searchParams.get("tab");

    if (search !== null) {
      setValueTab(`${search}`);
    }

  }, [searchParams])

  const handleTabChange = useCallback((valueTab: string) => {
    setValueTab(valueTab);

    router.push(`/wiki?tab=${valueTab}`)
  }, [router])

  const redirectToTab = (href: string) => {
    setValueTab(href);
  }

  return (
    <>
      <Head>
        <title>Вики</title>
        <meta name="description" content="Вики проекта Fasberry. Здесь можно узнать о всех аспектах игры на нашем сервере." />
        <meta property="keywords" content="википедия, fasberry, справочник по серверу, minecraft wiki, fasberry wiki, 
        wiki fasberry, вики fasberry, вики фасберри, фасберри сервер" />
      </Head>
      <MainLayoutPage>
        <Tabs
          value={valueTab}
          onValueChange={handleTabChange}
          defaultValue="general"
          className="flex flex-col lg:flex-row items-start justify-between bg-transparent w-full gap-x-4">
          <Block className="w-full overflow-hidden lg:w-auto rounded-xl"
            border="mini_gray"
            type="column"
            rounded="big"
            size="normal">
            <ContentModule id="general" value="general" role="tab">
              <Typography className="text-5xl mb-8">
                Основной раздел
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                О проекте
              </Typography>
              <Typography size="xl" className="mb-6">
                Fasberry - это игровой проект, нацеленный на улучшение получения опыта от игры и большему удовольствию от геймплея Minecraft.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Что тут?
              </Typography>
              <Typography size="xl" className="mb-6">
                Это вики проекта - основной источник информации по всем аспектам игры на нашем проекте.
                Здесь можно найти все доступные команды игрока по кланам, регионам
                и т.д, а также найти полезные советы по игре.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Не нашёл ответа на свой вопрос
              </Typography>
              <Typography size="xl" className="mb-6">
                Если ты не нашёл здесь ответа на свой вопрос, задай его в игровом чате, указав "?" перед текстом.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Хотите быть частью нашей команды?
              </Typography>
              <Typography size="xl">
                Мы набираем людей, которые готовы уделять время на развитие проекта.
                Это безвозмездная помощь тебе, ибо ты получаешь от нас крутые плюшки на сервере, и нам, потому что мы освобождаем
                себе остальное время, которое и так тратится очень много.
              </Typography>
              <Typography size="xl">
                Теперь хочешь? Напиши в дискорде модератору или владельцу проекта о своём желании и дождись ответа.
              </Typography>
            </ContentModule>
            <ContentModule value="profile" role="tab" id="profile">
              <Typography className="text-5xl mb-8">
                Профиль
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Что такое профиль?
              </Typography>
              <Typography size="xl" className="mb-6">
                Профиль это удобный источник информации о вас, как игроке.
                Здесь собрана информация о ваших наигранных часах, достижениях, коллекционировании и др. А также отсюда можно попасть в
                меню ваших питомцев или вашего клана. Открыть можно командой - <CommandLine>/profile</CommandLine> или <CommandLine>/профиль</CommandLine>.
              </Typography>
              <div className="flex items-center justify-center mb-6">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195792156640690236/Screenshot_10.png?ex=65b5473a&is=65a2d23a&hm=65a5f55dac29d4dc3abc2ebcbc0e20bf36965eb8ed53953c73323c13f459f95a&"
                  alt="Меню профиля"
                  annotation="Меню профиля"
                />
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Личные настройки
              </Typography>
              <Typography size="xl">
                Вы можете попасть в настройки через профиль или прописав команду&nbsp;
                <CommandLine>/settings</CommandLine>.
                Здесь содержатся различные настройки для вашей игры, например, отображение подсказок в чате или гравитация для деревьев.
              </Typography>
            </ContentModule>
            <ContentModule value="economic" role="tab" id="economic" className="flex flex-col gap-y-4">
              <Typography className="text-5xl mb-8">
                Экономика
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Валюты
              </Typography>
              <Typography size="xl" className="mb-6">
                На сервере две валюты: харизма и белкоин. Но основной является - харизма.
                Добыть её можно многими способами: зарабатывая на&nbsp;
                <span
                  onClick={() => redirectToTab("jobs")}
                  className="text-[#00cdb0] cursor-pointer text-shadow-xl">работах
                </span>,
                находя уникальные предметы, участвуя в заданиях местных
                жителей Оффенбурга, посредством обмена белкоинов, за редкие достижения.
              </Typography>
              <div className="flex items-center gap-x-16 justify-center">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195798063181201458/wallet_2.png?ex=65b54cbb&is=65a2d7bb&hm=2aa0b57a1aaeee3fc692ae4e950a87e8aa3050da75ae71512b3ca04109fd8272&"
                  alt="Charism"
                  width={96}
                  height={96}
                  annotation="Харизма"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195798063445459015/wallet_1.png?ex=65b54cbb&is=65a2d7bb&hm=72b5169a043866024f70085fcece26ee62bb72d3961e3df1e5e9251f33a9463f&"
                  alt="Belkoin"
                  width={96}
                  height={96}
                  annotation="Белкоин"
                />
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Что можно купить за харизму?
              </Typography>
              <Typography size="xl" className="mb-6">
                За харизму можно купить: эффекты, питомцев, бусты, декоративные иконки для таба, спавнеры, какие-либо ресурсы в магазинах.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Что можно купить на белкоины?
              </Typography>
              <Typography size="xl" className="mb-6">
                За белкоины можно купить бусты, привилегию "Аутентик", а также обменять их на харизму.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Где обменять валюту?
              </Typography>
              <Typography size="xl">
                Валюту можно обменять у банкира в банке. Открыть банк можно командой <CommandLine>/banker</CommandLine> или сходить самому в местный банк, в который можно попасть
                через метро или найти самому - это не сложно.
              </Typography>
              <div className="flex items-center gap-x-16 justify-center">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195833139633852557/2024-01-13_23.53.33.png?ex=65b56d65&is=65a2f865&hm=a1ee9dbf898e83e0fae5f7a982bca5749f6a308752e6ea6e282f7623f5ab56a5&"
                  alt="Bank"
                  width={800}
                  height={600}
                  annotation="Местный банк, находится у городской реки"
                />
              </div>
            </ContentModule>
            <ContentModule value="jobs" role="tab" id="jobs" >
              <Typography className="text-5xl mb-8">
                Работы
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Как начать зарабатывать?
              </Typography>
              <Typography size="xl" className="mb-6">
                Достаточно ввести команду <CommandLine>/jobs</CommandLine>, и нажать ПКМ по интересующей вам работе. Обычный игрок может быть устроен только на 1 работу одновременно!
                А также, при увольнении большая часть опыта вашей работы будет удалена. Помните об этом!
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Прогресс работы
              </Typography>
              <Typography size="xl" className="mb-6">
                Сюда входит уровень вашей работы, который увеличивается от всех ваших действий (например: от копания железной руды, если вы шахтёр).
                И опыт, который напрямую влияет на уровень работы: чем его больше - тем выше уровень. Каждый уровень содержит в себе определенную планку опыта, которую нужно достичь,
                чтобы получить следующий уровень.
              </Typography>
              <div className="flex items-center justify-center mb-6">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195809298543038514/Screenshot_12.png?ex=65b55731&is=65a2e231&hm=087d8c61e2250ec79255c9ac6e4671864a34ddb97a07f11c62a5bccbfb7bedef&"
                  alt="Jobs Preview"
                  annotation="Описание работы"
                />
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Лимиты
              </Typography>
              <Typography size="xl">
                У каждой работы есть лимит на добытые средства и опыт в сутки, обычн он зависит от вашего уровня конкретной работы, чем выше уровень -
                тем больше вы можете заработать харизму и опыт за сутки.
              </Typography>
            </ContentModule>
            <ContentModule value="reputation" role="tab" id="reputation" className="flex flex-col gap-y-4 ">
              <Typography className="text-5xl mb-8">
                Репутация
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Как получать?
              </Typography>
              <Typography size="xl" className="mb-6">
                Влиять на репутацию могут только игроки: лайкать и дизлайкать вас. Иным способом её не получить.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Зачем нужна репутация?
              </Typography>
              <Typography size="xl" className="mb-6">
                Она открывает доступ к самым уникальным вещам: орихалковой броне, демоническому молоту и т.д.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Как узнать сколько у меня репутации?
              </Typography>
              <Typography size="xl" className="mb-6">
                Можно узнать, введя команду <CommandLine>/rep me</CommandLine>, а также в&nbsp;
                <span
                  onClick={() => redirectToTab("profile")}
                  className="text-[#00cdb0] cursor-pointer">профиле</span> или скорборде.
              </Typography>
              <TooltipProvider>
                <Tooltip delayDuration={1}>
                  <TooltipTrigger>
                    <Typography size="xl" >
                      ...
                    </Typography>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black/50 backdrop-filter backdrop-blur-md border-none p-2 rounded-xl">
                    <p className="text-neutral-400 text-lg">Страница дополняется</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </ContentModule>
            <ContentModule value="pets" role="tab" id="pets" className="flex flex-col gap-y-4 ">
              <Typography className="text-5xl mb-8">
                Питомцы
              </Typography>
              <Typography size="xl" className="mb-6">
                Питомцы это всегда что-то милое и приятное, особенно когда они могут вас защищать и давать вам различные улучшения.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Типы питомцев
              </Typography>
              <Typography size="xl">
                Существует два типа питомцев: питомцы-головы и питомцы-уникальные.
              </Typography>
              <Typography size="xl" className="mb-6">
                Питомцы-головы представляют из себя летающие головы, которые будут следовать за вами сзади вас. Каждый такой питомец имеет в себе плюсы и минусы.
              </Typography>
              <Typography size="xl" className="mb-6">
                Питомцы-уникальные - это отдельные сущности в виде новых мобов, которые могут вас защищать в случае опасности. На некоторых можно даже передвигаться.
                Они естественно дороже чем питомцы-головы и купить их можно на второй странице магазина питомцев.
              </Typography>
              <div className="flex items-center gap-x-6 justify-center mb-6">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195846207851999292/Screenshot_16.png?ex=65b57991&is=65a30491&hm=3496dbb5129d03c1bdf38b32205762016651669cb3d83ef494c405f4fd6fc436&"
                  alt="Pet Head"
                  width={800}
                  height={600}
                  annotation="Питомец-голова 'Дуолинго'"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195847977294626905/Screenshot_17.png?ex=65b57b37&is=65a30637&hm=332e331fb223be4278294af16134fa5e1169bfc9ec0d34fd59da7a45069f3403&"
                  alt="Pet Unik"
                  width={800}
                  height={600}
                  annotation="Питомец-уникальный в виде мотылька"
                />
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Как получить питомцев?
              </Typography>
              <Typography size="xl" className="mb-6">
                Изначально любой игрок имеет бесплатных двух питомцев-голов: собака и кошка. Любого другого питомца нужно покупать. Купить можно, поговорив с
                анималистом Кирой или введя команду <CommandLine>/store_pets</CommandLine> или <CommandLine>/магазин_питомцы</CommandLine>
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Как активировать питомцев?
              </Typography>
              <Typography size="xl">
                Активировать купленных питомцев можно через меню ваших питомцев - <CommandLine>/pets</CommandLine> либо <CommandLine>/питомцы</CommandLine>.
                Деактивировать можно там же.
              </Typography>
              <Typography size="xl" className="mb-6">
                Чтобы сесть на питомца (если питомец такое позволяет), нужно ввести команду <CommandLine>/pets mount</CommandLine>.
              </Typography>
              <div className="flex items-center justify-center">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195848904994979992/Screenshot_18.png?ex=65b57c14&is=65a30714&hm=c61184f572b0f6aa54abeaa7dbc405e43e813adeb52acfb2e8941e74766e7ae7&"
                  alt="Pet Capibara"
                  width={800}
                  height={600}
                  annotation="Езда на капибаре"
                />
              </div>
            </ContentModule>
            <ContentModule value="clans" role="tab" id="clans">
              <Typography className="text-5xl mb-8">
                Кланы
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Как создать клан?
              </Typography>
              <Typography size="xl" className="mb-6">
                Стоимость создания клана равна 100 единицам харизмы.
                Чтобы создать, нужно ввести команду /clan create, а далее указать тег и название клана.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Что такое тег клана?
              </Typography>
              <Typography size="xl" className="mb-6">
                Тег клана - короткое название клана, это может быть аббревиатура, сокращенное название без гласных букв - всё на ваш вкус.
                В теге можно указывать цвет клана! Я сам советую указывать
                в теге цвет клана, потому что это очень хорошо отличает вас от других.
              </Typography>
              <div className="flex items-center justify-center">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195811178048409610/image.png?ex=65b558f1&is=65a2e3f1&hm=a466c22c61159802eab9c8bf7c22f6d6b87e7daa3b1bfa70fb6de7431246ad47&"
                  alt="Clan tag"
                  annotation="То, что выделено является тегом клана"
                />
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Что такое название клана?
              </Typography>
              <Typography size="xl" className="mb-6">
                Название клана - это соответственно полное название вашего клана.
                Оно не имеет цвета, по умолчанию - белый. Сюда я рекомендую указать полное название клана, допустим вашим тегом
                будет являться - "Ambassadors", а полным названием - "Ambassadors of Server".
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                KDR клана
              </Typography>
              <Typography size="xl">
                Клан считается топовым, если он имеет наивысший KDR. Так что такое KDR?
              </Typography>
              <Typography size="xl" className="mb-6">
                KDR - это отношение убийств и смертей участников клана.
                То есть, если больше убийств, то KDR клана будет положительным, и чем выше это число, тем
                выше KDR. Отследить лидеров можно в меню, которое можно открыть с помощью команды&nbsp;
                <CommandLine>/clan_top</CommandLine> или <CommandLine>/клан_топ</CommandLine>.
                Отследить же ваши значения клана можно в меню клана - <CommandLine>/clanmenu</CommandLine>.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Типы клановых убийств
              </Typography>
              <Typography size="xl">
                Не все убийства игроков участниками клана считаются за одно значение.
                Тут всё зависит от типа килла. Ниже о каждом.
              </Typography>
              <Typography size="xl" className="mb-6">
                Всего 4 вида убитых игроков: нейтральные, союзники, враги и игроки без клана.
              </Typography>
              <div className="flex items-center justify-center mb-6">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195828761388667030/Screenshot_13.png?ex=65b56952&is=65a2f452&hm=03c0d1410593accc8fded91406845110909cfdaffa069dd2921b078b17e41130&"
                  alt="Clan kills"
                  annotation="Клановая статистика"
                />
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Войны и альянсы
              </Typography>
              <Typography size="xl">
                После создания клана он является нейтральным всех.
                Любой клан может объявить войну другому, ну или заключить союз.
              </Typography>
              <Typography size="xl">
                Для того, чтобы объявить союз другому клану, нужно ввести команду&nbsp;
                <CommandLine>/clan ally add (клан)</CommandLine>
              </Typography>
              <Typography size="xl">
                Для того, чтобы объявить войну другому клану, его нужно сначала посчитать за враждебным, введя команду&nbsp;
                <CommandLine>/clan rival add (клан)</CommandLine>
              </Typography>
              <Typography size="xl">
                Удаление из врагов и союзников происходит абсолютно также, но вместо&nbsp;
                <CommandLine>add</CommandLine> нужно указать <CommandLine>remove</CommandLine>.
              </Typography>
            </ContentModule>
            <ContentModule value="metro" role="tab" id="metro">
              <Typography className="text-5xl mb-8">
                Система метро
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Что такое метро?
              </Typography>
              <Typography size="xl" className="mb-6">
                Метро - место, откуда можно быстро добраться до разных локаций города.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Где находится метро?
              </Typography>
              <Typography size="xl" className="mb-6">
                Метро находится сразу справа от вас, как вы телепортируетесь на спавн.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Как быстро добраться до места?
              </Typography>
              <Typography size="xl" className="mb-6">
                Подойдите к контроллеру и нажмите ПКМ, чтобы начать разговор.
                В разговоре вы можете выбрать тип вашего назначения и телепортироваться, нажав также на ПКМ.
              </Typography>
              <div className="flex items-center justify-center">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195842384160882769/2024-01-14_00.30.33.png?ex=65b57602&is=65a30102&hm=ea4bac2b1bdbf6d75a08b2f4285ca1b42165efb545c32c44b4ad32544a37e21d&"
                  alt="Metro"
                  width={800}
                  height={600}
                  annotation="Само метро"
                />
              </div>
            </ContentModule>
            <ContentModule value="mobs" role="tab" id="mobs" className="flex flex-col gap-y-4 ">
              <Typography className="text-5xl mb-8">
                Новые мобы
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Что за мобы?
              </Typography>
              <Typography size="xl" className="mb-6">
                Их более 10: медведь, тукан, пеликан, гусь, сова, павлин, белка, краб, крокодил, бабочка, фламинго,
                дракон (красный, голубой, нефритовый), крыса (серая, черная, коричневая).
                Каждый из которых по-разному распространён в мире. После убийства может выпасть разное количество опыта,
                в зависимости от моба, а также различный лут.
                Если у вас есть идеи и предложения по поводу мобов - пишите в дискорде.
              </Typography>
              <Typography size="xl" className="mb-6">
                Ниже некоторые из мобов, позже появится подробная информация по луту, опыту и другим характериситкам каждого моба.
              </Typography>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195854105302810785/2024-01-14_01.16.00.png?ex=65b580ec&is=65a30bec&hm=9dda668d1b26af0994f31ebab10e919134067b80fe164e62411b33d13e82a390&"
                  alt="Peacock"
                  width={400}
                  height={200}
                  annotation="Павлин"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195854105948729554/2024-01-14_01.16.06.png?ex=65b580ec&is=65a30bec&hm=d400eb69db6605d93dfa6180109f58c1514ffcab732407e99b5a55100fbfd238&"
                  alt="Bear"
                  width={400}
                  height={200}
                  annotation="Медведь"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195854106934390804/2024-01-14_01.16.17.png?ex=65b580ec&is=65a30bec&hm=f311dea1ab29b4f8c809d9388cc39af10e71a43fe6373fac2138c35bd91857a8&"
                  alt="Rat"
                  width={400}
                  height={200}
                  annotation="Крыса"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195854107790032927/2024-01-14_01.16.43.png?ex=65b580ed&is=65a30bed&hm=6e15ec607ebb70e4e472b8e0cc23e99b37842a121d2c0b67be0b4372c9fa4574&"
                  alt="Dragon"
                  width={400}
                  height={200}
                  annotation="Голубой дракон"
                />
              </div>
              <TooltipProvider>
                <Tooltip delayDuration={1}>
                  <TooltipTrigger>
                    <Typography size="xl" >
                      ...
                    </Typography>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black/50 backdrop-filter backdrop-blur-md border-none p-2 rounded-xl">
                    <p className="text-neutral-400 text-lg">Страница дополняется</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </ContentModule>
            <ContentModule value="armor" role="tab" id="armor">
              <Typography className="text-5xl mb-8">
                Новая броня
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Что за броня?
              </Typography>
              <Typography size="xl" className="mb-6">
                На сервере 5 новых видов брони: адамантитовая, платиновая, кобальтовая, орихалковая и ледяная.
                Каждый вид брони существенно может отличаться друг от друга.
                Также почти каждый вид брони дополняется своим клинком (мечом) и инструментами (кроме мотыги),
                которые также отличаются друг от друга в зависимости от сета.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Распространенность в мире
              </Typography>
              <Typography size="xl">
                Чтобы скрафтить броню, нужно сначала найти нужные материалы. В данном случае, материал - слиток. Существует всего 4 новых руды - адамантитовая, платиновая, кобальтовая и ледяная.
                Каждая имеет свой шанс появления, а некоторые руды, такие как ледяная, можно найти только в ограниченном списке биомов.
              </Typography>
              <div className="flex flex-col gap-y-2 mb-6">
                <WikiTableComponent
                  array_name={armorList}
                  columns={armorColumnsPopulators}
                  table_caption="Добыча и распространность руды"
                />
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Крафт
              </Typography>
              <Typography size="xl" className="w-fit">
                Крафтится всё довольно просто. Типа:
              </Typography>
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1199380119794499664/Screenshot_5.png?ex=65c254c7&is=65afdfc7&hm=cdeb21b2f47117067c5fabc688f4775c065bf555e2be10fa062ddd407524525e&"
                  alt="Cobalt Helmet"
                  width={226}
                  height={226}
                  annotation="Кобальтовый шлем"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1198924491800195083/Screenshot_2.png?ex=65c0ac71&is=65ae3771&hm=d2f9a92c9151b6888189cf03b5e94a2d16604ae5fb3217b76f483b6a524252ef&"
                  alt="Adamantite Chestplate"
                  width={226}
                  height={226}
                  annotation="Адамантитовый нагрудник"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1198924523983077416/Screenshot_11.png?ex=65c0ac79&is=65ae3779&hm=4c71f891ac791b1a524ffd5bdb4348e7fe0bcf6093f5156b272cd2dc3dc19311&"
                  alt="Platinum Leggings"
                  width={226}
                  height={226}
                  annotation="Платиновые поножи"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1199380272974671873/Screenshot_17.png?ex=65c254ec&is=65afdfec&hm=5b9d5f4ca32b78fcd2b706221c9b7f6eb09aeca9f4fa04a1988b347984677e43&"
                  alt="Ice Boots"
                  width={226}
                  height={226}
                  annotation="Ледяные ботинки"
                />
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Характеристики
              </Typography>
              <Typography size="xl" className="mb-6">
                Характеристики являются важной частью брони, поэтому нет брони, которая бы являлась самой лучшей по всем пунктам.
                Здесь всё зависит от ваших предпочтений игры: нужна ли вам очень прочная броня, но с посредственной защитой или наоборот.
                А может вы вообще любите лёд...
              </Typography>
              <div className="flex justify-between flex-col lg:flex-row gap-y-6 gap-x-12 mb-6">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1190733837941100584/Screenshot_8.png?ex=65ac1acd&is=6599a5cd&hm=1aedac981b2301caef6b5542fbf1930754f29d1aae04e867fdabde29029168af&"
                  alt="Adamantite Armor"
                  width={256}
                  height={256}
                  annotation="Адамантитовая броня"
                />
                <Typography size="xl" className="w-fit">
                  Любой удар снимает единицы прочности, поэтому это может быть важным пунктом для вашей игры.
                  По умолчанию, незеритовая имеет в среднем 400-600 очков прочности, что не очень много, а алмазная вообще 300-500.
                  Кастомная броня предлагает в свою очередь огромный запас прочности в обмен на запрет зачарований с аналогичным аттрибутом.
                </Typography>
              </div>
              <div className="flex flex-col gap-y-2 mb-6">
                <WikiTableComponent
                  array_name={armorList}
                  columns={armorColumnsDurability}
                  table_caption="Прочность"
                />
              </div>
              <div className="flex justify-between flex-col lg:flex-row gap-y-6 gap-x-12 mb-6">
                <Typography size="xl" className="w-fit">
                  Очки защиты зависят от надетых частей брони, а также от ваших зачарований с этим аттрибутом.
                  В таблице указано количество очков для каждого типа брони по её части, так же вы можете
                  сложить все значения, чтобы получить общую цифру очков защиты при полном комплекте.
                </Typography>
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1190733838150807562/Screenshot_9.png?ex=65ac1acd&is=6599a5cd&hm=1c5072261eed00dadd17383c3b21a590ab738543705cdd57cc83d4dd97ac2d70&"
                  alt="Cobalt Armor"
                  width={256}
                  height={256}
                  annotation="Кобальтовая броня"
                />
              </div>
              <div className="flex flex-col gap-y-2 mb-6">
                <WikiTableComponent
                  array_name={armorList}
                  columns={armorColumnsArmor}
                  table_caption="Защита брони"
                />
              </div>
              <div className="flex justify-between flex-col lg:flex-row gap-y-6 gap-x-12 mb-6">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1190733838368903198/Screenshot_10.png?ex=65ac1acd&is=6599a5cd&hm=77eb2304b91fccf238ef4463ae20c38a8fbb3a43ca7fec9a8155e793d0ce92c3&"
                  alt="Platinum Armor"
                  width={256}
                  height={256}
                  annotation="Платиновая броня"
                />
                <Typography size="xl" className="w-fit">
                  Броня может дополнительно защитить игрока благодаря аттрибуту <span className="italic">твердость брони</span>.
                  Обычно броня сводит на нет меньшую часть урона от атак, наносящих больший урон.
                  Прочность брони противостоит этому эффекту, уменьшая силу сильных атак.
                  Обычно только алмазная и незеритовая броня имеют этот аттрибут, но здесь же, любая кастомная броня имеет свои значения.
                </Typography>
              </div>
              <div className="flex flex-col gap-y-2">
                <WikiTableComponent
                  array_name={armorList}
                  columns={armorColumnsToughness}
                  table_caption="Твёрдость брони"
                />
              </div>
              <div className="flex justify-between flex-col lg:flex-row gap-y-6 gap-x-12 mb-6">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1190733838582829176/Screenshot_11.png?ex=65ac1acd&is=6599a5cd&hm=bea0a84424c8d97896924f71c7f0b3a64188a08d67dce5f90b970418cc4014ac&"
                  alt="Ice Armor"
                  width={256}
                  height={256}
                  annotation="Ледяная броня"
                />
                <Typography size="xl" className="w-fit">
                  Вдобавок ко всему, каждую броню можно приобрести у кузнеца, но цена конечно будет кусаться.
                  Любой вид брони можно изначально скрафтить, если у вас есть ресурсы для этого.
                </Typography>
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Редкий сет
              </Typography>
              <div className="flex justify-between flex-col lg:flex-row gap-y-6 gap-x-12 mb-6">
                <Typography size="xl" className="w-fit">
                  Сейчас существует только 1 набор брони, который невозможно скрафтить и найти в мире - орихалковый.
                  Его можно приобрести и использовать только если вы купили его у кузнеца.
                  Данный сетап обладает своими особенностями, о которых ниже.
                </Typography>
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195451819137175582/Screenshot_8.png?ex=65b40a44&is=65a19544&hm=7b1f8c6e9c41f8fb18908569d69c6eca9571db5275860b0eb2650bac89e33d15&"
                  alt="Orichalcum Armor"
                  width={256}
                  height={256}
                  annotation="Орихалковая броня"
                />
              </div>
              <div className="flex flex-col gap-y-2 mb-6">
                <WikiTableComponent
                  array_name={armorList}
                  columns={armorColumnsEffects}
                  table_caption="Особенности брони"
                />
              </div>
              <TooltipProvider>
                <Tooltip delayDuration={1}>
                  <TooltipTrigger>
                    <Typography size="xl" >
                      ...
                    </Typography>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black/50 backdrop-filter backdrop-blur-md border-none p-2 rounded-xl">
                    <p className="text-neutral-400 text-lg">Страница дополняется</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </ContentModule>
            <ContentModule value="safety" role="tab" id="safety" className="flex flex-col gap-y-4 ">
              <Typography className="text-5xl mb-8">
                Защита вашего игрового аккаунта
              </Typography>
              <Typography size="xl" className="mb-6">
                Ваш аккаунт может быть легко подвержен взлому.
                Если вы используете пиратскую версию игры, то тем более нужно перестраховаться,
                привязав ваш аккаунт к боту в Discord/VK/Telegram.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Как привязать?
              </Typography>
              <Typography size="xl">
                Зайдите в игру на сервер и введите команду <CommandLine>/security</CommandLine>.
              </Typography>
              <Typography size="xl" className="mb-6">
                Далее напишите нужному боту фразу, которую вы увидели после ввода команды (вы можете привязать свой аккаунт ко всем ботам).
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Что может бот?
              </Typography>
              <Typography size="xl">
                Если вы привязали аккаунт к боту, то это уже хорошо.
                Каждое действие с вашим игровым аккаунтом будет комментироваться ботом вам в личные сообщения.
              </Typography>
              <Typography size="xl" className="mb-6">
                Вы можете отключить уведомления от бота о вашем входе/выходе или смене пароля,
                но я не рекомендую это делать.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Cмена пароля аккаунта
              </Typography>
              <Typography size="xl">
                Чтобы сменить пароль от игрового аккаунта,
                введите команду <CommandLine>/changepass (текущий пароль) (новый пароль)</CommandLine>.
              </Typography>
            </ContentModule>
            <ContentModule value="boosts" role="tab" id="boosts" className="flex flex-col gap-y-4 ">
              <Typography className="text-5xl mb-8">
                Бусты
              </Typography>
              <Typography size="xl" className="mb-6">
                Бусты дают возможность быстрее зарабатывать, а также мгновенно получать опыт и единицы знаний навыков.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Где купить?
              </Typography>
              <Typography size="xl" className="mb-6">
                Купить можно у мастера Модеста, либо прописать команду -
                <CommandLine>/store_boosts</CommandLine>.
              </Typography>
            </ContentModule>
            <ContentModule value="server-bisquite" role="tab" id="server-bisquite">
              <Typography className="text-5xl mb-8">
                Bisquite Survival
              </Typography>
              <Typography size="xl">
                Bisquite Survival - полуванильный сервер с элементами RP и RPG.
                Здесь можно повыполнять квесты у персонажей, похвастаться питомцами, построить
                свою империю, а также завести друзей.
              </Typography>
            </ContentModule>
            <ContentModule value="server-muffin" role="tab" id="server-muffin">
              <h1 className="text-white text-5xl mb-8">Muffin RP</h1>
              <Typography size="xl">
                Muffin RP - находящийся в разработке сервер, включающий в себя крупный интерактивный мир,
                современность и полностью RP-составляющую и не только.
              </Typography>
            </ContentModule>
            <ContentModule value="reports" role="tab" id="reports" className="flex flex-col gap-y-4 ">
              <Typography className="text-5xl mb-8">
                Жалобы на игроков
              </Typography>
              <Typography size="xl" className="mb-6">
                Заметили читера или неадекватного игрока? Пожалуйтесь на него.
                Это можно сделать в игре или в дискорде. Рассматриваются все жалобы,
                с доказательствами конечно.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Как пожаловаться на игрока в игре?
              </Typography>
              <Typography size="xl">
                Используйте команду&nbsp;
                <CommandLine>/report (ник) (причина)</CommandLine>.
              </Typography>
              <Typography size="xl">
                Далее укажите доказательство в виде ссылки на скриншот
                (это может быть imgur.com/upload, dropbox.com)
              </Typography>
              <Typography size="xl" className="mb-6">
                Ждите ответа от модерации.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Как пожаловаться на игрока в дискорде?
              </Typography>
              <Typography size="xl" className="mb-6">
                Используйте канал "жалобы" в категории "обратная связь" нашего
                <Link href="https://discord.gg/yT7xem2C9G" className="text-[#00cdb0] text-shadow-xl"> Discord</Link> сервера.
              </Typography>
            </ContentModule>
            <ContentModule value="quests" role="tab" id="quests">
              <Typography className="text-5xl mb-8">
                Диалоги и квесты
              </Typography>
              <Typography size="xl" className="mb-6">
                В игре множество различных персонажей, с которыми можно поговорить и даже взять задание.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Где найти персонажей?
              </Typography>
              <Typography size="xl" className="mb-6">
                Персонажей легко найти, все они находятся в городе Оффенбурге (aka spawn).
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Диалоговая система
              </Typography>
              <Typography size="xl" className="mb-6">
                Система диалогов очень проста.
                Управление в диалоге составляет 3 клавиши - ПКМ, CКМ (колёсико мыши) и Shift.
              </Typography>
              <Typography size="xl">
                ПКМ отвечает за выбор варианта ответа.
              </Typography>
              <Typography size="xl">
                СКМ - за передвижение между другими вариантами ответа.
              </Typography>
              <Typography size="xl" className="mb-6">
                Shift - за выход из диалога.
              </Typography>
              <Typography size="xl" className="mb-6">
                Обратите внимание, как только вы вступите в диалог с
                персонажем, то не сможете адекватно видеть чат сервера, так как будут отображены
                варианты ответа в диалоге.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Отслеживание прогресса заданий
              </Typography>
              <Typography size="xl">
                После взятия задания у персонажа, его можно отследить, введя команду&nbsp;
                <CommandLine>/story</CommandLine>.
              </Typography>
              <Typography size="xl" className="mb-6">
                Также можно быстро перейти к нужному персонажу, указав его имя, например
                я хочу попасть сразу в меню персонажа Альберта, то я введу&nbsp;
                <CommandLine>/story_albert</CommandLine>.
              </Typography>
              <div className="flex items-center justify-center">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195864969825230969/Screenshot_19.png?ex=65b58b0a&is=65a3160a&hm=95d3a5226568b226ec8b5df929d61403f649c12f0e6b4df29dcb009d58cec620&"
                  alt="Story Menu"
                  annotation="Типичное меню персонажа"
                />
              </div>
            </ContentModule>
            <ContentModule value="skills" role="tab" id="skills">
              <Typography className="text-5xl mb-8">
                Навыки
              </Typography>
              <Typography size="xl" className="mb-6">
                Всего на сервере существует 21 навык.
                У каждого навыка разное количество умений, которые можно приобрести и прокачать. О всём ниже.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Основные понятия
              </Typography>
              <Typography size="xl">
                Общий уровень - уровень, который является независимым от уровней других навыков.
                Он копится при любых ваших действиях.
                Общий уровень = энергии.
              </Typography>
              <Typography size="xl">
                Энергия - это слоты, которые можно заполнить умением какого-либо навыка.
                При покупке умения - указано сколько он будет занимать слотов, учитывайте это!
              </Typography>
              <Typography size="xl">
                Общий множитель опыта - множитель добываемого вами опыта относительно общего уровня.
                Пока не изменяется, но позже можно его будет увеличивать бустами.
              </Typography>
              <Typography size="xl" className="mb-6">
                Общее кол-во опыта - общее количество опыта относительно общего уровня навыков.
                Просто информирование.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Понятие навыка
              </Typography>
              <Typography size="xl">
                Навык имеет в себе уровень, знания и опыт. Всё взаимосвязанно.
              </Typography>
              <Typography size="xl">
                Уровень навыка прокачивается от количества набранного опыта.
                Опыт же увеличивается от любых ваших действий относительно навыка.
              </Typography>
              <Typography size="xl" className="mb-6">
                Знания = уровню навыка. За них можно как раз-таки покупать умения соответствующего навыка.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Понятие умения
              </Typography>
              <Typography size="xl">
                Умение - уникальное улучшение в вашу игру.
                Умений много, каждое из которых очень хорошо вписывается в игру.
                Например: умение, которое увеличивает вашу скорость передвижения в зависимости от
                вашей длительность безостановочного бега.
              </Typography>
              <Typography size="xl" className="mb-6">
                Приобретать умения можно за единицы знаний соответствующего навыка.
              </Typography>
              <div className="flex flex-col items-center gap-6 justify-center flex-wrap">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195881489640984587/Screenshot_32.png?ex=65b59a6d&is=65a3256d&hm=373acaaa1c35281a8c2300cb2497b7a21c9e2ee897e9864f1e0433298cc613dd&"
                  alt="General Skill Level"
                  width={360}
                  annotation="Информация об общих значениях"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195881489951358976/Screenshot_33.png?ex=65b59a6d&is=65a3256d&hm=69dc5aaeb8f2e03cab3183be025719fa5b77fb0c7c84d178ec7cac82f4a02375&"
                  alt="Skill Level"
                  width={360}
                  annotation="Информация о значениях навыка"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195882153788063776/Screenshot_34.png?ex=65b59b0b&is=65a3260b&hm=a5807c5f22aa07983e10c031d968e5c54b37f76b619a1ee70e5a69d1c8cd0dd1&"
                  alt="Skills "
                  width={360}
                  annotation="Покупка умения навыка за единицы знаний"
                />
              </div>
            </ContentModule>
            <ContentModule value="regions" role="tab" id="regions">
              <Typography className="text-5xl mb-8">
                Регионы и области
              </Typography>
              <Typography size="xl" className="mb-6">
                На сервере предлагается очень продвинутая система владения регионами.
                Налоги, области, аренда, флаги и многое другое ниже.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Что такое владение регионами?
              </Typography>
              <Typography size="xl">
                Владение регионами - это когда ты можешь иметь 1 регион и внутри него несколько отдельных областей, с разными правилами, ограничениями и игроками.
              </Typography>
              <Typography size="xl" className="mb-6">
                Также, можно отдавать регион в аренду другому игроку или выставлять его на продажу.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Как управлять регионами?
              </Typography>
              <Typography size="xl" className="mb-6">
                Регионами можно управлять с помощью удобного меню, которое можно открыть, введя команду&nbsp;
                <CommandLine>/lands</CommandLine>.
              </Typography>
              <div className="flex items-center justify-center mb-6">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195866004505493524/Screenshot_22.png?ex=65b58c01&is=65a31701&hm=5206cbb64ab455731e78a69322597a1f6b3347a9058c43393b83047f7f1dbae5&"
                  alt="Lands General Menu"
                  annotation="Обычное главное меню региона"
                />
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Как создать и заприватить регион?
              </Typography>
              <Typography size="xl" className="mb-6">
                Для того, чтобы заприватить регион, нужно сначала выделить территорию.
                Выделение происходит с помощью инструмента выделения, который можно получить
                введя команду <CommandLine>/selection</CommandLine>.
                После выделения территории, нужно создать регион (если у вас его нет) и прописать /claim.
                При привате региона, захватывается вся территория по высоте (от минимальной до максимальной).
                Изначально каждый игрок может иметь 4 бесплатных чанка.
                Если вы хотите заприватить огромную территорию - то сначала убедитесь, что на балансе региона лежит нужная сумма.
                Напомню, стоимость привата 1 чанка равна 1.2 единиц харизмы.
              </Typography>
              <div className="flex items-center gap-4 justify-center mb-6">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195865998591524965/Screenshot_20.png?ex=65b58c00&is=65a31700&hm=91dfc3459e435f069a88c5a3a181809c5fc97f800e80866f65a6f00503dd3db7&"
                  alt="Selection 1"
                  annotation="Выделение территории: старт"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195865999040319548/Screenshot_21.png?ex=65b58c00&is=65a31700&hm=f8e1597eb2b43c9c29fd0b624191e95e7e90e3275e844f60494928acb3942ae5&"
                  alt="Selection 2"
                  annotation="Выделение территории: финал"
                />
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Что такое области и как их создать?
              </Typography>
              <Typography size="xl">
                Области - это отдельные участки внутри региона, которые можно создать и добавить туда игроков,
                менять флаги мира.
              </Typography>
              <Typography size="xl">
                Для определения области сначала нужно выделить территорию&nbsp;
                <CommandLine>/selection</CommandLine>,
                а далее прописать команду&nbsp;
                <CommandLine>/lands assign (название)</CommandLine>.
              </Typography>
              <Typography size="xl" className="mb-6">
                Когда область создана, вы можете добавить туда игрока, назначить отдельные флаги мира.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Управление игроками
              </Typography>
              <Typography size="xl">
                Игрока можно добавить в регион, введя команду&nbsp;
                <CommandLine>/lands trust (ник) (опционально: регион)</CommandLine>.
                Удалить из региона -&nbsp;
                <CommandLine>/lands untrust (ник) (опционально: регион)</CommandLine>
              </Typography>
              <Typography size="xl" className="mb-6">
                Игрокам можно менять роль, а также опционально блокировать или разблокировать относительно региона.
                Блокировка запрещает игроку входить на территорию региона и как-то
                взаимодействовать с ним.
              </Typography>
              <div className="flex items-center justify-center mb-6">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195866006082556005/Screenshot_27.png?ex=65b58c01&is=65a31701&hm=9459218c1f9e807ed25bd6224ff52d3b6c93b780c89f40c4575e4f4bd54ee3ce&"
                  alt="Members Menu"
                  annotation="Меню управления игроками"
                />
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Роли
              </Typography>
              <Typography size="xl">
                К каждому игроку, который состоит в регионе применяется роль.
                У обычного только что добавленного игрока в регион, роль - Участник.
              </Typography>
              <Typography size="xl">
                Существуют следующие роли: посетитель, участник, заместитель, владелец. Ниже о каждой роли:
              </Typography>
              <div className="flex flex-col items-center justify-center gap-6 flex-wrap mb-6">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195870066718298172/Screenshot_28.png?ex=65b58fca&is=65a31aca&hm=513942fa6b6c8669329a6b6f1b4b53e6d7849766a3178bfb75f03ba81e71da5b&"
                  alt="Visitor Role"
                  width={490}
                  height={560}
                  annotation="Роль: Посетитель"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195870066940579890/Screenshot_29.png?ex=65b58fca&is=65a31aca&hm=834c3efa3b81cf4bbcbd4bc067345f8f41429d4adcf28f617444e79df4e9a59d&"
                  alt="Member Role"
                  width={490}
                  height={560}
                  annotation="Роль: Участник"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195870067158687844/Screenshot_30.png?ex=65b58fca&is=65a31aca&hm=5734867f21a4be52f103c21c3ae1721236b2c402a35865f08af55cfc5bdbc468&"
                  alt="Deputy Role"
                  width={490}
                  height={560}
                  annotation="Роль: Заместитель"
                />
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195870067368415424/Screenshot_31.png?ex=65b58fca&is=65a31aca&hm=3b3d1e5410ef35e3bd060b858c2001c7839666f30eeda4961acc1272b704c0d2&"
                  alt="Creator Role"
                  width={490}
                  height={560}
                  annotation="Роль: Владелец"
                />
              </div>
              <Typography size="xl">
                Каждая роль имеет ряд возможностей и ограничений (кроме владельца).
              </Typography>
              <Typography size="xl">
                Можно создать свои роли, игроку можно создать до 18 ролей.
                А можно и редактировать роли по умолчанию.
              </Typography>
              <Typography size="xl" className="mb-6">
                Кастомные роли можно создавать с роли заместителя и выше (это может менять владелец).
                Кастомные роли можно настраивать под свой регион (менять флаги, отключать налоги для участников с этими ролями и т.д).
              </Typography>
              <div className="flex items-center justify-center mb-6">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195866004987842680/Screenshot_24.png?ex=65b58c01&is=65a31701&hm=45418147434e4c27a5ab8852031d1cdddf535de1fab73c57da2d059dab3a3ac4&"
                  alt="Roles Menu"
                  annotation="Меню управления ролями"
                />
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Налоги
              </Typography>
              <Typography size="xl">
                Налоги выплачивает каждый регион раз в сутки.
                Обычно сумма налога зависит от размера региона, по такой логике: чем больше чанков во владении - тем больше плата.
                За каждый чанк требуется платить сумму равную 0.2 единиц харизмы.
              </Typography>
              <Typography size="xl">
                Налоги существуют и для участников региона.
                Каждый участник выплачивает фиксированную сумму, находясь в регионе, где это правило включено (выплата налогов).
                Владелец или заместитель может выключить это правило и участники могут не платить налоги,
                но сумму будет пополнять владелец или любой другой участник со своего желания.
              </Typography>
              <Typography size="xl" className="mb-6">
                Чтобы пополнить баланс региона, используйте команду&nbsp;
                <CommandLine>/lands deposit (сумма)</CommandLine>,
                а чтобы снять - <CommandLine>/lands withdraw (сумма)</CommandLine>.
              </Typography>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Флаги региона
              </Typography>
              <Typography size="xl">
                Флаги региона - это игровые правила, относительно региона. Например: спавн мобов или пвп.
                Настроить можно через меню, которое открывается опять же командой&nbsp;
                <CommandLine>/lands</CommandLine>.
              </Typography>
              <Typography size="xl">
                Опять же, не все флаги может редактировать обычный игрок!
                Все флаги доступны привилегии "Аутентик" и выше.
              </Typography>
              <div className="flex items-center justify-center">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195866005323395112/Screenshot_25.png?ex=65b58c01&is=65a31701&hm=100752b1cdf358cd3c4a085a84308eaa315f1174e163c86d02f03db43cb3523d&"
                  alt="Flags Menu"
                  annotation="Меню управления флагами"
                />
              </div>
              <Typography variant="block_subtitle" shadow="xl" className="text-project-color">
                Уровни региона
              </Typography>
              <Typography size="xl">
                Существует 4 уровня региона: поселение, деревня, развивающийся город и город.
                Каждый уровень открывает новые возможности и увеличивает лимит участников и баланс региона.
                Чтобы достигать новых уровней, региону нужно выполнить определенные условия.
              </Typography>
              <Typography size="xl" className="mb-6">
                Информацию о следующем уровне региона и его условиях можно опять же просмотреть
                через главное меню управления регионами.
              </Typography>
              <div className="flex items-center justify-center mb-6">
                <ImageAnnotation
                  source="https://cdn.discordapp.com/attachments/904344676587417621/1195866005675704472/Screenshot_26.png?ex=65b58c01&is=65a31701&hm=6ca812fdb2abdb325c01ab36ea959ce283640146170248921a1dd85ba801f548&"
                  alt="Levels Menu"
                  annotation="Меню просмотра уровней региона"
                />
              </div>
            </ContentModule>
          </Block>
          <Dialog>
            <DialogTrigger className="xl:hidden fixed bottom-6 right-6 z-30 flex px-2 py-1 rounded-md
            bg-[#553C7D] border border-neutral-700">
              <Typography size="md">
                Навигация
              </Typography>
            </DialogTrigger>
            <DialogContent className="xl:hidden bg-transparent border-none p-0 max-w-4xl max-h-[68%] overflow-y-auto">
              <TabsList className="flex flex-col p-0 rounded-xl w-full items-start">
                <Block border="mini_gray" className="gap-y-12 h-full" size="normal" rounded="big" type="column">
                  <div className="flex flex-col">
                    <Typography className="text-xl mb-4">
                      Общая информация
                    </Typography>
                    <div className="flex flex-col gap-y-2">
                      <div className="flex flex-row justify-between items-center group cursor-pointer">
                        <TabsTrigger value="general">
                          <Typography size="xl" hover_effects="pink_drop">
                            Основной раздел
                          </Typography>
                        </TabsTrigger>
                        <Image
                          src="/images/minecraft/icons/spyglass_big.webp"
                          className="group-hover:rotate-45 w-[16px] h-[20px] group-hover:duration-300 duration-300"
                          width={16}
                          alt="General"
                          height={16}
                        />
                      </div>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="aspects">
                          <AccordionTrigger className="py-0 my-0 group">
                            <Typography size="xl" hover_effects="pink_drop">
                              Аспекты игры
                            </Typography>
                          </AccordionTrigger>
                          <AccordionContent>
                            {headers.map((item) => (
                              item.aspect?.map((item, idx) => (
                                <div key={idx} className="group cursor-pointer">
                                  <DialogClose asChild>
                                    <TabsTrigger value={item.value}>
                                      <Typography size="base" hover_effects="pink_drop">
                                        &nbsp;&nbsp;{item.title}
                                      </Typography>
                                    </TabsTrigger>
                                  </DialogClose>
                                </div>
                              ))
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      {headers.map((item) => (
                        item.links?.map((item, idx) => (
                          <div key={idx} className="flex flex-row items-center justify-between group cursor-pointer">
                            <DialogClose asChild>
                              {item.isTab ? (
                                <TabsTrigger value={item.value}>
                                  <Typography size="xl" hover_effects="pink_drop">
                                    {item.title}
                                  </Typography>
                                </TabsTrigger>
                              ) : (
                                <div onClick={() => router.push(`${item.value}`)}>
                                  <Typography size="xl" hover_effects="pink_drop">
                                    {item.title}
                                  </Typography>
                                </div>
                              )}
                            </DialogClose>
                            <Image
                              src="/images/minecraft/icons/spyglass_big.webp"
                              className="group-hover:rotate-45 w-[16px] h-[20px] group-hover:duration-300 duration-300"
                              width={26}
                              height={16}
                              alt="Spyglass Down"
                            />
                          </div>
                        ))
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Typography className="text-xl mb-4">
                      Прочее
                    </Typography>
                    <div className="flex flex-col gap-y-4">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="servers">
                          <AccordionTrigger className="py-0 my-0 group">
                            <Typography size="xl" hover_effects="pink_drop">
                              Сервера
                            </Typography>
                          </AccordionTrigger>
                          <AccordionContent className="">
                            {headers.map((item) => (
                              item.servers?.map((item, idx) => (
                                <div className="group cursor-pointer" key={idx}>
                                  <DialogClose asChild>
                                    <TabsTrigger value={item.value}>
                                      <Typography size="xl" hover_effects="pink_drop">
                                        &nbsp;&nbsp;{item.title}
                                      </Typography>
                                    </TabsTrigger>
                                  </DialogClose>
                                </div>
                              ))
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <Link
                      href="https://fasberry.ru/wiki/modpack"
                      className="group cursor-pointer">
                      <Typography size="base" hover_effects="pink_drop">
                        Сборки модов
                      </Typography>
                    </Link>
                  </div>
                </Block>
              </TabsList>
            </DialogContent>
          </Dialog>
          <TabsList className="hidden xl:flex flex-col p-0 rounded-xl w-full xl:w-[30%] items-start sticky top-0">
            <Block border="mini_gray" className="gap-y-12 h-full" size="normal" rounded="big" type="column">
              <div className="flex flex-col gap-y-2">
                <Typography className="text-3xl">
                  Общая информация
                </Typography>
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-row justify-between items-center group cursor-pointer">
                    <TabsTrigger value="general">
                      <Typography size="xl" hover_effects="pink_drop">
                        Основной раздел
                      </Typography>
                    </TabsTrigger>
                    <Image
                      src="/images/minecraft/icons/spyglass_big.webp"
                      className="group-hover:rotate-45 w-[16px] h-[20px] group-hover:duration-300 duration-300"
                      width={16}
                      alt="General"
                      height={16}
                    />
                  </div>
                  <Accordion type="single" collapsible defaultValue="aspects">
                    <AccordionItem value="aspects">
                      <AccordionTrigger className="py-0 my-0 group">
                        <Typography size="xl" hover_effects="pink_drop">
                          Аспекты игры
                        </Typography>
                      </AccordionTrigger>
                      <AccordionContent>
                        {headers.map((item) => (
                          item.aspect?.map((item, idx) => (
                            <div key={idx} className="group cursor-pointer">
                              <TabsTrigger value={item.value}>
                                <Typography size="base" hover_effects="pink_drop">
                                  &nbsp;&nbsp;{item.title}
                                </Typography>
                              </TabsTrigger>
                            </div>
                          ))
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  {headers.map((item) => (
                    item.links?.map((item, idx) => (
                      <div key={idx} className="flex flex-row items-center justify-between group cursor-pointer">
                        {item.isTab ? (
                          <TabsTrigger value={item.value}>
                            <Typography size="xl" hover_effects="pink_drop">
                              {item.title}
                            </Typography>
                          </TabsTrigger>
                        ) : (
                          <div onClick={() => router.push(`${item.value}`)}>
                            <Typography size="xl" hover_effects="pink_drop">
                              {item.title}
                            </Typography>
                          </div>
                        )}
                        <Image
                          src="/images/minecraft/icons/spyglass_big.webp"
                          className="group-hover:rotate-45 w-[16px] h-[20px] group-hover:duration-300 duration-300"
                          width={26}
                          height={16}
                          alt="Spyglass Down"
                        />
                      </div>
                    ))
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <Typography className="text-3xl">
                  Прочее
                </Typography>
                <div className="flex flex-col gap-y-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="servers">
                      <AccordionTrigger className="py-0 my-0 group">
                        <Typography size="xl" hover_effects="pink_drop">
                          Сервера
                        </Typography>
                      </AccordionTrigger>
                      <AccordionContent className="">
                        {headers.map((item) => (
                          item.servers?.map((item, idx) => (
                            <div className="group cursor-pointer" key={idx}>
                              <TabsTrigger value={item.value}>
                                <Typography size="xl" hover_effects="pink_drop">
                                  &nbsp;&nbsp;{item.title}
                                </Typography>
                              </TabsTrigger>
                            </div>
                          ))
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <Link href="https://fasberry.ru/wiki/modpack" className="group cursor-pointer">
                  <Typography size="base" hover_effects="pink_drop">
                    Сборки модов
                  </Typography>
                </Link>
              </div>
            </Block>
          </TabsList>
        </Tabs>
      </MainLayoutPage>
    </>
  )
}