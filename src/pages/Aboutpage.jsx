import React from "react";

function Aboutpage() {
  return (
    <div name="about" className="flex justify-center items-center py-20 bg-neutral-800">
      <div className="w-3/5 flex justify-between items-center gap-20">
        <div>
          <img src="foto.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl text-amber-700">Quienes somos?</h1>
          <p className="text-xl text-neutral-400">
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
