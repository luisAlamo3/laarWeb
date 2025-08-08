import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 text-center bg-[#0b0f20]">
      <div className="container mx-auto">
        <div className="h-16 w-16 mx-auto rounded-full bg-gray-900 flex items-center justify-center mb-4">
    <Image src="https://placehold.co/64x64/000000/FFFFFF?text=HP" alt="Logo de la empresa" width={64} height={64} className="rounded-full" />
import Image from "next/image";
        </div>
  <h3 className="text-xl font-semibold text-gray-200 mb-2">Soluciones IT Profesionales</h3>
        <p className="text-gray-400 text-sm mb-4">Tu socio confiable en tecnología. Brindamos soluciones técnicas integrales para mantener tu negocio funcionando sin interrupciones.</p>
        <div className="w-full h-px bg-gray-700 mx-auto my-6"></div>
  <p className="text-gray-500 text-xs">&copy; 2024 Soluciones IT Profesionales. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
