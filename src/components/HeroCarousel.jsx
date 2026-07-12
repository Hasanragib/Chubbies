import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSite } from "../context/SiteContext.jsx";
import styles from "../styles/components/HeroCarousel.module.css";

export default function HeroCarousel() {
  const { brand, heroSlides, stats } = useSite();
  const [index, setIndex] = useState(0);
  // Only the current slide + the next one are fetched to start with — the
  // rest load progressively as the carousel advances, instead of every
  // photo downloading upfront on page load.
  const [loaded, setLoaded] = useState(
    () => new Set([0, 1 % heroSlides.length]),
  );
  const timerRef = useRef(null);
  const indexRef = useRef(0);

  function markLoaded(i) {
    setLoaded((prev) => {
      if (prev.has(i)) return prev;
      const next = new Set(prev);
      next.add(i);
      return next;
    });
  }

  function goToIndex(i) {
    indexRef.current = i;
    setIndex(i);
    markLoaded(i);
    markLoaded((i + 1) % heroSlides.length);
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goToIndex((indexRef.current + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [heroSlides.length]);

  function goTo(i) {
    goToIndex(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goToIndex((indexRef.current + 1) % heroSlides.length);
    }, 4500);
  }

  return (
    <div className={styles.hero}>
      {heroSlides.map((s, i) =>
        loaded.has(i) ? (
          <img
            key={`${s.src}-${i}`}
            src={s.src}
            alt={s.alt}
            className={`${styles.slide} ${i === index ? styles.slideActive : ""}`}
          />
        ) : null,
      )}

      {/* dark scrim so overlaid text stays legible against any photo */}
      <div className={styles.scrim} />

      {/* overlaid text content */}
      <div className={styles.textLayer}>
        <div className="container">
          <div className={styles.textInner}>
            <div className={styles.topRow}>
              <div className={`eyebrow ${styles.eyebrowLight}`}>
                {brand.name} — {brand.tagline}
              </div>
              <span className={styles.customerBadge}>
                {stats.customers} served
              </span>
            </div>

            <h1 key={index} className={styles.headline}>
              {heroSlides[index].headline}
            </h1>

            <p className={styles.subtext}>
              India's fastest-growing momo brand — low investment, no royalty,
              and a proven cart-based model built for your city.
            </p>
            <div className={styles.ctaRow}>
              <Link to="/franchise" className="btn">
                Become a franchisee
              </Link>
              <Link
                to="/locations"
                className={`btn btn--ghost ${styles.ghostOnPhoto}`}
              >
                Find your nearest outlet
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* price badge */}
      <div className={styles.priceBadge}>
        <div className={styles.priceMain}>₹4 / piece</div>
        <div className={styles.priceSub}>on bulk orders</div>
      </div>

      {/* dot navigation */}
      <div className={styles.dots}>
        {heroSlides.map((s, i) => (
          <button
            key={`${s.src}-${i}`}
            onClick={() => goTo(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
