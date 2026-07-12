import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel.jsx";
import SEO from "../components/SEO.jsx";
import { useSite } from "../context/SiteContext.jsx";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const { homeUsps, franchise, seo } = useSite();

  return (
    <>
      <SEO {...seo.home} />
      <HeroCarousel />

      <section className="section">
        <div className="container">
          <div className="eyebrow">Why the model works</div>
          <div className={styles.uspGrid}>
            {homeUsps.map((u) => (
              <div key={u.label} className={styles.uspCard}>
                <h3 className={styles.uspTitle}>{u.label}</h3>
                <p className={styles.uspDetail}>{u.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section--yellow ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaGrid}`}>
          <div>
            <div className="eyebrow">Franchise enquiry</div>
            <h2 className={styles.ctaHeading}>
              Own a Chubbies cart in your city.
            </h2>
            <p className={styles.ctaText}>
              {franchise.investment} all-in investment, FOFO model, no royalty —
              see what's included.
            </p>
            <Link to="/franchise" className={`btn btn--dark ${styles.ctaBtn}`}>
              View franchise details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
