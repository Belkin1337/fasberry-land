import { ServerStatus } from "@/components/status/widget/server-status";
import { MainLayoutPage } from "@/components/layout";

export default function Status() {
  return (
    <>
      <MainLayoutPage variant="with_section">
        <div className="flex items-center min-h-screen py-24 lg:py-36 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url("https://cdn.discordapp.com/attachments/904344676587417621/1197250840130486333/alex_in_cave.jpg?ex=65ba95bc&is=65a820bc&hm=4abb82a354a83b957d33b47ca510af424983bdfac6458754622cb4addb6c1ef7&")`
          }}>
        </div>
      </MainLayoutPage>
    </>
  )
}