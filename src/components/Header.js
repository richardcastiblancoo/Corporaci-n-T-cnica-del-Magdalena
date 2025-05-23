"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <header className="absolute w-full z-10">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/images/cotemag.png"
            alt="Logo Cotemag"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link
              href="/"
              className="text-white hover:text-gray-200 font-medium"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/novedades"
              className="text-white hover:text-gray-200 font-medium"
            >
              Novedades
            </Link>
          </li>
          <li>
            <Link
              href="/conocenos"
              className="text-white hover:text-gray-200 font-medium"
            >
              Conócenos
            </Link>
          </li>
          <li>
            <Link
              href="/servicios"
              className="text-white hover:text-gray-200 font-medium"
            >
              Servicios
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsAdminOpen(!isAdminOpen)}
              className="text-white hover:text-gray-200 font-medium flex items-center gap-1"
            >
              Administración
              <svg
                className={`w-4 h-4 transition-transform ${
                  isAdminOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isAdminOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-blue-900/90 backdrop-blur-sm rounded-lg shadow-lg py-2 z-20">
                <Link
                  href="/convenios-practicas"
                  className="block px-4 py-2 text-white hover:bg-blue-800/50"
                >
                  Convenios - Prácticas
                </Link>
                <Link
                  href="/sistema-academico"
                  className="block px-4 py-2 text-white hover:bg-blue-800/50"
                >
                  Sistema Académico
                </Link>
                <Link
                  href="/correo-institucional"
                  className="block px-4 py-2 text-white hover:bg-blue-800/50"
                >
                  Correo institucional
                </Link>
                <Link
                  href="/preinscripciones"
                  className="block px-4 py-2 text-white hover:bg-blue-800/50"
                >
                  Preinscripciones
                </Link>
                <Link
                  href="/solicitudes"
                  className="block px-4 py-2 text-white hover:bg-blue-800/50"
                >
                  Solicitudes
                </Link>
                <Link
                  href="/consulta-alumnos"
                  className="block px-4 py-2 text-white hover:bg-blue-800/50"
                >
                  Consulta externa de alumnos
                </Link>
                <Link
                  href="https://site2.q10.com/login?ReturnUrl=%2F"
                  className="block px-4 py-2 text-white hover:bg-blue-800/50"
                >
                  Inicio de Sesión - Q10
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link
              href="/contactos"
              className="text-white hover:text-gray-200 font-medium"
            >
              Contactos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
