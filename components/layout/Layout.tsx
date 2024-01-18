import { Footer } from "../section/footer";
import { Header } from "../section/header";

export default function Layout({ children }: { children: React.ReactNode } ) {
  return (
    <main>
      <Header/>
        {children}
      <Footer />
    </main>
  )
}