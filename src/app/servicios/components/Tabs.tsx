import React from "react";

export default function Tabs({ tab, setTab, openMenus, toggleMenu }: {
  tab: "it" | "dev";
  setTab: (tab: "it" | "dev") => void;
  openMenus: { [key: string]: boolean };
  toggleMenu: (menu: string) => void;
}) {
  return (
    <section className="py-20 px-4 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-200">Nuestros <span className="text-blue-400">Servicios</span></h2>
        <p className="text-md md:text-lg text-gray-400 mb-12">Ofrecemos soluciones técnicas completas adaptadas a las necesidades de tu negocio</p>
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <button onClick={() => setTab("it")} className={`tab-button px-6 py-3 font-semibold rounded-t-lg transition duration-300 ease-in-out ${tab === "it" ? "bg-[#1e293b] text-white border-b-2 border-indigo-500" : ""}`}>Servicios de IT Tradicionales</button>
          <button onClick={() => setTab("dev") } className={`tab-button px-6 py-3 font-semibold rounded-t-lg transition duration-300 ease-in-out ${tab === "dev" ? "bg-[#1e293b] text-white border-b-2 border-indigo-500" : ""}`}>Servicios de Desarrollo de Software</button>
        </div>
        {/* IT Tradicionales */}
        {tab === "it" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tarjeta 1 */}
            <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
              <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                {/* Icono hardware */}
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Mantenimiento Correctivo de Hardware</h3>
              <p className="text-gray-400 text-sm">Diagnóstico y reparación de equipos informáticos con fallas específicas.</p>
            </div>
            {/* Tarjeta 2 */}
            <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
              <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                {/* Icono software */}
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Mantenimiento Preventivo de Software</h3>
              <p className="text-gray-400 text-sm">Limpieza, revisión y optimización periódica para prevenir fallas.</p>
            </div>
            {/* Tarjeta 3 */}
            <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
              <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                {/* Icono instalación */}
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Instalación y Configuración de Software</h3>
              <p className="text-gray-400 text-sm">Setup completo de sistemas operativos y aplicaciones empresariales.</p>
            </div>
            {/* Tarjeta 4 */}
            <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
              <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                {/* Icono correo */}
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13h9a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2h9z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Administración de Correo Electrónico</h3>
              <p className="text-gray-400 text-sm">Gestión profesional de cuentas de correo corporativo en dominio propio.</p>
            </div>
            {/* Tarjeta 5 */}
            <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
              <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                {/* Icono cuentas corporativas */}
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13.5l3-3m0 0l3 3m-3-3v10m6-11v2m0 6v2m6-11v2m0 6v2M9 3v2m0 6v2m6-6v2m6 6v2m-6 6v2M9 3v2m0 6v2m-6 6v2"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Manejo de Cuentas Corporativas</h3>
              <p className="text-gray-400 text-sm">Administración integral de perfiles y accesos empresariales.</p>
            </div>
            {/* Tarjeta 6 */}
            <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
              <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                {/* Icono cableado */}
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c-1.33 0-2.66 0-4 0-1.66 0-3 1.34-3 3s1.34 3 3 3h4c1.66 0 3-1.34 3-3s-1.34-3-3-3z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Instalación de Cableado Estructurado</h3>
              <p className="text-gray-400 text-sm">Diseño e implementación de infraestructura de red profesional.</p>
            </div>
            {/* Tarjeta 7 */}
            <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
              <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                {/* Icono CCTV */}
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Instalación de CCTV</h3>
              <p className="text-gray-400 text-sm">Sistemas de videovigilancia para seguridad empresarial y residencial.</p>
            </div>
            {/* Tarjeta 8 */}
            <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
              <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                {/* Icono backup */}
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Respaldo de Información</h3>
              <p className="text-gray-400 text-sm">Soluciones de backup en servidor propio o servicios en la nube.</p>
            </div>
          </div>
        )}
        {/* Desarrollo de Software */}
        {tab === "dev" && (
          <div>
            {/* Bases de Datos */}
            <div className="mb-16 text-left">
              <button className="toggle-menu flex items-center justify-between w-full text-2xl font-bold text-gray-200 mb-6 focus:outline-none" onClick={() => toggleMenu("db-menu") }>
                <span>Bases de Datos</span>
                <svg className={`w-6 h-6 transform transition-transform duration-300 ${openMenus["db-menu"] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${openMenus["db-menu"] ? "" : "hidden"}`}>
                {/* Relacionales */}
                <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
                  <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                    {/* Icono base de datos relacional */}
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><ellipse cx="12" cy="7" rx="7" ry="3" strokeWidth="2" /><path d="M5 7v6c0 1.657 3.134 3 7 3s7-1.343 7-3V7" strokeWidth="2" /><path d="M5 13c0 1.657 3.134 3 7 3s7-1.343 7-3" strokeWidth="2" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">Bases de Datos Relacionales</h3>
                  <p className="text-gray-400 text-sm">Oracle SQL, MySQL, MSSQL, PostgreSQL, y administración de datos.</p>
                </div>
                {/* NoSQL */}
                <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
                  <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                    {/* Icono base de datos NoSQL */}
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" /><path d="M8 8h8v8H8z" strokeWidth="2" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">Bases de Datos NoSQL</h3>
                  <p className="text-gray-400 text-sm">MongoDB y otras soluciones de bases de datos no relacionales.</p>
                </div>
              </div>
            </div>
            {/* Aplicaciones de Escritorio */}
            <div className="mb-16 text-left">
              <button className="toggle-menu flex items-center justify-between w-full text-2xl font-bold text-gray-200 mb-6 focus:outline-none" onClick={() => toggleMenu("desktop-menu") }>
                <span>Desarrollo de Aplicaciones de Escritorio</span>
                <svg className={`w-6 h-6 transform transition-transform duration-300 ${openMenus["desktop-menu"] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${openMenus["desktop-menu"] ? "" : "hidden"}`}>
                <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
                  <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                    {/* Icono escritorio */}
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="2" /><path d="M8 18v2h8v-2" strokeWidth="2" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">Desarrollo de Aplicaciones de Escritorio</h3>
                  <p className="text-gray-400 text-sm">Creación de software de escritorio con C#, C++, Java y más.</p>
                </div>
              </div>
            </div>
            {/* Desarrollo Web Frontend */}
            <div className="mb-16 text-left">
              <button className="toggle-menu flex items-center justify-between w-full text-2xl font-bold text-gray-200 mb-6 focus:outline-none" onClick={() => toggleMenu("frontend-menu") }>
                <span>Desarrollo Web Frontend</span>
                <svg className={`w-6 h-6 transform transition-transform duration-300 ${openMenus["frontend-menu"] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${openMenus["frontend-menu"] ? "" : "hidden"}`}>
                <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
                  <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                    {/* Icono HTML/CSS */}
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" /><path d="M7 7h10v10H7z" strokeWidth="2" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">Desarrollo con HTML/CSS</h3>
                  <p className="text-gray-400 text-sm">Creación de sitios web estáticos y estructuras de diseño accesibles.</p>
                </div>
                <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
                  <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                    {/* Icono Tailwind/Bootstrap */}
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" /><path d="M7 7h10v10H7z" strokeWidth="2" /><path d="M12 3v18" strokeWidth="2" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">Frameworks CSS (Tailwind/Bootstrap)</h3>
                  <p className="text-gray-400 text-sm">Diseños modernos y responsivos utilizando las últimas herramientas.</p>
                </div>
                <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
                  <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                    {/* Icono React */}
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><ellipse cx="12" cy="12" rx="6" ry="2" strokeWidth="2" /><ellipse cx="12" cy="12" rx="2" ry="6" strokeWidth="2" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">Desarrollo con React</h3>
                  <p className="text-gray-400 text-sm">Creación de interfaces de usuario dinámicas y componentes reutilizables.</p>
                </div>
                <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
                  <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                    {/* Icono Vue.js */}
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polygon points="12,2 2,22 22,22" strokeWidth="2" /><polygon points="12,6 6,20 18,20" strokeWidth="2" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">Desarrollo con Vue.js</h3>
                  <p className="text-gray-400 text-sm">Aplicaciones web escalables y reactivas con el framework progresivo.</p>
                </div>
              </div>
            </div>
            {/* Desarrollo Web Backend */}
            <div className="mb-16 text-left">
              <button className="toggle-menu flex items-center justify-between w-full text-2xl font-bold text-gray-200 mb-6 focus:outline-none" onClick={() => toggleMenu("backend-menu") }>
                <span>Desarrollo Web Backend</span>
                <svg className={`w-6 h-6 transform transition-transform duration-300 ${openMenus["backend-menu"] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${openMenus["backend-menu"] ? "" : "hidden"}`}>
                <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
                  <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                    {/* Icono frameworks y lenguajes */}
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="4" width="12" height="16" rx="2" strokeWidth="2" /><path d="M12 2v6" strokeWidth="2" /><path d="M8 6h8" strokeWidth="2" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">Frameworks y Lenguajes</h3>
                  <p className="text-gray-400 text-sm">Laravel, Django, Flask, .NET, Java, Python, C#, C/C++, y más.</p>
                </div>
                <div className="card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300">
                  <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #6366f1, #9333ea)'}}>
                    {/* Icono JS/TS */}
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" /><path d="M8 16h8M8 12h8M8 8h8" strokeWidth="2" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">JavaScript y TypeScript</h3>
                  <p className="text-gray-400 text-sm">Lógica de servidor con Node.js y frameworks como Express.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
