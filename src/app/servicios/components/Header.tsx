import React from "react";

export default function Header({ onInicio, onServicios, onNosotros, onContacto }: {
  onInicio?: () => void;
  onServicios?: () => void;
  onNosotros?: () => void;
  onContacto?: () => void;
}) {
  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-[#0b0f20]">
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
          {/* SVG Logo */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M20 15h2"/><path d="M15 2h2"/><path d="M15 20h2"/><path d="M2 15h2"/><path d="M20 15h2"/><path d="M2 9h2"/><path d="M20 9h2"/><path d="M9 2h2"/><path d="M9 20h2"/><path d="M4 9h5"/><path d="M4 15h5"/><path d="M15 15h5"/><path d="M15 9h5"/><path d="M9 4v5"/><path d="M15 4v5"/><path d="M9 15v5"/><path d="M15 15v5"/></svg>
        </div>
        <span className="text-xl font-bold">Servicios Técnicos</span>
      </div>
      <nav className="hidden md:flex space-x-6">
        <button onClick={onInicio} className="hover:text-blue-400 bg-transparent">Inicio</button>
        <button onClick={onServicios} className="hover:text-blue-400 bg-transparent">Servicios</button>
        <button onClick={onNosotros} className="hover:text-blue-400 bg-transparent">Nosotros</button>
        <button onClick={onContacto} className="hover:text-blue-400 bg-transparent">Contacto</button>
      </nav>
      <button className="md:hidden p-2 rounded-md hover:bg-gray-700">
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </header>
  );
}
