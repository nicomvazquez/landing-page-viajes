import React from "react";

function testimonio({ nombre, testimonio }) {
  return (
    <div className="flex flex-col gap-3 w-full border border-neutral-400 rounded-md p-5">
      <h1 className="text-3xl text-amber-700">{nombre}</h1>

      <p className="text-xl text-neutral-400">{testimonio}</p>
    </div>
  );
}

export default testimonio;
