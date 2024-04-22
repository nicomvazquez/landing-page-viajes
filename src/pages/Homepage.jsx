import React from "react";

function Homepage() {
  return (
    <div
      className="bg-cover bg-fixed bg-center h-screen flex justify-center items-center"
      style={{ backgroundImage: "url(fondo.jpg)" }}
      name="home"
    >
      <div className="w-4/5 h-2/5 text-base">
        <p className="text-9xl text-orange-500 font-medium">ExploraNatura</p>
        <p className="text-3xl my-10 mx-3 w-3/5 text-white">
          Descubre el Mundo, Vive la Aventura con ExploraNatura: Donde la
          frescura de los bosques, la amplitud del cielo y la conexión con la
          tierra se entrelazan para ofrecerte experiencias inolvidables.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
