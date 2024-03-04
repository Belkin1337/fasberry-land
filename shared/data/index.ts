import { BsDiscord, BsTelegram } from "react-icons/bs";

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




const mediaLinks = [
  { name: "Сообщество в VK", href: "https://vk.com/fasberry" },
  { name: "Сообщество в Discord", href: "https://discord.gg/vnqfVX4frH" },
  { name: "Сообщество в Telegram", href: "https://t.me/fasberry" },
];


const gameplay = [
  {
    name: "Развитая система экономики",
    description:
      "Несколько валют + система репутации, которая даёт тебе дополнительные возможности в игре.",
    image:
      "https://cdn.discordapp.com/attachments/903343341561847848/1197680924536615062/2024-01-19_02.15.49.png?ex=65f38548&is=65e11048&hm=a4699c4d5770ce4a83bb9ef5375674dec9e6bb11ecdf5082b3db9a22e459d346&",
  },
  {
    name: "Питомцы",
    description:
      "Два вида питомцев со своей историей, способностями, характеристиками и поведением.",
    image:
      "https://cdn.discordapp.com/attachments/904344676587417621/1197667815935713390/pets.png?ex=65f37912&is=65e10412&hm=140b22d17e0132f05cd01b2cf20bbdbc6e8ef6ab910956d8d9f099557428fbc5&",
  },
  {
    name: "Кастомные вещи",
    description:
      "Новые наборы брони, клинки и многое другое.",
    image:
      "https://cdn.discordapp.com/attachments/903343341561847848/1197676074750984253/image.png?ex=65f380c3&is=65e10bc3&hm=43de025fdc7c154673f83f705953f54051b7bfdb425f53c540317069fd0f3598&",
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

export {
  mediaLinks,
  contacts,
  gameplay,
  gallery,
  projectDesciption,
  commuinityGallery,
};
