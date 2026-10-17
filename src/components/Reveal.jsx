import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref              = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const variants = {
    hidden:  { opacity: 0, y: direction === 'up' ? 28 : 0, x: direction === 'left' ? -28 : direction === 'right' ? 28 : 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
