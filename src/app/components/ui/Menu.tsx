'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuProps {
  isMobile?: boolean;
}

export default function Menu({ isMobile = false }: MenuProps) {
  const pathname = usePathname()

  const links = [
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/journal', label: 'Journal' },
    { href: '/contact', label: 'Contact' },
  ]

  // Используем один и тот же JSX для сервера и клиента
  return (
    <ul className={isMobile ? "py-2" : "flex flex-wrap justify-center gap-2"}>
      {links.map((item) => (
        <li key={item.href} className={isMobile ? "block" : "flex-1"}>
          <Link
            href={item.href}
            className={`${isMobile 
              ? `block px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                    : 'text-gray-200 hover:bg-gray-800/50 hover:text-white'
                }`
              : `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30'
                    : 'bg-gray-800/50 text-gray-200 hover:bg-gray-700/70 hover:text-white'
                }`
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}