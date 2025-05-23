"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MenuHamburguesa = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors ${scrolled ? 'bg-amber-600/90' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/cotemag-1.webp"
              alt="Logo Cotemag"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          {/* Botón de menú hamburguesa */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Menú de navegación */}
          <ul className={`${
            isMenuOpen ? 'flex bg-blue-900/90 backdrop-blur-sm' : 'hidden'
          } lg:flex lg:bg-transparent flex-col lg:flex-row absolute lg:relative left-0 right-0 top-full lg:top-auto p-4 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-6 items-start lg:items-center w-full lg:w-auto`}>
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-200 font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/novedades"
                className="text-white hover:text-gray-200 font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Novedades
              </Link>
            </li>
            <li>
              <Link
                href="/conocenos"
                className="text-white hover:text-gray-200 font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Conócenos
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="text-white hover:text-gray-200 font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
            </li>
            <li className="relative w-full lg:w-auto">
              <button
                onClick={() => setIsAdminOpen(!isAdminOpen)}
                className="text-white hover:text-gray-200 font-medium flex items-center gap-1 w-full lg:w-auto"
              >
                Administración
                <svg
                  className={`w-4 h-4 transition-transform ${isAdminOpen ? 'rotate-180' : ''}`}
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
                <div className="lg:absolute relative right-0 mt-2 w-full lg:w-64 bg-blue-900/90 backdrop-blur-sm rounded-lg shadow-lg py-2 z-20">
                  <Link
                    href="/convenios-practicas"
                    className="block px-4 py-2 text-white hover:bg-blue-800/50"
                    onClick={() => {
                      setIsAdminOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Convenios - Prácticas
                  </Link>
                  <Link
                    href="/sistema-academico"
                    className="block px-4 py-2 text-white hover:bg-blue-800/50"
                    onClick={() => {
                      setIsAdminOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Sistema Académico
                  </Link>
                  <Link
                    href="/correo-institucional"
                    className="block px-4 py-2 text-white hover:bg-blue-800/50"
                    onClick={() => {
                      setIsAdminOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Correo institucional
                  </Link>
                  <Link
                    href="/preinscripciones"
                    className="block px-4 py-2 text-white hover:bg-blue-800/50"
                    onClick={() => {
                      setIsAdminOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Preinscripciones
                  </Link>
                  <Link
                    href="/solicitudes"
                    className="block px-4 py-2 text-white hover:bg-blue-800/50"
                    onClick={() => {
                      setIsAdminOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Solicitudes
                  </Link>
                  <Link
                    href="/consulta-alumnos"
                    className="block px-4 py-2 text-white hover:bg-blue-800/50"
                    onClick={() => {
                      setIsAdminOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Consulta externa de alumnos
                  </Link>
                  <Link
                    href="https://site2.q10.com/login?ReturnUrl=%2F"
                    className="block px-4 py-2 text-white hover:bg-blue-800/50"
                    onClick={() => {
                      setIsAdminOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Inicio de Sesión - Q10
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/contactos"
                className="text-white hover:text-gray-200 font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contactos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MenuHamburguesa;