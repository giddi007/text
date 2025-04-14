import './App.css'
import Agency from './assets/components/Agency'
import Articles from './assets/components/Articles'
import Footer from './assets/components/Footer'
import Hero from './assets/components/Hero'
import Provider from './assets/components/Provider'
import Solutions from './assets/components/Solutions'
import Subscribe from './assets/components/Subscribe'
// import background from './public/img/creative-Agency-small.png'


function App() {

  return (
    <>
      <main className="bg">
        <Hero />
        <Agency />
        <Solutions />
        <Subscribe />
        <Provider />
        <Articles />
        <Footer />
      </main>
    </>
  )
}

export default App
