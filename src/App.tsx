import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './routes/Home'
import { FilterProvider } from './context/FilterContext'
import Footer from './components/Footer'
import './styles/globals.css'

function App() {
  return (
    <BrowserRouter>
      <FilterProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* future: <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </FilterProvider>
    </BrowserRouter>
  )
}

export default App 