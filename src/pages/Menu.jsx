const data = {
Ceviches: [
{ name: 'Ceviche Peruano', price: 170, desc: 'Leche de tigre, choclo, camote' },
{ name: 'Ceviche Mango Habanero', price: 175, desc: 'Toque dulce y picante' },
],
Cocteles: [
{ name: 'Coctel de Camarón', price: 160, desc: 'Clásico, jugo de tomate y especias' },
{ name: 'Campechano', price: 180, desc: 'Pulpo + camarón' },
],
Pescados: [
{ name: 'Mojo de Ajo', price: 230, desc: 'Con guarniciones' },
{ name: 'A la Diabla', price: 230, desc: 'Picante' },
],
Bebidas: [
{ name: 'Coca cola', price: 230, desc: 'Con guarniciones' },
{ name: 'Agua Mineral', price: 230, desc: 'Picante' },
],
Cervezas: [
{ name: 'XXLaguer', price: 230, desc: 'Con guarniciones' },
{ name: 'Bohemia Clara', price: 230, desc: 'Picante' },
],
Cocteles: [
{ name: 'Mojito', price: 230, desc: 'Con guarniciones' },
{ name: 'Margarita', price: 230, desc: 'Picante' },
],
}


export default function Menu(){
return (
<section className="max-w-7xl mx-auto px-4 py-12">
<h1 className="text-3xl md:text-4xl font-extrabold">Menú Completo</h1>
<p className="text-white/70 mt-2">Precios en MXN. Pregunta por disponibilidad del día.</p>
<div className="mt-8 grid md:grid-cols-3 gap-8">
{Object.entries(data).map(([cat, items])=> (
<div key={cat} className="rounded-2xl border border-white/10 p-6 bg-white/5">
<h2 className="text-2xl font-bold mb-4">{cat}</h2>
<ul className="space-y-3">
{items.map(it=> (
<li key={it.name} className="flex items-start justify-between gap-3">
<div>
<p className="font-semibold">{it.name}</p>
<p className="text-sm text-white/70">{it.desc}</p>
</div>
<span className="text-coral font-bold whitespace-nowrap">${it.price}</span>
</li>
))}
</ul>
</div>
))}
</div>
</section>
)
}