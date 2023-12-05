import * as React from "react";
import Image from "next/image"

interface SidebarMenuToggleProps {
  toggle: () => void,
  isOpen: boolean
}

export const SidebarMenuToggle = ({ toggle, isOpen }: SidebarMenuToggleProps) => (
  <button className="absolute top-[10px] right-[8px]" onClick={toggle}>
    <Image
      width={48}
      height={48}
      src={isOpen ? "/images/minecraft/icons/chest_opened.png" : "/images/minecraft/icons/chest_closed.png"}
      alt="toggle"
    />
  </button>
);