import styles from './ImagePlaceholder.module.css'

export default function ImagePlaceholder({ src, alt, label, aspectRatio = '4/3', className = '' }) {
  if (!src) return null

  return (
    <div className={`${styles.wrapper} ${className}`} style={{ aspectRatio }}>
      <img src={src} alt={alt || label || ''} className={styles.image} loading="lazy" />
    </div>
  )
}
