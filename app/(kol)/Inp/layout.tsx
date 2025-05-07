'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import Link from 'next/link'

export default function Layout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const toggleDrawer = () => setIsOpen(!isOpen)

  // Tutup drawer jika klik di luar sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar toggle button */}
      <section>
        <button
          onClick={toggleDrawer}
          aria-controls="responsive-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-2 text-sm text-gray-500 rounded-md sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>

        {/* Sidebar */}
        <aside
          ref={sidebarRef}
          id="responsive-sidebar"
          className={`fixed top-0 left-0 z-40 w-52 h-screen transition-transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-2 py-3 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-1 text-sm font-medium">
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                    aria-hidden="true"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-2">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/Inp/galley"
                  className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 11H7.83l5.58-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z" />
                  </svg>
                  <span className="ms-2">Input</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>

      {/* Main content */}
      <div className="flex-1 p-4 sm:ml-64 transition-all duration-300">
        {children}
      </div>
    </div>
  )
}
