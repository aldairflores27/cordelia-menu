import { useState } from 'react'


export default function Contacto(){
const [sent, setSent] = useState(false)
const onSubmit = (e)=>{ e.preventDefault(); setSent(true) }
return (
<section className="max-w-3xl mx-auto px-4 py-12">
<h1 className="text-3xl md:text-4xl font-extrabold">Contacto</h1>
<p className="text-white/70 mt-2">Escríbenos y te responderemos muy pronto.</p>
{sent ? (
<div className="mt-8 text-center bg-white/5 p-6 rounded-2xl border border-white/10">
<h2 className="text-2xl font-semibold">¡Mensaje enviado!</h2>
<p className="text-white/70 mt-2">Gracias por contactarnos.</p>
<a href="/" className="inline-block mt-6 px-6 py-3 rounded-xl bg-turquesa text-oceano font-semibold">Volver al inicio</a>
</div>
) : (
<form onSubmit={onSubmit} className="mt-8 grid gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
<input required placeholder="Nombre" className="px-4 py-3 rounded-xl bg-white/10 outline-none" />
<input required type="email" placeholder="Correo" className="px-4 py-3 rounded-xl bg-white/10 outline-none" />
<textarea required placeholder="Mensaje" rows="5" className="px-4 py-3 rounded-xl bg-white/10 outline-none" />
<button className="px-6 py-3 rounded-xl bg-turquesa text-oceano font-semibold hover:opacity-90">Enviar</button>
</form>
)}
<div className="mt-10 grid md:grid-cols-3 gap-6 text-white/80">
<div className="bg-white/5 p-5 rounded-2xl border border-white/10">
<p className="text-sm text-white/60">Teléfono</p>
<p className="font-semibold">(999) 123 4567</p>
</div>
<div className="bg-white/5 p-5 rounded-2xl border border-white/10">
<p className="text-sm text-white/60">Dirección</p>
<p className="font-semibold">Boulevard Costero 123</p>
</div>
<div className="bg-white/5 p-5 rounded-2xl border border-white/10">
<p className="text-sm text-white/60">Horario</p>
<p className="font-semibold">L–D 12:00–22:00</p>
</div>
</div>
</section>
)
}