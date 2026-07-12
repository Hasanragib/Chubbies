import { useSite } from "../context/SiteContext.jsx";
import SEO from "../components/SEO.jsx";
import styles from "../styles/pages/StoreLocator.module.css";

export default function StoreLocator() {
  const { outlets, seo } = useSite();

  return (
    <section className={`section ${styles.section}`}>
      <SEO {...seo.locations} />
      <div className="container">
        <div className="eyebrow">Find us</div>
        <h1 className={styles.heading}>Outlets</h1>
        <p className={styles.intro}>
          Find a Chubbies food cart near you! We are serving up your favorite
          street eats hot and fresh every evening. Stop by our active location
          or keep an eye out for our upcoming spots opening soon.
        </p>

        <div className={styles.grid}>
          {outlets.map((o) => {
            // Check if THIS specific outlet has a location link decided
            const isLinkReady = o.location && o.location.trim() !== "";

            return isLinkReady ? (
              // 1. Clickable Card for active locations
              <a
                key={o.area}
                href={o.location}
                target="_blank"
                rel="noreferrer"
                className={styles.card}
              >
                <div className="eyebrow">{o.city}</div>
                <h3 className={styles.area}>{o.area}</h3>
                {o.phone && <p className={styles.meta}>{o.phone}</p>}
                <p className={o.phone ? styles.metaTight : styles.comingSoon}>
                  {o.hours}
                </p>
              </a>
            ) : (
              <div key={o.area} className={`${styles.card}`}>
                <div className="eyebrow">{o.city}</div>
                <h3 className={styles.area}>{o.area}</h3>
                {o.phone && <p className={styles.meta}>{o.phone}</p>}
                <p className={o.phone ? styles.metaTight : styles.comingSoon}>
                  {o.hours}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
