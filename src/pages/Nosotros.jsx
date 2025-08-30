// src/pages/Nosotros.jsx
import teamImg from '../assets/m4.png';

// ⬇️ Pon tu video en src/assets/ y ajusta el nombre:
import promoVideo from '../assets/promo.mp4';


const SOCIALS = {
  ig: 'https://www.instagram.com/cordeliamariscos/',                // 👈 cambia
  fb: 'https://www.facebook.com/cordeliamariscos/',                  // 👈 cambia
  wa: 'https://wa.me/529811026456?text=Hola%20quiero%20reservar%20una%20mesa', // 👈 cambia
};

export default function Nosotros(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold">Nuestra historia</h1>

      <div className="mt-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-3 text-white/80">
          <p>Somos Cordelia mariscos, seleccionamos mariscos frescos de temporada para crear platillos con identidad costera.</p>
          <p>Somos un equipo local comprometido con el producto del día, técnicas limpias y sabor honesto.</p>
          <p>Nuestra misión es acercar el mar a tu mesa con hospitalidad y calidez.</p>
        </div>

        <div className="order-first md:order-none">
          <img
            src={teamImg}
            alt="Equipo Cordelia"
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <hr className="my-10 border-white/10" />

      {/* ---------- CONTÁCTANOS ---------- */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold">Contáctanos</h2>
        <p className="text-white/70 mt-1">Síguenos o escríbenos por WhatsApp.</p>

        <div className="mt-5 flex items-center gap-5">
          {/* Instagram (degradado) */}
          <a
            href={SOCIALS.ig}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="group rounded-full p-[2px] transition-transform hover:scale-105"
            style={{
              background:
                'linear-gradient(45deg,#f9ce34,#ee2a7b 45%,#6228d7)'
            }}
          >
            <div className="bg-transparent rounded-full p-3">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </div>
          </a>

          {/* Facebook (azul) */}
          <a
            href={SOCIALS.fb}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
            className="rounded-full p-3 transition-transform hover:scale-105"
            style={{ background: '#1877F2' }}
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.64l.36-4H14V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>

          {/* WhatsApp (verde) */}
          <a
            href={SOCIALS.wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="rounded-full p-3 transition-transform hover:scale-105"
            style={{ background: '#25D366' }}
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
              <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0 12 12 0 0 0 1.6 17.94L0 24l6.2-1.6A12 12 0 0 0 12 24a12 12 0 0 0 8.52-20.52ZM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm5.5-7.1c-.3-.15-1.77-.87-2.05-.97s-.47-.15-.67.15-.77.97-.95 1.17-.35.22-.65.07a8.16 8.16 0 0 1-2.4-1.48 8.93 8.93 0 0 1-1.65-2.05c-.17-.3 0-.46.13-.61.13-.13.3-.35.44-.52a2.06 2.06 0 0 0 .3-.52.55.55 0 0 0 0-.52c0-.15-.67-1.6-.92-2.2s-.49-.5-.67-.5h-.57a1.1 1.1 0 0 0-.78.37 3.28 3.28 0 0 0-1 2.43 5.69 5.69 0 0 0 1.2 3.02 12.88 12.88 0 0 0 4.9 4.6c2.94 1.27 3.5.95 4.14.89a2.73 2.73 0 0 0 1.8-1.27 2.23 2.23 0 0 0 .15-1.27c-.06-.06-.26-.15-.56-.3Z"/>
            </svg>
          </a>
        </div>
      </div>
{/* ---------- VIDEO LOCAL ---------- */}
<div className="mt-10">
  <h3 className="text-xl md:text-2xl font-bold">Video</h3>

  {/* Contenedor con proporción 16:9 */}
  <div className="mt-4 relative w-full aspect-video overflow-hidden">
    <video
      src={promoVideo}
      controls
      playsInline
      preload="metadata"
      // ocupa todo el contenedor y recorta lo que sobre (sin bordes)
      className="absolute inset-0 h-full w-full object-cover m-0 p-0 border-0 outline-none"
    />
  </div>
</div>

    </section>
  );
}
