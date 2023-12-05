import { useRouter } from "next/navigation"
import { Wrapper } from "../wrappers/main-wrapper";

export const Footer = () => {
  const router = useRouter();
  return (
    <footer
      className="sticky flex justify-center items-center py-16 md:pb-6 md:pt-10"
      style={{
        backgroundImage: `url("/images/static/bedrock.webp")`,
        backgroundSize: '160px'
      }}>
      <Wrapper>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full md:w-1/2">
            <p className="text-purple-hue-3 text-center text-shadow-sm text-lg md:text-2xl">Что еще?</p>
            <p className="text-white text-center text-shadow-sm text-base md:text-xl">
              Я буду рад любой помощи в разработке сервера. Писать&nbsp;
              <span
                onClick={() => router.push("https://t.me/pureawake")}
                className="cursor-pointer text-project-color hover:brightness-150"
              >
                мне
              </span>.
            </p>
          </div>
        </div>
      </Wrapper>
    </footer >
  )
}