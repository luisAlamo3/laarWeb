import React from "react";

export default function WhyUs() {
  return (
    <section className="py-20 px-4 md:px-12 bg-[#0b0f20]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-12">¿Por Qué <span className="text-purple-400">Elegirnos?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
            <div className="icon-bg w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Experiencia Comprobada</h3>
            <p className="text-gray-400 text-sm">Años de experiencia en el sector tecnológico.</p>
          </div>
          {/* Tarjeta 2 */}
          <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
            <div className="icon-bg w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Respuesta Rápida</h3>
            <p className="text-gray-400 text-sm">Atención inmediata a tus necesidades técnicas.</p>
          </div>
          {/* Tarjeta 3 */}
          <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
            <div className="icon-bg w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Garantía de Calidad</h3>
            <p className="text-gray-400 text-sm">Todos nuestros servicios incluyen garantía.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
