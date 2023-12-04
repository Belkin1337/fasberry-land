export const PreLoader = () => {
  const gifs_arr: any[] = [
    "/images/loader/arara.webp", 
    "/images/loader/minecraft-fox-jump.webp", 
    "/images/loader/moose-moosecraft.webp", 
    "/images/loader/zombieonchicken.webp", 
    "/images/loader/minecraft-silverfish.webp", 
    "/images/loader/buildtheearth-minecraft.webp", 
    "/images/loader/hartello-pl-poland.webp", 
    "/images/loader/minecraft-memeчикибамбони.webp", 
    "/images/loader/ghast.gif", 
  ];

  function randomGif<T>(array: T[]): T | undefined {
    if (array.length === 0) {
      return undefined;
    }

    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const gifs = randomGif(gifs_arr);

  return (
    <div className="flex min-h-screen bg-[#0e0e12] justify-center items-center">
      <img
        width={256}
        height={256}
        src={gifs}
        draggable="false"
        alt="Подождите... идёт загрузка."
      />
    </div>
  );
};