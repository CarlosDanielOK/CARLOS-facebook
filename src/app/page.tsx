import Image from "next/image";
import Link from "next/link";
import Footer from "./components/footer";

export default function CarlosFacebook() {
  return (
    <>
      <main>
        <div className="">
          <section>
            <Image
              src="/facebook.png"
              width={400}
              height={400}
              alt="facebook"
            />
            <h1>
              Facebook te ayuda a comunicarte y compartir con las personas que
              forman parte de tu vida.
            </h1>
          </section>
          <section>
            <form>
              <input
                type="text"
                placeholder="Correo electrónico o número de teléfono"
              />
              <input type="password" placeholder="Contraseña" />
              <button>Iniciar sesión</button>
              <Link href="#">¿Olvidaste tu contraseña?</Link>
              <hr />
              <button>Crear cuenta nueva</button>
            </form>
            <p>
              <Link href="#" className="font-bold">
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
