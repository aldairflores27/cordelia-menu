// src/pages/Nosotros.jsx
import teamImg from '../assets/m4.png';
import team from '../assets/m5.png';
import promoVideo from '../assets/promo.mp4';

export default function Nosotros(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold">Nuestra historia</h1>

      <div className="mt-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Texto */}
        <div className="space-y-3 text-white/80">
          <p>
            Somos Cordelia mariscos, seleccionamos mariscos frescos de temporada
            para crear platillos con identidad costera.
          </p>
          <p>
            Somos un equipo local comprometido con el producto del día, técnicas
            limpias y sabor honesto.
          </p>
          <p>
            Nuestra misión es acercar el mar a tu mesa con hospitalidad y calidez.
          </p>
        </div>

        {/* Columna de imágenes (mismo tamaño/estilo para ambas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* g4.jpeg */}
          <figure
            className="relative w-full overflow-hidden rounded-2xl"
            style={{ aspectRatio: '4 / 5' }} // mismo formato para las dos
          >
            <img
              src={team}
              alt="Equipo Cordelia 1"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </figure>

          {/* m4.png */}
          <figure
            className="relative w-full overflow-hidden rounded-2xl"
            style={{ aspectRatio: '4 / 5' }} // mismo formato para las dos
          >
            <img
              src={teamImg}
              alt="Equipo Cordelia 2"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>

      <hr className="my-10 border-white/10" />

      {/* ---------- VIDEO LOCAL (sin bordes) ---------- */}
      <div className="mt-10">
        <h3 className="text-xl md:text-2xl font-bold">Video</h3>
        <div className="mt-4 relative w-full aspect-video overflow-hidden">
          <video
            src={promoVideo}
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover m-0 p-0 border-0 outline-none"
          />
        </div>
      </div>
    </section>
  );
}
