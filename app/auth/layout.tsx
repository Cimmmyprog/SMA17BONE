'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import Link from 'next/link'

export default function Layout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const toggleDrawer = () => setIsOpen(!isOpen)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
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
    <div className="flex bg-gray-50 dark:bg-gray-900">
      {/* Toggle button */}
      <button
        onClick={toggleDrawer}
        aria-label="Toggle sidebar"
        className="fixed top-4 left-4 z-[150px] p-2 rounded-md bg-white dark:bg-gray-800 shadow-md hover:bg-indigo-100 dark:hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      >
        <svg
          className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`
          fixed top-0 left-0 z-40 flex h-full w-64 flex-col justify-between
          bg-white dark:bg-gray-800 shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          sm:translate-x-0 sm:static sm:shadow-none sm:h-screen
        `}
        aria-label="Sidebar"
      >
        <nav className="flex flex-col flex-grow px-6 py-8 space-y-8 h-full">
          <div className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-6 select-none tracking-wide">
            SMAN 17 BONE ADMIN
          </div>

          <ul className="flex flex-col gap-3 text-gray-900 dark:text-gray-100 font-semibold">
            <li>
              <Link
                href=""
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition"
              >
                <svg
                  className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/auth/gallery"
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition"
              >
                <svg
                  className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 10h11M9 21V3M16 21v-4M16 13v-3" />
                </svg>
                Input
              </Link>

              <Link
                href="/auth/news"
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition"
              >
                <svg
                  className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 10h11M9 21V3M16 21v-4M16 13v-3" />
                </svg>
                Input
              </Link>
            </li>
          </ul>

          <div className="text-sm text-gray-500 dark:text-gray-400 select-none">
            &copy; 2025 Your Company
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex flex-grow flex-col p-8 sm:ml-64 transition-all duration-300 bg-white dark:bg-gray-900 rounded-lg shadow-md h-full min-h-screen">
        {children}
      </main>
    </div>
  )
}
