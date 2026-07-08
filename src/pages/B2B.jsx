import LeadForm from "../components/LeadForm.jsx";
import { useSite } from "../context/SiteContext.jsx";
import styles from "../styles/pages/B2B.module.css";

export default function B2B() {
  const { contact, b2b } = useSite();

  return (
    <>
      <section className={`section section--yellow ${styles.heroSection}`}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <div className="eyebrow">Wholesale supply</div>
            <h1 className={styles.heading}>
              Momos starting ₹4/piece.
              <br />
              Best quality, best price.
            </h1>
            <p className={styles.heroText}>
              Consistent taste, happy customers, repeat orders — wholesale
              supply built for anyone reselling momos under their own brand.
            </p>
          </div>
          <img
            src="/bulk-order.webp"
            alt="Chubbies bulk order packaging — premium momo boxes and supply crate"
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={`section ${styles.midSection}`}>
        <div className="container">
          <div className="eyebrow">Perfect for</div>
          <div className={styles.tagRow}>
            {b2b.perfectFor.map((p) => (
              <span key={p} className={styles.tag}>
                {p}
              </span>
            ))}
          </div>

          <div className={styles.featureGrid}>
            {b2b.features.map((f) => (
              <div key={f} className={styles.featureCard}>
                <span className={styles.featureLabel}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section--dark ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaGrid}`}>
          <div>
            <div className="eyebrow">Let's grow together</div>
            <h2 className={styles.ctaHeading}>Build your brand. Earn big.</h2>
            <p className={styles.ctaText}>
              DM us for wholesale &amp; franchise details — pan-India delivery,
              trusted by vendors, 100% satisfaction.
            </p>
            <p className={styles.ctaContact}>
              {contact.phone} · {contact.phone2} · {contact.instagramHandle}
            </p>
          </div>
          <LeadForm type="bulk" onDark />
        </div>
      </section>
    </>
  );
}
