import { useState } from 'react';

import { useRouter } from "next/navigation"
import { Wrapper } from '../wrappers/main-wrapper';
import { headerLinks } from '@/shared/content';

export const Header = () => {
	const router = useRouter();
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<>
			<div className={`desktop_navbar hidden xl:flex items-center absolute top-0 transition w-full bg-repeat-x z-50`}
				style={{
					backgroundImage: `url("/images/static/cracked_polished_blacked.webp")`,
					backgroundSize: '160px',
				}}>
				<Wrapper>
					<div className="flex items-center justify-between py-4">
						<div onClick={() => router.push('/')} className="bg-transparent cursor-pointer">
							<img className="absolute w-56 h-16 top-0 my-2" src="/images/fasberry_logo.png" alt="Fasberry" />
						</div>
						<div className="flex flex-row gap-x-4 items-center">
							{headerLinks.map((linkElement, idx) => (
								<div onClick={() => router.push(linkElement.href)} key={idx} className="flex flex-row items-center gap-1 text-lg cursor-pointer">
									<img
										src={linkElement.image}
										width={20}
										height={20}
										alt={linkElement.name}
									/>
									<span className={`hover:brightness-150 ${linkElement.name == "Подписки" ? 'text-gold' : 'text-project-color'}`}>
										{linkElement.name}
									</span>
								</div>
							))}
						</div>
					</div>
				</Wrapper>
			</div>
			<div className={`${navbarOpen ? 'mobile_navbar open' : 'mobile_navbar closed'} fixed right-0 left-0 flex-col transition duration-600 ease-linear flex xl:hidden z-50`}
				style={{
					backgroundImage: `url("/images/static/cracked_polished_blacked.webp")`,
					backgroundSize: '160px',
				}}>
				<div className="flex flex-col justify-center items-center pt-2 gap-y-4">
					{headerLinks.map((item) => (
						<div
							key={item.name}
							onClick={() => router.push(item.href)}
							className="items-center flex flex-col justify-center cursor-pointer"
						>
							<span className={`text-xl ${item.name == "Подписки" ? 'text-gold' : 'text-project-color'}`}>
								{item.name}
							</span>
						</div>
					))}
				</div>
				<div className="flex flex-row justify-between items-center">
					<div onClick={() => router.push('/')} className="bg-transparent">
						<img width={256} className="relative pt-3" src="/images/fasberry_logo.png" alt="Fasberry" />
					</div>
					<div onClick={() => setNavbarOpen(!navbarOpen)} className="bg-transparent border-0 flex xl:hidden absolute bottom-4 right-10">
						<img
							src={navbarOpen ? "/images/minecraft/icons/chest_opened.png" : "/images/minecraft/icons/chest_closed.png"}
							width={48}
							height={48}
							alt="сундук"
						/>
					</div>
				</div>
			</div>
		</>
	);
};