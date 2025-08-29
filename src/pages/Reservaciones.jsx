import { useState } from 'react'


export default function Reservaciones(){
const [form, setForm] = useState({ nombre:'', personas:2, fecha:'', hora:'', telefono:'', comentario:'' })
const [sent, setSent] = useState(false)


const onChange = e => setForm({...form, [e.target.name]: e.target.value})
const onSubmit = e => {
e.preventDefault()
// Aquí podrías enviar a un backend o servicio (Formspree, EmailJS, Firebase, etc.)
setSent(true)
}


if(sent){
return (
<section className="max-w-xl mx-auto px-4 py-16 text-center">
<h1 className="text-3xl font-extrabold">¡Reserva recibida! 🎉</h1>
<p className="text-white/70 mt-2">Te contactaremos al {form.telefono} para confirmar.</p>
<a href="/" className="inline-block mt-6 px-6 py-3 rounded-xl bg-turquesa text-oceano font-semibold">Volver al inicio</a>
</section>
)
}


return (
<section className="max-w-3xl mx-auto px-4 py-12">
<h1 className="text-3xl md:text-4xl font-extrabold">Reservaciones</h1>
<p className="text-white/70 mt-2">Completa el formulario para apartar tu mesa.</p>
<form onSubmit={onSubmit} className="mt-8 grid gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
<div className="grid md:grid-cols-2 gap-4">
<input required name="nombre" placeholder="Nombre completo" className="px-4 py-3 rounded-xl bg-white/10 outline-none" value={form.nombre} onChange={onChange} />
<input required name="telefono" placeholder="Teléfono" className="px-4 py-3 rounded-xl bg-white/10 outline-none" value={form.telefono} onChange={onChange} />
<input required type="number" min="1" max="12" name="personas" placeholder="Personas" className="px-4 py-3 rounded-xl bg-white/10 outline-none" value={form.personas} onChange={onChange} />
<input required type="date" name="fecha" className="px-4 py-3 rounded-xl bg-white/10 outline-none" value={form.fecha} onChange={onChange} />
<input required type="time" name="hora" className="px-4 py-3 rounded-xl bg-white/10 outline-none" value={form.hora} onChange={onChange} />
</div>
<textarea name="comentario" placeholder="Comentarios (opcional)" rows="4" className="px-4 py-3 rounded-xl bg-white/10 outline-none" value={form.comentario} onChange={onChange} />
<button className="px-6 py-3 rounded-xl bg-turquesa text-oceano font-semibold hover:opacity-90">Enviar</button>
</form>
</section>
)
}