import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Communities from './components/Communities'
import Partners from './components/Partners'
import Sponsors from './components/Sponsors'
import CommunityDetail from './components/CommunityDetail'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <Hero />
            <About />
            <Communities />
            <Partners />
            <Sponsors />
            <Footer />
          </div>
        } />
        <Route path="/community/:slug" element={
          <div className="app">
            <CommunityDetail />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}
