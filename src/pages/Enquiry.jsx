import LeadForm from '../components/LeadForm.jsx'
import styles from '../styles/pages/Enquiry.module.css'

export default function Enquiry() {
  return (
    <section className={`section section--dark ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className="eyebrow">Get in touch</div>
          <h1 className={styles.heading}>
            Have a question? Ask away.
          </h1>
          <p className={styles.text}>
            Whether it's about a cart location, a catering order, press, or
            anything else — drop your details and we'll get back to you within
            two business days. Looking to franchise or place a bulk order?
            Head to those pages instead for a more specific form.
          </p>
        </div>
        <LeadForm type="general" onDark />
      </div>
    </section>
  )
}
