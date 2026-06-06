import {
  Architecture,
  Background,
  Footer,
  Hero,
  Inside,
  Navbar,
  Projects,
  Stats,
  TechStack,
} from '@/components'

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <TechStack />
        <Inside />
        <Architecture />
      </main>
      <Footer />
    </>
  )
}

export default App
