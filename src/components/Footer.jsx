import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useSite } from "../context/SiteContext.jsx";
import styles from "../styles/components/Footer.module.css";

const ICONS = { instagram: Instagram, linkedin: Linkedin, youtube: Youtube };

export default function Footer() {
  const { brand, contact, socials, carts } = useSite();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Logo + name + trust stat + socials */}
        <div>
          <div className={styles.brandRow}>
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className={styles.logo}
            />
            <div>
              <div className={styles.brandName}>{brand.name}</div>
              <div className={styles.tagline}>{brand.tagline}</div>
            </div>
          </div>

          <div className={styles.socialRow}>
            {socials.map(({ id, href, label }) => {
              const Icon = ICONS[id];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialIcon}
                >
                  <Icon size={17} strokeWidth={1.8} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Cart locations — centered middle column */}
        <div className={styles.columnCentered}>
          <div className={`eyebrow ${styles.columnLabel}`}>Find our carts</div>
          <div className={styles.stackedListTight}>
            {carts.map((c) => (
              <Link
                key={c}
                to={`/locations`}
                className={styles.cartLink}
              >
                <span>{c}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <div className={`eyebrow ${styles.columnLabel}`}>Contact Us</div>
          <div className={styles.stackedList}>
            <span>+91 8800797710</span>
            <span>{contact.phone}</span>
            <span>{contact.email}</span>
          </div>
        </div>
      </div>

      {/* Rights reserved — full-width bottom bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomBarInner}`}>
          <span>
            © {brand.established} {brand.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
