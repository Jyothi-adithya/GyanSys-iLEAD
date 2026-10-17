import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Sprout, Activity, TrendingUp } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { IMAGES } from '../data/images.js'
import styles from './PageAmbitions.module.css'

const ambitionCards = [
  {
    id: 'agri',
    icon: <Sprout size={26} />,
    area: 'Agriculture',
    headline: 'Technology for the farmer',
    desc: "Farmers play such an important role in our country. I want to explore how technology can help them make more informed decisions — for example, through crop recommendation systems that factor in soil conditions and weather, so they can potentially improve their earnings and quality of life.",
    motivation: "Reading news reports about farmers facing losses sparked a question I keep returning to: what if better information and technology could change their outcomes?",
  },
  {
    id: 'health',
    icon: <Activity size={26} />,
    area: 'Health & Fitness',
    headline: 'Small changes. Meaningful results.',
    desc: "I believe meaningful change doesn't always require dramatic transformations. Sometimes, small and consistent changes in everyday habits can help people become healthier. I'd love to explore how technology can encourage people to build those habits and lead fitter lives.",
    motivation: "The simplest changes can be the hardest ones to sustain. I want to help make them easier.",
  },
  {
    id: 'org',
    icon: <TrendingUp size={26} />,
    area: 'Organisational Growth',
    headline: 'Contributing to what matters',
    desc: "I want to become someone who understands problems, makes sound decisions, identifies opportunities, and contributes to important business outcomes — whether through building useful solutions, helping the company grow, or contributing to decisions that create real value.",
    motivation: "I want my work to matter. Not just technically, but in terms of impact — for the organisation and for the people it serves.",
  },
]

export default function PageAmbitions() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <motion.div className={styles.page}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <motion.span className={styles.heroLabel}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            Chapter Two
          </motion.span>
          <motion.h1 className={styles.heroTitle}
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            Who I Want<br /><span className={styles.heroAccent}>to Be</span>
          </motion.h1>
          <motion.p className={styles.heroSub}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}>
            Ambitions shaped by what I see in the world around me.
          </motion.p>
        </div>
      </section>

      <div className={styles.body}>

        {/* Section 1 */}
        <section className={styles.section} aria-labelledby="h-build">
          <div className="container">
            <div className={`${styles.twoCol} ${!IMAGES.ambitionsHero ? styles.singleCol : ''}`}>
              <Reveal className={styles.textCol}>
                <span className="section-label">My Ambition</span>
                <h2 id="h-build" className={styles.sectionH}>
                  I want to build things<br />that make life better.
                </h2>
                <hr className="divider" />
                <p className={styles.leadP}>When I think about the person I want to become, my ambitions are open-ended. I don't want to limit myself to a particular designation or a single definition of success. What matters most to me is making people's lives easier, helping them live better, and finding ways to improve their everyday experiences.</p>
                <br />
                <p>I want to use technology not just to build products, but to solve problems that genuinely matter.</p>
                <br />
                <p>Beyond individual impact, I also want to contribute to the growth of the country and the organisation I work for. I want to become someone who understands problems, makes sound decisions, identifies opportunities, and contributes to important business outcomes.</p>
                <br />
                <p>Ultimately, I want to grow into someone who can connect technology, practical thinking, and human needs — someone whose work makes a difference not only on paper, but in people's lives.</p>
              </Reveal>

              {IMAGES.ambitionsHero && (
                <Reveal delay={0.15} direction="right" className={styles.imgCol}>
                  <ImagePlaceholder src={IMAGES.ambitionsHero} alt="Ambitions" label="Your photo here — something aspirational" aspectRatio="3/4" />
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="h-problems">
          <div className="container">
            <Reveal>
              <span className="section-label">What motivates me</span>
              <h2 id="h-problems" className={styles.sectionH}>Real problems.<br />Meaningful solutions.</h2>
              <hr className="divider" />
              <p className={styles.leadP}>My ambitions are shaped by the problems I see in the real world. When I read news reports about farmers facing losses and struggling to make a decent living, I often think about how access to better information and technology could help them make more informed decisions.</p>
              <br />
              <p>I want to explore ways to bridge that gap. Imagine a farmer being able to choose a suitable crop based on soil conditions and weather instead of having to rely on uncertainty. If technology could help people make better decisions, improve their earnings, and build a better life, I would consider that a meaningful use of my skills.</p>
              <br />
              <p>The same thinking applies to health and fitness. I believe people don't always need complicated plans to improve their lives. Sometimes, the right guidance and small, consistent habits can help them become fitter and move closer to their goals.</p>
              <br />
              <p>These are the kinds of problems that inspire me: challenges that people face in their everyday lives, where thoughtful solutions can make a genuine difference. I may not have all the answers today, but I want to keep learning and building the skills to contribute to them.</p>
            </Reveal>

            {/* Ambition cards */}
            <div className={styles.cardGrid} style={{ marginTop: '3rem' }}>
              {ambitionCards.map((card, i) => (
                <Reveal key={card.id} delay={i * 0.1}>
                  <button
                    className={`${styles.aCard} ${activeCard === card.id ? styles.aCardOn : ''}`}
                    onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                    aria-expanded={activeCard === card.id}>
                    <div className={styles.aCardIcon} aria-hidden="true">{card.icon}</div>
                    <span className={styles.aCardArea}>{card.area}</span>
                    <h3 className={styles.aCardH}>{card.headline}</h3>
                    <p className={styles.aCardDesc}>{card.desc}</p>
                    <AnimatePresence>
                      {activeCard === card.id && (
                        <motion.div className={styles.aCardMotivation}
                          initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                          <span className={styles.motivLabel}>What motivates me</span>
                          <p>{card.motivation}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className={styles.closing}>
          <div className="container container--narrow">
            <Reveal>
              <blockquote className={styles.closingQ}>
                <p>"I am still learning, exploring, and developing as a person. But I know what kind of impact I want to have — and I'm working towards it every day."</p>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* Nav footer */}
        <div className={styles.navFooter}>
          <div className="container">
            <div className={styles.navRow}>
              <Link to="/" className={styles.navBack}><ArrowLeft size={15} /> My Story</Link>
              <Link to="/future" className={styles.navNext}>The Next Five Years <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
