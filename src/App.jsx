import { Routes, Route } from 'react-router-dom'
import { SiteProvider } from './context/SiteContext.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Franchise from './pages/Franchise.jsx'
import Menu from './pages/Menu.jsx'
import StoreLocator from './pages/StoreLocator.jsx'
import B2B from './pages/B2B.jsx'
import Enquiry from './pages/Enquiry.jsx'

export default function App() {
  return (
    <SiteProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/locations" element={<StoreLocator />} />
          <Route path="/bulk-orders" element={<B2B />} />
          <Route path="/enquiry" element={<Enquiry />} />
        </Routes>
      </main>
      <Footer />
    </SiteProvider>
  )
}
