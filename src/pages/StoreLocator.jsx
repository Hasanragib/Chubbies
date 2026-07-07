import { useSite } from '../context/SiteContext.jsx'
import styles from '../styles/pages/StoreLocator.module.css'

export default function StoreLocator() {
  const { outlets } = useSite()

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="eyebrow">Find us</div>
        <h1 className={styles.heading}>Outlets</h1>
        <p className={styles.intro}>
          Placeholder list — wire this up to a real dataset (or a Google Maps embed)
          once outlet addresses and coordinates are finalized.
        </p>

        <div className={styles.grid}>
          {outlets.map(o => (
            <div key={o.area} className={styles.card}>
              <div className="eyebrow">{o.city}</div>
              <h3 className={styles.area}>{o.area}</h3>
              <p className={styles.meta}>{o.phone}</p>
              <p className={styles.metaTight}>{o.hours}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
