
import molcajete from '../assets/molcajetecordelia.jpeg';
import ensalada from '../assets/menu1.jpg';

const items = [
  {
    cat: 'Taco Kriko',
    name: 'Taco Kriko',
    desc: 'Taco maiz o harina con camaron rico',
    price: 160,
    img: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npj9YaDlHUGyBYY1QzaUg4Cnflvcj2J6p6tS9XaB6K-rZcLOQBeH6H5W4EuUnKQaThUkP86wcSsqF0P7S2CoZ5SNvE1Rf9c5VjhHluvWcBhgWhLTKp9dhTbOEupBJC2JESkbCGwFQ=w203-h360-k-no'
  },
  {
    cat: 'Cocteles',
    name: 'Molcajete Mariscos',
    desc: 'Ajonjolí, salsa de soya cítrica',
    price: 95,
    img: molcajete, 
  },
  { cat: 'Cocteles', name: 'Ensalada', desc: 'Pulpo y camarón en salsa especial', price: 150, img: ensalada },
  { cat: 'Pescados', name: 'Pescado Zarandeado', desc: 'Marinado de la casa, 2 acompañamientos', price: 240, img: '' },
  { cat: 'Extras',   name: 'Arroz a la Tumbada',  desc: 'Estilo veracruzano',                 price: 120, img: '' },
];

export default function MenuSection(){
  return (
    <section className="max-w-7xl mx-auto px-4 py-16" id="menu">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-extrabold">Menú Destacado</h2>
        <a href="/menu" className="text-turquesa hover:underline">Ver todo</a>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it)=> (
          <article
            key={it.name}
            className="rounded-2xl border border-white/10 p-5 bg-white/5 hover:bg-white/10 transition"
          >
            {/* Imagen completa sin recortes */}
            <figure className="mb-3 rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <img
                src={it.img || '/placeholder.jpg'}
                alt={it.name}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e)=>{ e.currentTarget.src = '/placeholder.jpg' }}
                className="w-full h-auto object-contain"
                style={{ aspectRatio: '4 / 3' }} // cambia a '16 / 9' si prefieres
              />
            </figure>

            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold">{it.name}</h3>
                <p className="text-white/70 text-sm">{it.desc}</p>
              </div>
              <span className="text-coral font-bold">${it.price}</span>
            </div>

            <p className="mt-2 text-xs uppercase tracking-wide text-white/50">{it.cat}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
