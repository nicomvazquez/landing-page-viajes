import React from "react";
import AccordionMenu from "../components/Acordeon.jsx";

function Infopage() {
  return (
    <div name="info" className="flex justify-center items-center py-20 bg-center bg-cover" style={{backgroundImage: "url(fondo2.jpg)"}}>
      <div className="w-3/5 flex flex-col gap-6">
        <AccordionMenu
          title="¿Porque elegirnos?"
          answer="En ExploraNatura, creemos que la naturaleza es la mayor fuente de aventura y descubrimiento. Nuestros guías expertos están comprometidos a brindar experiencias seguras y emocionantes que le permitirán explorar los rincones más asombrosos del mundo natural."
        />
        <AccordionMenu
          title="Experiencias ofresidas"
          answer="Excursiones de Senderismo a Lugares Remotos,
          Campamentos de Aventura para Todas las Edades,
          Rutas en Kayak por Ríos y Lagos Pintorescos,
          Escalada en Rocas y Montañas,
          Tours de Observación de Vida Silvestre"
        />
        <AccordionMenu
          title="Valores de la empresa"
          answer="Respeto por el Medio Ambiente,
          Aventura Responsable,
          Seguridad del Cliente,
          Pasión por la Naturaleza"
        />
        {/* Agrega más preguntas y respuestas según sea necesario */}
      </div>
    </div>
  );
}

export default Infopage;
