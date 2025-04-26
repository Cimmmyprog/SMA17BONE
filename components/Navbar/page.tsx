'use client'

import { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Menu } from '@headlessui/react'

// Daftar navigasi utama
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Faselitas', href: '#', current: false },
  {
    name: 'Program ▼',
    dropdown: true,
    current: false,
    items: [
      { name: 'kurikulum merdeka', href: '#' },
      { name: 'gallery', href: '#' },
      { name: 'fasilitas', href: '#' },
    ],
  },
  { name: 'Calendar', href: '#', current: false },
]

// Fungsi untuk menggabungkan class secara dinamis
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => setLoggedIn(true)
  const handleLogout = () => setLoggedIn(false)

  return (
    <Disclosure as="nav" className="fixed top-0 w-full z-50 bg-white shadow-lg">

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

         
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block w-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden w-6 group-data-open:block" />
            </DisclosureButton>
          </div>

      
          <div className="flex flex-1 justify-center sm:hidden">
            <img src="img/1.png" alt="Logo" className="h-8 w-auto" />
          </div>

        
          <div className="hidden sm:flex flex-1 items-center justify-start space-x-2">
            <img src="img/1.png" alt="Logo" className="h-8 w-auto transition-transform transform hover:scale-110" />
            <span className="text-xl font-semibold transition-all">SMAN 17 BONE</span>
          </div>

          
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-4">
              {navigation.map((item) =>
                item.dropdown ? (
                 
                  <Menu as="div" key={item.name} className="relative inline-block text-left">
                    <Menu.Button className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-600 hover:text-white transition-all">
                      {item.name}
                    </Menu.Button>
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {item.items.map((subItem) => (
                        <Menu.Item key={subItem.name}>
                          {({ active }) => (
                            <a
                              href={subItem.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {subItem.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Menu>
                ) : (
             
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-700 hover:bg-indigo-600 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium transition-all'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* ======= Login / Logout Button (Kanan) ======= */}
          <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {loggedIn ? (
              // ======= Jika Sudah Login, tampilkan avatar dan menu logout =======
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center space-x-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-all">
                  <img className="h-8 w-8 rounded-full" src="https://i.pravatar.cc/150?img=3" alt="User avatar" />
                </Menu.Button>
                <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block w-full px-4 py-2 text-sm text-gray-700 text-left'
                        )}
                      >
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              // ======= Jika Belum Login, tampilkan tombol login =======
              <button
                onClick={handleLogin}
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700 transition-all"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ======= Panel Menu untuk Tampilan Mobile ======= */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="space-y-1">
                <span className="block px-3 py-2 text-base font-medium text-gray-700">{item.name}</span>
                {item.items.map((subItem) => (
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-5 py-2 text-sm text-gray-600 hover:bg-indigo-600 hover:text-white rounded-md transition-all"
                  >
                    {subItem.name}
                  </a>
                ))}
              </div>
            ) : (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-indigo-600 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium transition-all'
                )}
              >
                {item.name}
              </DisclosureButton>
            )
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}