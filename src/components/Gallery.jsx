import g1 from '../assets/gal1cordelia.jpeg';
import g2 from '../assets/gal2cordelia.jpeg';
import g3 from '../assets/gal3.jpeg';
import g4 from '../assets/g4.jpeg';

const imgs = [g1, g2, g3, g4];

export default function Gallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Galería</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`gal-${i + 1}`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e)=>{ e.currentTarget.src = '/placeholder.jpg' }}
            className="w-full h-auto object-contain"
            style={{ aspectRatio: '16 / 9' }}  // quita esta línea si quieres altura natural
          />
        ))}
      </div>
    </section>
  );
}
