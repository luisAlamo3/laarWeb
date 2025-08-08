import React, { useState } from "react";

export default function Contacto() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = (data: Record<string, string>) => {
    if (!data.nombre || data.nombre.trim().length < 2) return "El nombre es obligatorio.";
    if (!data.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) return "Email inválido.";
    if (!data.mensaje || data.mensaje.trim().length < 10) return "El mensaje debe tener al menos 10 caracteres.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const validation = validate(data);
    if (validation) {
      setStatus("error");
      setErrorMsg(validation);
      return;
    }
    try {
      const res = await fetch("https://formspree.io/f/xwpqwglv", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await res.json();
      if (result.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.errors?.[0]?.message || "Error al enviar. Intenta más tarde.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Error de red. Intenta más tarde.");
    }
  };

  return (
    <section className="py-20 px-4 md:px-12 hero-bg rounded-t-3xl" style={{background: "linear-gradient(135deg, #2b0c5f 0%, #150f3b 100%)"}}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-2">Contacto</h2>
          <p className="text-gray-400 text-md md:text-lg">¿Necesitas ayuda técnica? Estamos aquí para resolver tus problemas</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 space-y-6">
            <div className="card-bg p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Métodos de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.14c-.114.057-.25.041-.336-.022zM13 14.5a1 1 0 011.5-1.5l1.14 2.257a1 1 0 01-1.21.502L13 16.216zM13 14.5a1 1 0 011.5-1.5l1.14 2.257a1 1 0 01-1.21.502L13 16.216z"></path></svg>
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <p className="text-gray-200 font-semibold">+52 55 3109 5979</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13h9a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2h9z"></path></svg>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-gray-200 font-semibold">luisalamo3@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c-1.33 0-2.66 0-4 0-1.66 0-3 1.34-3 3s1.34 3 3 3h4c1.66 0 3-1.34 3-3s-1.34-3-3-3z"></path></svg>
                  <div>
                    <p className="text-sm text-gray-400">Ubicación</p>
                    <p className="text-gray-200 font-semibold">CDMX, México</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-bg p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Horarios de Atención</h3>
              <p className="text-gray-400 text-sm">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-400 text-sm">Sábados: 9:00 AM - 2:00 PM</p>
              <p className="text-red-400 font-semibold text-sm">Emergencias: 24/7</p>
            </div>
          </div>
          <div className="md:w-2/3 card-bg p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Envíanos un Mensaje</h3>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="nombre" className="block text-gray-400 text-sm mb-1">Nombre</label>
                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required minLength={2} />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm mb-1">Email</label>
                <input type="email" id="email" name="email" placeholder="tu@email.com" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="servicio" className="block text-gray-400 text-sm mb-1">Servicio de interés</label>
                <select id="servicio" name="servicio" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required>
                  <option value="">Selecciona un servicio</option>
                  <option>Servicios de IT Tradicionales</option>
                  <option>Servicios de Desarrollo de Software</option>
                </select>
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-gray-400 text-sm mb-1">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows={4} placeholder="Describe tu necesidad o consulta" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required minLength={10}></textarea>
              </div>
              <button type="submit" className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105" disabled={status === "sending"}>
                {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
              </button>
              {status === "success" && <p className="text-green-400 mt-2">¡Mensaje enviado correctamente!</p>}
              {status === "error" && <p className="text-red-400 mt-2">{errorMsg || "Ocurrió un error. Intenta más tarde."}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
