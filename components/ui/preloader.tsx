import Image from "next/image"

export const Preloader = () => {
  const gifs_arr = [
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

  const randomGif = (array: string[]) => {
    if (array.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * array.length);
    
    return array[randomIndex];
  }

  const gifs = randomGif(gifs_arr);

  return (
    <div className="flex min-h-screen bg-[#0e0e12] justify-center items-center">
      <Image
        width={256}
        height={256}
        src={`${gifs}`}
        draggable="false"
        alt="Подождите... идёт загрузка."
      />
    </div>
  );
};