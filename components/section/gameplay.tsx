const GameplayData = [
  {
    name: "Питомцы.",
    description: "Два вида питомцев со своей историей, способностями и характеристиками.",
    image: "/images/pets.png"
  },
  {
    name: "Репутация",
    description: "Чем выше репутация - тем лучше к вам будут относиться другие игроки (но это не точно).",
    image: "/images/minecraft_3.webp",
  },
  {
    name: "Уникальные вещи",
    description: "Некоторые вещи, которые вы найдете или купите будут предоставлять уникальные возможности. Например: увеличение силы.",
    image: "/images/minecraft_2.webp"
  },
]

export const Gameplay = () => {
  return (
    <div className="full-screen-section flex flex-col bg-right md:bg-center md:flex-row bg-no-repeat bg-cover items-center"
      style={{
        backgroundImage: `url("/images/grass_screen.webp")`
      }}>
      <div className="flex flex-col lg:flex-row">
        {GameplayData.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-end w-full min-h-screen lg:w-1/3 bg-top relative bg-cover lg:bg-center border-0 lg:border-r-2 border-project-color"
            style={{ 
              backgroundImage: `url(${item.image})` 
            }}>
            <div className="absolute right-0 left-0 bg-gradient-to-b from-[#0e0e12] to-25% to-transparent min-h-screen bg-opacity-70" />
            <div className="absolute right-0 left-0 bg-gradient-to-t from-[#0e0e12] to-35% to-transparent min-h-screen bg-opacity-70" />
            <div className="flex flex-col items-center justify-center gap-y-2 py-16 px-6 relative bg-black bg-opacity-60 h-[360px]">
              <h1 className="text-2xl md:text-3xl 2xl:text-5xl text-red text-center">{item.name}</h1>
              <p className="text-xl md:text-2xl 2xl:text-3xl text-white text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}