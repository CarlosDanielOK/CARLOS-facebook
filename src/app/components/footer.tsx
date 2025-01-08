import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center space-x-4 md:hidden">
        <Link href="#">Información</Link>
        <Link href="#">Ayuda</Link>
        <Link href="#">Más</Link>
      </div>
      <div className="hidden bg-red-500 md:flex md:justify-center md:items-center md:space-x-4 md:flex-wrap md:h-32 md:w-[1000px] ">
        <Link href="#">Español</Link>
        <Link href="#">English</Link>
        <Link href="#">Português (Brasil)</Link>
        <Link href="#">Français (France)</Link>
        <Link href="#">Italiano</Link>
        <Link href="#">Deutsch</Link>
        <button className="bg-gray-100 border w-7 h-5 flex justify-center items-center shadow-sm">
          +
        </button>
        <hr />
        <Link href="#">Registrarte</Link>
        <Link href="#">Iniciar sesión</Link>
        <Link href="#">Messenger</Link>
        <Link href="#">Facebook Lite</Link>
        <Link href="#">Video</Link>
        <Link href="#">Lugares</Link>
        <Link href="#">Juegos</Link>
        <Link href="#">Marketplace</Link>
        <Link href="#">Meta Pay</Link>
        <Link href="#">Tienda de Meta</Link>
        <Link href="#">Meta Quest</Link>
        <Link href="#">Ray-Ban Meta</Link>
        <Link href="#">Meta AI</Link>
        <Link href="#">Instagram</Link>
        <Link href="#">Threads</Link>
        <Link href="#">Recaudaciones de fondos</Link>
        <Link href="#">Servicios</Link>
        <Link href="#">Centro de información de votación</Link>
        <Link href="#">Política de privacidad</Link>
        <Link href="#">Centro de privacidad</Link>
        <Link href="#">Grupos</Link>
        <Link href="#">Información</Link>
        <Link href="#">Crear anuncio</Link>
        <Link href="#">Crear página</Link>
        <Link href="#">Desarrolladores</Link>
        <Link href="#">Empleo</Link>
        <Link href="#">Cookies</Link>
        <Link href="#">Opciones de anuncios</Link>
        <Link href="#">Condiciones</Link>
        <Link href="#">Ayuda</Link>
        <Link href="#">Importación de contactos y no usuarios</Link>
        <Link href="#">Configuración</Link>
        <Link href="#">Registro de actividad</Link>
      </div>
    </footer>
  );
}
