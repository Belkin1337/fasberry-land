import { DiscordWidget } from "@/components/discord-widget";
import { ServerStatus } from "@/components/server-status";
import { Header } from "@/components/section/header";
import { Footer } from "@/components/section/footer";

export default function Status() {
  return (
    <>
      <Header />
      <div className="flex items-center min-h-screen py-36 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://cdn.discordapp.com/attachments/904344676587417621/1197250840130486333/alex_in_cave.jpg?ex=65ba95bc&is=65a820bc&hm=4abb82a354a83b957d33b47ca510af424983bdfac6458754622cb4addb6c1ef7&")`
        }}>
        <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-black/80 from-70% to-transparent min-h-screen group-hover:transition group-hover:duration-500 transition duration-500" />
        <div className="relative flex flex-col lg:flex-row items-center justify-start lg:-right-24 h-full w-[90%] mx-auto gap-x-12 gap-y-6">
          <ServerStatus />
          <DiscordWidget />
        </div>
      </div>
      <Footer />
    </>
  )
}
