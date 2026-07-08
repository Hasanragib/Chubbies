import { Phone, MessageCircle } from "lucide-react";
import { useSite } from "../context/SiteContext.jsx";
import styles from "../styles/components/ContactOptions.module.css";

// onDark: pass true when this sits on a .section--dark background,
// so the buttons switch to a white-on-dark treatment instead of basil-on-light.
export default function ContactOptions({ onDark = false }) {
  const { contact } = useSite();
  const variant = onDark ? `${styles.button} ${styles.onDark}` : styles.button;

  return (
    <div className={styles.row}>
      <a href={`tel:${contact.phone2.replace(/\s/g, "")}`} className={variant}>
        <Phone size={15} strokeWidth={1.8} />
        Call us
      </a>
      <a
        href={`https://wa.me/${contact.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className={variant}
      >
        <MessageCircle size={15} strokeWidth={1.8} />
        WhatsApp us
      </a>
    </div>
  );
}
