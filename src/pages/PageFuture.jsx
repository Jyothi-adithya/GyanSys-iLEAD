import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { IMAGES } from '../data/images.js'
import styles from './PageFuture.module.css'

export default function PageFuture() {
  return (
    <motion.div className={styles.page}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}>

      {/* ── Dark hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <motion.span className={styles.heroLabel}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            Chapter Three
          </motion.span>
          <motion.h1 className={styles.heroTitle}
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            Five Years<br /><span className={styles.heroAccent}>From Now</span>
          </motion.h1>
        </div>
      </section>

      {/* ── Content ── */}
      <section className={styles.content}>
        <div className="container container--narrow">

          <Reveal>
            <span className="section-label">Looking ahead</span>
            <h2 className={styles.sectionH}>The professional I want to become</h2>
            <hr className="divider" />
          </Reveal>

          <div className={styles.layout}>
            <Reveal delay={0.08} className={styles.textBlock}>
              <p className={styles.leadP}>
                Five years from now, I see myself as a more experienced, capable, and responsible professional who actively contributes to the growth of the organisation I work for.
              </p>
              <br />
              <p>
                I want to be someone the company can rely on — someone who takes ownership of responsibilities, handles challenges with confidence, and uses the knowledge and experience gained over the years to help the company achieve its goals.
              </p>
              <br />
              <p>
                For me, growth isn't just about how far I go, but also about how much I contribute along the way.
              </p>
            </Reveal>

            <Reveal delay={0.15} direction="right" className={styles.imageBlock}>
              <ImagePlaceholder src={IMAGES.futureHero} alt="Five years ahead" label="Your photo here — forward-looking moment" aspectRatio="4/5" />
            </Reveal>
          </div>

          {/* Three pillars */}
          <div className={styles.pillarsGrid}>
            {[
              { icon: '🎯', title: 'Experienced',  desc: "Years of working through real problems, learning from outcomes, and developing a sharper instinct for what works — and what doesn't." },
              { icon: '🤝', title: 'Responsible',  desc: "Someone the team and the organisation can count on. Ownership, accountability, and the confidence to take charge when it matters." },
              { icon: '🌱', title: 'Contributing', desc: "Growth that isn't just personal — but additive. Contributing to the goals, the culture, and the momentum of the organisation." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className={styles.pillar}>
                  <span className={styles.pillarIcon} aria-hidden="true">{p.icon}</span>
                  <h3 className={styles.pillarTitle}>{p.title}</h3>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className={styles.closingLine}>
              <span className={styles.closingMark} aria-hidden="true">"</span>
              <p>For me, growth isn't just about how far I go, but also about how much I contribute along the way.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Nav footer ── */}
      <div className={styles.navFooter}>
        <div className="container">
          <div className={styles.navRow}>
            <Link to="/ambitions" className={styles.navBack}><ArrowLeft size={15} /> Who I Want to Be</Link>
            <Link to="/professional" className={styles.navNext}>Professional Profile <ArrowRight size={15} /></Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
