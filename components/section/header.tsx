import { useMemo } from 'react';
import { usePathname } from 'next/navigation'
import { useRouter } from "next/navigation"
import Image from "next/image"

import { toast, Zoom } from 'react-toastify';

import { Sidebar } from '../sidebar/sidebar';
import { DesktopHeader } from '../header/desktop-header';

export const Header = () => {
	const router = useRouter();
	const pathname = usePathname();
	const toast_custom_id = "alert_duplicate_toast";

	const pathDetect = useMemo(
		() => (href: string) => {
			if (pathname === href) {
				toast.warn('Вы уже на этой странице!', {
					toastId: toast_custom_id,
					className: "bg-black text-white text-[0.9rem]",
					autoClose: 1900,
					role: "alert",
					position: toast.POSITION.TOP_RIGHT,
					transition: Zoom,
					icon: ({ theme, type }) => <img src="/images/minecraft/icons/bell.webp" />,
				})
			} else router.push(href);
		}, [pathname])

	return (
		<>
			<div className={`header flex items-center justify-between absolute top-0 transition w-full bg-repeat-x z-50`}
				style={{
					backgroundImage: `url("/images/static/cracked_polished_blacked.webp")`,
					backgroundSize: '160px',
				}}>
				<div onClick={() => router.push('/')} className="bg-transparent cursor-pointer relative top-3 xl:-right-20">
					<Image width={224} height={64} src="/images/fasberry_logo.png" alt="Fasberry" />
				</div>
				<DesktopHeader onClick={pathDetect} />
				<Sidebar />
			</div>
		</>
	);
};