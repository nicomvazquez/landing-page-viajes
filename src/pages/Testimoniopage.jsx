import React from "react";
import Testimonio from "../components/testimonio.jsx";

function Testimoniopage() {
  return (
    <div nane="testimonio" className="flex justify-center items-center py-20 bg-neutral-800">
      <div className="w-3/5 flex flex-col gap-10">
        <h1 className="text-5xl mb-10 text-amber-700">Opiniones de nuestros clientes</h1>  
        <Testimonio
          nombre={"Carlos Montañez"}
          testimonio={
            "¡Increíble! Hicimos una caminata de tres días con ExploraNatura y cada momento fue inolvidable. ¡Definitivamente volveremos por más!"
          }
        />
        <Testimonio
          nombre={"Laura Aventura"}
          testimonio={
            "La atención personalizada y el enfoque en la seguridad nos hicieron sentir cómodos y libres para disfrutar al máximo de la experiencia. ¡Altamente recomendado para amantes de la aventura!"
          }
        />
      </div>
    </div>
  );
}

export default Testimoniopage;
