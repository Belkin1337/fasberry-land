import Layout from "@/components/layout/Layout"
import Head from "next/head"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { useRouter } from "next/router"
import { Dialog, DialogContent, DialogClose, DialogTrigger } from "@/components/ui/dialog"

import Link from "next/link"
import { ImageAnnotation } from "@/components/ui/image-annotation"
import { useEffect, useState } from "react"
import { CommandLine } from "@/components/ui/command-line"

const headers = [
  {
    aspect: [
      {
        title: "профиль",
        value: "profile"
      },
      {
        title: "регионы",
        value: "regions"
      },
      {
        title: "диалоги и квесты",
        value: "quests"
      },
      {
        title: "навыки",
        value: "skills"
      },
      {
        title: "экономика",
        value: "economic"
      },
      {
        title: "кланы",
        value: "clans"
      },
      {
        title: "работы",
        value: "jobs"
      },
      {
        title: "бусты",
        value: "boosts"
      },
      {
        title: "репутация",
        value: "reputation"
      },
      {
        title: "питомцы",
        value: "pets"
      },
      {
        title: "система метро",
        value: "metro"
      },
      {
        title: "новые мобы",
        value: "mobs"
      },
      {
        title: "новая броня",
        value: "armor"
      }
    ],
  },
  {
    links: [
      {
        title: "Защита аккаунта",
        value: "safety"
      },
      {
        title: "Технические проблемы",
        value: "problems"
      },
      {
        title: "Жалобы на игроков",
        value: "reports"
      },
      {
        title: "Донат",
        value: "donate"
      },
    ]
  },
  {
    servers: [
      {
        title: "Bisquite Survival",
        value: "server-bisquite"
      },
      {
        title: "Muffin RP",
        value: "server-muffin"
      }
    ],
  }
]

export default function Wiki() {
  const router = useRouter();
  const initialTab = Array.isArray(router.query.tab) ? router.query.tab[0] : router.query.tab;
  const [activeTab, setActiveTab] = useState<string | undefined>(initialTab);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    router.push({ pathname: "/wiki", query: { tab: value } }, undefined, { shallow: true });
  };

  useEffect(() => {
    const queryTab = router.query.tab;
    setActiveTab(Array.isArray(queryTab) ? queryTab[0] : queryTab);
  }, [router.query.tab]);

  return (
    <>
      <Head>
        <title>Вики</title>
      </Head>
      <div className="min-h-screen w-[90%] mx-auto py-36">
        <Tabs
          value={activeTab}
          defaultValue="general"
          onValueChange={handleTabChange}
          className="flex flex-col lg:flex-row items-start justify-between bg-transparent gap-x-6"
        >
          <div className="flex flex-col block-item p-1 w-full lg:w-2/3 rounded-xl">
            <div className="flex flex-col p-4 bg-black rounded-xl">
              <TabsContent value="general" role="tab" id="general" className="flex flex-col gap-y-4 items-start">
                <h1 className="text-white text-5xl mb-8">Основной раздел</h1>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">О проекте</h2>
                <p className="text-lg md:text-xl mb-6">
                  Fasberry - это игровой проект, нацеленный на улучшение получения опыта от игры и большему удовольствию от геймплея Minecraft.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Что тут?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Это вики проекта - основной источник информации по всем аспектам игры на нашем проекте. Здесь можно найти все доступные команды игрока по кланам, регионам
                  и т.д, а также найти полезные советы по игре.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Не нашёл ответа на свой вопрос</h2>
                <p className="text-lg md:text-xl mb-6">
                  Если ты не нашёл здесь ответа на свой вопрос, задай его в игровом чате, указав "?" перед текстом.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Хотите быть частью нашей команды?</h2>
                <p className="text-lg md:text-xl">
                  Мы набираем людей, которые готовы уделять время на развитие проекта. Это безвозмездная помощь тебе, ибо ты получаешь от нас крутые плюшки на сервере, и нам, потому что мы освобождаем
                  себе остальное время, которое и так тратится очень много.
                </p>
                <p className="text-lg md:text-xl">Теперь хочешь? Напиши в дискорде модератору или владельцу проекта о своём желании и дождись ответа.</p>
              </TabsContent>
              <TabsContent value="profile" role="tab" id="profile" className="flex flex-col gap-y-4">
                <h1 className="text-white text-5xl mb-8">Профиль</h1>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Что такое профиль?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Профиль это удобный источник информации о вас, как игроке. Здесь собрана информация о ваших наигранных часах, достижениях, коллекционировании и др. А также отсюда можно попасть в
                  меню ваших питомцев или вашего клана. Открыть можно командой - <CommandLine>/profile</CommandLine> или <CommandLine>/профиль</CommandLine>.
                </p>
                <div className="flex items-center justify-center mb-6">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195792156640690236/Screenshot_10.png?ex=65b5473a&is=65a2d23a&hm=65a5f55dac29d4dc3abc2ebcbc0e20bf36965eb8ed53953c73323c13f459f95a&"
                    alt="Меню профиля"
                    annotation="Меню профиля"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Личные настройки</h2>
                <p className="text-lg md:text-xl">
                  Вы можете попасть в настройки через профиль или прописав команду <CommandLine>/settings</CommandLine>. Здесь содержатся различные настройки для вашей игры, например, отображение подсказок в чате или гравитация для деревьев.
                </p>
              </TabsContent>
              <TabsContent value="economic" role="tab" id="economic" className="flex flex-col gap-y-4">
                <h1 className="text-white text-5xl mb-8">Экономика</h1>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Валюты</h2>
                <p className="text-lg md:text-xl mb-6">
                  На сервере две валюты: харизма и белкоин. Но основной является - харизма.
                  Добыть её можно многими способами: зарабатывая на <span onClick={() => handleTabChange("jobs")} className="text-[#00cdb0] cursor-pointer">работах</span>, находя уникальные предметы, участвуя в заданиях местных
                  жителей Оффенбурга, посредством обмена белкоинов, за редкие достижения.
                </p>
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
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Что можно купить за харизму?</h2>
                <p className="text-lg md:text-xl mb-6">
                  За харизму можно купить: эффекты, питомцев, бусты, декоративные иконки для таба, спавнеры, какие-либо ресурсы в магазинах.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Что можно купить на белкоины?</h2>
                <p className="text-lg md:text-xl mb-6">
                  За белкоины можно купить бусты, привилегию "Аутентик", а также обменять их на харизму.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Где обменять валюту?</h2>
                <p className="text-lg md:text-xl">
                  Валюту можно обменять у банкира в банке. Открыть банк можно командой <CommandLine>/banker</CommandLine> или сходить самому в местный банк, в который можно попасть
                  через метро или найти самому - это не сложно.
                </p>
                <div className="flex items-center gap-x-16 justify-center">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195833139633852557/2024-01-13_23.53.33.png?ex=65b56d65&is=65a2f865&hm=a1ee9dbf898e83e0fae5f7a982bca5749f6a308752e6ea6e282f7623f5ab56a5&"
                    alt="Bank"
                    width={800}
                    height={600}
                    annotation="Местный банк, находится у городской реки"
                  />
                </div>
              </TabsContent>
              <TabsContent value="jobs" role="tab" id="jobs" className="flex flex-col gap-y-4">
                <h1 className="text-white text-5xl mb-8">Работы</h1>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Как начать зарабатывать?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Достаточно ввести команду <CommandLine>/jobs</CommandLine>, и нажать ПКМ по интересующей вам работе. Обычный игрок может быть устроен только на 1 работу одновременно!
                  А также, при увольнении большая часть опыта вашей работы будет удалена. Помните об этом!
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Прогресс работы</h2>
                <p className="text-lg md:text-xl mb-6">
                  Сюда входит уровень вашей работы, который увеличивается от всех ваших действий (например: от копания железной руды, если вы шахтёр).
                  И опыт, который напрямую влияет на уровень работы: чем его больше - тем выше уровень. Каждый уровень содержит в себе определенную планку опыта, которую нужно достичь,
                  чтобы получить следующий уровень.
                </p>
                <div className="flex items-center justify-center mb-6">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195809298543038514/Screenshot_12.png?ex=65b55731&is=65a2e231&hm=087d8c61e2250ec79255c9ac6e4671864a34ddb97a07f11c62a5bccbfb7bedef&"
                    alt="Jobs Preview"
                    annotation="Описание работы"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Лимиты</h2>
                <p className="text-lg md:text-xl">
                  У каждой работы есть лимит на добытые средства и опыт в сутки, обычн он зависит от вашего уровня конкретной работы, чем выше уровень -
                  тем больше вы можете заработать харизму и опыт за сутки.
                </p>
              </TabsContent>
              <TabsContent value="reputation" role="tab" id="reputation" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Репутация</h1>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Как получать?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Влиять на репутацию могут только игроки: лайкать и дизлайкать вас. Иным способом её не получить.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00cdb0]">Зачем нужна репутация?</h2>
                <p className="text-lg md:text-xl mb-6">Она открывает доступ к самым уникальным вещам: орихалковой броне, демоническому молоту и т.д.</p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Как узнать сколько у меня репутации?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Можно узнать, введя команду <CommandLine>/rep me</CommandLine>, а также в&nbsp;
                  <span onClick={() => handleTabChange("profile")} className="text-[#00cdb0] cursor-pointer">профиле</span> или скорборде.
                </p>
              </TabsContent>
              <TabsContent value="pets" role="tab" id="pets" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Питомцы</h1>
                <p className="text-lg md:text-xl mb-6">
                  Питомцы это всегда что-то милое и приятное, особенно когда они могут вас защищать и давать вам различные улучшения.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00cdb0]">Типы питомцев</h2>
                <p className="text-lg md:text-xl">Существует два типа питомцев: питомцы-головы и питомцы-уникальные.</p>
                <p className="text-lg md:text-xl mb-6">
                  Питомцы-головы представляют из себя летающие головы, которые будут следовать за вами сзади вас. Каждый такой питомец имеет в себе плюсы и минусы.
                </p>
                <p className="text-lg md:text-xl mb-6">
                  Питомцы-уникальные - это отдельные сущности в виде новых мобов, которые могут вас защищать в случае опасности. На некоторых можно даже передвигаться.
                  Они естественно дороже чем питомцы-головы и купить их можно на второй странице магазина питомцев.
                </p>
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
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Как получить питомцев?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Изначально любой игрок имеет бесплатных двух питомцев-голов: собака и кошка. Любого другого питомца нужно покупать. Купить можно, поговорив с
                  анималистом Кирой или введя команду <CommandLine>/store_pets</CommandLine> или <CommandLine>/магазин_питомцы</CommandLine>
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Как активировать питомцев?</h2>
                <p className="text-lg md:text-xl">
                  Активировать купленных питомцев можно через меню ваших питомцев - <CommandLine>/pets</CommandLine> либо <CommandLine>/питомцы</CommandLine>.
                  Деактивировать можно там же.
                </p>
                <p className="text-lg md:text-xl mb-6">Чтобы сесть на питомца (если питомец такое позволяет), нужно ввести команду <CommandLine>/pets mount</CommandLine>.</p>
                <div className="flex items-center justify-center">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195848904994979992/Screenshot_18.png?ex=65b57c14&is=65a30714&hm=c61184f572b0f6aa54abeaa7dbc405e43e813adeb52acfb2e8941e74766e7ae7&"
                    alt="Pet Capibara"
                    width={800}
                    height={600}
                    annotation="Езда на капибаре"
                  />
                </div>
              </TabsContent>
              <TabsContent value="clans" role="tab" id="clans" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Кланы</h1>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Как создать клан?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Стоимость создания клана равна 100 единицам харизмы. Чтобы создать, нужно ввести команду /clan create, а далее указать тег и название клана.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Что такое тег клана?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Тег клана - короткое название клана, это может быть аббревиатура, сокращенное название без гласных букв - всё на ваш вкус. В теге можно указывать цвет клана! Я сам советую указывать
                  в теге цвет клана, потому что это очень хорошо отличает вас от других.
                </p>
                <div className="flex items-center justify-center">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195811178048409610/image.png?ex=65b558f1&is=65a2e3f1&hm=a466c22c61159802eab9c8bf7c22f6d6b87e7daa3b1bfa70fb6de7431246ad47&"
                    alt="Clan tag"
                    annotation="То, что выделено является тегом клана"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Что такое название клана?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Название клана - это соответственно полное название вашего клана. Оно не имеет цвета, по умолчанию - белый. Сюда я рекомендую указать полное название клана, допустим вашим тегом
                  будет являться - "Ambassadors", а полным названием - "Ambassadors of Server".
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">KDR клана</h2>
                <p className="text-lg md:text-xl">
                  Клан считается топовым, если он имеет наивысший KDR. Так что такое KDR?
                </p>
                <p className="text-lg md:text-xl mb-6">
                  KDR - это отношение убийств и смертей участников клана. То есть, если больше убийств, то KDR клана будет положительным, и чем выше это число, тем
                  выше KDR. Отследить лидеров можно в меню, которое можно открыть с помощью команды <CommandLine>/clan_top</CommandLine> или <CommandLine>/клан_топ</CommandLine>.
                  Отследить же ваши значения клана можно в меню клана - <CommandLine>/clanmenu</CommandLine>.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Типы клановых убийств</h2>
                <p className="text-lg md:text-xl">
                  Не все убийства игроков участниками клана считаются за одно значение. Тут всё зависит от типа килла. Ниже о каждом.
                </p>
                <p className="text-lg md:text-xl mb-6">
                  Всего 4 вида убитых игроков: нейтральные, союзники, враги и игроки без клана.
                </p>
                <div className="flex items-center justify-center mb-6">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195828761388667030/Screenshot_13.png?ex=65b56952&is=65a2f452&hm=03c0d1410593accc8fded91406845110909cfdaffa069dd2921b078b17e41130&"
                    alt="Clan kills"
                    annotation="Клановая статистика"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Войны и альянсы</h2>
                <p className="text-lg md:text-xl">
                  После создания клана он является нейтральным всех.
                  Любой клан может объявить войну другому, ну или заключить союз.
                </p>
                <p className="text-lg md:text-xl">Для того, чтобы объявить союз другому клану, нужно ввести команду&nbsp;
                  <CommandLine>/clan ally add (клан)</CommandLine>
                </p>
                <p className="text-lg md:text-xl">Для того, чтобы объявить войну другому клану, его нужно сначала посчитать за враждебным, введя команду <CommandLine>/clan rival add (клан)</CommandLine></p>
                <p className="text-lg md:text-xl">Удаление из врагов и союзников происходит абсолютно также, но вместо <CommandLine>add</CommandLine> нужно указать <CommandLine>remove</CommandLine>.</p>
              </TabsContent>
              <TabsContent value="metro" role="tab" id="metro" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Система метро</h1>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Что такое метро?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Метро - место, откуда можно быстро добраться до разных локаций города.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00cdb0]">Где находится метро?</h2>
                <p className="text-lg md:text-xl mb-6">Метро находится сразу справа от вас, как вы телепортируетесь на спавн.</p>

                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Как быстро добраться до места?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Подойдите к контроллеру и нажмите ПКМ, чтобы начать разговор. В разговоре вы можете выбрать тип вашего назначения и телепортироваться, нажав также на ПКМ.
                </p>
                <div className="flex items-center justify-center">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195842384160882769/2024-01-14_00.30.33.png?ex=65b57602&is=65a30102&hm=ea4bac2b1bdbf6d75a08b2f4285ca1b42165efb545c32c44b4ad32544a37e21d&"
                    alt="Metro"
                    width={800}
                    height={600}
                    annotation="Само метро"
                  />
                </div>
              </TabsContent>
              <TabsContent value="mobs" role="tab" id="mobs" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Новые мобы</h1>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Что за мобы?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Их более 10: медведь, тукан, пеликан, гусь, сова, павлин, белка, краб, крокодил, бабочка, фламинго, дракон (красный, голубой, нефритовый), крыса (серая, черная, коричневая).
                  Каждый из которых по-разному распространён в мире. После убийства может выпасть разное количество опыта, в зависимости от моба, а также различный лут.
                  Если у вас есть идеи и предложения по поводу мобов - пишите в дискорде.
                </p>
                <p className="text-lg md:text-xl mb-6">Ниже некоторые из мобов, позже появится подробная информация по луту, опыту и другим характериситкам каждого моба.</p>
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
              </TabsContent>
              <TabsContent value="armor" role="tab" id="armor" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Новая броня</h1>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Что за броня?</h2>
                <p className="text-lg md:text-xl mb-6">
                  На сервере 5 новых видов брони: адамантитовая, платиновая, кобальтовая, орихалковая и ледяная. Каждый вид брони существенно может отличаться друг от друга.
                  Также почти каждый вид брони дополняется своим клинком (мечом) и инструментами (кроме мотыги), которые также отличаются друг от друга в зависимости от сета.
                  Подробные характеристики каждой брони и инструмента будут указаны чуть позже.
                </p>
                <p className="text-lg md:text-xl mb-6">А пока некоторые скрины ниже каждого вида брони</p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1190733837941100584/Screenshot_8.png?ex=65ac1acd&is=6599a5cd&hm=1aedac981b2301caef6b5542fbf1930754f29d1aae04e867fdabde29029168af&"
                    alt="Adamantite Armor"
                    annotation="Адамантитовая броня"
                  />
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1190733838150807562/Screenshot_9.png?ex=65ac1acd&is=6599a5cd&hm=1c5072261eed00dadd17383c3b21a590ab738543705cdd57cc83d4dd97ac2d70&"
                    alt="Cobalt Armor"
                    annotation="Кобальтовая броня"
                  />
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1190733838368903198/Screenshot_10.png?ex=65ac1acd&is=6599a5cd&hm=77eb2304b91fccf238ef4463ae20c38a8fbb3a43ca7fec9a8155e793d0ce92c3&"
                    alt="Platinum Armor"
                    annotation="Платиновая броня"
                  />
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1190733838582829176/Screenshot_11.png?ex=65ac1acd&is=6599a5cd&hm=bea0a84424c8d97896924f71c7f0b3a64188a08d67dce5f90b970418cc4014ac&"
                    alt="Ice Armor"
                    annotation="Ледяная броня"
                  />
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195451819137175582/Screenshot_8.png?ex=65b40a44&is=65a19544&hm=7b1f8c6e9c41f8fb18908569d69c6eca9571db5275860b0eb2650bac89e33d15&"
                    alt="Orichalcum Armor"
                    annotation="Орихалковая броня"
                  />
                </div>
              </TabsContent>
              <TabsContent value="safety" role="tab" id="safety" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Защита вашего игрового аккаунта</h1>
                <p className="text-lg md:text-xl mb-6">
                  Ваш аккаунт может быть легко подвержен взлому. Если вы используете пиратскую версию игры, то тем более нужно перестраховаться, привязав ваш аккаунт к боту в Discord/VK/Telegram.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Как привязать?</h2>
                <p className="text-lg md:text-xl">Зайдите в игру на сервер и введите команду <CommandLine>/security</CommandLine>.</p>
                <p className="text-lg md:text-xl mb-6">Далее напишите нужному боту фразу, которую вы увидели после ввода команды (вы можете привязать свой аккаунт ко всем ботам).</p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Что может бот?</h2>
                <p className="text-lg md:text-xl">Если вы привязали аккаунт к боту, то это уже хорошо. Каждое действие с вашим игровым аккаунтом будет комментироваться ботом вам в личные сообщения.</p>
                <p className="text-lg md:text-xl mb-6">Вы можете отключить уведомления от бота о вашем входе/выходе или смене пароля, но я не рекомендую это делать.</p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Cмена пароля аккаунта</h2>
                <p className="text-lg md:text-xl">
                  Чтобы сменить пароль от игрового аккаунта, введите команду <CommandLine>/changepass (текущий пароль) (новый пароль)</CommandLine>.
                </p>
              </TabsContent>
              <TabsContent value="boosts" role="tab" id="boosts" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Бусты</h1>
                <p className="text-lg md:text-xl mb-6">
                  Бусты дают возможность быстрее зарабатывать, а также мгновенно получать опыт и единицы знаний навыков.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Где купить?</h2>
                <p className="text-lg md:text-xl mb-6">Купить можно у мастера Модеста, либо прописать команду - <CommandLine>/store_boosts</CommandLine>.</p>
              </TabsContent>
              <TabsContent value="server-bisquite" role="tab" id="server-bisquite" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Bisquite Survival</h1>
                <p className="text-lg md:text-xl">
                  Bisquite Survival - полуванильный сервер с элементами RP и RPG. Здесь можно повыполнять квесты у персонажей, похвастаться питомцами, построить
                  свою империю, а также завести друзей.
                </p>
              </TabsContent>
              <TabsContent value="server-muffin" role="tab" id="server-muffin" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Muffin RP</h1>
                <p className="text-lg md:text-xl">
                  Muffin RP - находящийся в разработке сервер, включающий в себя крупный интерактивный мир, современность и полностью RP-составляющую и не только.
                </p>
              </TabsContent>
              <TabsContent value="donate" role="tab" id="donate" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Донат на сервере</h1>
                <p className="text-lg md:text-xl">
                  Донатом на сервере являются привилегии. Они дают больше возможностей во всех сферах игры, одновременно не превалируя над игроком настолько сильно.
                </p>
                <p className="text-lg md:text-xl">
                  Подробнее можно узнать здесь - <Link href="https://fasberry.ru/donates" className="text-gold">привилегии</Link>.
                </p>
              </TabsContent>
              <TabsContent value="problems" role="tab" id="problems" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Технические проблемы</h1>
                <p className="text-lg md:text-xl mb-6">
                  Бывает такое, что возникает какая-либо проблема. На нашем сервере - это ресурспак.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Ресурспак не включается</h2>
                <p className="text-lg md:text-xl mb-6">Попробуйте перезайти на сервер. Если всё равно не активируется, то включите опцию "Наборы ресурсов" перед входом на сервер.</p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Везде белые прямоугольники</h2>
                <p className="text-lg md:text-xl mb-6">
                  Это означает, что у вас не применился ресурспак или он применился некорректно относительно ваших настроек языка. Одним из решений будет выключить опцию
                  "Шрифт Unicode" в настройках Языка майнкрафта.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Долго грузится ресурспак</h2>
                <p className="text-lg md:text-xl mb-6">
                  Ресурспак сервера весит относительно немного, так что не должно быть веских причин его не загружать постоянно (при входе/выходе). Если у вас возникают проблемы с загрузкой РП,
                  то проверьте скорость интернета и пинга. А также перезагрузите клиент игры.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">На сервере не используется PlasmoVoice</h2>
                <p className="text-lg md:text-xl mb-6">
                  Нет, на сервере используется PlasmoVoice, это ошибка на клиенте, то есть у вас. Попробуйте перезайти на сервер несколько раз до включения мода. Это не наша ошибка, а мода.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Лагает на спаве</h2>
                <p className="text-lg md:text-xl mb-6">
                  Снизьте дальность прорисовки теней, если у вас малый фпс на спавне. А тажке уменьшите дальность прорисовки, если она у вас очень большая.
                </p>
              </TabsContent>
              <TabsContent value="reports" role="tab" id="reports" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Жалобы на игроков</h1>
                <p className="text-lg md:text-xl mb-6">
                  Заметили читера или неадекватного игрока? Пожалуйтесь на него. Это можно сделать в игре или в дискорде. Рассматриваются все жалобы, с доказательствами конечно.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Как пожаловаться на игрока в игре?</h2>
                <p className="text-lg md:text-xl">Используйте команду <CommandLine>/report (ник) (причина)</CommandLine>.</p>
                <p className="text-lg md:text-xl">Далее укажите доказательство в виде ссылки на скриншот (это может быть imgur.com/upload, dropbox.com)</p>
                <p className="text-lg md:text-xl mb-6">Ждите ответа от модерации.</p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Как пожаловаться на игрока в дискорде?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Используйте канал "жалобы" в категории "обратная связь" нашего <Link href="https://discord.gg/yT7xem2C9G" className="text-[#00cdb0]">Discord</Link> сервера.
                </p>
              </TabsContent>
              <TabsContent value="quests" role="tab" id="quests" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Диалоги и квесты</h1>
                <p className="text-lg md:text-xl mb-6">
                  В игре множество различных персонажей, с которыми можно поговорить и даже взять задание.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Где найти персонажей?</h2>
                <p className="text-lg md:text-xl mb-6">Персонажей легко найти, все они находятся в городе Оффенбурге (aka spawn).</p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Диалоговая система</h2>
                <p className="text-lg md:text-xl mb-6">
                  Система диалогов очень проста. Управление в диалоге составляет 3 клавиши - ПКМ, CКМ (колёсико мыши) и Shift.
                </p>
                <p className="text-lg md:text-xl">ПКМ отвечает за выбор варианта ответа.</p>
                <p className="text-lg md:text-xl">СКМ - за передвижение между другими вариантами ответа.</p>
                <p className="text-lg md:text-xl mb-6">Shift - за выход из диалога.</p>
                <p className="text-lg md:text-xl mb-6">
                  Обратите внимание, как только вы вступите в диалог с персонажем, то не сможете адекватно видеть чат сервера, так как будут отображены
                  варианты ответа в диалоге.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Отслеживание прогресса заданий</h2>
                <p className="text-lg md:text-xl">После взятия задания у персонажа, его можно отследить, введя команду <CommandLine>/story</CommandLine>.</p>
                <p className="text-lg md:text-xl mb-6">
                  Также можно быстро перейти к нужному персонажу, указав его имя, например я хочу попасть сразу в меню персонажа Альберта, то я введу&nbsp;
                  <CommandLine>/story_albert</CommandLine>.
                </p>
                <div className="flex items-center justify-center">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195864969825230969/Screenshot_19.png?ex=65b58b0a&is=65a3160a&hm=95d3a5226568b226ec8b5df929d61403f649c12f0e6b4df29dcb009d58cec620&"
                    alt="Story Menu"
                    annotation="Типичное меню персонажа"
                  />
                </div>
              </TabsContent>
              <TabsContent value="skills" role="tab" id="skills" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Навыки</h1>
                <p className="text-lg md:text-xl mb-6">
                  Всего на сервере существует 21 навык. У каждого навыка разное количество умений, которые можно приобрести и прокачать. О всём ниже.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Основные понятия</h2>
                <p className="text-lg md:text-xl">
                  Общий уровень - уровень, который является независимым от уровней других навыков. Он копится при любых ваших действиях.
                  Общий уровень = энергии.
                </p>
                <p className="text-lg md:text-xl">
                  Энергия - это слоты, которые можно заполнить умением какого-либо навыка. При покупке умения - указано сколько он будет занимать слотов, учитывайте это!
                </p>
                <p className="text-lg md:text-xl">
                  Общий множитель опыта - множитель добываемого вами опыта относительно общего уровня. Пока не изменяется, но позже можно его будет увеличивать бустами.
                </p>
                <p className="text-lg md:text-xl mb-6">
                  Общее кол-во опыта - общее количество опыта относительно общего уровня навыков. Просто информирование.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Понятие навыка</h2>
                <p className="text-lg md:text-xl">
                  Навык имеет в себе уровень, знания и опыт. Всё взаимосвязанно.
                </p>
                <p className="text-lg md:text-xl">
                  Уровень навыка прокачивается от количества набранного опыта. Опыт же увеличивается от любых ваших действий относительно навыка.
                </p>
                <p className="text-lg md:text-xl mb-6">
                  Знания = уровню навыка. За них можно как раз-таки покупать умения соответствующего навыка.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Понятие умения</h2>
                <p className="text-lg md:text-xl">
                  Умение - уникальное улучшение в вашу игру. Умений много, каждое из которых очень хорошо вписывается в игру.
                  Например: умение, которое увеличивает вашу скорость передвижения в зависимости от вашей длительность безостановочного бега.
                </p>
                <p className="text-lg md:text-xl mb-6">
                  Приобретать умения можно за единицы знаний соответствующего навыка.
                </p>
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
              </TabsContent>
              <TabsContent value="regions" role="tab" id="regions" className="flex flex-col gap-y-4 ">
                <h1 className="text-white text-5xl mb-8">Регионы и области</h1>
                <p className="text-lg md:text-xl mb-6">
                  На сервере предлагается очень продвинутая система владения регионами. Налоги, области, аренда, флаги и многое другое ниже.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Что такое владение регионами?</h2>
                <p className="text-lg md:text-xl">Владение регионами - это когда ты можешь иметь 1 регион и внутри него несколько отдельных областей, с разными правилами, ограничениями и игроками.</p>
                <p className="text-lg md:text-xl mb-6">Также, можно отдавать регион в аренду другому игроку или выставлять его на продажу.</p>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Как управлять регионами?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Регионами можно управлять с помощью удобного меню, которое можно открыть, введя команду <CommandLine>/lands</CommandLine>.
                </p>
                <div className="flex items-center justify-center mb-6">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195866004505493524/Screenshot_22.png?ex=65b58c01&is=65a31701&hm=5206cbb64ab455731e78a69322597a1f6b3347a9058c43393b83047f7f1dbae5&"
                    alt="Lands General Menu"
                    annotation="Обычное главное меню региона"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Как создать и заприватить регион?</h2>
                <p className="text-lg md:text-xl mb-6">
                  Для того, чтобы заприватить регион, нужно сначала выделить территорию. Выделение происходит с помощью инструмента выделения, который можно получить
                  введя команду <CommandLine>/selection</CommandLine>. После выделения территории, нужно создать регион (если у вас его нет) и прописать /claim. При привате
                  региона, захватывается вся территория по высоте (от минимальной до максимальной). Изначально каждый игрок
                  может иметь 4 бесплатных чанка. Если вы хотите заприватить огромную территорию - то сначала убедитесь, что на балансе региона лежит нужная сумма.
                  Напомню, стоимость привата 1 чанка равна 1.2 единиц харизмы.
                </p>
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
                <h2 className="text-2xl md:text-3xl text-[#00CDB0]">Что такое области и как их создать?</h2>
                <p className="text-lg md:text-xl">
                  Области - это отдельные участки внутри региона, которые можно создать и добавить туда игроков, менять флаги мира.
                </p>
                <p className="text-lg md:text-xl">
                  Для определения области сначала нужно выделить территорию <CommandLine>/selection</CommandLine>,
                  а далее прописать команду <CommandLine>/lands assign (название)</CommandLine>.
                </p>
                <p className="text-lg md:text-xl mb-6">
                  Когда область создана, вы можете добавить туда игрока, назначить отдельные флаги мира.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00cdb0]">Управление игроками</h2>
                <p className="text-lg md:text-xl">
                  Игрока можно добавить в регион, введя команду <CommandLine>/lands trust (ник) (опционально: регион)</CommandLine>.
                  Удалить из региона - <CommandLine>/lands untrust (ник) (опционально: регион)</CommandLine>
                </p>
                <p className="text-lg md:text-xl mb-6">
                  Игрокам можно менять роль, а также опционально блокировать или разблокировать относительно региона. Блокировка запрещает игроку входить на территорию региона и как-то
                  взаимодействовать с ним.
                </p>
                <div className="flex items-center justify-center mb-6">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195866006082556005/Screenshot_27.png?ex=65b58c01&is=65a31701&hm=9459218c1f9e807ed25bd6224ff52d3b6c93b780c89f40c4575e4f4bd54ee3ce&"
                    alt="Members Menu"
                    annotation="Меню управления игроками"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl text-[#00cdb0]">Роли</h2>
                <p className="text-lg md:text-xl">
                  К каждому игроку, который состоит в регионе применяется роль. У обычного только что добавленного игрока в регион, роль - Участник.
                </p>
                <p className="text-lg md:text-xl">
                  Существуют следующие роли: посетитель, участник, заместитель, владелец. Ниже о каждой роли:
                </p>
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
                <p className="text-lg md:text-xl">
                  Каждая роль имеет ряд возможностей и ограничений (кроме владельца).
                </p>
                <p className="text-lg md:text-xl">
                  Можно создать свои роли, игроку можно создать до 18 ролей. А можно и редактировать роли по умолчанию.
                </p>
                <p className="text-lg md:text-xl mb-6">
                  Кастомные роли можно создавать с роли заместителя и выше (это может менять владелец).
                  Кастомные роли можно настраивать под свой регион (менять флаги, отключать налоги для участников с этими ролями и т.д).
                </p>
                <div className="flex items-center justify-center mb-6">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195866004987842680/Screenshot_24.png?ex=65b58c01&is=65a31701&hm=45418147434e4c27a5ab8852031d1cdddf535de1fab73c57da2d059dab3a3ac4&"
                    alt="Roles Menu"
                    annotation="Меню управления ролями"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl text-[#00cdb0]">Налоги</h2>
                <p className="text-lg md:text-xl">
                  Налоги выплачивает каждый регион раз в сутки.
                  Обычно сумма налога зависит от размера региона, по такой логике: чем больше чанков во владении - тем больше плата.
                  За каждый чанк требуется платить сумму равную 0.2 единиц харизмы.
                </p>
                <p className="text-lg md:text-xl">
                  Налоги существуют и для участников региона. Каждый участник выплачивает фиксированную сумму, находясь в регионе, где это правило включено (выплата налогов).
                  Владелец или заместитель может выключить это правило и участники могут не платить налоги, но сумму будет пополнять владелец или любой другой участник со своего желания.
                </p>
                <p className="text-lg md:text-xl mb-6">
                  Чтобы пополнить баланс региона, используйте команду <CommandLine>/lands deposit (сумма)</CommandLine>, а чтобы снять - <CommandLine>/lands withdraw (сумма)</CommandLine>.
                </p>
                <h2 className="text-2xl md:text-3xl text-[#00cdb0]">Флаги региона</h2>
                <p className="text-lg md:text-xl">
                  Флаги региона - это игровые правила, относительно региона. Например: спавн мобов или пвп.
                  Настроить можно через меню, которое открывается опять же командой <CommandLine>/lands</CommandLine>.
                </p>
                <p className="text-xl">Опять же, не все флаги может редактировать обычный игрок! Все флаги доступны привилегии "Аутентик" и выше.</p>
                <div className="flex items-center justify-center">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195866005323395112/Screenshot_25.png?ex=65b58c01&is=65a31701&hm=100752b1cdf358cd3c4a085a84308eaa315f1174e163c86d02f03db43cb3523d&"
                    alt="Flags Menu"
                    annotation="Меню управления флагами"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl text-[#00cdb0]">Уровни региона</h2>
                <p className="text-lg md:text-xl">
                  Существует 4 уровня региона: поселение, деревня, развивающийся город и город.
                  Каждый уровень открывает новые возможности и увеличивает лимит участников и баланс региона.
                  Чтобы достигать новых уровней, региону нужно выполнить определенные условия.
                </p>
                <p className="text-lg md:text-xl mb-6">Информацию о следующем уровне региона и его условиях можно опять же просмотреть через главное меню управления регионами.</p>
                <div className="flex items-center justify-center mb-6">
                  <ImageAnnotation
                    source="https://cdn.discordapp.com/attachments/904344676587417621/1195866005675704472/Screenshot_26.png?ex=65b58c01&is=65a31701&hm=6ca812fdb2abdb325c01ab36ea959ce283640146170248921a1dd85ba801f548&"
                    alt="Levels Menu"
                    annotation="Меню просмотра уровней региона"
                  />
                </div>
              </TabsContent>
            </div>
          </div>
          <Dialog>
            <DialogTrigger className="lg:hidden fixed bottom-6 right-6 z-30 flex px-4 py-2 rounded-xl bg-[#fabbfb] border border-neutral-700">
              <p className="text-black text-2xl">Навигация</p>
            </DialogTrigger>
            <DialogContent className="lg:hidden bg-transparent border-none max-w-4xl max-h-[50%] overflow-y-auto">
              <TabsList className="flex flex-col block-item p-1 rounded-xl w-full items-start">
                <div className="flex flex-col p-2 bg-black gap-y-6 rounded-xl h-full w-full">
                  <div className="flex flex-col gap-y-2">
                    <div className="flex flex-row justify-between">
                      <p className="text-white text-xl md:text-2xl">Общая информация</p>
                      <DialogClose className="relative top-0 right-0">
                        <span className="text-2xl text-white">&times;</span>
                      </DialogClose>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex flex-row justify-between group cursor-pointer">
                        <DialogClose>
                          <TabsTrigger value="general" className="text-white text-lg md:text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300 bg-transparent">
                            Основной раздел
                          </TabsTrigger>
                        </DialogClose>
                      </div>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="aspects">
                          <AccordionTrigger className="py-0 my-0 group">
                            <p className="text-white text-lg md:text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                              Аспекты игры
                            </p>
                          </AccordionTrigger>
                          <AccordionContent className="relative top-2">
                            {headers.map((item, idx) => (
                              item.aspect?.map((item, idx) => (
                                <div className="group cursor-pointer" key={idx}>
                                  <DialogClose>
                                    <TabsTrigger
                                      value={item.value}
                                      className="flex items-start flex-col justify-start text-white text-lg md:text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300 bg-transparent"
                                    >
                                      &nbsp;&gt;&nbsp;{item.title}
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
                          <div key={idx} className="flex flex-row justify-between group cursor-pointer">
                            <DialogClose>
                              <TabsTrigger value={item.value} className="text-white text-lg md:text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                                {item.title}
                              </TabsTrigger>
                            </DialogClose>
                          </div>
                        ))
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="servers">
                        <AccordionTrigger className="py-0 my-0 group">
                          <p className="text-white text-lg md:text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">Сервера</p>
                        </AccordionTrigger>
                        <AccordionContent className="relative top-2">
                          {headers.map((item) => (
                            item.servers?.map((item, idx) => (
                              <div className="group cursor-pointer" key={idx}>
                                <DialogClose>
                                  <TabsTrigger value={item.value} className="text-white text-lg md:text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                                    &nbsp;&gt;&nbsp;{item.title}
                                  </TabsTrigger>
                                </DialogClose>
                              </div>
                            ))
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsList>
            </DialogContent>
          </Dialog>
          <TabsList className="hidden lg:flex flex-col block-item p-1 rounded-xl w-full lg:w-1/3 items-start">
            <div className="flex flex-col p-4 bg-black gap-y-12 rounded-xl h-full w-full">
              <div className="flex flex-col gap-y-4">
                <p className="text-white text-3xl">Общая информация</p>
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-row justify-between group cursor-pointer">
                    <TabsTrigger value="general" className="text-white text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300 bg-transparent">
                      Основной раздел
                    </TabsTrigger>
                    <Image
                      src="/images/minecraft/icons/spyglass_big.webp"
                      className="group-hover:rotate-45 group-hover:duration-300 duration-300"
                      width={26}
                      alt="Spyglass Down"
                      height={8}
                    />
                  </div>
                  <Accordion type="single" collapsible defaultValue="aspects">
                    <AccordionItem value="aspects">
                      <AccordionTrigger className="py-0 my-0 group">
                        <p className="text-white text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">Аспекты игры</p>
                      </AccordionTrigger>
                      <AccordionContent className="relative top-3">
                        {headers.map((item) => (
                          item.aspect?.map((item, idx) => (
                            <div className="group cursor-pointer" key={idx}>
                              <TabsTrigger
                                value={item.value}
                                className="flex items-start flex-col justify-start text-white text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300 bg-transparent"
                              >
                                &nbsp;&gt;&nbsp;{item.title}
                              </TabsTrigger>
                            </div>
                          ))
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  {headers.map((item, idx) => (
                    item.links?.map((item, idx) => (
                      <div key={idx} className="flex flex-row justify-between group cursor-pointer">
                        <TabsTrigger value={item.value} className="text-white text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                          {item.title}
                        </TabsTrigger>
                        <Image
                          src="/images/minecraft/icons/spyglass_big.webp"
                          className="group-hover:rotate-45 group-hover:duration-300 duration-300"
                          width={26}
                          alt="Spyglass Down"
                          height={16}
                        />
                      </div>
                    ))
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <Accordion type="single" collapsible defaultValue="servers">
                  <AccordionItem value="servers">
                    <AccordionTrigger className="py-0 my-0 group">
                      <p className="text-white text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">Сервера</p>
                    </AccordionTrigger>
                    <AccordionContent className="relative top-3">
                      {headers.map((item, idx) => (
                        item.servers?.map((item, idx) => (
                          <div className="group cursor-pointer" key={idx}>
                            <TabsTrigger value={item.value} className="text-white text-xl group-hover:text-[#FABBFB] group-hover:duration-300 duration-300">
                              &nbsp;&gt;&nbsp;{item.title}
                            </TabsTrigger>
                          </div>
                        ))
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </TabsList>
        </Tabs>
      </div>
    </>
  )
}

Wiki.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}