'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Fasilitas', href: '/Faselitas', current: false },
  {
    name: 'Program',
    dropdown: true,
    current: false,
    items: [
      { name: 'Ekstrakurikuler', href: '/Ekstra' },
      { name: 'Galeri SMANTUP', href: '/Gallrey' },
    ],
  },
  { name: 'Profil', href: '/Profil', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name))
  }

  return (
    <Disclosure
      as="nav"
      className={classNames(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/60 backdrop-blur-lg shadow-md'
          : 'bg-white'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[70px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/img/1.png"
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-lg font-semibold text-gray-800">SMAN 17 BONE</span>
          </Link>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 text-gray-700 hover:bg-gray-200 rounded-md">
              <Bars3Icon className="block h-6 w-6 ui-open:hidden" />
              <XMarkIcon className="hidden h-6 w-6 ui-open:block" />
            </DisclosureButton>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex items-center gap-4">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all rounded-md"
                  >
                    {item.name}
                    {openDropdown === item.name ? (
                      <ChevronUpIcon className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    )}
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-44 rounded-md shadow-lg bg-white border border-gray-200 z-10 animate-fade-in">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded transition"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  key={item.name}
                  onClick={() => setOpenDropdown(null)}
                  className={classNames(
                    item.current
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-indigo-600 hover:text-white',
                    'px-4 py-2 rounded-md text-sm font-medium transition'
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden px-4 pt-2 pb-4 space-y-2">
        {navigation.map((item) =>
          item.dropdown ? (
            <div key={item.name}>
              <span className="block text-sm font-semibold text-gray-700">{item.name}</span>
              {item.items.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className="block pl-4 py-1 text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-800 rounded transition"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-indigo-600 hover:text-white',
                'block px-4 py-2 rounded-md text-sm font-medium transition'
              )}
            >
              {item.name}
            </Link>
          )
        )}
      </DisclosurePanel>
    </Disclosure>
  )
}
