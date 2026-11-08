import Hero from '../components/Hero'
import FeaturesPreview from '../components/FeaturesPreview'
import { useEffect } from 'react'

function Home({ onNavigate }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero onNavigate={onNavigate} />
      <FeaturesPreview />
    </>
  )
}

export default Home
