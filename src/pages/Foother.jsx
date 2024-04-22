import React from "react";

function Foother() {
  return (
    <div
      name="contact"
      className="flex justify-center items-center py-10 bg-neutral-900"
    >
      <div className="w-3/5 flex flex-col justify-between gap-10">
        <p className="text-3xl text-orange-400">
          ¿Listo para vivir la aventura de tu vida? Contáctanos hoy para
          planificar tu próxima experiencia con ExploraNatura.
        </p>
        <div className="text-neutral-300 flex flex-col gap-3 text-lg border-t-2 border-b-2 py-10">
          <p className="text-2xl">+54 4444-6666</p>
          <p className="text-xl">ExploraNatura@mail.com</p>
        </div>
        <div>
          <h1 className="text-2xl text-neutral-300">
            Developed by <span className="text-orange-400">Nicolas Vazquez</span>
          </h1>
          <p className="text-neutral-500">&copy; todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
}

export default Foother;
