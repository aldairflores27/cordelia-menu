import g1 from '../assets/gal1cordelia.jpeg';
import g2 from '../assets/gal2cordelia.jpeg';
import g3 from '../assets/gal3.jpeg';
import g4 from '../assets/g4.jpeg';

const imgs = [g1, g2, g3,g4];

export default function Gallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Galería</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {imgs.map((src, i) => (
          <figure
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
          >
            <img
              src={src}
              alt={`gal-${i}`}
              loading="lazy"
              className="w-full h-auto object-contain"
              style={{ aspectRatio: '16 / 9' }}  // mantiene proporción y evita recortes
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
