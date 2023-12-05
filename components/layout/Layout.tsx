import { Footer } from "../section/footer";
import { Header } from "../section/header";
import localFont from 'next/font/local'

const font = localFont({ 
  src: '../../public/fonts/Monocraft.otf' 
})

export default function Layout({ children }: { children: React.ReactNode } ) {
  return (
    <main className={font.className}>
      <Header/>
        {children}
      <Footer />
    </main>
  )
}