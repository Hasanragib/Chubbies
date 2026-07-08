import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { ENV, isEmailConfigured } from '../config/env.js'
import ContactOptions from './ContactOptions.jsx'
import styles from '../styles/components/LeadForm.module.css'

export default function LeadForm({ type = 'franchise', onDark = false }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  // After a successful send, show the confirmation briefly, then reset
  // back to an empty form so the person (or someone else) can submit again
  // without needing to refresh the page themselves.
  useEffect(() => {
    if (status !== 'sent') return
    const timer = setTimeout(() => setStatus('idle'), 4000)
    return () => clearTimeout(timer)
  }, [status])

  async function handleSubmit(e) {
    e.preventDefault()

    if (!isEmailConfigured) {
      // EmailJS hasn't been set up yet (see .env.example) — don't pretend it worked.
      setStatus('notConfigured')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        ENV.emailjs.serviceId,
        ENV.emailjs.templateId,
        {
          enquiry_type: type,
          from_name: form.name,
          phone: form.phone,
          email: form.email,
          city: form.city,
          message: form.message,
        },
        { publicKey: ENV.emailjs.publicKey }
      )
      setStatus('sent')
      setForm({ name: '', phone: '', email: '', city: '', message: '' })
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className={styles.confirmation}>
        <div className="eyebrow">Received</div>
        <p className={styles.confirmationText}>Thanks — we've got your details and will call you back within two business days.</p>
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="name">Full name</label>
          <input id="name" required value={form.name} onChange={e => update('name', e.target.value)} />
        </div>
        <div className={styles.row}>
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" required value={form.phone} onChange={e => update('phone', e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={form.email} onChange={e => update('email', e.target.value)} />
          </div>
        </div>
        <div>
          <label htmlFor="city">City you're enquiring for</label>
          <input id="city" required value={form.city} onChange={e => update('city', e.target.value)} />
        </div>
        <div>
          <label htmlFor="message">
            {type === 'franchise'
              ? 'Tell us about your investment plans'
              : type === 'bulk'
                ? 'What are you looking to order?'
                : 'How can we help?'}
          </label>
          <textarea id="message" rows={4} value={form.message} onChange={e => update('message', e.target.value)} />
        </div>
        <button className="btn" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Submit enquiry'}
        </button>

        {status === 'error' && (
          <p className={styles.errorText}>
            Something went wrong sending that — try again, or use one of the options below.
          </p>
        )}
        {status === 'notConfigured' && (
          <p className={styles.errorText}>
            Email sending isn't set up yet — call or WhatsApp us below instead.
          </p>
        )}
      </form>

      <ContactOptions onDark={onDark} />
    </div>
  )
}
