import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useSite } from '../context/SiteContext.jsx'
import styles from '../styles/components/Navbar.module.css'

export default function Navbar() {
  const { brand, nav } = useSite()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu automatically whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.brand}>
          <img src={brand.logo} alt={`${brand.name} logo`} className={styles.logo} />
          <span className={styles.brandName}>{brand.name}</span>
        </NavLink>

        <button
          className={styles.menuToggle}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {nav.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/enquiry" className={`btn ${styles.enquireBtn}`}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
