export const JoinToServer = () => {
  const actionsList = [
    "Просто имей у себя на ПК любой лаунчер майнкрафта (официальный предпочтительнее, в другом случае TL Legacy).",
    "Просто впиши ник и пароль в форму авторизации в лаунчере (зачем этот пункт?)",
    "...",
    "Просто сделай точь-в-точь, что указано ниже:"
  ]

  return (
    <>
      <div className="flex justify-center items-center p-8 bg-repeat border-4 border-black"
        style={{ backgroundImage: `url("/images/static/dirt.png")` }}>
        <div className="flex flex-col xl:flex-row gap-y-4 justify-between">
          <div className="flex flex-col gap-y-4 w-full xl:w-1/2">
            <h1 className="text-left text-xl text-shadow-xl text-gold">Как попасть на сервер?
            </h1>
            <p className="text-base text-white mb-4">Чтобы насладиться самым приятным геймплеем на сервере, нужно проделать очень сложные махинации...</p>
            <div className="flex flex-col pl-4 text-xl text-shadow-lg gap-y-2">
              {actionsList.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-row">
                  <p className="text-base text-shadow-lg text-gold">
                    {itemIndex + 1}.
                  </p>
                  <p className="text-base text-shadow-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-neutral-400 text-base">Название сервера</p>
              <div className="text-base bg-black py-2 px-2 border-2 text-white text-left border-neutral-500 w-100 md:w-96">Сервер Minecraft</div>
              <p className="text-neutral-400 text-base">Адрес сервера</p>
              <button className="text-base cursor-pointer bg-black py-2 px-2 border-2 text-white text-left border-neutral-500 w-100 md:w-96">play.fasberry.ru</button>
              <div className="button w-full text-center md:w-96 px-2 py-1 text-base">Наборы ресурсов: Включены</div>
              <div className="button w-full text-center md:w-96 px-2 py-1 text-base">Готово</div>
            </div>
          </div>
          <div className="overflow-hidden flex items-center justify-center">
            <img className="object-cover w-[520px] h-[328px]" src="/images/camel.webp" alt="Как попасть на сервер?"/>
          </div>
        </div>
      </div>
    </>
  )
}