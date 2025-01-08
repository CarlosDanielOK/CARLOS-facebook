import Image from "next/image";

export default function CarlosFacebook() {
  return (
    <main>
      <div>
        <section>
          <Image src="/facebook.png" width={400} height={400} alt="facebook" />
          <h1>Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</h1>
        </section>
        <section>
          <form>
            <input type="text" />
          </form>
        </section>
      </div>
    </main>
  );
}
