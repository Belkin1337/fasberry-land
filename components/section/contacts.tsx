import { BsDiscord, BsTelegram } from "react-icons/bs";
import { Wrapper } from "../wrappers/main-wrapper";
import { useRouter } from "next/navigation"

const networkData = [
	{
		name: "Дискорд", href: "https://discord.gg/vnqfVX4frH",
		icon: BsDiscord,
		content: [
			{ pluses: [
				"общение напрямую с челами в чатике", 
				"самым первым узнаёшь новости о проекте", 
				"я ЛИЧНО скажу тебе СПАСИБО на сервере", 
				"ты 1% счастливчиков, кто выполняет просьбы, прочитав их"] 
			},
			{ minuses: ["самым первым узнавать новости ты можешь и в телеге проекта"] }
		]
	},
	{
		name: "Телеграмм", href: "https://t.me/fasberry",
		icon: BsTelegram,
		content: [
			{ pluses: [
				"самым первым узнаёшь новости о проекте", 
				"я ЛИЧНО скажу тебе СПАСИБО на сервере", 
				"ты 1% счастливчиков, кто выполняет просьбы, прочитав их"]
			},
			{ minuses: ["скудная активность в комментариях (100%)", "самым первым узнавать новости ты можешь и в дискорде проекта"] }
		]
	}
]

export const ContactLink = () => {
	const router = useRouter();

	return (
		<div className="full-screen-section flex flex-col items-center justify-center bg-background-dark py-24 xl:py-0">
			<Wrapper>
				<div className="flex flex-col gap-y-12">
					<h1 className='text-3xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-rose-500 text-center'>Где существуем?</h1>
					<div className="flex flex-col md:flex-row gap-x-4 gap-y-6 justify-between">
						{networkData.map((item) => (
							<div key={item.name} className="flex p-6 flex-col justify-between grad-first-purple">
								<h1 className="text-3xl lg:text-4xl xl:text-5xl">{item.name}</h1>
								<h1 className="text-green text-lg xl:text-3xl text-left">+:</h1>
								{item.content.map((subItem, idx) => (
									<div key={idx} className="md:text-xl">
										{subItem.pluses && subItem.pluses.map((plus, plusIndex) => (
											<p key={plusIndex}>&gt; {plus}</p>
										))}
									</div>
								))}
								<h1 className='mt-2 xl:mt-3 text-rose-500 text-lg xl:text-3xl text-left'>-:</h1>
								{item.content.map((subItem, idx) => (
									<div key={idx}>
										{subItem.minuses && subItem.minuses.map((minus, minusIndex) => (
											<p className="md:text-xl" key={minusIndex}>&gt; {minus}</p>
										))}
									</div>
								))}
								<div onClick={() => router.push(item.href)} className="flex flex-row items-center gap-x-4 brightness-110 mt-4 py-4 cursor-pointer group">
									<item.icon size={32} className={`${item.name === "Телеграмм" ? 'group-hover:fill-[#229ED9]' : 'group-hover:fill-discord-color'} group-hover:transition fill-white`} />
									<span className={`${item.name === "Телеграмм" ? 'group-hover:text-[#229ED9]' : 'group-hover:text-discord-color'} text-base text-white md:text-xl group-hover:transition`}>
										Заходи в {item.name}!
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</Wrapper>
		</div>
	)
}