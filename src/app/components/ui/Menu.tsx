'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
  const pathname = usePathname()

  const links = [
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/journal', label: 'Journal' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <ul className="flex space-x-2">
      {links.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={
              pathname === item.href
                ? 'bg-red-500 text-white px-3 py-2 rounded text-sm'
                : 'bg-gray-700 text-white hover:bg-gray-600 px-3 py-2 rounded text-sm transition-colors'
            }
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}