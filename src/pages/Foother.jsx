import React from "react";

function Foother() {
  return (
    <div name="contact" className="flex justify-center items-center py-10 bg-neutral-900">
      <div className="w-3/5 flex flex-col justify-between gap-10">
        <p className="text-2xl text-amber-700">
          ¿Listo para vivir la aventura de tu vida? Contáctanos hoy para
          planificar tu próxima experiencia con ExploraNatura.
        </p>
        <div className="text-neutral-400 text-lg">
            <p>+54 4444-6666</p>
            <p>ExploraNatura@mail.com</p>
            <p>&copy; todos los derechos reservados Nicolas Vazquez</p>
        </div>
      </div>
    </div>
  );
}

export default Foother;
