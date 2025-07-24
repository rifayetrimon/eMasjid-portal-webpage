"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`w-full py-8 border-b z-50 ${
        isHome
          ? "bg-transparent border-transparent absolute top-0 left-0"
          : "bg-gray-100 border-gray-300"
      }`}
    >
      <ul className="flex justify-center space-x-15">
        <li>
          <a
            href="/"
            className={`font-medium ${
              isHome
                ? "text-white hover:text-green-600"
                : "text-gray-800 hover:text-blue-600"
            }`}
          >
            Utama
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`font-medium ${
              isHome
                ? "text-white hover:text-green-600"
                : "text-gray-800 hover:text-blue-600"
            }`}
          >
            Info eMasjid
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`font-medium ${
              isHome
                ? "text-white hover:text-green-600"
                : "text-gray-800 hover:text-blue-600"
            }`}
          >
            Carian Masjid
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`font-medium ${
              isHome
                ? "text-white hover:text-green-600"
                : "text-gray-800 hover:text-blue-600"
            }`}
          >
            Semakan Permohonan
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`font-medium ${
              isHome
                ? "text-white hover:text-green-600"
                : "text-gray-800 hover:text-blue-600"
            }`}
          >
            Soalan Lazim
          </a>
        </li>
      </ul>
    </nav>
  );
}
