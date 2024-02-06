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

const ruless: RulesList[] = [
  {
    id: "chat",
    name: "Игровой чат",
    content: [
      {
        title: "Запрещается оскорблять игроков.",
        punishment: "мут в чате на 12 часов / при повторе на 3 суток",
      },
      {
        title: "Запрещается упоминание родных лиц игроков.",
        punishment: "мут в чате на 12 часов / при повторе на 3 суток)",
      },
      {
        title:
          "Запрещен флуд/спам (уточнение: 3+ сообщения более чем за 2 секунды).",
        punishment: "мут в чате на 30 минут",
      },
      {
        title: "Запрещен коллективный флуд однотипными сообщениями.",
        punishment:
          "мут в чате на 30 минут каждому / при повторе мут на 6 часов каждому",
      },
      {
        title:
          "Запрещено выдавать себя за представителя администрации (даже в шутку).",
        punishment: "мут в чате на 2 часа",
      },
      {
        title: `Запрещено обсуждать текущие политические события в мире в оскорбительном или 
          унизительном/шуточном форматах, а также неуважительно относиться к игрокам сервера 
          из-за мировой ситуации.`,
        punishment:
          "мут в чате на 12 часов / при повторе бан аккаунта на сутки.",
      },
    ],
  },
  {
    id: "game",
    name: "Непосредственная игра",
    content: [
      {
        title: "Запрещено строить огромные фермы, которые каким-либо образом влияют на производительность сервера.",
        punishment: "1 предупрежение + снос фермы / при повторе бан на сутки",
      },
      {
        title:
          "Запрещено строить огромные одноформенные и бессмысленные постройки.",
        punishment: "1 предупреждение + снос постройки",
      },
      {
        title: `Запрещено использование читов (стороннее ПО, 
          позволяющее получить преимущество над другими игроками и не только).`,
        description: "Пример: любые иксреи, автокликеры, фрикамы или специальные клиенты.",
        punishment: "перманентный бан аккаунта",
      },
    ],
  },
  {
    id: "based",
    name: "Основное положение",
    content: [
      {
        title:
          "Незнание правил не освобождает вас от ответственности (базированное правило.)",
      },
      {
        title:
          "Независимо от привилегии игрока - все равны и все понесут одинаковое наказание за нарушение правил.",
      },
      {
        title: `Игрок сам несёт ответственность за безопасность своего аккаунта.
        В случае взлома, администрация имеет право отказать в восстановлении доступа к аккаунту.`,
      },
      {
        title: "Запрещено регистрировать некорректные никнеймы.",
        description: 
          "Содержащие мат, оскорбления, нецензурную или неприемлемую в приличном обществе лексику",
      },
      {
        title: "Запрещена продажа и передача игровых аккаунтов.",
      },
      {
        title: `Игра на сервере является бесплатной и 
        предоставляется без каких-либо гарантий правильной работы. 
        Администраторы не возвращают вещи, потерянные в результате бага, отката и т.п (естественно в редких исключениях возвращают).`,
      },
      {
        title:
          "Администрация может в любой момент изменить правила, заведомо уведомив игроков (обязательно уведомит об этом везде!).",
      },
      {
        title: `Если игрок получил блокировку на одном из своих аккаунтов и администрация 
        установит данный факт, то бан будет перенесен и на иные аккаунты, которые имеют причастность к аккаунту, нарушавшему правило.`,
      },
      {
        title:
          "Обжаловать наказание можно в течении 48 часов с момента нарушения.",
      },
    ],
  },
];

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
  {
    title: "Вид города 1",
    src: "https://cdn.discordapp.com/attachments/904344676587417621/1203011846588731505/2024-01-31_17.40.44.png?ex=65cf8b17&is=65bd1617&hm=4872799e19bd56d816812fee0497e76221f4b39aa84ce999b77e64821f6b8c21&"
  },
  {
    title: "Вид города 2",
    src: "https://cdn.discordapp.com/attachments/904344676587417621/1203011851760443455/2024-01-31_17.40.38.png?ex=65cf8b18&is=65bd1618&hm=f5d28d77a761e99651dccf73a5cd0fe48d8a920ddbf43cfc926c24923bd490c1&"
  },
  {
    title: "Рынок",
    src: "https://cdn.discordapp.com/attachments/904344676587417621/1203011850166468689/2024-01-31_17.40.13.png?ex=65cf8b17&is=65bd1617&hm=6265f4940304ceebe23b9c6bf98ba33948762213f286f87e1d41914bc46ca08d&"
  },
  {
    title: "Генерация 1",
    src: "https://cdn.discordapp.com/attachments/904344676587417621/1203011848845135942/2024-01-19_22.30.44.png?ex=65cf8b17&is=65bd1617&hm=7e6d0a64dede776c7197c1d00a06803225967cb670ae0605df2d6d92ffb03085&"
  },
  {
    title: "Генерация 2",
    src: "https://cdn.discordapp.com/attachments/904344676587417621/1203011847977050192/2024-01-31_17.52.47.png?ex=65cf8b17&is=65bd1617&hm=2bf7fb5b9931c59804d1f19eb4db2dde572ecc3839e77cccea333941fbe95e4b&"
  }
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

const donateList = [
  {
    id: 5565733,
    name: "Аутентик",
    rating: 2,
    price: 420,
    description: {
      screen:
        "https://cdn.discordapp.com/attachments/904344676587417621/1200901695450910760/Screenshot_1.png?ex=65c7dddb&is=65b568db&hm=45c7e0967dd676b3bd6769520c85f8444063d68cb4cd0a4ac2bd114c9a4b149f&",
      text: "Аутентичная привилегия, название говорит само за себя, не так ли?",
    },
    commands: [
      "/feed - пополнение сытости",
      "/anvil - личная наковальня",
      "/ender - личный эндер-чест",
      "/workbench - личный верстак",
      "/grindstone - виртуальное точило,",
      "/ext - потушить себя,",
      "бесплатные наборы питомцев,",
      "увеличение лимитов для работ,",
    ],
  },
  {
    id: 5565734,
    name: "Лоял",
    rating: 3,
    price: 640,
    description: {
      screen:
        "https://media.discordapp.net/attachments/904344676587417621/1200901695748710450/Screenshot_2.png?ex=65c7dddb&is=65b568db&hm=14d3e93af5e9d08a11412a3151b2355aa6db7327db6ea30ae59025120576dd84&=&format=webp&quality=lossless&width=499&height=671",
      text: "Лоял. Звучит гордо, верно? Если ты решил пропустить прошлую привилегию, то добро пожаловать!",
    },
    commands: [
      "/distance - узнать расстояние между двумя игроками,",
      "/inv - просмотреть инвентарь любого игрока,",
      "/heal - восполнять здоровье,",
      "/itemname - изменять название предмета,",
      "/itemlore - изменять описание предмета",
      "/down - опуститься в ближайшее под вами место",
      "бесплатные наборы питомцев,",
      "увеличение лимитов для работ,",
    ],
  },
  {
    id: 5565735,
    name: "Архонт",
    rating: 4,
    price: 1240,
    description: {
      screen:
        "https://media.discordapp.net/attachments/904344676587417621/1200901696130388071/Screenshot_3.png?ex=65c7dddc&is=65b568dc&hm=7de2485f956d1dd6ee9468e8622c222f19d1673577ee89a7406c61064a2b886a&=&format=webp&quality=lossless",
      text: "Архонт ещё и зеленый? Это не случайно поверь, зеленый - к удаче.",
    },
    commands: [
      "/weather - побыть немного шаманом, изменяя погоду у всех,",
      "/notarget - неуязвимость от мобов",
      "вас жаждут видеть на сервере,",
      "все возможности прошлых подписок",
    ],
  },
];

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
        isTab: true,
        title: "Защита аккаунта",
        value: "safety",
      },
      {
        isTab: true,
        title: "Жалобы на игроков",
        value: "reports",
      },
      {
        isTab: false,
        title: "Тех. проблемы",
        value: "wiki/problems",
      },
      {
        isTab: false,
        title: "Донат",
        value: "/donate",
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

const gameplay = [
  {
    name: "Развитая система экономики",
    description:
      "Несколько валют + система репутации, которая даёт тебе дополнительные возможности в игре.",
    image:
      "https://cdn.discordapp.com/attachments/903343341561847848/1197680924536615062/2024-01-19_02.15.49.png?ex=65bc2648&is=65a9b148&hm=befb93593b26914e2524e3a77e40b0653827109b9ebb66b2046f64d44ede8cda&",
  },
  {
    name: "Питомцы",
    description:
      "Два вида питомцев со своей историей, способностями, характеристиками и поведением.",
    image:
      "https://cdn.discordapp.com/attachments/904344676587417621/1197667815935713390/pets.png?ex=65bc1a12&is=65a9a512&hm=d4a5c2824ecbed03860d622f26ee70882f97d1f3b0230d0f3f4103c69a5c52f5&",
  },
  {
    name: "Кастомные вещи",
    description:
      "Новые наборы брони, клинки и многое другое.",
    image:
      "https://cdn.discordapp.com/attachments/904344676587417621/1203011850975846450/2024-01-31_17.40.24.png?ex=65cf8b18&is=65bd1618&hm=ce1bc6ab0360bb273d2faf6a6487215024b20b593c2b3d8032f5562ab546eb87&",
  },
];

const projectDesciption = [
  {
    title: "Тематика сервера",
    desc: "Здесь сочетаются элементы RPG, немного RP, а также отчасти немного анархии. Ждём тебя!",
    descColor: "#8FFD8F",
  },
  {
    title: "Атмосферный сервер",
    desc: "При создании сервера я учитывал множество факторов, основное из них - придание атмосферы и души.",
    descColor: "#00cdb0",
  },
  {
    title: "Версия",
    desc: "Сервер всегда доступен с версии 1.19.4 по 1.20+.",
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
      },
      chestplate: {
        generic: 6,
      },
      leggings: {
        generic: 5,
      },
      boots: {
        generic: 4,
      },
    },
    armorThougness: {
      helmet: {
        generic: 2,
      },
      chestplate: {
        generic: 6,
      },
      leggings: {
        generic: 4,
      },
      boots: {
        generic: 4,
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
      },
      chestplate: {
        generic: 8,
      },
      leggings: {
        generic: 4,
      },
      boots: {
        generic: 2,
      },
    },
    armorThougness: {
      helmet: {
        generic: 2,
      },
      chestplate: {
        generic: 6,
      },
      leggings: {
        generic: 4,
      },
      boots: {
        generic: 2,
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
      },
      chestplate: {
        generic: 6,
      },
      leggings: {
        generic: 5,
      },
      boots: {
        generic: 2,
      },
    },
    armorThougness: {
      helmet: {
        generic: 2,
      },
      chestplate: {
        generic: 4,
      },
      leggings: {
        generic: 2,
      },
      boots: {
        generic: 2,
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
      },
      chestplate: {
        generic: 10,
      },
      leggings: {
        generic: 5,
      },
      boots: {
        generic: 2,
      },
    },
    armorThougness: {
      helmet: {
        generic: 4,
      },
      chestplate: {
        generic: 6,
      },
      leggings: {
        generic: 4,
      },
      boots: {
        generic: 2,
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
      },
      chestplate: {
        generic: 7,
      },
      leggings: {
        generic: 5,
      },
      boots: {
        generic: 3,
      },
    },
    armorThougness: {
      helmet: {
        generic: 1,
      },
      chestplate: {
        generic: 1,
      },
      leggings: {
        generic: 1,
      },
      boots: {
        generic: 1,
      },
    },
  },
];

export {
  termins,
  ruless,
  headerLinks,
  news,
  mediaLinks,
  contacts,
  headers,
  armorList,
  donateList,
  gameplay,
  gallery,
  projectDesciption,
  commuinityGallery,
};
