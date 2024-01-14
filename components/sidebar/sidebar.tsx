import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/hooks/use-dimensions";
import { SidebarMenuToggle } from "./sidebar-toggle";
import { headerLinks } from "@/shared/content";
import { useRouter } from "next/navigation"
import Image from "next/image"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variantsMenuItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const router = useRouter();

  const toggleOnItem = (href: string) => {
    toggleOpen();
    router.push(href);
  }

  return (
    <>
      <motion.div
        className={`${isOpen === false ? 'hidden' : 'fixed'} top-0 right-0 z-[2000] w-[230px]`}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className={`${isOpen === false ? 'hidden' : 'fixed'} w-[220px] top-0 bottom-0 right-0 bg-black/90 shadow-[inset_2px_0px_0px_#C2CBFB]`}
          variants={sidebar}
        />
        <motion.ul className="relative flex h-screen items-center w-[242px]" variants={variants}>
          <motion.li
            variants={variantsMenuItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`${isOpen ? 'flex' : 'hidden'} flex-col justify-center items-start pl-8 gap-y-4`}>
              {headerLinks.map((item) => (
                <div
                  key={item.name}
                  onClick={() => toggleOnItem(item.href)}
                  className="flex gap-x-4 bg-wool-black border border-neutral-800 hover:bg-neutral-800 cursor-pointer rounded-sm py-2 px-2 w-full"
                >
                  <Image src={item.image} width={26} height={10} alt={item.name} />
                  <p className={`text-[1.1rem]
                ${item.name === "Подписки" ? 'text-gold' : 'text-project-color'}`}>
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.li>
        </motion.ul>
      </motion.div>
      <SidebarMenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
    </>
  );
}; 