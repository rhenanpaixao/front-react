import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComoFunciona from './pages/ComoFunciona/ComoFunciona'
import PetsNamorando from './pages/PetsNamorando/PetsNamorando'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComoFunciona />} />
        <Route path="/pets-namorando" element={<PetsNamorando />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
