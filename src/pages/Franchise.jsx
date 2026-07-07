import LeadForm from '../components/LeadForm.jsx'
import { useSite } from '../context/SiteContext.jsx'
import styles from '../styles/pages/Franchise.module.css'

export default function Franchise() {
  const { brand, contact, franchise } = useSite()
  const [main, ...rest] = brand.cartGallery

  return (
    <>
      <section className={`section ${styles.introSection}`}>
        <div className="container">
          <div className="eyebrow">Franchise with us</div>
          <h1 className={styles.heading}>
            Own &amp; operate a {brand.name} cart in your city.
          </h1>
          <p className={styles.introText}>
            India's fastest-growing momo brand is now franchising — a single,
            straightforward cart format built to get you trading fast.
          </p>
        </div>
      </section>

      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          <div className={styles.galleryIntro}>
            <div className="eyebrow">The cart</div>
            <p className={styles.galleryText}>
              Every franchisee gets the exact same cart — LED-lit canopy,
              twin bamboo steamers, branded panels, and signage, all built
              in before it reaches you.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            <div className={styles.galleryMain}>
              <img src={main.src} alt={main.caption} className={styles.galleryImg} />
              <p className={styles.galleryCaption}>{main.caption}</p>
            </div>
            {rest.map(g => (
              <div key={g.src} className={styles.galleryCell}>
                <img src={g.src} alt={g.caption} className={styles.galleryImg} />
                <p className={styles.galleryCaption}>{g.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.detailSection}`}>
        <div className="container">
          <div className={styles.investmentBadge}>
            Investment: {franchise.investment}/- only
          </div>
          <ul className={styles.benefitList}>
            {franchise.benefits.map(b => (
              <li key={b} className={styles.benefitItem}>
                <span className={styles.checkmark}>✓</span>
                <span className={styles.benefitText}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section section--dark ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaGrid}`}>
          <div>
            <div className="eyebrow">Next step</div>
            <h2 className={styles.ctaHeading}>Tell us where you want to open.</h2>
            <p className={styles.ctaText}>
              Our team reviews every enquiry and calls back — usually within two
              business days. For a faster response, DM {contact.instagramHandle} or
              call {contact.phone}.
            </p>
          </div>
          <LeadForm type="franchise" onDark />
        </div>
      </section>
    </>
  )
}
