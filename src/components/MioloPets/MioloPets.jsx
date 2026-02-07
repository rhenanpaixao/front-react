import { useEffect, useRef } from 'react'
import './MioloPets.css'

function MioloPets() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.5 }
    )

    const animateElements = sectionRef.current.querySelectorAll('.animate-item')
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="miolo-pets" ref={sectionRef}>
      {/* Seção 1 - Cadastre seu animal */}
      <div className="secao-1">
        <div className="imagem1 animate-item">
          <img src="/images/imagem1.png" alt="Cadastre seu animal" />
        </div>
        
        <div className="cadastre-pet-icon animate-item">
          <img src="/images/cadastre-pet.png" alt="Cadastre pet icon" />
        </div>
        
        <h2 className="cadastre-titulo animate-item">
          Cadastre seu <span className="highlight">animal</span>
        </h2>
        
        <p className="cadastre-texto animate-item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.
        </p>
        
        <div className="linha-1 animate-item">
          <img src="/images/Vector-1.png" alt="" />
        </div>
      </div>

      {/* Seção 2 - Procure pretendentes */}
      <div className="secao-2">
        <div className="procure-pet-icon animate-item">
          <img src="/images/sear.png" alt="Search icon" />
        </div>
        
        <h2 className="procure-titulo animate-item">
          Procure <span className="highlight">pretendentes</span>
        </h2>
        
        <p className="procure-texto animate-item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.
        </p>
        
        <div className="imagem2 animate-item">
          <img src="/images/imagem2.png" alt="Procure pretendentes" />
        </div>
        
        <div className="linha-2 animate-item">
          <img src="/images/Vector-2.png" alt="" />
        </div>
      </div>

      {/* Seção 3 - Marque um encontro */}
      <div className="secao-3">
        <div className="imagem3 animate-item">
          <img src="/images/imagem3.png" alt="Marque um encontro" />
        </div>
        
        <div className="agende-pet-icon animate-item">
          <img src="/images/agende.png" alt="Agende icon" />
        </div>
        
        <h2 className="agende-titulo animate-item">
          Marque um <span className="highlight">encontro</span>
        </h2>
        
        <p className="agende-texto animate-item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.
        </p>
      </div>
    </section>
  )
}

export default MioloPets
