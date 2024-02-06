import { useMemo, useState } from 'react';
import { usePathname } from 'next/navigation'
import { useRouter } from "next/router"
import { headerLinks } from '@/shared/data';
import { ThemeToggle } from '@/features/theme-switch';
import { Sheet, SheetContent, SheetTrigger } from '@/ui/sheet';
import { Typography } from '@/ui/typography';
import { useToast } from '@/ui/use-toast';
import Image from "next/image"

export const Header = () => {
	const [open, setOpen] = useState(false);
	const { toast } = useToast();
	const router = useRouter();
	const pathname = usePathname();

	const pathDetect = useMemo(
		() => (href: string) => {
			if (pathname === href) {
				toast({
					title: "Вы уже на этой странице!",
					variant: "neutral",
					action: 
					<Image
						alt="Toast Pic"
						width={42}
						height={42}
						src="/images/minecraft/icons/bell.webp"
					/>
				})
			} else router.push(href);
		}, [router, pathname, toast])

	return (
		<>
			<div className={`header flex items-center justify-between sticky lg:absolute top-0 transition w-full bg-repeat-x z-50`}
				style={{ backgroundImage: `url("/images/static/cracked_polished_blacked.webp")`, backgroundSize: '160px' }}>
				<div onClick={() => router.push('/')} className="bg-transparent cursor-pointer relative top-3 xl:-right-20">
					<Image
						width={224}
						height={64}
						src="https://cdn.discordapp.com/attachments/904344676587417621/1190002158591029268/fasberry_logo.png?ex=65b2abdf&is=65a036df&hm=c16e7ad541151dae9288c99b354d81b9f44df931c2da7d69e59dc96238bfb62e&"
						alt="Fasberry Logo"
					/>
				</div>
				<div className="hidden xl:flex gap-x-4 items-center justify-start pr-[128px]">
					{headerLinks.map((item, idx) => (
						<div key={idx} onClick={() => pathDetect(item.href)} className="flex flex-row items-center gap-1 text-lg cursor-pointer">
							<Image src={item.image} width={20} height={20} alt={item.name} />
							<Typography className={`hover:brightness-150 text-project-color
          			${router.pathname === item.href && 'brightness-[1.8]'} 
          			${item.name == "Привилегии" && 'text-gold'}`}
							>
								{item.name}
							</Typography>
						</div>
					))}
					<div className="w-[36px] h-[36px] overflow-hidden">
						<ThemeToggle />
					</div>
				</div>
				<Sheet modal open={open} onOpenChange={setOpen}>
					<SheetTrigger className="xl:hidden absolute top-[10px] right-[8px] z-[3000]">
						<Image
							width={48}
							height={48}
							src={open ? "/images/minecraft/icons/chest_opened.png" : "/images/minecraft/icons/chest_closed.png"}
							alt="Chest"
						/>
					</SheetTrigger>
					<SheetContent side="top" className="xl:hidden flex flex-col items-start justify-between bg-neutral-950 h-[420px] p-4 w-full">
						<div className="flex flex-row justify-between items-center w-full">
							<div onClick={() => router.push('/')} className="bg-transparent cursor-pointer relative top-2 right-4">
								<Image
									width={224}
									height={64}
									src="https://cdn.discordapp.com/attachments/904344676587417621/1190002158591029268/fasberry_logo.png?ex=65b2abdf&is=65a036df&hm=c16e7ad541151dae9288c99b354d81b9f44df931c2da7d69e59dc96238bfb62e&"
									alt="Fasberry Logo"
								/>
							</div>
							<div className="w-[36px] h-[36px] relative right-8 overflow-hidden">
								<ThemeToggle />
							</div>
							<div onClick={() => setOpen(false)} className="relative top-[-4px] right-[-8px]">
								<Image
									width={48}
									height={48}
									src={open ? "/images/minecraft/icons/chest_opened.png" : "/images/minecraft/icons/chest_closed.png"}
									alt="toggle"
								/>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center w-full gap-y-2 px-4">
							{headerLinks.map((item) => (
								<div key={item.name} onClick={() => {
									router.push(item.href);
									setOpen(false);
								}}
									className="flex border border-neutral-800 hover:bg-neutral-800 cursor-pointer rounded-md gap-x-6 shadow-[inset_42px_0px_0px_#553C7D] py-2 px-2 w-full">
									<Image src={item.image}	width={26} height={10} alt={item.name} loading="lazy"	/>
									<Typography size="lg" className={`text-project-color ${item.name === "Привилегии" && 'text-gold'}`}>
										{item.name}
									</Typography>
								</div>
							))}
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</>
	);
};