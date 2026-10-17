import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import styles from './FloatingNav.module.css'

const navItems = [
  { label: 'My Story',     path: '/' },
  { label: 'Ambitions',    path: '/ambitions' },
  { label: 'Five Years',   path: '/future' },
  { label: 'Professional', path: '/professional' },
]

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location                = useLocation()
  const isDark                  = location.pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${isDark ? styles.dark : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Site navigation"
    >
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} aria-label="Home">
          <span className={styles.logoMark}>J.</span>
        </NavLink>

        <div className={styles.links} role="menubar">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              role="menuitem"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobile}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {navItems.map((item, i) => (
              <motion.div key={item.path} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
