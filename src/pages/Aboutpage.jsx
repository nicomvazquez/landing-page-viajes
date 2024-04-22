import React from "react";

function Aboutpage() {
  return (
    <div name="about" className="flex justify-center items-center py-20 bg-neutral-800">
      <div className="w-3/5 flex justify-between items-center gap-10">
        <div className="max-w-2xl w-full">
          <img src="foto.jpg" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-10 border-l-2 pl-10 py-20 border-orange-400">
          <h1 className="text-6xl font-semibold text-orange-400">Quienes somos?</h1>
          <p className="text-2xl text-neutral-300">
            ExploraNatura es la principal empresa de aventuras al aire libre,
            dedicada a proporcionar experiencias emocionantes y memorables en
            entornos naturales. Nos especializamos en brindar a nuestros
            clientes la oportunidad de conectarse con la naturaleza a través de
            actividades llenas de adrenalina y diversión.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
