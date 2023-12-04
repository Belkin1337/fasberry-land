import { useRouter } from "next/navigation"
import { Wrapper } from "../wrappers/main-wrapper";
import { headerLinks, mediaLinks } from '@/shared/content';

export const Footer = () => {
  const router = useRouter();

  return (
    <footer
      className="sticky justify-center items-center flex pb-4 pt-16"
      style={{
        backgroundImage: `url("/images/static/bedrock.webp")`,
        backgroundSize: '160px'
      }}>
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between gap-y-4 md:gap-0">
          <div className="flex flex-col lg:self-center lg:w-1/5">
            <h3 className="text-purple-hue-3 text-shadow-sm text-lg md:text-2xl">Что еще?</h3>
            <p className="text-white text-shadow-sm text-base md:text-xl">Я буду рад любой помощи в разработке сервера. Писать&nbsp;
              <span onClick={() => router.push("https://t.me/pureawake")} className="cursor-pointer text-project-color hover:brightness-150">мне</span>.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-purple-hue-3 text-shadow-sm text-lg md:text-2xl">Навигация</h3>
            {headerLinks.map((item) => (
              <div
                key={item.name}
                onClick={() => router.push(item.href)}
                className="text-base md:text-xl hover:text-project-color hover:brightness-150 text-white cursor-pointer"
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start justify-between">
            <div className="flex flex-col">
              <h3 className="text-purple-hue-3 text-shadow-sm text-lg md:text-2xl">Связь</h3>
              <p className="text-white text-shadow-sm text-base md:text-xl cursor-text">support@fasberry.ru</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-purple-hue-3 text-shadow-sm text-lg md:text-2xl">А также:</h3>
              {mediaLinks.map((item) => (
                <div
                  key={item.name}
                  onClick={() => router.push(item.href)}
                  className="text-white text-base md:text-xl hover:text-project-color hover:brightness-200 cursor-pointer"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6 justify-center text-center">
          <p>&copy; {new Date().getFullYear()} Fasberry.</p>
          <p>Все права защищены.</p>
        </div>
      </Wrapper>
    </footer >
  )
}