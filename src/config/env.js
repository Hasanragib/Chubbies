// ─────────────────────────────────────────────────────────────
// ENV — every value sourced from .env, in one place.
// Vite only exposes variables prefixed with VITE_ to client code
// (see .env.example for the full list and where to get each key).
// ─────────────────────────────────────────────────────────────

export const ENV = {
  contact: {
    phone: import.meta.env.VITE_CONTACT_PHONE || '+91 88007 97710',
    email: import.meta.env.VITE_CONTACT_EMAIL || 'hello@chubbies.in',
    // Digits only, country code first, no + or spaces — required format for wa.me links
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '918800797710',
  },

  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
}

// True once all three EmailJS values are actually filled in .env —
// lets the form detect "not configured yet" vs. a real send failure.
export const isEmailConfigured =
  Boolean(ENV.emailjs.serviceId && ENV.emailjs.templateId && ENV.emailjs.publicKey)
