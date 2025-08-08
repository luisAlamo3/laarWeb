import React from "react";
import Image from "next/image";

export default function Hero({ onVerServicios, onContactar }: { onVerServicios?: () => void; onContactar?: () => void }) {
  return (
    <section className="hero-bg text-center py-20 md:py-32 rounded-b-3xl" style={{background: "linear-gradient(135deg, #2b0c5f 0%, #150f3b 100%)"}}>
      <div className="container mx-auto px-4">
        <div className="h-20 w-20 mx-auto rounded-full bg-gray-900 flex items-center justify-center mb-6">
          <Image src="https://placehold.co/80x80/000000/FFFFFF?text=HP" alt="Logo de la empresa" width={80} height={80} className="rounded-full" />
import Image from "next/image";
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-2">Soluciones IT <span className="text-purple-400">Profesionales</span></h1>
  <p className="text-lg md:text-xl text-gray-400 mb-6">Transformamos tu tecnología en productividad.</p>
  <p className="text-md md:text-lg text-gray-400 mb-10">Soluciones IT y desarrollo de software a la medida de tu negocio.</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg" onClick={onVerServicios}>
            Ver Servicios
          </button>
          <button className="bg-transparent border border-blue-600 text-blue-400 font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:text-white" onClick={onContactar}>
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
}
