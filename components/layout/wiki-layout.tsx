import { FAQ } from "../section/faq";
import { Footer } from "../section/footer";
import { Header } from "../section/header";
import { Wrapper } from "../wrappers/main-wrapper";

export default function WikiLayout({ children }: any) {
  return (
    <main>
      <Header />
      <Wrapper>
        <div className="flex flex-col gap-y-4 py-32">
          <div className="flex flex-col relative bg-neutral-900 py-6 rounded-sm gap-y-2">
            <FAQ />
            <div className="flex flex-col grad-first-teal rounded-sm py-2 px-6">
              <p className="text-base md:text-lg">Добро пожаловать на вики проекта. Здесь расположено FAQ, рецепты редких преметов и многое другое.</p>
            </div>
          </div>
          {children}
        </div>
      </Wrapper>
      <Footer />
    </main>
  )
}