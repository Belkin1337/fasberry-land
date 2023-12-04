import Layout from "@/components/layout/Layout";
import { ScreenshotItem } from "@/components/ui/dialogs/screenshot-item";
import { Wrapper } from "@/components/wrappers/main-wrapper";
import { gallery } from '@/shared/content'

export default function Community() {
  return (
    <Wrapper>
      <div className="flex flex-col relative bg-neutral-900 my-32 py-6 gap-y-2 h-max">
        <div className="flex flex-col px-6">
          <h1 className="text-xl lg:text-4xl text-white">Сообщество</h1>
        </div>
        <div className="flex flex-col py-2 px-6 my-4 grad-first-teal">
          <h1 className="text-lg lg:text-2xl text-white">Скриншоты игроков</h1>
          <p className="text-md text-neutral-400">[публикация постов доступна только авторизированным пользователям!]</p>
        </div>
        <div className="overflow-y-auto h-[710px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 grid-rows-1 gap-x-4 gap-y-4 px-6">
            {gallery.map((item, idx) => (
              <ScreenshotItem
                key={idx}
                title={item.title}
                image={item.picture}
                createdDate={item.datePublished}
              />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

Community.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}