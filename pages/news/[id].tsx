import Layout from "@/components/layout/Layout"

const news = [
  {
    id: 1,
    title: "Релиз уже!",
    date: "02.01.2024 12:00",
    body: 
    `Как вы знаете, я уже открыл сервер, написав об этом в дискорде и телеграмме проекта. 
    Кстати советую подписаться там. Любой желающий сможет зайти на сервер, имея у себя майнкрафт версии не ниже 1.19.4.`
  }
]

export default function NewsItem() {
  return (
    <div className="flex flex-col min-h-screen w-[90%] mx-auto py-36">
      {news.map((item) => (
        <div key={item.id} className="flex flex-col w-full bg-black/50 rounded-xl p-4 gap-y-4">
          <img src="/images/glowingcave.png" className="w-[940px] h-[570px]" alt=""/>
          <p className="text-project-color text-3xl font-normal">{item.title}</p>
          <p className="text-white text-2xl font-normal">{item.body}</p>
        </div>
      ))}
    </div>
  )
}

NewsItem.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}