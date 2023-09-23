'use client'
import Link from "next/link";
import { Chart, UserGroup, House } from "./icons";
import { usePathname } from "next/navigation";

const MENU_ITEMS = {
  "/": [
    {
      href: "/leaderboard",
      label: "Leaderboard",
      icon: <UserGroup />,
    },
    {
      href: "/download",
      label: "Get our data",
      icon: <Chart />,
    },
  ],
  "/leaderboard": [
    {
      href: "/",
      label: "Home",
      icon: <House />,
    },
    {
      href: "/download",
      label: "Get our data",
      icon: <Chart />,
    },
  ],
  "others": [
    {
      href: "/",
      label: "Home",
      icon: <House />,
    },
    {
      href: "/leaderboard",
      label: "Leaderboard",
      icon: <UserGroup />,
    },
  ],
}

export function Menu() {
  const pathname = usePathname()

  let menu = MENU_ITEMS.others
  if (pathname in MENU_ITEMS) {
    menu = MENU_ITEMS[pathname]
  }

  return (
    <nav className="fixed top-5 left-5 md:top-10 md:left-10">
      <ul className="flex md:flex-col gap-4">
        {
          (menu.map((item) => (
            <MenuLink key={item.href} href={item.href}>
              {item.icon}
              <span className="text-white">{item.label}</span>
            </MenuLink>
          )))
        }
      </ul>
    </nav>
  )
}

function MenuLink({ href, children }) {
  return (
    <Link
      className="flex w-[64px] hover:w-[180px] transition-[width] duration-500 overflow-hidden group whitespace-nowrap items-center gap-4 p-4 bg-black rounded-full shadow-lg backdrop-blur border border-white"
      href={href}
    >
      {children}
    </Link>
  )
}