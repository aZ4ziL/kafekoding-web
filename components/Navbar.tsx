"use client"

import Link from "next/link"

import { faBars, faSignIn } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { usePathname } from "next/navigation"

/**
 * Fungsi ini untuk membuat component untuk render Navigasi.
 * @returns JSX.Element
 */
export default function Navbar(): JSX.Element {
  const pathname = usePathname()

  return (
    <>
      {pathname.startsWith("/auth") ? (
        <></>
      ) : (
        <nav className="p-4 shadow-md fixed top-0 left-0 right-0 z-[1000] filter backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link
                href="/"
                className="text-lg md:text-2xl lg:text-3xl font-bold"
              >
                Kafe Koding
              </Link>
              <button type="button" className="md:hidden">
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>

            {/* Menu */}
            <div className="flex items-center gap-3">
              <Link href="/" legacyBehavior>
                <a className="text-gray-500 hover:text-gray-700">Home</a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="text-gray-500 hover:text-gray-700">About</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="text-gray-500 hover:text-gray-700">Contact</a>
              </Link>
              <Link href="/gallery" legacyBehavior>
                <a className="text-gray-500 hover:text-gray-700">Gallery</a>
              </Link>

              {/* Button */}
              <div className="flex items-center gap-3">
                <Link href="/auth/login" legacyBehavior>
                  <button
                    type="button"
                    className="flex items-center gap-1 border border-gray-300 rounded p-2 text-gray-500 hover:bg-gray-600 hover:text-gray-200"
                  >
                    <FontAwesomeIcon icon={faSignIn} />
                    <span>Login</span>
                  </button>
                </Link>
              </div>
              {/* Button */}
            </div>
            {/* Menu */}
          </div>
        </nav>
      )}
    </>
  )
}
