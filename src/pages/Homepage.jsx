import React from "react";

function Homepage() {
  return (
    <div
      className="bg-cover bg-fixed bg-center h-screen flex justify-center items-center"
      style={{ backgroundImage: "url(fondo.jpg)" }}
      name="home"
    >
      <div className="w-4/5 h-2/5 text-base">
        <p className="text-8xl text-orange-600 font-medium">ExploraNatura</p>
        <p className="text-2xl my-5 mx-3 w-3/5 text-white">
          Descubre el Mundo, Vive la Aventura con ExploraNatura: Donde la
          frescura de los bosques, la amplitud del cielo y la conexión con la
          tierra se entrelazan para ofrecerte experiencias inolvidables.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
