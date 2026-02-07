import { useNavigate } from 'react-router-dom'
import './Banner.css'

function Banner() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/pets-namorando')
  }

  return (
    <div className="card-topo">
      <section className="banner">
        <div className="banner-content">
          <h2 className="banner-title-small">COMO FUNCIONA</h2>
          <h1 className="banner-title-large">
            Encontre um pretendente para o seu animal
          </h1>
          <button className="btn-comece-agora" onClick={handleClick}>
            Comece agora
          </button>
        </div>
      </section>
    </div>
  )
}

export default Banner
