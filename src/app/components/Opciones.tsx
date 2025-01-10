import Link from "next/link";
import React from "react";

export default function Opciones() {
  return (
    <footer className="px-4 flex my-2 justify-center flex-col items-center text-[#8a8d91] h-[10vh] md:h-[20vh]">
      <div className="flex justify-center items-center space-x-4 xl:hidden">
        <Link href="#" className="hover:underline">
          Información
        </Link>
        <Link href="#" className="hover:underline">
          Ayuda
        </Link>
        <Link href="#" className="hover:underline">
          Más
        </Link>
      </div>
      <section className="xl:hidden">
        <p>CARLOS &copy; 2025</p>
      </section>

      <div className="hidden xl:flex xl:justify-center xl:items-center xl:space-x-4 xl:flex-wrap xl:w-[80rem] xl:text-sm xl:mt-4">
        <section className="w-full flex items-center px-4 space-x-4">
          <Link href="#" className="hover:underline">
            Español
          </Link>
          <Link href="#" className="hover:underline">
            English
          </Link>
          <Link href="#" className="hover:underline">
            Português (Brasil)
          </Link>
          <Link href="#" className="hover:underline">
            Français (France)
          </Link>
          <Link href="#" className="hover:underline">
            Italiano
          </Link>
          <Link href="#" className="hover:underline">
            Deutsch
          </Link>
          <Link
            href="#"
            className="bg-gray-100 border w-7 h-5 flex justify-center items-center shadow-sm"
          >
            +
          </Link>
        </section>

        <hr className="w-full my-2" />

        <section className="w-full flex flex-wrap gap-x-4">
          <Link href="#" className="hover:underline">
            Registrarte
          </Link>
          <Link href="#" className="hover:underline">
            Iniciar sesión
          </Link>
          <Link href="#" className="hover:underline">
            Messenger
          </Link>
          <Link href="#" className="hover:underline">
            Facebook Lite
          </Link>
          <Link href="#" className="hover:underline">
            Video
          </Link>
          <Link href="#" className="hover:underline">
            Lugares
          </Link>
          <Link href="#" className="hover:underline">
            Juegos
          </Link>
          <Link href="#" className="hover:underline">
            Marketplace
          </Link>
          <Link href="#" className="hover:underline">
            Meta Pay
          </Link>
          <Link href="#" className="hover:underline">
            Tienda de Meta
          </Link>
          <Link href="#" className="hover:underline">
            Meta Quest
          </Link>
          <Link href="#" className="hover:underline">
            Ray-Ban Meta
          </Link>
          <Link href="#" className="hover:underline">
            Meta AI
          </Link>
          <Link href="#" className="hover:underline">
            Instagram
          </Link>
          <Link href="#" className="hover:underline">
            Threads
          </Link>
          <Link href="#" className="hover:underline">
            Recaudaciones de fondos
          </Link>
          <Link href="#" className="hover:underline">
            Servicios
          </Link>
          <Link href="#" className="hover:underline">
            Centro de información de votación
          </Link>
          <Link href="#" className="hover:underline">
            Política de privacidad
          </Link>
          <Link href="#" className="hover:underline">
            Centro de privacidad
          </Link>
          <Link href="#" className="hover:underline">
            Grupos
          </Link>
          <Link href="#" className="hover:underline">
            Información
          </Link>
          <Link href="#" className="hover:underline">
            Crear anuncio
          </Link>
          <Link href="#" className="hover:underline">
            Crear página
          </Link>
          <Link href="#" className="hover:underline">
            Desarrolladores
          </Link>
          <Link href="#" className="hover:underline">
            Empleo
          </Link>
          <Link href="#" className="hover:underline">
            Cookies
          </Link>
          <Link href="#" className="hover:underline">
            Opciones de anuncios
          </Link>
          <Link href="#" className="hover:underline">
            Condiciones
          </Link>
          <Link href="#" className="hover:underline">
            Ayuda
          </Link>
          <Link href="#" className="hover:underline">
            Importación de contactos y no usuarios
          </Link>
          <Link href="#" className="hover:underline">
            Configuración
          </Link>
          <Link href="#" className="hover:underline">
            Registro de actividad
          </Link>
        </section>

        <section className="my-4">
          <p>CARLOS &copy; 2025</p>
        </section>
      </div>
    </footer>
  );
}
