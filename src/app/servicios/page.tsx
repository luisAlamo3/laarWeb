"use client";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Nosotros from "./components/Nosotros";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import WhyUs from "./components/WhyUs";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Servicios() {
  const [tab, setTab] = useState<"it" | "dev">("it");
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const serviciosRef = useRef<HTMLDivElement>(null);
  const nosotrosRef = useRef<HTMLDivElement>(null);
  const contactoRef = useRef<HTMLDivElement>(null);
  const whyusRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  const scrollToServicios = () => {
    serviciosRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContacto = () => {
    contactoRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToNosotros = () => {
    nosotrosRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // const scrollToWhyUs = () => {
  //   whyusRef.current?.scrollIntoView({ behavior: "smooth" });
  // } 
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-[#0b0f20] text-gray-100 min-h-screen font-sans">
      <div ref={topRef}></div>
      <Header onInicio={scrollToTop} onServicios={scrollToServicios} onNosotros={scrollToNosotros} onContacto={scrollToContacto} />
      <Hero onVerServicios={scrollToServicios} onContactar={scrollToContacto} />
      <div ref={serviciosRef}>
        <Tabs tab={tab} setTab={setTab} openMenus={openMenus} toggleMenu={toggleMenu} />
      </div>
      <div ref={nosotrosRef}>
        <Nosotros />
      </div>
      <div ref={whyusRef}>
        <WhyUs />
      </div>
      <div ref={contactoRef}>
        <Contacto />
      </div>
      <Footer />
    </div>
  );
}
