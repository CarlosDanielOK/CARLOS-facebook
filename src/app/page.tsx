"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import { showCustomToast } from "./components/Notificacion";

export default function CarlosFacebook() {
  const handleNotification = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    showCustomToast("Carlos", "Hola, gracias por visitar mi página", "success");
  };

  return (
    <>
      <main className="bg-[#f2f4f7] h-[90vh] md:h-[80vh] md:flex md:justify-center md:items-center">
        <div className="h-full flex flex-col justify-center items-center px-4 md:w-[80rem] md:flex-row">
          <section className="mt-2 mb-10 md:mt-0 md:mb-0 md:w-1/2">
            <Image
              src="/facebook.png"
              width={300}
              height={300}
              alt="facebook"
              className="md:my-5"
              priority
              style={{ width: "auto", height: "auto" }}
            />
            <h1 className="hidden md:block text-2xl">
              Facebook te ayuda a comunicarte y compartir con las personas que
              forman parte de tu vida.
            </h1>
          </section>
          <section className="flex flex-col items-center justify-center md:w-1/2 md:order-last">
            <form className="flex w-[95vw] flex-col gap-4 border p-4 rounded-md bg-white shadow-md md:w-[25rem]">
              <input
                type="text"
                placeholder="Correo electrónico o número de teléfono"
                className="w-full h-12 px-3 border rounded-md focus:border-[#0866ff] focus:outline-none"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full h-12 px-3 border rounded-md focus:border-[#0866ff] focus:outline-none"
              />
              <button
                onClick={handleNotification}
                className="bg-[#0866ff] rounded-md h-12 font-bold text-xl text-white hover:bg-[#2276fd]"
              >
                Iniciar sesión
              </button>
              <Link
                href="#"
                className="text-center text-blue-600 hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
              <hr />
              <div className="flex justify-center items-center">
                <button
                  onClick={handleNotification}
                  className="bg-[#42b72a] rounded-md px-6 w-fit h-12 font-bold text-xl text-white hover:bg-green-600 my-2"
                >
                  Crear cuenta nueva
                </button>
              </div>
            </form>
            <p className="text-center mt-6 w-96 max-w-full">
              <Link href="#" className="font-bold hover:underline">
                Crea una página
              </Link>{" "}
              para una celebridad, una marca o un negocio.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
