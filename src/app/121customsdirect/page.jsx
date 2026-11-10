import Hero from '../../components/Hero'
import Link from 'next/link'
import Image from 'next/image'

const introImage = 'https://images.unsplash.com/photo-1447407008750-65f6ae9f3e09?w=900&q=85'
const approachImage = 'https://images.unsplash.com/photo-1463569224974-bdc0dc1a8e5b?w=700&q=85'

function Home() {
  return (
    <>
      <Hero />

      <section className="home-intro section-pad">
        <div className="container home-intro-grid">
          <div className="home-intro-copy">
            <p className="editorial-eyebrow">A little about us</p>
            <h2>Customs is a process. Good support makes it feel more human.</h2>
            <p>
              At 121 Customs Direct, we help businesses work through the details behind customs
              declarations. The forms and requirements can feel like a lot when you are also trying
              to keep a business moving.
            </p>
            <p>
              We believe it should be easier to get a straight answer, understand your options and
              know what the next step looks like.
            </p>
            <Link href="/121customsdirect/about" className="text-link">
              Get to know us <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="home-intro-visual">
            <div className="home-intro-image-wrap">
              <Image
                src={introImage}
                alt="A person reviewing customs documents at a bright desk"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
              <div className="home-intro-image-accent" />
            </div>
          </div>
        </div>
      </section>

      <section className="home-services section-pad">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="editorial-eyebrow">How we can help</p>
              <h2>Practical help for the details that matter.</h2>
            </div>
            <Link href="/121customsdirect/solutions" className="text-link">
              View all services <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="home-service-list">
            <article className="home-service">
              <span className="home-service-number">01</span>
              <div className="home-service-visual">
                <Image
                  src="https://images.unsplash.com/photo-1567490588220-95d6f33f75e4?w=300&q=85"
                  alt="Customs declarations"
                  fill
                  sizes="(max-width: 720px) 80vw, 140px"
                  style={{ objectFit: 'cover', borderRadius: 14 }}
                  unoptimized
                />
              </div>
              <div className="home-service-body">
                <h3>Customs declarations</h3>
                <p>
                  Support with the information and steps involved in preparing customs
                  declarations for goods moving across borders.
                </p>
                <Link href="/121customsdirect/solutions">Learn More <span aria-hidden="true">→</span></Link>
              </div>
            </article>
            <article className="home-service">
              <span className="home-service-number">02</span>
              <div className="home-service-visual">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&q=85"
                  alt="Guidance when things get unclear"
                  fill
                  sizes="(max-width: 720px) 80vw, 140px"
                  style={{ objectFit: 'cover', borderRadius: 14 }}
                  unoptimized
                />
              </div>
              <div className="home-service-body">
                <h3>Guidance when things get unclear</h3>
                <p>
                  Talk through the questions that come up around customs requirements and what
                  information you may need.
                </p>
                <Link href="/121customsdirect/solutions">Learn More <span aria-hidden="true">→</span></Link>
              </div>
            </article>
            <article className="home-service">
              <span className="home-service-number">03</span>
              <div className="home-service-visual">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e921c6e?w=300&q=85"
                  alt="A more connected way to work"
                  fill
                  sizes="(max-width: 720px) 80vw, 140px"
                  style={{ objectFit: 'cover', borderRadius: 14 }}
                  unoptimized
                />
              </div>
              <div className="home-service-body">
                <h3>A more connected way to work</h3>
                <p>
                  Explore ways customs processes can fit more naturally alongside the systems and
                  workflows your business already uses.
                </p>
                <Link href="/121customsdirect/solutions">Learn More <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-approach section-pad">
        <div className="container approach-layout">
          <div className="approach-visual">
            <div className="approach-image-wrap">
              <Image
                src={approachImage}
                alt="A considered support approach"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
              <div className="approach-image-accent approach-accent-1" />
              <div className="approach-image-accent approach-accent-2" />
            </div>
          </div>
          <div className="approach-copy">
            <p className="editorial-eyebrow">A straightforward approach</p>
            <h2>Clear answers. Considered support. No unnecessary jargon.</h2>
            <p>
              Every business and shipment is different. We start by understanding what you are
              trying to do, then help make the customs steps easier to follow.
            </p>
            <Link href="/121customsdirect/contact" className="button button-dark">
              Tell us what you need
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
