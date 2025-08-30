import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contactos';
import Gracias from './pages/Gracias';



export default function App(){
return (
<div className="min-h-screen flex flex-col">
<NavBar />
<main className="flex-1">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/menu" element={<Menu />} />

<Route path="/nosotros" element={<Nosotros />} />
  <Route path="/contacto" element={<Contacto />} />
<Route path="/gracias" element={<Gracias/>} />

</Routes>
</main>
<Footer />
</div>
)
}