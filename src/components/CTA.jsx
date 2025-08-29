export default function CTA(){
return (
<section className="bg-white/5 border-y border-white/10">
<div className="max-w-7xl mx-auto px-4 py-12 text-center">
<h3 className="text-2xl md:text-3xl font-bold">¿Listo para saborear el mar?</h3>
<p className="mt-2 text-white/70">Reserva tu mesa o pide para llevar.</p>
<div className="mt-5 flex justify-center gap-3">
  <a href="/reservaciones" className="px-6 py-3 rounded-xl bg-coral text-tinta font-semibold hover:opacity-90">
    Reservar
  </a>
  <a href="#" className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10">
    Pedir en línea
  </a>
</div>
</div>
</section>
)
}