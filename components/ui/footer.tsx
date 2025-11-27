import React from "react";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import Image from "next/image";

const servicesLine = {
  alignItems: "end",
} as React.CSSProperties;

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src={logo}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="text-gray-400">
                Digital Butterfly is committed to fostering strong connections
                with our clients and partners. Reach out to us through the
                following channels:
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div
              className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-2 gap-8"
              style={servicesLine}
            >
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">
                  Contact Information
                </h6>
                <ul>
                  <li className="mb-1">
                    <div className="text-gray-400">
                      Email: info@digitalbutterfly.com
                    </div>
                  </li>
                  <li className="mb-1">
                    <div className="text-gray-400">Phone: +1 646 2634129</div>
                  </li>
                  <li className="mb-1">
                    <div className="text-gray-400">
                      Address: Forest Hills, Queens, NY
                    </div>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1"></h6>
                <ul>
                  <li>
                    <Link
                      href="/#home"
                      className="font-medium text-blue-500 hover:text-blue-800  flex items-center transition duration-150 ease-in-out"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#service"
                      className="font-medium text-blue-500 hover:text-blue-800  flex items-center transition duration-150 ease-in-out"
                    >
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#about"
                      className="font-medium text-blue-500 hover:text-blue-800 flex items-center transition duration-150 ease-in-out"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#team"
                      className="font-medium text-blue-500 hover:text-blue-800 lex items-center transition duration-150 ease-in-out"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="font-medium text-blue-500 hover:text-blue-800 flex items-center transition duration-150 ease-in-out"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="ml-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61553323743426"
                  className="flex justify-center items-center text-blue-500 bg-gray-800 hover:bg-blue-950 rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="https://www.instagram.com/digitalbutterfly_net/"
                  className="flex justify-center items-center text-blue-500 bg-gray-800 hover:bg-blue-950  rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="https://www.linkedin.com/company/digital-butterflynet/?viewAsMember=true"
                  className="flex justify-center items-center text-blue-500 bg-gray-800  hover:bg-blue-950 rounded-full transition duration-150 ease-in-out"
                  aria-label="Linkedin"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
