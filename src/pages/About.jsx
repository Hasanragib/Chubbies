import { useSite } from '../context/SiteContext.jsx'
import { formatList } from '../data/index.js'
import styles from '../styles/pages/About.module.css'

export default function About() {
  const { brand, carts, stats } = useSite()

  const aboutStats = [
    { n: String(carts.length), l: `Carts — ${formatList(carts)}` },
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
              {brand.name} started with one cart on a street corner in {carts[0]} in
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
          steamed fresh and served fast, cart after cart. That's what took us
          from one stall to {carts.length} carts now open in {formatList(carts)},
          each run on the exact same recipe, the exact same hygiene standard,
          and the exact same promise: freshly made, frozen &amp; hygienic,
          every batch, every time. That promise has already brought us{' '}
          {stats.customers} served — and it's exactly what we hand over,
          unchanged, to every franchisee who opens a {brand.name} cart in
          their own city.
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
