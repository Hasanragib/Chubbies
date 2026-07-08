import { useSite } from "../context/SiteContext.jsx";
import styles from "../styles/pages/StoreLocator.module.css";

export default function StoreLocator() {
  const { outlets } = useSite();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="eyebrow">Find us</div>
        <h1 className={styles.heading}>Outlets</h1>
        <p className={styles.intro}>
          Find a Chubbies food cart near you! We are serving up your favorite
          street eats hot and fresh every evening. Stop by our active location
          or keep an eye out for our upcoming spots opening soon.
        </p>

        <div className={styles.grid}>
          {outlets.map((o) => (
            <div key={o.area} className={styles.card}>
              <div className="eyebrow">{o.city}</div>
              <h3 className={styles.area}>{o.area}</h3>
              {o.phone && <p className={styles.meta}>{o.phone}</p>}
              <p className={o.phone ? styles.metaTight : styles.comingSoon}>
                {o.hours}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
