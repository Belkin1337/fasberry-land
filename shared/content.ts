import { BsDiscord, BsTelegram } from "react-icons/bs"

const gallery = [
  { title: "Пеликан летит", href: "", picture: "/images/pelican.webp", whoPublished: "Belkkin_", datePublished: "30.09.2023", },
  { title: "Какой-то чел на свинье", href: "", picture: "/images/reze.png", whoPublished: "Belkkin_", datePublished: "30.09.2023", },
  { title: "Волков", href: "", picture: "/images/kirill.webp", whoPublished: "Belkkin_", datePublished: "30.09.2023", },
  { title: "Под водой", href: "", picture: "/images/underwater.png", whoPublished: "Belkkin_", datePublished: "30.09.2023", },
  { title: "Шевченко", href: "", picture: "/images/schevchenko.webp", whoPublished: "Belkkin_", datePublished: "30.09.2023", },
]

const termins = [{
    title: "Терминология!", 
    subtitle: "немного теории...", 
    sectionId: "correction",
    content: [{ 
        articleTitle: "Кик", 
        articleDesc: "временное отключение игрока от сервера." 
      }, { 
        articleTitle: "Варн", 
        articleDesc: "предупреждение, которое выдаётся за первое нарушение одной из статей (3 предупреждения = бану)." 
      }, { 
         articleTitle: "Мут", 
          articleDesc: "ограничение доступа к возможности писать в чат (не в лс)." 
      }, { 
        articleTitle: "Бан", 
        articleDesc: "ограничение доступа к серверу на продолжительное время или навсегда (при условии, что вы натворили какую-то дичь)." 
      }, { 
        articleTitle: "Неадекватность", 
        articleDesc: "состояние игрока, когда он не контролирует свои действия, и которые вредят игре других игроков." 
      }, { 
        articleTitle: "Притеснение", 
        articleDesc: ["политическое притеснение (вражда), ", "социальное притеснение, ", "моральное притеснение.",] 
      },
    ]
  }
]

const rules = {
  Rules: {
    sections: [ {
        chat: {
          id: "Игровой чат", title: "Правила в игровом чате",
          content: [ {
              article: "Запрещается оскорблять игроков.",
              punish: "мут в чате на 12 часов / при повторе на 3 суток.",
              description: "",
              subtitle: [""]
            }, {
              article: "Запрещается упоминание родных лиц игроков.",
              punish: "мут в чате на 12 часов / при повторе на 3 суток).",
              description: "",
              subtitle: [""]
            }, {
              article: "Запрещен флуд/спам (уточнение: 3+ сообщения более чем за 2 секунды).",
              punish: "мут в чате на 30 минут.",
              description: "",
              subtitle: [""]
            }, {
              article: "Запрещен коллективный флуд однотипными сообщениями.",
              punish: "мут в чате на 30 минут каждому / при повторе мут на 6 часов каждому.",
              description: "",
              subtitle: [""]
            }, {
              article: "Запрещено выдавать себя за представителя администрации (даже в шутку).",
              punish: "мут в чате на 2 часа.",
              description: "",
              subtitle: [""]
            }, {
              article: 
              `Запрещено обсуждать текущие политические события в мире в оскорбительном или 
              унизительном/шуточном форматах, а также неуважительно относиться к игрокам сервера 
              из-за мировой ситуации.`,
              punish: "мут в чате на 12 часов / при повторе бан аккаунта на сутки.",
              description: "",
              subtitle: [""]
            },
          ]
        },
        gameplay: {
          content: [ {
              article: "Запрещен приют новичков",
              description: "",
              punish: "1 предупреждение",
              subtitle: [""]
            }, {
              article: "Запрещено строить огромные фермы",
              description: "",
              punish: "1 предупрежение + снос фермы / при повторе бан аккаунта на сутки."
            }, {
              article: "Запрещено строить огромные одноформенные и бессмысленные постройки.",
              description: "",
              punish: "1 предупреждение + снос постройки"
            }, {
              article: "Запрещено устраивать раздачи среди игроков.",
              description: "",
              punish: "1 предупреждение"
            }, {
              article: 
              `Запрещено использование читов (стороннее ПО, 
              позволяющее получить преимущество над другими игроками и не только).`,
              description: "",
              punish: "перманентный бан аккаунта"
            },
          ]
        },
        based: {
          content: [ {
              article: "Незнание правил не освобождает вас от ответственности (базированное правило.)",
              punish: "",
              subtitle: "",
              description: "",
            }, {
              article: "Независимо от статуса игрока - все равны и все понесут наказание за нарушение правил.",
              punish: "",
              subtitle: ""
            }, {
              article: 
              `Игрок сам несёт ответственность за безопасность своего аккаунта. 
              В случае взлома, администрация имеет полное право отказать в восстановлении доступа к аккаунту.`,
              punish: "",
              subtitle: ""
            }, {
              article: "Запрещено регистрировать некорректные никнеймы.",
              punish: "",
              subtitle: [
                "Содержащие мат, оскорбления, нецензурную или неприемлемую в приличном обществе лексику и т.д.",
                "Содержащие слова никнеймы администрации и должностей на сервере: «модератор», «админ».",
                "Носящие рекламный характер"
              ]
            }, {
              article: "Запрещена продажа и передача игровых аккаунтов.",
              punish: "",
              subtitle: ""
            }, {
              article: "Главная администрация управляет проектом строго по своему усмотрению и опирается на общие формулировки правил.",
              punish: "",
              subtitle: ""
            }, {
              article: 
              `Игра на сервере является бесплатной и 
              предоставляется без каких-либо гарантий правильной работы. 
              Администраторы не возвращают вещи, потерянные в результате бага, отката и т.п (естественно в редких исключениях возвращают).`,
              punish: "",
              subtitle: ""
            }, {
              article: "Администрация может в любой момент изменить правила, заведомо уведомив игроков (обязательно уведомит об этом везде!).",
              punish: "",
              subtitle: ""
            }, {
              article: 
              `Если игрок получил блокировку на одном из своих аккаунтов и администрация 
              установит данный факт, то бан будет перенесен и на иные аккаунты, 
              которые имеют причастность к аккаунту, нарушавшему правило.`,
              punish: "",
              subtitle: ""
            }, {
              article: "Обжаловать наказание можно в течении 24 часов с момента нарушения.",
              punish: "",
              subtitle: [
                'Для этого есть специальный канал в Дискорде проекта.'
              ],
            },
          ]
        }
      }
    ]
  },
}

const networkData = [ {
  name: "Дискорд", 
  href: "https://discord.gg/vnqfVX4frH",
  icon: BsDiscord,
  content: [{
      pluses: [
        "общение напрямую с челами в чатике",
        "самым первым узнаёшь новости о проекте",
        "я ЛИЧНО скажу тебе СПАСИБО на сервере",
        "ты 1% счастливчиков, кто выполняет просьбы, прочитав их"]
    }, { 
      minuses: ["самым первым узнавать новости ты можешь и в телеге проекта"]
    }
  ]
}, {
  name: "Телеграмм", 
  href: "https://t.me/fasberry",
  icon: BsTelegram,
  content: [ {
      pluses: [
        "самым первым узнаёшь новости о проекте",
        "я ЛИЧНО скажу тебе СПАСИБО на сервере",
        "ты 1% счастливчиков, кто выполняет просьбы, прочитав их"]
    }, { 
      minuses: ["скудная активность в комментариях (100%)", "самым первым узнавать новости ты можешь и в дискорде проекта"] 
    }
  ]
}
]

const support = {
  Support: {
    content: [ {
        donateElement: [ {
            title: "Аутентик", 
            rate: 2, 
            price: "420 руб", 
            description: `Аутентичная привилегия, название говорит само за себя, не так ли?`,
            commands: [
              "/feed - пополнение сытости",
              "/anvil - личная наковальня",
              "/ender - личный эндер-чест",
              "/workbench - личный верстак",
              "/disc burn - возможность заливать на пластиник любые треки с Youtube, Twitch и др,",
              "увеличение лимитов для регионов,",
              "бесплатные наборы питомцев,",
              "увеличение лимитов для работ,"
            ],
            screenshot: "/images/donates/authentic.png"
          }, {
            title: "Лоял", 
            rate: 3, 
            price: "640 руб",
            description: `Лоял. Звучит гордо, верно? Если ты решил пропустить прошлую привилегию, то добро пожаловать!`,
            commands: [
              "/distance - узнать расстояние между двумя игроками,",
              "/inv - просмотреть инвентарь любого игрока,",
              "/heal - восполнять здоровье,",
              "увеличение лимитов для регионов,",
              "бесплатные наборы питомцев,",
              "увеличение лимитов для работ,"
            ],
            screenshot: "/images/donates/loyal.png"
          }, {
            title: "Архонт",
            rate: 4, 
            price: "1240 руб", 
            description: "Архонт ещё и зеленый? Это не случайно поверь, зеленый - к удаче.",
            commands: [
              '/weather - побыть немного шаманом, изменяя погоду у всех,',
              'больше влияния',
              'вас жаждут видеть на сервере,',
              "все возможности прошлых подписок"
            ],
            screenshot: "/images/donates/arkhont.png"
          },
        ],
      }
    ]
  },
}

const headerLinks = [
	{ name: 'Главная', image: "/images/minecraft/icons/spawn_egg.webp", href: "/" },
	{ name: 'Правила', image: "/images/minecraft/icons/warped_sign_big.webp", href: "/rules" },
	{ name: 'Привилегии', image: "/images/minecraft/icons/bone_meal_big.webp", href: "/donate" },
  { name: 'Поддержка', image: "/images/minecraft/icons/experience_big.webp", href: "/support"},
  { name: 'Вики', image: "/images/minecraft/icons/knowledge_book.webp", href: "/wiki" },
	{ name: 'Карта мира', image: "/images/minecraft/icons/locked_map_big.webp", href: "/map" },
	// { name: 'Аккаунт', image: "/images/minecraft/icons/dark_oak_door_big.webp", href: "https://cp.fasberry.ru" }
]

const mediaLinks = [
  { name: "Сообщество в VK", href: "https://vk.com/fasberry" },
  { name: "Сообщество в Discord", href: "https://discord.gg/vnqfVX4frH" },
  { name: "Сообщество в Telegram", href: "https://t.me/fasberry" },
]


const headers = [ {
    aspect: [ {
        title: "профиль",
        value: "profile"
      }, {
        title: "регионы",
        value: "regions"
      }, {
        title: "квесты",
        value: "quests"
      }, {
        title: "валюты",
        value: "wallets"
      }, {
        title: "кланы",
        value: "clans"
      }, {
        title: "работы",
        value: "jobs"
      }, {
        title: "бусты",
        value: "boosts"
      }, {
        title: "репутация",
        value: "reputation"
      }, {
        title: "питомцы",
        value: "pets"
      }, {
        title: "новые мобы",
        value: "mobs"
      }, {
        title: "новая броня",
        value: "armor"
      }
    ],
  }, {
    links: [ {
        title: "Защита аккаунта",
        value: "safety"
      }, {
        title: "Технические проблемы",
        value: "problems"
      }, {
        title: "Жалобы на игроков",
        value: "reports"
      }, {
        title: "Донат",
        value: "donate"
      },
    ]
  }, {
    servers: [ {
        title: "Bisquite Survival",
        value: "bisquite"
      }, {
        title: "Muffin RP",
        value: "muffin"
      }
    ],
  }
]

const rulesList = [ {
  name: rules.Rules.sections,
  title: "Правила в игровом чате",
  sectionId: "rules-chat",
  content: rules.Rules.sections[0].chat.content.map((item) => ({
    article: item.article,
    punishment: item.punish,
    description: item.description,
    subtitle: item.subtitle && item.subtitle.length > 0 ? item.subtitle[0] : ''
  }))
}, {
  name: rules.Rules.sections,
  title: "Общие правила и положения",
  sectionId: "rules-based",
  content: rules.Rules.sections[0].based?.content?.map((item) => ({
    article: item.article,
    punishment: item.punish,
    description: item.description,
    subtitle: item.subtitle && item.subtitle.length > 0 ? item.subtitle[0] : ''
  }))
}, {
  name: rules.Rules.sections, title: "Непосредственная игра", sectionId: "rules-gameplay",
  content: rules.Rules.sections[0].gameplay?.content?.map((item) => ({
    article: item.article,
    punishment: item.punish,
    description: item.description,
    subtitle: item.subtitle && item.subtitle.length > 0 ? item.subtitle[0] : ''
  }))
}
];


export { 
  gallery, 
  termins,
  rules, 
  support, 
  headerLinks, 
  mediaLinks, 
  networkData, 
  headers, 
  rulesList 
}