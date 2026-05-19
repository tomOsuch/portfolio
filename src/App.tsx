import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Technologies from './components/Technologies/Technologies'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
