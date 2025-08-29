const imgs = [
'/hero.jpg', '/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg',
]
export default function Gallery(){
return (
<section className="max-w-7xl mx-auto px-4 pb-16">
<h2 className="text-3xl md:text-4xl font-extrabold mb-6">Galería</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
{imgs.map((src,i)=> (
<img key={i} src={src} alt={`gal-${i}`} className="rounded-2xl object-cover h-40 w-full border border-white/10"/>
))}
</div>
</section>
)
}