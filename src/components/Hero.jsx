import { Link } from 'react-router-dom';

export default function Hero(){
  return (
    <section className="relative" id="top">
      
      <div className="absolute inset-0 grid place-items-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Sabor del mar, <span className="text-coral">frescura</span> en cada bocado
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/menu"
              className="px-6 py-3 rounded-xl bg-coral text-tinta font-semibold hover:opacity-90"
            >
              Ver Menú
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
