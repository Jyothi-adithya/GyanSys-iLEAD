import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import FloatingNav from './components/FloatingNav.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import PageHome from './pages/PageHome.jsx'
import PageAmbitions from './pages/PageAmbitions.jsx'
import PageFuture from './pages/PageFuture.jsx'
import PageProfessional from './pages/PageProfessional.jsx'

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <FloatingNav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageHome />} />
          <Route path="/ambitions" element={<PageAmbitions />} />
          <Route path="/future" element={<PageFuture />} />
          <Route path="/professional" element={<PageProfessional />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
