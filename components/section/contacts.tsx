import { Wrapper } from "../wrappers/main-wrapper";
import Link from "next/link"
import { networkData } from "@/shared/content";

export const Contacts = () => {
	return (
		<div className="full-screen-section flex flex-col items-center justify-center bg-background-dark py-24 xl:py-0">
			<Wrapper>
				<div className="flex flex-col gap-y-12">
					<h1 className="text-3xl md:text-6xl lg:text-6xl xl:text-7xl text-rose-500 text-center">
						Где ещё существует проект?
					</h1>
					<div className="flex flex-col md:flex-row gap-x-4 gap-y-6 justify-between">
						{networkData.map((item) => (
							<div key={item.name} className="flex p-1 flex-col justify-between block-item">
								<div className="bg-wool-black p-5">
									<h1 className="text-3xl lg:text-4xl xl:text-5xl">{item.name}</h1>
									<h1 className="text-green text-lg xl:text-3xl text-left">+:</h1>
									{item.content.map((item) => (
										item.pluses && item.pluses.map((plus, plusIndex) => (
											<p key={plusIndex} className="md:text-xl">&gt;&nbsp;{plus}</p>
										))
									))}
									<h1 className="mt-2 xl:mt-3 text-rose-500 text-lg xl:text-3xl text-left">-:</h1>
									{item.content.map((item) => (
										item.minuses && item.minuses.map((minus, minusIndex) => (
											<p key={minusIndex} className="md:text-xl">&gt;&nbsp;{minus}</p>
										))
									))}
									<Link href={item.href}	className="flex flex-row items-center gap-x-4 brightness-110 mt-4 py-4 cursor-pointer group">
										<item.icon className="fill-white"	size={32}/>
										<span className="text-white text-lg">Перейти в {item.name}!</span>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</Wrapper>
		</div>
	)
}