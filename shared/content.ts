import { BsDiscord, BsTelegram } from "react-icons/bs";

const termins = [
  {
    title: "Терминология!",
    subtitle: "немного теории...",
    sectionId: "correction",
    content: [
      {
        articleTitle: "Кик",
        articleDesc: "временное отключение игрока от сервера.",
      },
      {
        articleTitle: "Варн",
        articleDesc:
          "предупреждение, которое выдаётся за первое нарушение одной из статей (3 предупреждения = бану).",
      },
      {
        articleTitle: "Мут",
        articleDesc:
          "ограничение доступа к возможности писать в чат (не в лс).",
      },
      {
        articleTitle: "Бан",
        articleDesc:
          "ограничение доступа к серверу на продолжительное время или навсегда (при условии, что вы натворили какую-то дичь).",
      },
      {
        articleTitle: "Неадекватность",
        articleDesc:
          "состояние игрока, когда он не контролирует свои действия, и которые вредят игре других игроков.",
      },
      {
        articleTitle: "Притеснение",
        articleDesc: [
          "политическое притеснение (вражда), ",
          "социальное притеснение, ",
          "моральное притеснение.",
        ],
      },
    ],
  },
];

const rules = {
  Rules: {
    sections: [
      {
        chat: {
          id: "Игровой чат",
          title: "Правила в игровом чате",
          content: [
            {
              article: "Запрещается оскорблять игроков.",
              punish: "мут в чате на 12 часов / при повторе на 3 суток.",
              description: "",
              subtitle: [""],
            },
            {
              article: "Запрещается упоминание родных лиц игроков.",
              punish: "мут в чате на 12 часов / при повторе на 3 суток).",
              description: "",
              subtitle: [""],
            },
            {
              article:
                "Запрещен флуд/спам (уточнение: 3+ сообщения более чем за 2 секунды).",
              punish: "мут в чате на 30 минут.",
              description: "",
              subtitle: [""],
            },
            {
              article: "Запрещен коллективный флуд однотипными сообщениями.",
              punish:
                "мут в чате на 30 минут каждому / при повторе мут на 6 часов каждому.",
              description: "",
              subtitle: [""],
            },
            {
              article:
                "Запрещено выдавать себя за представителя администрации (даже в шутку).",
              punish: "мут в чате на 2 часа.",
              description: "",
              subtitle: [""],
            },
            {
              article: `Запрещено обсуждать текущие политические события в мире в оскорбительном или 
              унизительном/шуточном форматах, а также неуважительно относиться к игрокам сервера 
              из-за мировой ситуации.`,
              punish:
                "мут в чате на 12 часов / при повторе бан аккаунта на сутки.",
              description: "",
              subtitle: [""],
            },
          ],
        },
        gameplay: {
          content: [
            {
              article: "Запрещен приют новичков",
              description: "",
              punish: "1 предупреждение",
              subtitle: [""],
            },
            {
              article: "Запрещено строить огромные фермы",
              description: "",
              punish:
                "1 предупрежение + снос фермы / при повторе бан аккаунта на сутки.",
            },
            {
              article:
                "Запрещено строить огромные одноформенные и бессмысленные постройки.",
              description: "",
              punish: "1 предупреждение + снос постройки",
            },
            {
              article: "Запрещено устраивать раздачи среди игроков.",
              description: "",
              punish: "1 предупреждение",
            },
            {
              article: `Запрещено использование читов (стороннее ПО, 
              позволяющее получить преимущество над другими игроками и не только).`,
              description: "",
              punish: "перманентный бан аккаунта",
            },
          ],
        },
        based: {
          content: [
            {
              article:
                "Незнание правил не освобождает вас от ответственности (базированное правило.)",
              punish: "",
              subtitle: "",
              description: "",
            },
            {
              article:
                "Независимо от статуса игрока - все равны и все понесут наказание за нарушение правил.",
              punish: "",
              subtitle: "",
            },
            {
              article: `Игрок сам несёт ответственность за безопасность своего аккаунта. 
              В случае взлома, администрация имеет полное право отказать в восстановлении доступа к аккаунту.`,
              punish: "",
              subtitle: "",
            },
            {
              article: "Запрещено регистрировать некорректные никнеймы.",
              punish: "",
              subtitle: [
                "Содержащие мат, оскорбления, нецензурную или неприемлемую в приличном обществе лексику и т.д.",
                "Содержащие слова никнеймы администрации и должностей на сервере: «модератор», «админ».",
                "Носящие рекламный характер",
              ],
            },
            {
              article: "Запрещена продажа и передача игровых аккаунтов.",
              punish: "",
              subtitle: "",
            },
            {
              article:
                "Главная администрация управляет проектом строго по своему усмотрению и опирается на общие формулировки правил.",
              punish: "",
              subtitle: "",
            },
            {
              article: `Игра на сервере является бесплатной и 
              предоставляется без каких-либо гарантий правильной работы. 
              Администраторы не возвращают вещи, потерянные в результате бага, отката и т.п (естественно в редких исключениях возвращают).`,
              punish: "",
              subtitle: "",
            },
            {
              article:
                "Администрация может в любой момент изменить правила, заведомо уведомив игроков (обязательно уведомит об этом везде!).",
              punish: "",
              subtitle: "",
            },
            {
              article: `Если игрок получил блокировку на одном из своих аккаунтов и администрация 
              установит данный факт, то бан будет перенесен и на иные аккаунты, 
              которые имеют причастность к аккаунту, нарушавшему правило.`,
              punish: "",
              subtitle: "",
            },
            {
              article:
                "Обжаловать наказание можно в течении 24 часов с момента нарушения.",
              punish: "",
              subtitle: [
                "Для этого есть специальный канал в Дискорде проекта.",
              ],
            },
          ],
        },
      },
    ],
  },
};

const gallery = [
  {
    title: "Ночь на Бисквите.",
    src: "https://cdn.discordapp.com/attachments/904344676587417621/1197251043176751164/minecraft_screen_10.webp?ex=65ba95ec&is=65a820ec&hm=74820af6a26ec0f20b18f72afcac9fa88813d874d021595304d7c3645a8de28b&",
  },
  {
    title: "Капибара собственной персоной.",
    src: "https://cdn.discordapp.com/attachments/904344676587417621/1197251042413379594/minecraft_screen_5.webp?ex=65ba95ec&is=65a820ec&hm=7e9826b846066a7f69778a69548b38760d744d4e62758cce645c5b1522d70ca8&",
  },
  {
    title: "Именно такая у нас генерация.",
    src: "https://cdn.discordapp.com/attachments/904344676587417621/1197633995706478732/village.webp?ex=65bbfa93&is=65a98593&hm=3ec1b76ad65bef91b705b7e02dfe821ca8bc410497f5fcc199857069c711e0a5&",
  },
  {
    title: "Отель «Отиз». Город Оффенбург.",
    src: "https://cdn.discordapp.com/attachments/904344676587417621/1197251044133064754/minecraft_screen_14.webp?ex=65ba95ec&is=65a820ec&hm=2129aad6295d330b539443e63e786364024ba5bc3e1f7e4573af836a3d2f2649&",
  },
  {
    title: "Столовая «Пятка».",
    src: "https://cdn.discordapp.com/attachments/904344676587417621/1197251045915644005/minecraft_screen_21.png?ex=65ba95ed&is=65a820ed&hm=195c00f2ddd1c031071d6db1a7ea0e1f9cd81d59d4dcadcade92a2b166ee33a6&",
  },
  {
    title: "Бар «Брат».",
    src: "https://cdn.discordapp.com/attachments/904344676587417621/1197251046582526073/minecraft_screen_22.png?ex=65ba95ed&is=65a820ed&hm=8bb9ac4fa564efacb2bbf6fbd7efa7560a5fb12b51433c680fb77d264d6032cc&",
  },
  {
    title: "Торговец Амадей и Шок.",
    src: "https://cdn.discordapp.com/attachments/904344676587417621/1197251048482558022/minecraft_screen_23.png?ex=65ba95ed&is=65a820ed&hm=e6313f8a44720945559ea6b1b5ae1b976abc0876b7fe84895af013f872b0768b&",
  },
  {
    title: "RTX в лужах (нет).",
    src: "https://cdn.discordapp.com/attachments/904344676587417621/1197634181019222206/screen_11.webp?ex=65bbfabf&is=65a985bf&hm=7eb66fb74a2a6c6aad038d9caac2fb8c564eac0025e3e38e0dc483c96014012f&",
  },
];

const contacts = [
  {
    name: "Дискорд",
    href: "https://discord.gg/vnqfVX4frH",
    icon: BsDiscord,
    content: [
      {
        pluses: [
          "общение напрямую с челами в чатике",
          "самым первым узнаёшь новости о проекте",
          "я ЛИЧНО скажу тебе СПАСИБО на сервере",
          "ты 1% счастливчиков, кто выполняет просьбы, прочитав их",
        ],
      },
      {
        minuses: ["самым первым узнавать новости ты можешь и в телеге проекта"],
      },
    ],
  },
  {
    name: "Телеграмм",
    href: "https://t.me/fasberry",
    icon: BsTelegram,
    content: [
      {
        pluses: [
          "самым первым узнаёшь новости о проекте",
          "я ЛИЧНО скажу тебе СПАСИБО на сервере",
          "ты 1% счастливчиков, кто выполняет просьбы, прочитав их",
        ],
      },
      {
        minuses: [
          "скудная активность в комментариях (100%)",
          "самым первым узнавать новости ты можешь и в дискорде проекта",
        ],
      },
    ],
  },
];

const support = {
  Support: {
    content: [
      {
        donateElement: [
          {
            title: "Аутентик",
            rate: 2,
            price: 420,
            description: `Аутентичная привилегия, название говорит само за себя, не так ли?`,
            commands: [
              "/feed - пополнение сытости",
              "/anvil - личная наковальня",
              "/ender - личный эндер-чест",
              "/workbench - личный верстак",
              "/disc burn - возможность заливать на пластиник любые треки с Youtube, Twitch и др,",
              "увеличение лимитов для регионов,",
              "бесплатные наборы питомцев,",
              "увеличение лимитов для работ,",
            ],
            screenshot: "https://media.discordapp.net/attachments/904344676587417621/1199804676753850368/authentic.png?ex=65c3e02e&is=65b16b2e&hm=ad42b494e71199967b6c2e2050cc95879ff546261d80ff9e7db4f90d4c05efbd&=&format=webp&quality=lossless&width=436&height=671",
          },
          {
            title: "Лоял",
            rate: 3,
            price: 640,
            description: `Лоял. Звучит гордо, верно? Если ты решил пропустить прошлую привилегию, то добро пожаловать!`,
            commands: [
              "/distance - узнать расстояние между двумя игроками,",
              "/inv - просмотреть инвентарь любого игрока,",
              "/heal - восполнять здоровье,",
              "увеличение лимитов для регионов,",
              "бесплатные наборы питомцев,",
              "увеличение лимитов для работ,",
            ],
            screenshot: "https://media.discordapp.net/attachments/904344676587417621/1199804677030686832/loyal.png?ex=65c3e02e&is=65b16b2e&hm=63650f6313c45b768bb3b5640a2ebce07570aa89142e652501836f94d953d658&=&format=webp&quality=lossless",
          },
          {
            title: "Архонт",
            rate: 4,
            price: 1240,
            description:
              "Архонт ещё и зеленый? Это не случайно поверь, зеленый - к удаче.",
            commands: [
              "/weather - побыть немного шаманом, изменяя погоду у всех,",
              "больше влияния",
              "вас жаждут видеть на сервере,",
              "все возможности прошлых подписок",
            ],
            screenshot: "https://media.discordapp.net/attachments/904344676587417621/1199804676422508604/arkhont.png?ex=65c3e02e&is=65b16b2e&hm=3ab549c55c2162f6bf6e5552d6de990bb9851e02ffb9eafd654237525e5534d3&=&format=webp&quality=lossless&width=562&height=671",
          },
        ],
      },
    ],
  },
};

const headerLinks = [
  {
    name: "Главная",
    image: "/images/minecraft/icons/spawn_egg.webp",
    href: "/",
  },
  {
    name: "Правила",
    image: "/images/minecraft/icons/warped_sign_big.webp",
    href: "/rules",
  },
  {
    name: "Привилегии",
    image: "/images/minecraft/icons/bone_meal_big.webp",
    href: "/donate",
  },
  {
    name: "Поддержка",
    image: "/images/minecraft/icons/experience_big.webp",
    href: "/support",
  },
  {
    name: "Вики",
    image: "/images/minecraft/icons/knowledge_book.webp",
    href: "/wiki",
  },
  {
    name: "Карта мира",
    image: "/images/minecraft/icons/locked_map_big.webp",
    href: "/map",
  },
  // {
  //   name: 'Аккаунт',
  //   image: "/images/minecraft/icons/dark_oak_door_big.webp",
  //   href: "https://cp.fasberry.ru"
  // }
];

const mediaLinks = [
  { name: "Сообщество в VK", href: "https://vk.com/fasberry" },
  { name: "Сообщество в Discord", href: "https://discord.gg/vnqfVX4frH" },
  { name: "Сообщество в Telegram", href: "https://t.me/fasberry" },
];

const headers = [
  {
    aspect: [
      {
        title: "профиль",
        value: "profile",
      },
      {
        title: "регионы",
        value: "regions",
      },
      {
        title: "квесты",
        value: "quests",
      },
      {
        title: "экономика",
        value: "economic",
      },
      {
        title: "кланы",
        value: "clans",
      },
      {
        title: "работы",
        value: "jobs",
      },
      {
        title: "бусты",
        value: "boosts",
      },
      {
        title: "репутация",
        value: "reputation",
      },
      {
        title: "питомцы",
        value: "pets",
      },
      {
        title: "новые мобы",
        value: "mobs",
      },
      {
        title: "новая броня",
        value: "armor",
      },
    ],
  },
  {
    links: [
      {
        title: "Защита аккаунта",
        value: "safety",
      },
      {
        title: "Тех. проблемы",
        value: "problems",
      },
      {
        title: "Жалобы на игроков",
        value: "reports",
      },
      {
        title: "Донат",
        value: "donate",
      },
    ],
  },
  {
    servers: [
      {
        title: "Bisquite Survival",
        value: "server-bisquite",
      },
      {
        title: "Muffin RP",
        value: "server-muffin",
      },
    ],
  },
];

const rulesList = [
  {
    name: rules.Rules.sections,
    title: "Правила в игровом чате",
    sectionId: "rules-chat",
    content: rules.Rules.sections[0].chat.content.map((item) => ({
      article: item.article,
      punishment: item.punish,
      description: item.description,
      subtitle:
        item.subtitle && item.subtitle.length > 0 ? item.subtitle[0] : "",
    })),
  },
  {
    name: rules.Rules.sections,
    title: "Общие правила и положения",
    sectionId: "rules-based",
    content: rules.Rules.sections[0].based?.content?.map((item) => ({
      article: item.article,
      punishment: item.punish,
      description: item.description,
      subtitle:
        item.subtitle && item.subtitle.length > 0 ? item.subtitle[0] : "",
    })),
  },
  {
    name: rules.Rules.sections,
    title: "Непосредственная игра",
    sectionId: "rules-gameplay",
    content: rules.Rules.sections[0].gameplay?.content?.map((item) => ({
      article: item.article,
      punishment: item.punish,
      description: item.description,
      subtitle:
        item.subtitle && item.subtitle.length > 0 ? item.subtitle[0] : "",
    })),
  },
];

const gameplay = [
  {
    name: "Питомцы.",
    description:
      "Два вида питомцев со своей историей, способностями и характеристиками.",
    image:
      "https://cdn.discordapp.com/attachments/904344676587417621/1197667815935713390/pets.png?ex=65bc1a12&is=65a9a512&hm=d4a5c2824ecbed03860d622f26ee70882f97d1f3b0230d0f3f4103c69a5c52f5&",
  },
  {
    name: "Репутация",
    description:
      "Чем выше репутация - тем лучше к вам будут относиться другие игроки (но это не точно).",
    image:
      "https://cdn.discordapp.com/attachments/903343341561847848/1197680924536615062/2024-01-19_02.15.49.png?ex=65bc2648&is=65a9b148&hm=befb93593b26914e2524e3a77e40b0653827109b9ebb66b2046f64d44ede8cda&",
  },
  {
    name: "Уникальные вещи",
    description:
      "Некоторые вещи, которые вы найдете или купите будут предоставлять уникальные возможности. Например: увеличение силы.",
    image:
      "https://cdn.discordapp.com/attachments/903343341561847848/1197676074750984253/image.png?ex=65bc21c3&is=65a9acc3&hm=640bb1377ea5938a653a07c0636187912112d2bcb03b1a03d4897e3331c6f18d&",
  },
];

const projectDesciption = [
  {
    title: "Атмосферный сервер",
    desc: "При создании сервера я учитывал множество факторов, основное из них - придание атмосферы и души.",
    descColor: "#00cdb0",
  },
  {
    title: "Тематика сервера",
    desc: "Здесь сочетаются элементы RP, RPG, а также немножко анархии.",
    descColor: "#8FFD8F",
  },
  {
    title: "Релиз",
    desc: "Релиз уже настал и я могу тебе честно сказать - это круто!",
    descColor: "#FABBFB",
  },
];

const commuinityGallery = [
  "https://cdn.discordapp.com/attachments/904344676587417621/1197250388722720808/gluckoz_1.png?ex=65ba9550&is=65a82050&hm=017ada489a76e34dc9df0f67a1ec18e319eabd8c3ea1657bc9e35f3799839d34&",
  "https://cdn.discordapp.com/attachments/904344676587417621/1197250389305741432/gluckoz_2.png?ex=65ba9550&is=65a82050&hm=038197d02ef05d753d0253023cd9c4ad43eb632da345646c297d591774a64707&",
  "https://cdn.discordapp.com/attachments/904344676587417621/1197250389834203136/gluckoz_3.png?ex=65ba9550&is=65a82050&hm=3768d72c9663f4de63e3b9f5395faf502d33cd4ddbf052c15e84913630e37e45&",
  "https://cdn.discordapp.com/attachments/904344676587417621/1197250391323181107/pureawake_1.png?ex=65ba9551&is=65a82051&hm=b42f383868c0a560f0d30e85d770035560b9b5e0b8b9ef4de0ecb325cdcbfa48&",
  "https://cdn.discordapp.com/attachments/904344676587417621/1197250388089372732/ded_inside_1.png?ex=65ba9550&is=65a82050&hm=87d9eb4ec8e5bb05601e469d59d0f4ab7dceeae9107fcf41fb66470b81b30c0b&",
  "https://cdn.discordapp.com/attachments/904344676587417621/1197250390186532905/kirill.webp?ex=65ba9550&is=65a82050&hm=2f037ff6d700b45b97c40e97a1ded650ab1466e7e617a93d742794c680917bda&",
  "https://cdn.discordapp.com/attachments/904344676587417621/1197250387560910918/camel.webp?ex=65ba9550&is=65a82050&hm=128657405a5aeb60860be416cc21052936d95509dc9aff4083bc40468fd245db&",
  "https://cdn.discordapp.com/attachments/904344676587417621/1197250394477297695/reze.png?ex=65ba9551&is=65a82051&hm=205bdc66d0882174ebd3d09f167bf73f047962d1209a61a8cac8cf3fa365db90&",
  "https://cdn.discordapp.com/attachments/904344676587417621/1197250387149856918/aurastepp.png?ex=65ba9550&is=65a82050&hm=9cfec230e5609f016e6f5bb9b92ea7b797a7947bc297f7d5e9fd58fcc2a8bd4b&",
  "https://cdn.discordapp.com/attachments/904344676587417621/1197250390727610438/maxsal.png?ex=65ba9550&is=65a82050&hm=9dd55a9f909398b0e3c78de09646e4cad70c414df37e5ee99c143dc40a21b02f&",
  "https://cdn.discordapp.com/attachments/903343341561847848/1197680924536615062/2024-01-19_02.15.49.png?ex=65bc2648&is=65a9b148&hm=befb93593b26914e2524e3a77e40b0653827109b9ebb66b2046f64d44ede8cda&",
];

const news = [
  {
    id: 2,
    title: "Добавление вики сервера",
    date: "14.01.2024 09:00",
    image:
      "https://cdn.discordapp.com/attachments/904344676587417621/1195996733419819099/96b92030-80a9-4c5d-9806-b038c422627d.jpg?ex=65b605c1&is=65a390c1&hm=ebd9f9674751fb2836340e74d21700ce20b22cebb1ae12f0392fd42f0401db78&",
    body: `Теперь всю полезную информацию по игре можно узнать на странице вики. Меньше тупых вопросов!`,
  },
  {
    id: 1,
    title: "Релиз уже!",
    date: "02.01.2024 12:00",
    image:
      "https://cdn.discordapp.com/attachments/904344676587417621/1197250888864116866/glowingcave.png?ex=65ba95c7&is=65a820c7&hm=81d499b2a020920b1f53dec0aa165056231089f3ff755a476f180e903fe65c84&",
    body: `Если вы еще не знали, я уже открыл сервер, написав об этом в дискорде и телеграмме проекта. 
    Кстати советую подписаться там. Любой желающий сможет зайти на сервер, имея у себя майнкрафт версии не ниже 1.19.4.`,
  },
  {
    id: 0,
    title: "Теперь у сервера есть свой дискорд канал",
    date: "06.07.2023 16:00",
    image:
      "https://cdn.discordapp.com/attachments/904344676587417621/1197250820819918940/discord.jpg?ex=65ba95b7&is=65a820b7&hm=f87c8bd9d41b4e54d5176cdd5d67648237a9fc0ffcfc5dd4f0078ad2fa8cc891&",
    body: `Да, ты не ослышался, целый дискорд канал. Зачем? Для того, чтобы собирать именно там всё коммьюнити сервера, а также это место, где я сижу постоянно и готов ответить на все твои вопросы.`,
  },
];

// const armorList_recipe_helmet: ArmorRecipeItem[] = [
//   {
//     name: "Шлем",
//     material: "адамантитовый слиток",
//     icon: "https://cdn.discordapp.com/attachments/904344676587417621/1199352622956687422/Screenshot_18.png?ex=65c23b2c&is=65afc62c&hm=907833a8f90e25688e1b485d79b1f64e0718746ff3f4c0aee4004533d22adca4&",
//   },
// ];

// const armorList_recipe_chestplate: ArmorRecipeItem[] = [
//   {
//     name: "Нагрудник",
//     material: "адамантитовый слиток",
//     icon: "https://cdn.discordapp.com/attachments/904344676587417621/1198924491800195083/Screenshot_2.png?ex=65c0ac71&is=65ae3771&hm=d2f9a92c9151b6888189cf03b5e94a2d16604ae5fb3217b76f483b6a524252ef&",
//   },
// ];

// const armorList_recipe_leggings: ArmorRecipeItem[] = [
//   {
//     name: "Поножи",
//     material: "адамантитовый слиток",
//     icon: "https://cdn.discordapp.com/attachments/904344676587417621/1198924492328669284/Screenshot_4.png?ex=65c0ac71&is=65ae3771&hm=7d3299af4186db5ed15ab5ea68ad245d698f686df93e6f14f601c1b218569ab8&",
//   },
// ];

// const armorList_recipe_boots: ArmorRecipeItem[] = [
//   {
//     name: "Ботинки",
//     material: "адамантитовый слиток",
//     icon: "https://cdn.discordapp.com/attachments/904344676587417621/1198924492064423976/Screenshot_3.png?ex=65c0ac71&is=65ae3771&hm=92478a4d0057553ff8a6820fcb46b001c58266081bbf0fafecd74fc56d4b7561&",
//   },
// ];

const armorList: ArmorItem[] = [
  {
    attribute: {
      name: "Орихалковая",
      icon: "https://cdn.discordapp.com/attachments/904344676587417621/1199102352217612368/orichalcum_bar.png?ex=65c15217&is=65aedd17&hm=dfaaee612b781d78b67f2338812664ec1460fab61caba0138c9c0810377efd4b&",
    },
    effects: {
      effect_name: "везение II (если надета)",
    },
    durability: {
      helmet: {
        generic: 2907,
      },
      chestplate: {
        generic: 2910,
      },
      leggings: {
        generic: 2908,
      },
      boots: {
        generic: 2909,
      },
    },
    armor: {
      helmet: {
        generic: 4,
        points: 2,
      },
      chestplate: {
        generic: 6,
        points: 3,
      },
      leggings: {
        generic: 5,
        points: 2.5,
      },
      boots: {
        generic: 4,
        points: 2,
      },
    },
    armorThougness: {
      helmet: {
        generic: 2,
        points: 1,
      },
      chestplate: {
        generic: 6,
        points: 3,
      },
      leggings: {
        generic: 4,
        points: 2,
      },
      boots: {
        generic: 4,
        points: 2,
      },
    },
  },
  {
    attribute: {
      name: "Адамантитовая",
      icon: "https://cdn.discordapp.com/attachments/904344676587417621/1198922170991120384/adamantite_bar.png?ex=65c0aa48&is=65ae3548&hm=fd0c93e300b4cfec1ab4b5b78d308dc7d53c3c12ed682f7f7d95651ad679479b&",
    },
    effects: {
      effect_name: "прочнейшая броня",
    },
    isNatural: {
      populators: {
        ore: {
          name: "Адамантитовая",
          icon: "https://cdn.discordapp.com/attachments/904344676587417621/1199330125154627625/adamantite_ore.png?ex=65c22638&is=65afb138&hm=e5c793712255273dca0fc48908dbba8d944a3be783602c9de0a46f91d7781c92&",
        },
        height: {
          min: -60,
          max: 45,
        },
        structory: ["везде"],
        chance: 32,
        available_tools: [
          "алмазная кирка",
          "незеритовая кирка",
          "адамантитовая кирка",
          "кобальтовая кирка",
          "платиновая кирка",
        ],
      },
    },
    durability: {
      helmet: {
        generic: 3707,
      },
      chestplate: {
        generic: 3710,
      },
      leggings: {
        generic: 3708,
      },
      boots: {
        generic: 3709,
      },
    },
    armor: {
      helmet: {
        generic: 5,
        points: 2.5,
      },
      chestplate: {
        generic: 8,
        points: 4,
      },
      leggings: {
        generic: 5,
        points: 2.5,
      },
      boots: {
        generic: 2,
        points: 1,
      },
    },
    armorThougness: {
      helmet: {
        generic: 2,
        points: 1,
      },
      chestplate: {
        generic: 6,
        points: 3,
      },
      leggings: {
        generic: 4,
        points: 2,
      },
      boots: {
        generic: 4,
        points: 2,
      },
    },
  },
  {
    attribute: {
      name: "Кобальтовая",
      icon: "https://cdn.discordapp.com/attachments/904344676587417621/1198922171397972008/cobalt_bar.png?ex=65c0aa48&is=65ae3548&hm=66fd1c7fbf6d9e79be7bc79c48efef3b84341b53ac1b8772f9938cc97de05f22&",
    },
    // recipe: {
    //   helmet: {
    //     name: "Шлем",
    //     recipe_material: "кобальтовый слиток",
    //     recipe_icon:
    //       "https://cdn.discordapp.com/attachments/904344676587417621/1198924492567752764/Screenshot_5.png?ex=65c0ac71&is=65ae3771&hm=c377c1e675c04e01f1423506acfe1705aa1d7f7381f85fae906be9345329bee6&",
    //   },
    //   chestplate: {
    //     name: "Нагрудник",
    //     recipe_material: "кобальтовый слиток",
    //     recipe_icon:
    //       "https://cdn.discordapp.com/attachments/904344676587417621/1198924492865536140/Screenshot_6.png?ex=65c0ac72&is=65ae3772&hm=6d3ae49c2a57121067e3cc0469bccb5aa5fef6ea8a4a95d61fe9f758f258559e&",
    //   },
    //   leggings: {
    //     name: "Поножи",
    //     recipe_material: "кобальтовый слиток",
    //     recipe_icon:
    //       "https://cdn.discordapp.com/attachments/904344676587417621/1198924493113004062/Screenshot_7.png?ex=65c0ac72&is=65ae3772&hm=79a22fb34abda106fd756e69bca2ab2c565721a922b4c2c62d576bddf81ff567&",
    //   },
    //   boots: {
    //     name: "Ботинки",
    //     recipe_material: "кобальтовый слиток",
    //     recipe_icon:
    //       "https://cdn.discordapp.com/attachments/904344676587417621/1198924493364670555/Screenshot_8.png?ex=65c0ac72&is=65ae3772&hm=b58e4025602da0399e1ac5b12fbafe1f9df2c2793b20149d9726a4210877279d&",
    //   },
    // },
    effects: {
      effect_name: "скорость II (10 минут) (если надета)",
    },
    isNatural: {
      populators: {
        ore: {
          name: "Кобальтовая",
          icon: "https://cdn.discordapp.com/attachments/904344676587417621/1190732512012533851/Screenshot_6.png?ex=65be8e91&is=65ac1991&hm=8a93d0232d4a42aed17a2f6f15a759880263741355bd4a8977a09d86c259949f&",
        },
        height: {
          min: -60,
          max: 35,
        },
        structory: ["везде"],
        chance: 32,
        available_tools: [
          "алмазная кирка",
          "незеритовая кирка",
          "адамантитовая кирка",
          "кобальтовая кирка",
          "платиновая кирка",
          "астральная кирка",
        ],
      },
    },
    durability: {
      helmet: {
        generic: 3007,
      },
      chestplate: {
        generic: 3010,
      },
      leggings: {
        generic: 3008,
      },
      boots: {
        generic: 3009,
      },
    },
    armor: {
      helmet: {
        generic: 2,
        points: 1,
      },
      chestplate: {
        generic: 6,
        points: 3,
      },
      leggings: {
        generic: 5,
        points: 2.5,
      },
      boots: {
        generic: 2,
        points: 1,
      },
    },
    armorThougness: {
      helmet: {
        generic: 2,
        points: 1,
      },
      chestplate: {
        generic: 4,
        points: 2,
      },
      leggings: {
        generic: 2,
        points: 1,
      },
      boots: {
        generic: 1,
        points: 0.5,
      },
    },
  },
  {
    attribute: {
      name: "Платиновая",
      icon: "https://cdn.discordapp.com/attachments/904344676587417621/1198922172098416702/platinum_bar.png?ex=65c0aa48&is=65ae3548&hm=fca84885cd889048d4f4dc28c1ac7747d327c47b1c41d0c6d34afabb34c9b956&",
    },
    // recipe: {
    //   helmet: {
    //     name: "Шлем",
    //     recipe_material: "платиновый слиток",
    //     recipe_icon:
    //       "https://cdn.discordapp.com/attachments/904344676587417621/1198924523374907514/Screenshot_9.png?ex=65c0ac79&is=65ae3779&hm=546af93ad024aeba773369c65672f266c7b547b8055197a4d190a730691bf4ca&",
    //   },
    //   chestplate: {
    //     name: "Нагрудник",
    //     recipe_material: "платиновый слиток",
    //     recipe_icon:
    //       "https://cdn.discordapp.com/attachments/904344676587417621/1198924523655934022/Screenshot_10.png?ex=65c0ac79&is=65ae3779&hm=cdcde6ca098da72bc34fd6e8356b016c050dbf52a64308023b0b2dda62f9f1cc&",
    //   },
    //   leggings: {
    //     name: "Поножи",
    //     recipe_material: "платиновый слиток",
    //     recipe_icon:
    //       "https://cdn.discordapp.com/attachments/904344676587417621/1198924523983077416/Screenshot_11.png?ex=65c0ac79&is=65ae3779&hm=4c71f891ac791b1a524ffd5bdb4348e7fe0bcf6093f5156b272cd2dc3dc19311&",
    //   },
    //   boots: {
    //     name: "Ботинки",
    //     recipe_material: "платиновый слиток",
    //     recipe_icon:
    //       "https://cdn.discordapp.com/attachments/904344676587417621/1198924524431880302/Screenshot_12.png?ex=65c0ac79&is=65ae3779&hm=d0199eea00d5ae81f2396c5f978ba3d98f51bf046098e45bc1b131fbc05346ef&",
    //   },
    // },
    effects: {
      effect_name: "лучшая защита",
    },
    isNatural: {
      populators: {
        ore: {
          name: "Платиновая",
          icon: "https://cdn.discordapp.com/attachments/904344676587417621/1190732511685390375/Screenshot_5.png?ex=65be8e91&is=65ac1991&hm=544999a7d3a931f1b7136774c058fe91f7262bc869e4475fa342dcbe5eac0c0f&",
        },
        height: {
          min: -60,
          max: 45,
        },
        structory: ["везде"],
        chance: 20,
        available_tools: [
          "алмазная кирка",
          "незеритовая кирка",
          "адамантитовая кирка",
          "кобальтовая кирка",
          "платиновая кирка",
          "ледяная кирка",
          "астральная кирка",
        ],
      },
    },
    durability: {
      helmet: {
        generic: 1408,
      },
      chestplate: {
        generic: 1410,
      },
      leggings: {
        generic: 1408,
      },
      boots: {
        generic: 1409,
      },
    },
    armor: {
      helmet: {
        generic: 5,
        points: 2.5,
      },
      chestplate: {
        generic: 10,
        points: 5,
      },
      leggings: {
        generic: 5,
        points: 2.5,
      },
      boots: {
        generic: 2,
        points: 1,
      },
    },
    armorThougness: {
      helmet: {
        generic: 4,
        points: 2,
      },
      chestplate: {
        generic: 6,
        points: 3,
      },
      leggings: {
        generic: 4,
        points: 2,
      },
      boots: {
        generic: 2,
        points: 1,
      },
    },
  },
  {
    attribute: {
      name: "Ледяная",
      icon: "https://cdn.discordapp.com/attachments/904344676587417621/1198922171704160276/ice_bar.png?ex=65c0aa48&is=65ae3548&hm=7ee5a21ef98e83b7f8c6403e7d55851ecd516573468f1a4ddda1f27a4f54aeff&",
    },
    // recipe: {
    //   helmet: {
    //     name: "Шлем",
    //     recipe_material: "ледяной слиток",
    //     recipe_icon:
    //       "https://cdn.discordapp.com/attachments/904344676587417621/1198924524842913863/Screenshot_13.png?ex=65c0ac79&is=65ae3779&hm=f2f8db2a1df17c861380edc4c9ed89f8fc7e5ed954b6fcf6fc68fe9c95268148&",
    //   },
    //   chestplate: {
    //     name: "Нагрудник",
    //     recipe_material: "ледяной слиток",
    //     recipe_icon:
    //       "https://cdn.discordapp.com/attachments/904344676587417621/1198924525182648400/Screenshot_14.png?ex=65c0ac79&is=65ae3779&hm=4dcb62ce4e47e46b0243bcee5feca09b759eb8e0b6d489a1c5322f668efd969a&",
    //   },
    //   leggings: {
    //     name: "Поножи",
    //     recipe_material: "ледяной слиток",
    //     recipe_icon:
    //       "https://cdn.discordapp.com/attachments/904344676587417621/1198924525568528404/Screenshot_16.png?ex=65c0ac79&is=65ae3779&hm=e38d7897bd614614fc09b03f73c4605bdac517d09136975d503310f0bc9699f7&",
    //   },
    //   boots: {
    //     name: "Ботинки",
    //     recipe_material: "ледяной слиток",
    //     recipe_icon:
    //       "https://cdn.discordapp.com/attachments/904344676587417621/1198924525849555034/Screenshot_17.png?ex=65c0ac79&is=65ae3779&hm=179c55f5226cbd68bed5ab845debc5588ca8381e0460b1dbc85978a914064dcf&",
    //   },
    // },
    effects: {
      effect_name: "ледоход II (если надета)",
    },
    isNatural: {
      populators: {
        ore: {
          name: "Ледяная",
          icon: "https://cdn.discordapp.com/attachments/904344676587417621/1190732512318730251/Screenshot_7.png?ex=65be8e91&is=65ac1991&hm=2f7859db756d5fa3b93419d48d1b2ce8037233c82bb18665d002ca3da0c67a69&",
        },
        height: {
          min: -20,
          max: 190,
        },
        structory: [
          "все ванильные зимние биомы",
          "Terralith: snowy_shield",
          "Terralith: snowy_maple_forest",
          "Terralith: snowy_cherry_grove",
          "Terralith: snowy_badlands",
          "Terralith: frozen_cliffs",
          "Terralith: rocky_mountains",
          "Terralith: ice_spikes",
          "Terralith: grove",
          "Terralith: taiga",
          "Terralith: frozen_peaks",
          "Terralith: snowy_taiga",
          "Terralith: wintry_forest",
          "Terralith: snowy_slopes",
        ],
        chance: 70,
        available_tools: [
          "деревянная кирка",
          "золотая кирка",
          "железная кирка",
          "алмазная кирка",
          "незеритовая кирка",
          "адамантитовая кирка",
          "кобальтовая кирка",
          "платиновая кирка",
          "астральная кирка",
          "ледяная кирка",
        ],
      },
    },
    durability: {
      helmet: {
        generic: 308,
      },
      chestplate: {
        generic: 310,
      },
      leggings: {
        generic: 308,
      },
      boots: {
        generic: 309,
      },
    },
    armor: {
      helmet: {
        generic: 3,
        points: 1.5,
      },
      chestplate: {
        generic: 6,
        points: 3,
      },
      leggings: {
        generic: 4,
        points: 2,
      },
      boots: {
        generic: 3,
        points: 1.5,
      },
    },
    armorThougness: {
      helmet: {
        generic: 1,
        points: 0.5,
      },
      chestplate: {
        generic: 1,
        points: 0.5,
      },
      leggings: {
        generic: 1,
        points: 0.5,
      },
      boots: {
        generic: 1,
        points: 0.5,
      },
    },
  },
];

export {
  termins,
  rules,
  support,
  headerLinks,
  news,
  mediaLinks,
  contacts,
  headers,
  rulesList,
  armorList,
  gameplay,
  gallery,
  projectDesciption,
  commuinityGallery,
};
