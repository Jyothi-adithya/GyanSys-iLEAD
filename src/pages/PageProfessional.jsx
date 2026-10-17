import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeft, Mail, Phone, MapPin,
  ExternalLink, ChevronDown, ChevronUp, Award, Briefcase, GraduationCap, Code2, Star
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { PROFILE, EDUCATION, SKILLS, PROJECTS, EXPERIENCE, CERTIFICATIONS, LEADERSHIP } from '../data/resume.js'
import { IMAGES } from '../data/images.js'
import styles from './PageProfessional.module.css'

function GithubIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


export default function PageProfessional() {
  const [openProject, setOpenProject] = useState(null)
  const [activeSkillGroup, setActiveSkillGroup] = useState(null)

  return (
    <motion.div className={styles.page}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}>

      {/* ── Dashboard hero ── */}
      <section className={styles.dashHero}>
        <div className={styles.dashHeroBg} aria-hidden="true" />
        <div className="container">
          <div className={`${styles.dashHeroInner} ${!IMAGES.professionalPortrait ? styles.dashHeroInnerNoPhoto : ''}`}>
            {IMAGES.professionalPortrait && (
              <motion.div className={styles.dashPortrait}
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
                <ImagePlaceholder src={IMAGES.professionalPortrait} alt={PROFILE.name} label="Professional photo" aspectRatio="1/1" dark />
              </motion.div>
            )}

            <div className={styles.dashIntro}>
              <motion.span className={styles.dashChapter}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}>
                Chapter Four · Professional Profile
              </motion.span>
              <motion.h1 className={styles.dashName}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                {PROFILE.name}
              </motion.h1>
              <motion.p className={styles.dashTitle}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.7 }}>
                {PROFILE.title}
              </motion.p>
              <motion.p className={styles.dashObjective}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.7 }}>
                {PROFILE.objective}
              </motion.p>

              {/* Contact */}
              <motion.div className={styles.contactRow}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.6 }}>
                <a href={`mailto:${PROFILE.email}`} className={styles.contactChip}>
                  <Mail size={13} /> {PROFILE.email}
                </a>
                <a href={`tel:${PROFILE.phone}`} className={styles.contactChip}>
                  <Phone size={13} /> {PROFILE.phone}
                </a>
                <span className={styles.contactChip}>
                  <MapPin size={13} /> {PROFILE.location}
                </span>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactChip}>
                  <LinkedinIcon size={13} /> LinkedIn
                </a>
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className={styles.contactChip}>
                  <GithubIcon size={13} /> GitHub
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dashboard body ── */}
      <div className={styles.dashBody}>
        <div className="container">

          {/* ── Education ── */}
          <section className={styles.dashSection} aria-labelledby="h-edu">
            <Reveal>
              <div className={styles.dashSectionHeader}>
                <GraduationCap size={20} className={styles.sectionIcon} />
                <h2 id="h-edu" className={styles.dashSectionH}>Education</h2>
              </div>
            </Reveal>
            <div className={styles.eduTimeline}>
              {EDUCATION.map((ed, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className={styles.eduCard}>
                    <div className={styles.eduDot} aria-hidden="true" />
                    <div className={styles.eduContent}>
                      <div className={styles.eduTop}>
                        <h3 className={styles.eduInstitution}>{ed.institution}</h3>
                        <span className={styles.eduPeriod}>{ed.period}</span>
                      </div>
                      <p className={styles.eduDegree}>{ed.degree}</p>
                      <span className={styles.eduScore}>{ed.score}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── Skills ── */}
          <section className={styles.dashSection} aria-labelledby="h-skills">
            <Reveal>
              <div className={styles.dashSectionHeader}>
                <Code2 size={20} className={styles.sectionIcon} />
                <h2 id="h-skills" className={styles.dashSectionH}>Technical Skills</h2>
              </div>
            </Reveal>
            <div className={styles.skillsGrid}>
              {Object.entries(SKILLS).map(([group, items], i) => (
                <Reveal key={group} delay={i * 0.06}>
                  <button
                    className={`${styles.skillGroup} ${activeSkillGroup === group ? styles.skillGroupOn : ''}`}
                    onClick={() => setActiveSkillGroup(activeSkillGroup === group ? null : group)}
                    aria-expanded={activeSkillGroup === group}>
                    <div className={styles.skillGroupHeader}>
                      <span className={styles.skillGroupName}>{group}</span>
                      {activeSkillGroup === group ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </div>
                    <AnimatePresence>
                      {activeSkillGroup === group && (
                        <motion.div className={styles.skillTags}
                          initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                          {items.map(skill => (
                            <span key={skill} className={styles.skillTag}>{skill}</span>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {activeSkillGroup !== group && (
                      <div className={styles.skillPreview}>
                        {items.slice(0, 3).map(skill => <span key={skill} className={styles.skillTag}>{skill}</span>)}
                        {items.length > 3 && <span className={styles.skillMore}>+{items.length - 3} more</span>}
                      </div>
                    )}
                  </button>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── Projects ── */}
          <section className={styles.dashSection} aria-labelledby="h-projects">
            <Reveal>
              <div className={styles.dashSectionHeader}>
                <Code2 size={20} className={styles.sectionIcon} />
                <h2 id="h-projects" className={styles.dashSectionH}>Projects</h2>
              </div>
            </Reveal>
            <div className={styles.projectGrid}>
              {PROJECTS.map((proj, i) => (
                <Reveal key={proj.id} delay={i * 0.08}>
                  <div className={`${styles.projCard} ${openProject === proj.id ? styles.projCardOpen : ''}`}>
                    <button className={styles.projCardHeader}
                      onClick={() => setOpenProject(openProject === proj.id ? null : proj.id)}
                      aria-expanded={openProject === proj.id}>
                      <div className={styles.projMeta}>
                        <h3 className={styles.projName}>{proj.name}</h3>
                        <p className={styles.projSummary}>{proj.summary}</p>
                        <div className={styles.projTechRow}>
                          {proj.technologies.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
                        </div>
                      </div>
                      <span className={styles.projToggle} aria-hidden="true">
                        {openProject === proj.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {openProject === proj.id && (
                        <motion.div className={styles.projDetail}
                          initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35 }}>
                          <p className={styles.projDesc}>{proj.description}</p>
                          <ul className={styles.projHighlights}>
                            {proj.highlights.map(h => (
                              <li key={h}><span className={styles.hlDot} aria-hidden="true">◆</span> {h}</li>
                            ))}
                          </ul>
                          <div className={styles.projActions}>
                            <a href={proj.github} target="_blank" rel="noopener noreferrer" className={styles.projLink}>
                              <GithubIcon size={14} /> View on GitHub <ExternalLink size={12} />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── Experience ── */}
          <section className={styles.dashSection} aria-labelledby="h-exp">
            <Reveal>
              <div className={styles.dashSectionHeader}>
                <Briefcase size={20} className={styles.sectionIcon} />
                <h2 id="h-exp" className={styles.dashSectionH}>Experience</h2>
              </div>
            </Reveal>
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={styles.expCard}>
                  <div className={styles.expLeft}>
                    <div className={styles.expDot} aria-hidden="true" />
                    <span className={styles.expPeriod}>{exp.period}</span>
                    <span className={styles.expDuration}>{exp.duration}</span>
                  </div>
                  <div className={styles.expRight}>
                    <h3 className={styles.expRole}>{exp.role}</h3>
                    <p className={styles.expCompany}>{exp.company}</p>
                    <p className={styles.expDesc}>{exp.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </section>

          {/* ── Leadership ── */}
          <section className={styles.dashSection} aria-labelledby="h-lead">
            <Reveal>
              <div className={styles.dashSectionHeader}>
                <Star size={20} className={styles.sectionIcon} />
                <h2 id="h-lead" className={styles.dashSectionH}>Leadership Experience</h2>
              </div>
            </Reveal>
            {LEADERSHIP.map((l, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={styles.leaderCard}>
                  <div className={styles.leaderYear}>{l.year}</div>
                  <div className={styles.leaderContent}>
                    <h3 className={styles.leaderRole}>{l.role}</h3>
                    <p className={styles.leaderEvent}>{l.event}</p>
                    <p className={styles.leaderDesc}>{l.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </section>

          {/* ── Certifications ── */}
          <section className={styles.dashSection} aria-labelledby="h-certs">
            <Reveal>
              <div className={styles.dashSectionHeader}>
                <Award size={20} className={styles.sectionIcon} />
                <h2 id="h-certs" className={styles.dashSectionH}>Certifications</h2>
              </div>
            </Reveal>
            <div className={styles.certGrid}>
              {CERTIFICATIONS.map((cert, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className={styles.certCard}>
                    <Award size={18} className={styles.certIcon} />
                    <div>
                      <p className={styles.certName}>{cert.name}</p>
                      <p className={styles.certIssuer}>{cert.issuer}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* ── Back to story ── */}
      <div className={styles.backFooter}>
        <div className="container">
          <p className={styles.backLabel}>The professional profile is just one part of the story.</p>
          <Link to="/" className={styles.backLink}><ArrowLeft size={15} /> Back to My Story</Link>
        </div>
      </div>
    </motion.div>
  )
}
