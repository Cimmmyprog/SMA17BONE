'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Fasilitas ', href: '/Faselitas', current: false },
  {
    name: 'Program',
    dropdown: true,
    current: false,
    items: [
      { name: 'Ekstrakurikuler', href: '/Ekstra' },
      { name: 'Galeri & News', href: '/Gallrey' },
    ]
  },
  { name: 'Profil', href: '/Profil', current: false }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => (prev === name ? null : name))
  }
  return (
    <Disclosure as="nav" className={`fixed top-0 w-full z-50 bg-white shadow-md ${inter.variable}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[69px] items-center justify-between">
          {/* Logo dan mobile button */}
          <Link href={'/'} className="flex items-center">
            <Image src="/img/1.png" alt="Logo" className="h-8 w-auto mr-2" width={32} height={32} />
            <span className={`text-lg font-bold text-indigo-600 ${inter.variable}`}>SMAN 17 BONE</span>
          </Link>

          <div className="sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 text-gray-700 hover:bg-gray-200 rounded-md">
              <Bars3Icon className="block h-6 w-6 ui-open:hidden" />
              <XMarkIcon className="hidden h-6 w-6 ui-open:block" />
            </DisclosureButton>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex space-x-4">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-sm px-3 py-2 font-medium text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md transition-all"
                  >
                    {item.name}
                    {openDropdown === item.name ? (
                      <ChevronUpIcon className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    )}
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md z-10 animate-fade-in">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-800 rounded"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-indigo-600 hover:text-white',
                    'px-3 py-2 rounded-md text-sm font-medium transition'
                  )}
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden px-4 pt-2 pb-3 space-y-1">
        {navigation.map((item) =>
          item.dropdown ? (
            <div key={item.name} className="space-y-1">
              <span className="block px-3 py-2 text-sm font-medium text-gray-700">{item.name}</span>
              {item.items.map((subItem) => (
                <a
                  key={subItem.name}
                  href={subItem.href}
                  className="block px-6 py-1 text-sm text-gray-600 hover:bg-indigo-600 hover:text-white rounded transition"
                >
                  {subItem.name}
                </a>
              ))}
            </div>
          ) : (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-indigo-600 hover:text-white',
                'block px-3 py-2 rounded-md text-sm font-medium transition'
              )}
            >
              {item.name}
            </a>
          )
        )}
      </DisclosurePanel>
    </Disclosure>
  )
}
