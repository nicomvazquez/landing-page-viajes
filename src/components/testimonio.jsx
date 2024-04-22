import React from "react";

function testimonio({ nombre, testimonio }) {
  return (
    <div className="flex flex-col gap-7 w-full border border-neutral-400 rounded-md p-10">
      <h1 className="text-4xl text-orange-400">{nombre}</h1>

      <p className="text-2xl text-neutral-300">{testimonio}</p>
    </div>
  );
}

export default testimonio;
