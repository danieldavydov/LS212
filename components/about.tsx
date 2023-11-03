"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre mi");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Sobre mi</SectionHeading>
      <p className="mb-3 ">
        Estudio ciencias de la computación en la Universidad de Boston. Me
        apasiona la tecnología y la programación, y me gusta construir cosas que
        la gente usa.
      </p>
      <p className="mb-3">
        En mi tiempo libre me gusta pasar rato con mi novia, explorar la ciudad,
        ver peliculas y programas (acabo de terminar House of Dragon), escuchar
        musica, y jugar videojuegos.
      </p>
      <p>Desplázate hacia abajo para leer sobre cómo creo mi identidad.</p>
    </motion.section>
  );
}
