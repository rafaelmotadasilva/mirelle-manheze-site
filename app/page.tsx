import Header       from '@/components/layout/Header'
import Footer       from '@/components/layout/Footer'
import Hero         from '@/components/sections/Hero'
import About        from '@/components/sections/About'
import PracticeAreas from '@/components/sections/PracticeAreas'
import Differentials from '@/components/sections/Differentials'
import Testimonials  from '@/components/sections/Testimonials'
import Contact      from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <PracticeAreas />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
