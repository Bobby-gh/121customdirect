import Link from 'next/link'
import PageHero from '../../../components/PageHero'
import Image from 'next/image'

const principles = [
  {
    number: '01',
    title: 'Make it understandable',
    description:
      'Customs has its own language. We believe people should be able to understand the choices and requirements in front of them.',
  },
  {
    number: '02',
    title: 'Pay attention to the details',
    description:
      'Small details can matter in a declaration. Taking the time to understand them is part of doing the work carefully.',
  },
  {
    number: '03',
    title: 'Treat every question seriously',
    description:
      'No two businesses are exactly alike. Good support starts with listening to what you are trying to do.',
  },
]

const storyImage = 'https://images.unsplash.com/photo-1494438639946-8b0f7d328d95?w=600&q=80'

function AboutContent() {
  return (
    <main className="about-page">
      <PageHero
        eyebrow="About us"
        title="Customs support should feel personal."
        description="We help businesses make sense of customs declarations with clear guidance, careful work and a real conversation when it is needed."
        action={{ href: '/121customsdirect/contact', label: 'Start a conversation' }}
      />

      <section className="about-story section-pad">
        <div className="container about-story-layout">
          <div className="about-story-aside">
            <p className="editorial-eyebrow">Why we are here</p>
            <span className="about-story-mark" aria-hidden="true">121</span>
          </div>
          <div className="about-story-copy">
            <h2>Trade has enough moving parts. Getting help should not be another one.</h2>
            <p>
              Customs declarations bring together shipment details, supporting information and
              specific requirements. If you are handling that alongside the rest of your business,
              it can be difficult to know where to begin.
            </p>
            <p>
              121 Customs Direct is here to make that work easier to navigate. We focus on the
              practical details and on helping people understand the next step, without making a
              complicated process feel even more complicated.
            </p>
          </div>
          <div className="about-story-visual">
            <div className="about-story-image-wrap">
              <Image
                src={storyImage}
                alt="A person reviewing customs paperwork at a desk"
                width={600}
                height={460}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 18 }}
                unoptimized
              />
              <div className="about-story-accent" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-principles section-pad">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="editorial-eyebrow">What matters to us</p>
              <h2>Good service is in the details.</h2>
            </div>
            <p className="section-heading-note">
              Not grand promises. Just a thoughtful way to approach the work and the people behind it.
            </p>
          </div>
          <div className="principle-list">
            {principles.map((principle) => (
              <article className="principle-row" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-closing section-pad">
        <div className="container about-closing-inner">
          <p className="editorial-eyebrow">A direct line to a clearer next step</p>
          <h2>Tell us what you are working through.</h2>
          <p>We will start with your question and take it from there.</p>
          <Link href="/121customsdirect/contact" className="button button-light">
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default AboutContent
