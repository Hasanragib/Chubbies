import { NavLink } from 'react-router-dom'
import { useSite } from '../context/SiteContext.jsx'
import styles from '../styles/components/Navbar.module.css'

export default function Navbar() {
  const { brand, nav } = useSite()

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.brand}>
          <img src={brand.logo} alt={`${brand.name} logo`} className={styles.logo} />
          <span className={styles.brandName}>{brand.name}</span>
        </NavLink>
        <nav className={styles.nav}>
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
