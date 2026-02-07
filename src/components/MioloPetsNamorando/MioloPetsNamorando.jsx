import './MioloPetsNamorando.css'
import { useEffect } from 'react'

function MioloPetsNamorando() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, {
      threshold: 0.1
    })

    const animateElements = document.querySelectorAll('.animate-item')
    animateElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="miolo-pets-namorando">
      <div className="pets-namorando-titulo animate-item">
        <img src="/src/assets/images/Pets-namorando.png" alt="Pets namorando" />
      </div>
      <div className="pets-namorando-subtitulo animate-item">
        <img src="/src/assets/images/duisaute.png" alt="Subtítulo" />
      </div>

      {/* PRIMEIRA LINHA - 3 casais */}
      {/* Casal 1: Guido e Abigail */}
      <div className="pet-img casal1-pet1 animate-item">
        <img src="/src/assets/images/guido.png" alt="Guido" />
      </div>
      <div className="coracao-img casal1-coracao animate-item">
        <img src="/src/assets/images/coracao.png" alt="Coração" />
      </div>
      <div className="pet-img casal1-pet2 animate-item">
        <img src="/src/assets/images/abigail.png" alt="Abigail" />
      </div>
      <div className="nome-casal nome-casal1 animate-item">
        <img src="/src/assets/images/Guido e Abigail.png" alt="Guido e Abigail" />
      </div>

      {/* Casal 2: Pancho e Kiwi */}
      <div className="pet-img casal2-pet1 animate-item">
        <img src="/src/assets/images/pancho.png" alt="Pancho" />
      </div>
      <div className="coracao-img casal2-coracao animate-item">
        <img src="/src/assets/images/coracao.png" alt="Coração" />
      </div>
      <div className="pet-img casal2-pet2 animate-item">
        <img src="/src/assets/images/kiwi.png" alt="Kiwi" />
      </div>
      <div className="nome-casal nome-casal2 animate-item">
        <img src="/src/assets/images/Pancho e kiwi.png" alt="Pancho e Kiwi" />
      </div>

      {/* Casal 3: Bingo e Jade */}
      <div className="pet-img casal3-pet1 animate-item">
        <img src="/src/assets/images/bingo.png" alt="Bingo" />
      </div>
      <div className="coracao-img casal3-coracao animate-item">
        <img src="/src/assets/images/coracao.png" alt="Coração" />
      </div>
      <div className="pet-img casal3-pet2 animate-item">
        <img src="/src/assets/images/jade.png" alt="Jade" />
      </div>
      <div className="nome-casal nome-casal3 animate-item">
        <img src="/src/assets/images/Bingo e Jade.png" alt="Bingo e Jade" />
      </div>

      {/* SEGUNDA LINHA - 3 casais */}
      {/* Casal 4: Lennon e Jujuba */}
      <div className="pet-img casal4-pet1 animate-item">
        <img src="/src/assets/images/lennon.png" alt="Lennon" />
      </div>
      <div className="coracao-img casal4-coracao animate-item">
        <img src="/src/assets/images/coracao.png" alt="Coração" />
      </div>
      <div className="pet-img casal4-pet2 animate-item">
        <img src="/src/assets/images/jujuba.png" alt="Jujuba" />
      </div>
      <div className="nome-casal nome-casal4 animate-item">
        <img src="/src/assets/images/Lennon e Jujuba.png" alt="Lennon e Jujuba" />
      </div>

      {/* Casal 5: Guido e Abigail (repetição) */}
      <div className="pet-img casal5-pet1 animate-item">
        <img src="/src/assets/images/guido.png" alt="Guido" />
      </div>
      <div className="coracao-img casal5-coracao animate-item">
        <img src="/src/assets/images/coracao.png" alt="Coração" />
      </div>
      <div className="pet-img casal5-pet2 animate-item">
        <img src="/src/assets/images/abigail.png" alt="Abigail" />
      </div>
      <div className="nome-casal nome-casal5 animate-item">
        <img src="/src/assets/images/Guido e Abigail.png" alt="Guido e Abigail" />
      </div>

      {/* Casal 6: Pancho e Kiwi (repetição) */}
      <div className="pet-img casal6-pet1 animate-item">
        <img src="/src/assets/images/pancho.png" alt="Pancho" />
      </div>
      <div className="coracao-img casal6-coracao animate-item">
        <img src="/src/assets/images/coracao.png" alt="Coração" />
      </div>
      <div className="pet-img casal6-pet2 animate-item">
        <img src="/src/assets/images/kiwi.png" alt="Kiwi" />
      </div>
      <div className="nome-casal nome-casal6 animate-item">
        <img src="/src/assets/images/Pancho e kiwi.png" alt="Pancho e Kiwi" />
      </div>

      {/* Publicidade */}
      <div className="publicidade animate-item">
        <img src="/src/assets/images/publicidade.png" alt="Publicidade" />
      </div>

      {/* TERCEIRA LINHA - 3 casais (após publicidade) */}
      {/* Casal 7: Guido e Abigail */}
      <div className="pet-img casal7-pet1 animate-item">
        <img src="/src/assets/images/guido.png" alt="Guido" />
      </div>
      <div className="coracao-img casal7-coracao animate-item">
        <img src="/src/assets/images/coracao.png" alt="Coração" />
      </div>
      <div className="pet-img casal7-pet2 animate-item">
        <img src="/src/assets/images/abigail.png" alt="Abigail" />
      </div>
      <div className="nome-casal nome-casal7 animate-item">
        <img src="/src/assets/images/Guido e Abigail.png" alt="Guido e Abigail" />
      </div>

      {/* Casal 8: Pancho e Kiwi */}
      <div className="pet-img casal8-pet1 animate-item">
        <img src="/src/assets/images/pancho.png" alt="Pancho" />
      </div>
      <div className="coracao-img casal8-coracao animate-item">
        <img src="/src/assets/images/coracao.png" alt="Coração" />
      </div>
      <div className="pet-img casal8-pet2 animate-item">
        <img src="/src/assets/images/kiwi.png" alt="Kiwi" />
      </div>
      <div className="nome-casal nome-casal8 animate-item">
        <img src="/src/assets/images/Pancho e kiwi.png" alt="Pancho e Kiwi" />
      </div>

      {/* Casal 9: Bingo e Jade */}
      <div className="pet-img casal9-pet1 animate-item">
        <img src="/src/assets/images/bingo.png" alt="Bingo" />
      </div>
      <div className="coracao-img casal9-coracao animate-item">
        <img src="/src/assets/images/coracao.png" alt="Coração" />
      </div>
      <div className="pet-img casal9-pet2 animate-item">
        <img src="/src/assets/images/jade.png" alt="Jade" />
      </div>
      <div className="nome-casal nome-casal9 animate-item">
        <img src="/src/assets/images/Bingo e Jade.png" alt="Bingo e Jade" />
      </div>

      {/* QUARTA LINHA - 3 casais */}
      {/* Casal 10: Lennon e Jujuba */}
      <div className="pet-img casal10-pet1 animate-item">
        <img src="/src/assets/images/lennon.png" alt="Lennon" />
      </div>
      <div className="coracao-img casal10-coracao animate-item">
        <img src="/src/assets/images/coracao.png" alt="Coração" />
      </div>
      <div className="pet-img casal10-pet2 animate-item">
        <img src="/src/assets/images/jujuba.png" alt="Jujuba" />
      </div>
      <div className="nome-casal nome-casal10 animate-item">
        <img src="/src/assets/images/Lennon e Jujuba.png" alt="Lennon e Jujuba" />
      </div>

      {/* Casal 11: Guido e Abigail */}
      <div className="pet-img casal11-pet1 animate-item">
        <img src="/src/assets/images/guido.png" alt="Guido" />
      </div>
      <div className="coracao-img casal11-coracao animate-item">
        <img src="/src/assets/images/coracao.png" alt="Coração" />
      </div>
      <div className="pet-img casal11-pet2 animate-item">
        <img src="/src/assets/images/abigail.png" alt="Abigail" />
      </div>
      <div className="nome-casal nome-casal11 animate-item">
        <img src="/src/assets/images/Guido e Abigail.png" alt="Guido e Abigail" />
      </div>

      {/* Casal 12: Pancho e Kiwi */}
      <div className="pet-img casal12-pet1 animate-item">
        <img src="/src/assets/images/pancho.png" alt="Pancho" />
      </div>
      <div className="coracao-img casal12-coracao animate-item">
        <img src="/src/assets/images/coracao.png" alt="Coração" />
      </div>
      <div className="pet-img casal12-pet2 animate-item">
        <img src="/src/assets/images/kiwi.png" alt="Kiwi" />
      </div>
      <div className="nome-casal nome-casal12 animate-item">
        <img src="/src/assets/images/Pancho e kiwi.png" alt="Pancho e Kiwi" />
      </div>

      {/* Botão Carregar Mais */}
      <button className="btn-mais animate-item">Carregar mais antigos</button>
    </section>
  )
}

export default MioloPetsNamorando
