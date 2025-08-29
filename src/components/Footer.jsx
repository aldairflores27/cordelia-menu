export default function Footer(){
return (
<footer className="mt-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
<div>
<h4 className="font-semibold">CORDELIA MARISCOS</h4>
<p className="text-white/70">
Av. Justo Sierra Méndez 497, Barrio de San Román, 24040 , San Francisco de Campeche, Mexico</p>
<p className="text-white/70">L–D 12:00–22:00 • Tel: (999) 123 4567</p>
</div>
<div>
<h4 className="font-semibold">Secciones</h4>
<ul className="mt-2 space-y-1 text-white/70">
<li><a href="/menu" className="hover:underline">Menú</a></li>
<li><a href="/reservaciones" className="hover:underline">Reservaciones</a></li>
<li><a href="/nosotros" className="hover:underline">Nosotros</a></li>
<li><a href="/contacto" className="hover:underline">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold">Redes</h4>
<div className="mt-2 flex gap-3 text-white/70">
<a href="#" aria-label="Instagram" className="hover:text-white">IG</a>
<a href="#" aria-label="Facebook" className="hover:text-white">FB</a>
<a href="#" aria-label="TikTok" className="hover:text-white">TT</a>
</div>
</div>
</div>
<div className="border-t border-white/10 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} MarAzul. Todos los derechos reservados.</div>
</footer>
)
}