// src/components/NavBar.jsx
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/cordeliamenu.jpg"; // 👈 importa el logo

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-xl transition hover:bg-white/10 ${isActive ? "bg-white/10" : ""}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-oceano/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
        <img
  src={logo}
  alt="Cordelia Mariscos"
  className="h-16 md:h-20 w-auto object-contain rounded-2xl shrink-0"
/>

<span className="font-bold tracking-wide text-lg md:text-xl text-coral drop-shadow">
  CORDELIA MARISCOS
</span>



        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkClass}>Inicio</NavLink>
          <NavLink to="/menu" className={linkClass}>Menú</NavLink>
          <NavLink to="/reservaciones" className={linkClass}>Reservaciones</NavLink>
          <NavLink to="/nosotros" className={linkClass}>Nosotros</NavLink>
          <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
        </nav>

        <button className="md:hidden p-2 rounded-lg hover:bg-white/10" onClick={()=>setOpen(!open)} aria-label="Abrir menú">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 flex flex-col gap-2">
            <NavLink onClick={()=>setOpen(false)} to="/" className={linkClass}>Inicio</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/menu" className={linkClass}>Menú</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/reservaciones" className={linkClass}>Reservaciones</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/nosotros" className={linkClass}>Nosotros</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/contacto" className={linkClass}>Contacto</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
