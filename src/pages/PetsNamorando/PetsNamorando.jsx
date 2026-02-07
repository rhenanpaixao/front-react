import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MioloPetsNamorando from '../../components/MioloPetsNamorando/MioloPetsNamorando'
import './PetsNamorando.css'

function PetsNamorando() {
  return (
    <div className="pets-namorando-page">
      <Header />
      <MioloPetsNamorando />
      <Footer />
    </div>
  )
}

export default PetsNamorando
