import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, RefreshCw } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { IMAGES } from '../data/images.js'
import styles from './PageHome.module.css'

/* ─── Data ─────────────────────────────────────────── */
const personalityCards = [
  {
    id: 'people', icon: '🤝', title: 'The People Person', teaser: 'Finds energy in conversations.',
    detail: "I enjoy meeting people and hearing their stories. I can be a little quiet at first, but once I get to know someone, I open up completely. I believe the people around us shape who we become — and I've been fortunate to meet people who've taught me something new about the world.",
  },
  {
    id: 'curious', icon: '🔍', title: 'The Curious Mind', teaser: 'Always asking, always exploring.',
    detail: "I'm curious about how things work — technology, people, the world around me. I enjoy reading about what's happening in different fields, discovering new innovations, and asking questions that don't have easy answers. Curiosity, for me, is what makes learning feel like an adventure.",
  },
  {
    id: 'adventure', icon: '🏔️', title: 'The Adventure Seeker', teaser: 'Trekking, exploring, discovering.',
    detail: "I love being outdoors — trekking through nature, exploring places I've never been, watching birds, and filming the world as it is. There's something about being close to nature that quiets everything else. Some of my best moments have happened on trails, away from screens.",
  },
  {
    id: 'sports', icon: '🏸', title: 'The Sports Enthusiast', teaser: 'Basketball roots, badminton present.',
    detail: "I used to play basketball and still carry an appreciation for the teamwork and discipline it builds. These days, badminton is my sport of choice — there's something satisfying about a well-placed smash on a sunny afternoon. I enjoy movement, competition, and the mindset that sport develops.",
  },
  {
    id: 'organised', icon: '📋', title: 'The Organised One', teaser: 'Time, space, and clarity matter.',
    detail: "I genuinely enjoy organising — my room, my schedule, my gadgets. There's a calm that comes from a clean space and a clear plan. I value time — mine and other people's — and I believe showing up prepared is a form of respect. Organisation isn't just a habit; it's how I make space to actually think.",
  },
]

const happinessCategories = [
  {
    id: 'outdoors', icon: '🌿', label: 'Outdoors & Adventure',
    description: "Trekking through forests, watching birds, filming nature as it is, and going somewhere I haven't been before. These are the days I feel most alive.",
    imageKeys: [
      { key: 'trekking',    label: 'Trekking adventure' },
      { key: 'nature',      label: 'Nature & outdoors' },
      { key: 'birdwatching',label: 'Bird watching' },
    ],
  },
  {
    id: 'people', icon: '👥', label: 'People & Friendships',
    description: "Roaming Bengaluru with friends, making people laugh, helping someone figure something out, and building connections that matter. The best days are always with good people.",
    imageKeys: [
      { key: 'friends',        label: 'Friends & good times' },
      { key: 'collegeMemories',label: 'College memories' },
    ],
  },
  {
    id: 'sports', icon: '🏸', label: 'Sports & Movement',
    description: "Badminton on a sunny afternoon, discovering a new sport, staying active. I believe movement keeps you sane.",
    imageKeys: [{ key: 'badminton', label: 'Badminton' }],
  },
  {
    id: 'everyday', icon: '☕', label: 'Everyday Joys',
    description: "Good filter coffee, attempting to cook something new, going on a swing in the sun, looking through old photographs, and a clean, organised room.",
    imageKeys: [{ key: 'coffee', label: 'Filter coffee ritual' }],
  },
  {
    id: 'quiet', icon: '📖', label: 'The Quieter Side',
    description: "Reading a good book, exploring spirituality, reflecting, and sitting with my thoughts. There's a side of me that enjoys the stillness just as much as the adventure.",
    imageKeys: [],
  },
]

const aikyamStages = [
  { id: 1, phase: 'The Doubt',     icon: '🌧️', content: "Many people thought we wouldn't be able to pull it off. The idea was ambitious, and scepticism from the outside was hard to ignore." },
  { id: 2, phase: 'The Challenge', icon: '📉', content: "Participant numbers weren't where we needed them to be. Right until the last moment, we weren't sure if we'd get enough registrations for the event to succeed." },
  { id: 3, phase: 'The Response',  icon: '💪', content: "My team and I refused to give up on what we believed we could achieve. We kept working consistently, kept believing, and kept putting in the effort." },
  { id: 4, phase: 'The Outcome',   icon: '🌟', content: "With consistent team effort, faith, and God's grace, we eventually welcomed more participants than we had required. The event came together." },
  { id: 5, phase: 'The Lesson',    icon: '🧭', content: "Believe in yourself. Trust your team. Keep working even when the outcome isn't guaranteed. Sometimes, the most important step is believing you can make it happen before you know how." },
]

/* ─── Component ────────────────────────────────────── */
export default function PageHome() {
  const [activeCard, setActiveCard]         = useState(null)
  const [activeCategory, setActiveCategory] = useState('outdoors')
  const [activeStage, setActiveStage]       = useState(0)
  const [resetClicked, setResetClicked]     = useState(false)
  const storyRef                            = useRef(null)

  const selectedCategory = happinessCategories.find(c => c.id === activeCategory)

  const handleReset = () => {
    setResetClicked(true)
    setTimeout(() => setResetClicked(false), 4500)
  }

  return (
    <div className={styles.page}>

      {/* ═══ CINEMATIC HERO ═══════════════════════════════════════════ */}
      <section className={styles.hero} aria-label="Introduction">
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBgGrad} />
        </div>

        <div className={styles.heroContent}>
          <motion.div className={styles.heroPortraitWrap}
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}>
            <ImagePlaceholder src={IMAGES.heroPortrait} alt="Jyothiradithya P." label="Your portrait photo here" aspectRatio="3/4" dark />
          </motion.div>

          <div className={styles.heroText}>
            <motion.span className={styles.heroChapter}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}>
              iLEAD 2027 · Build Your Story
            </motion.span>

            <motion.h1 className={styles.heroName}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
              Jyothiradithya<br /><span className={styles.heroAccent}>P.</span>
            </motion.h1>

            <motion.p className={styles.heroTagline}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 0.8 }}>
              A little curious. A little adventurous.<br />
              <em>A lot more than a resume.</em>
            </motion.p>

            <motion.p className={styles.heroSub}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}>
              I am someone who enjoys meeting people, hearing their stories, and learning about the world around me. Whether it is discovering something new, heading out on a trek, trying a different sport, or simply making someone laugh, I find happiness in experiencing life rather than just watching it pass by.
            </motion.p>

            <motion.div className={styles.heroActions}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.45, duration: 0.7 }}>
              <button className={styles.heroCta} onClick={() => storyRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                Read My Story <ArrowRight size={15} />
              </button>
              <Link to="/professional" className={styles.heroSecondary}>
                Professional Profile
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.button className={styles.scrollHint}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          onClick={() => storyRef.current?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll down">
          <span>Scroll to explore</span>
          <ChevronDown size={17} style={{ animation: 'float 2.4s ease-in-out infinite' }} />
        </motion.button>
      </section>

      <div className={styles.transitionBand} aria-hidden="true" />

      {/* ═══ STORY BODY ═══════════════════════════════════════════════ */}
      <div ref={storyRef} className={styles.storyBody}>

        {/* ── PART 1: WHO I AM ─────────────────────────────────── */}
        <section className={styles.section} aria-labelledby="h-who">
          <div className="container">

            <Reveal>
              <span className="section-label">Part One</span>
              <h2 id="h-who" className={styles.sectionH}>Who I Am</h2>
              <hr className="divider" />
            </Reveal>

            <div className={styles.splitGrid}>
              <Reveal delay={0.08} className={styles.splitText}>
                <p>People might look at my academic background and assume I am a nerd focused only on academics. But there is much more to me. I enjoy life, maintain my own boundaries, respect my time and the time of others, and believe in balancing studies with experiences that make life enjoyable.</p>
                <br />
                <p>I like being the person who brings a little happiness into the room, makes people laugh, and helps them figure things out when they're stuck. For me, being there for people isn't always about having the perfect advice. Sometimes, it's about making a difficult moment feel a little lighter.</p>
                <br />
                <p>I enjoy talking to people and building connections. I can be a little introverted at first, but I open up as I get to know someone. My friends would describe me as jovial, smart, and trustworthy — and I think that's a combination worth being proud of.</p>
              </Reveal>
              <Reveal delay={0.15} direction="right" className={styles.splitImage}>
                <ImagePlaceholder src={IMAGES.friends} alt="With friends" label="Your photo — friends or candid" aspectRatio="4/5" />
              </Reveal>
            </div>

            {/* Personality cards */}
            <Reveal delay={0.05}>
              <h3 className={styles.subH} style={{ marginTop: '4rem' }}>The different sides of me</h3>
              <p className={styles.cardHint}>Click any card to learn more.</p>
            </Reveal>

            <div className={styles.cardGrid} role="list">
              {personalityCards.map((card, i) => (
                <Reveal key={card.id} delay={i * 0.07} className={styles.cardItem}>
                  <button
                    className={`${styles.pCard} ${activeCard === card.id ? styles.pCardActive : ''}`}
                    onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                    aria-expanded={activeCard === card.id}
                  >
                    <span className={styles.pCardIcon} aria-hidden="true">{card.icon}</span>
                    <span className={styles.pCardTitle}>{card.title}</span>
                    <span className={styles.pCardTeaser}>{card.teaser}</span>
                    <span className={styles.pCardAction}>
                      {activeCard === card.id ? 'Close ▴' : 'Explore ▾'}
                    </span>
                    <AnimatePresence>
                      {activeCard === card.id && (
                        <motion.div className={styles.pCardDetail}
                          initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                          <p>{card.detail}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PART 2: ENGINEERING & COLLEGE ────────────────────── */}
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="h-eng">
          <div className="container">

            <Reveal>
              <span className="section-label">Part Two</span>
              <h2 id="h-eng" className={styles.sectionH}>Why I Chose Engineering<br />& My College Journey</h2>
              <hr className="divider" />
            </Reveal>

            <div className={`${styles.splitGrid} ${styles.splitReverse}`} style={{ marginTop: '2.5rem' }}>
              <Reveal delay={0.08} direction="left" className={styles.splitImage}>
                <ImagePlaceholder src={IMAGES.collegeMemories} alt="College life" label="College memories — your photo here" aspectRatio="4/5" />
              </Reveal>
              <Reveal delay={0.15} className={styles.splitText}>
                <h3 className={styles.subH}>Why engineering?</h3>
                <p>Technology has always caught my attention — new gadgets, emerging innovations, and the possibilities that come with them. But what drew me towards engineering was something bigger: the idea that technology could be used to help people and make a difference.</p>
                <br />
                <p>I was interested in coding, laptops, and building websites, and I wanted the opportunity to explore more than one area. Engineering, particularly Information Science, felt like a path that would let me experiment, learn, and discover where my interests could take me.</p>
                <br />
                <p>For me, the appeal wasn't simply learning how technology works. It was the possibility of <em>creating something with it.</em></p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className={styles.collegeBox}>
                <h3 className={styles.subH}>How college changed me</h3>
                <p>College has been a place to develop not only technical skills, but also the way I manage my time, communicate, make decisions, and work with people.</p>
                <br />
                <p>Being involved in events has given me opportunities to take responsibility, explore leadership and public relations, host, and connect with people from different backgrounds. These experiences have helped me become more confident and organised.</p>
                <br />
                <p>I'm learning that growth isn't limited to what you study. Sometimes, it comes from stepping up, taking responsibility, and putting yourself in situations where you have to learn as you go.</p>
                <div className={styles.pillRow}>
                  {['Time Management','Decision-Making','Leadership','Public Relations','Hosting & Communication','Cross-Cultural Teamwork'].map((s,i) => (
                    <Reveal key={s} delay={i * 0.06}><span className={styles.pill}>{s}</span></Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── PART 3: MY KIND OF HAPPINESS ─────────────────────── */}
        <section className={styles.section} aria-labelledby="h-happy">
          <div className="container">

            <Reveal>
              <span className="section-label">Part Three</span>
              <h2 id="h-happy" className={styles.sectionH}>My Kind of Happiness</h2>
              <hr className="divider" />
            </Reveal>

            <Reveal delay={0.08}>
              <p className={styles.leadP}>I don't need an elaborate plan to have a good day. Sometimes, it's meeting friends, roaming around Bengaluru, enjoying a good filter coffee, or playing badminton on a sunny afternoon. Other times, it's trekking through nature, watching birds, filming the world as it is, or discovering somewhere I've never been.</p>
              <p style={{ marginTop: '1rem' }}>And occasionally, it's just me, a clean room, old photographs, a book, and an attempt at cooking something new.</p>
              <p style={{ marginTop: '1rem' }}>I believe there's no single place that guarantees happiness. The people around us make places special. But if there's one environment where I naturally feel at ease, it's somewhere close to nature.</p>
            </Reveal>

            <div className={styles.galleryLayout} style={{ marginTop: '2.5rem' }}>
              <div className={styles.catTabs} role="tablist" aria-label="My kind of day">
                {happinessCategories.map(cat => (
                  <button key={cat.id} role="tab"
                    aria-selected={activeCategory === cat.id}
                    className={`${styles.catTab} ${activeCategory === cat.id ? styles.catTabOn : ''}`}
                    onClick={() => setActiveCategory(cat.id)}>
                    <span aria-hidden="true">{cat.icon}</span> {cat.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedCategory && (
                  <motion.div key={selectedCategory.id} role="tabpanel"
                    className={styles.catPanel}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
                    <p className={styles.catDesc}>{selectedCategory.description}</p>
                    {selectedCategory.imageKeys.filter(img => IMAGES[img.key]).length > 0 && (
                      <div className={styles.catImages}>
                        {selectedCategory.imageKeys.filter(img => IMAGES[img.key]).map(img => (
                          <ImagePlaceholder key={img.key} src={IMAGES[img.key]} alt={img.label} label={img.label} aspectRatio="4/3" />
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ── PART 4: AIKYAM 2026 ──────────────────────────────── */}
        <section className={styles.sectionDark} aria-labelledby="h-aikyam">
          <div className="container">

            <Reveal>
              <span className="section-label section-label--light">Part Four</span>
              <h2 id="h-aikyam" className={`${styles.sectionH} ${styles.lightText}`}>When Doubt Met Determination</h2>
              <p className={`${styles.aikyamSub}`}>Aikyam 2026 — National Level IP Conclave</p>
              <hr className="divider divider--light" />
            </Reveal>

            <Reveal delay={0.08}>
              <p className={`${styles.leadP} ${styles.lightText}`}>
                "One experience I'm genuinely proud of is organising Aikyam 2026. Many people thought we wouldn't be able to pull it off, and for a while, even our participant numbers weren't where we expected them to be. Right until the last moment, we weren't sure if we'd get enough participants."
              </p>
            </Reveal>

            {/* Stages */}
            <div className={styles.stagesWrap} style={{ marginTop: '2.5rem' }}>
              <div className={styles.stagesNav} role="tablist" aria-label="Story stages">
                {aikyamStages.map((s, i) => (
                  <button key={s.id} role="tab" aria-selected={activeStage === i}
                    className={`${styles.stageBtn} ${activeStage === i ? styles.stageBtnOn : ''}`}
                    onClick={() => setActiveStage(i)}>
                    <span className={styles.stageNum}>0{s.id}</span>
                    <span className={styles.stagePhase}>{s.phase}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={activeStage} className={styles.stageContent} role="tabpanel"
                  initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }} transition={{ duration: 0.35 }}>
                  <div className={styles.stageEmoji} aria-hidden="true">{aikyamStages[activeStage].icon}</div>
                  <h3 className={`${styles.subH} ${styles.lightText}`}>{aikyamStages[activeStage].phase}</h3>
                  <p className={styles.lightText}>{aikyamStages[activeStage].content}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <Reveal delay={0.1}>
              <blockquote className={styles.aikyamQuote}>
                <p>"My team and I refused to give up on what we believed we could achieve. With consistent team effort, faith, and God's grace, we eventually welcomed more participants than we had required."</p>
                <footer>
                  <span className={styles.quoteLine} aria-hidden="true" />
                  <cite>The lesson: sometimes, the most important step is believing you can make it happen before you know how.</cite>
                </footer>
              </blockquote>
            </Reveal>

            {Boolean(IMAGES.aikyamTeam || IMAGES.aikyamEvent || IMAGES.aikyamBehind) && (
              <Reveal delay={0.12}>
                <div className={`${styles.aikyamImgGrid} ${!IMAGES.aikyamBehind ? styles.aikyamImgGridTwo : ''}`}>
                  {IMAGES.aikyamTeam && (
                    <ImagePlaceholder src={IMAGES.aikyamTeam} alt="Aikyam 2026 team" label="Aikyam 2026 team photo" aspectRatio={IMAGES.aikyamBehind ? "16/9" : "16/10"} dark />
                  )}
                  {IMAGES.aikyamEvent && !IMAGES.aikyamBehind && (
                    <ImagePlaceholder src={IMAGES.aikyamEvent} alt="Aikyam 2026 event moments" label="Aikyam 2026 event moments" aspectRatio="16/10" dark />
                  )}
                  {IMAGES.aikyamBehind && (
                    <div className={styles.aikyamImgPair}>
                      {IMAGES.aikyamEvent && (
                        <ImagePlaceholder src={IMAGES.aikyamEvent} alt="Aikyam 2026 event moments" label="Aikyam 2026 event moments" aspectRatio="1/1" dark />
                      )}
                      <ImagePlaceholder src={IMAGES.aikyamBehind} alt="Aikyam behind the scenes" label="Aikyam — behind the scenes" aspectRatio="1/1" dark />
                    </div>
                  )}
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* ── MINDSET ────────────────────────────────────────── */}
        <section className={styles.sectionMindset} aria-labelledby="h-mindset">
          <div className="container container--narrow">

            <Reveal>
              <span className="section-label">My Mindset</span>
              <h2 id="h-mindset" className={styles.sectionH}>When Things Get Difficult</h2>
              <hr className="divider" />
            </Reveal>

            <Reveal delay={0.08}>
              <p className={styles.leadP}>I don't believe everything will always go according to plan. When things get difficult, I give myself a break, take a step back, and return to the task with a clearer mind.</p>
              <br />
              <p>I remind myself that difficult moments aren't permanent, and that a setback doesn't have to be the end of the story.</p>
              <br />
              <p>My approach is simple: work honestly, put in the effort, stay determined, and keep moving forward. I may not control every outcome, but I can control the sincerity of my effort.</p>
              <br />
              <p className={styles.gitaNote}>
                <em>A teaching from the Bhagavad Gita that I find myself returning to is the idea of performing one's duty sincerely, without becoming attached to the result. The effort, the honesty, and the dedication — those are what I can control.</em>
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className={styles.resetBox}>
                <p className={styles.resetLabel}>One saying I hold on to:</p>
                <blockquote className={styles.resetQuote}>"One good thing about time is that it changes."</blockquote>
                <button
                  className={`${styles.resetBtn} ${resetClicked ? styles.resetBtnOn : ''}`}
                  onClick={handleReset}
                  aria-label="Click for a reset reminder">
                  <RefreshCw size={15} className={resetClicked ? styles.spinIcon : ''} />
                  My Reset Button
                </button>
                <AnimatePresence>
                  {resetClicked && (
                    <motion.div className={styles.resetMsg} role="status" aria-live="polite"
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}>
                      <p>Take a breath. Give it time. Focus on what you can control. Then get back to work.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CHAPTER NAV FOOTER ───────────────────────────── */}
        <section className={styles.chapNav}>
          <div className="container">
            <Reveal><p className={styles.chapNavLabel}>Continue the story</p></Reveal>
            <div className={styles.chapNavLinks}>
              {[
                { to: '/ambitions',    num: '02', title: 'Who I Want to Be'        },
                { to: '/future',       num: '03', title: 'The Next Five Years'      },
                { to: '/professional', num: '04', title: 'Professional Dashboard'   },
              ].map((item, i) => (
                <Reveal key={item.to} delay={i * 0.08}>
                  <Link to={item.to} className={styles.chapCard}>
                    <span className={styles.chapCardNum}>{item.num}</span>
                    <span className={styles.chapCardTitle}>{item.title}</span>
                    <ArrowRight size={16} className={styles.chapCardArrow} />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
