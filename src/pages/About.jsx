import { useSite } from '../context/SiteContext.jsx'
import { formatList } from '../data/index.js'
import styles from '../styles/pages/About.module.css'

export default function About() {
  const { brand, outlets, stats } = useSite()

  const areas = outlets.map(o => o.area)
  const live = outlets.filter(o => o.phone)
  const comingSoon = outlets.filter(o => !o.phone)

  const aboutStats = [
    { n: String(outlets.length), l: `Carts — ${formatList(areas)}` },
    { n: stats.customers, l: 'Served' },
    { n: String(brand.established), l: 'Established' },
  ]

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.introGrid}>
          <div>
            <div className="eyebrow">Our story</div>
            <h1 className={styles.heading}>{brand.name} — Est. {brand.established}</h1>
            <p className={styles.paragraph}>
              {brand.name} started with one cart on a street corner in {live[0]?.area} in
              {' '}{brand.established} — a bamboo steamer, a stove, and a recipe worth
              queuing for. There was no ad spend and no big launch. Just hot momos,
              served fast, and a line that kept coming back: "{brand.tagline}" —
              hungry? Stop here.
            </p>
          </div>
          <img src="/cart-render-1.jpg" alt={`The original ${brand.name} cart`} className={styles.cartImage} />
        </div>

        <p className={styles.paragraphTight}>
          Word travelled the old-fashioned way — one satisfied customer
          telling the next one in line. No ads, no discounts, just momos
          steamed fresh and served fast. That promise has already brought us
          {' '}{stats.customers} served at {formatList(live.map(o => o.area))} —
          and it's exactly what's coming next to {formatList(comingSoon.map(o => o.area))},
          and to every franchisee who opens a {brand.name} cart in their own city.
        </p>
        <div className={styles.statGrid}>
          {aboutStats.map(s => (
            <div key={s.l}>
              <div className={styles.statNumber}>{s.n}</div>
              <div className={styles.statLabel}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
