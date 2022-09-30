import './styles/global.scss'

import styles from './App.module.scss'
import { Header } from './components/Header/Header'
import happyPerson from './assets/happyperson.svg'
import logoWhatsApp from './assets/whatsapp-logo.svg'
import RegionCards from './components/RegionCards/RegionCards'
// import sudeste from './assets/image/sudeste.svg'
// import centroOeste from './assets/image/centroOeste.svg'
// import norte from './assets/image/norte.svg'
// import sul from './assets/image/sul.svg'
// import nordeste from './assets/image/nordeste.svg'
import Footer from './components/Footer/Footer'

export default function App() {

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.welcome}>
          <div className={styles.welcomeContent}>
            <div>
              <span>Boas vindas a AfroTour</span>
              <h1>Sua viagem dos sonhos é aqui.</h1>
              <p>
                Estamos empenhados em fornecer os melhores planos de viagens do
                Brasil para você.
              </p>
              <button>
                <img
                  className={styles.logoWhapsApp}
                  src={logoWhatsApp}
                  alt="Logo do WhatsApp"
                />
                Agende sua viagem
              </button>
            </div>
            <img
              className={styles.personHappy}
              src={happyPerson}
              alt="Foto pessoa feliz"
            />
          </div>
          </div>
          <div className={styles.regions}>
            <h2>Para onde vamos</h2>
            <ul>
            <RegionCards
                title="Sudeste"
                description={'Hístoria - Praia - Ciomidas típicas'}
                minPrice={289}
                // img={sudeste}
                img='https://images.unsplash.com/photo-1619488117232-17224edcfed8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
              />

              <RegionCards
                title="Centro-Oeste"
                description={'Passeios - Música ao vivo - Rural'}
                minPrice={249}
                // img={centroOeste}
                img='https://images.unsplash.com/photo-1647955343935-668e224503a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              />

                <RegionCards
                title="Norte"
                description={'Passeios - Aventura - Comidas típicas'}
                minPrice={249}
                // img={norte}
                img='https://images.unsplash.com/photo-1519662115423-29dd20c20fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=950&q=80'
              />

              <RegionCards title="Sul"
              description={'Passeios - Hístoria - Churrasco'}
              minPrice={259}
              // img={sul}
              img='https://images.unsplash.com/photo-1639402601965-4f30edcb0a99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
              />

              <RegionCards
                title="Nordeste"
                description={'Praia - Aventura - Comidas típicas'}
                minPrice={269}
                // img={nordeste}
                img='https://images.unsplash.com/photo-1616687794302-8024bc333e77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'
              />
            </ul>
          </div>
       
      </main>
      <Footer />
    </>
  )
}
