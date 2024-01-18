const GameplayData = [
  {
    name: "Питомцы.",
    description: "Два вида питомцев со своей историей, способностями и характеристиками.",
    image: "https://cdn.discordapp.com/attachments/904344676587417621/1197667815935713390/pets.png?ex=65bc1a12&is=65a9a512&hm=d4a5c2824ecbed03860d622f26ee70882f97d1f3b0230d0f3f4103c69a5c52f5&"
  },
  {
    name: "Репутация",
    description: "Чем выше репутация - тем лучше к вам будут относиться другие игроки (но это не точно).",
    image: "https://cdn.discordapp.com/attachments/903343341561847848/1197680924536615062/2024-01-19_02.15.49.png?ex=65bc2648&is=65a9b148&hm=befb93593b26914e2524e3a77e40b0653827109b9ebb66b2046f64d44ede8cda&",
  },
  {
    name: "Уникальные вещи",
    description: "Некоторые вещи, которые вы найдете или купите будут предоставлять уникальные возможности. Например: увеличение силы.",
    image: "https://cdn.discordapp.com/attachments/903343341561847848/1197676074750984253/image.png?ex=65bc21c3&is=65a9acc3&hm=640bb1377ea5938a653a07c0636187912112d2bcb03b1a03d4897e3331c6f18d&"
  },
]

export const Gameplay = () => {
  return (
    <>
      <div className="full-screen-section flex flex-col items-center">
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
              <div className="borders_up xl:hidden" />
              <div className="borders_down xl:hidden" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}