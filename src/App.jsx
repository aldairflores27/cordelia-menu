import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Nosotros from './pages/Nosotros'



export default function App(){
return (
<div className="min-h-screen flex flex-col">
<NavBar />
<main className="flex-1">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/menu" element={<Menu />} />

<Route path="/nosotros" element={<Nosotros />} />

</Routes>
</main>
<Footer />
</div>
)
}