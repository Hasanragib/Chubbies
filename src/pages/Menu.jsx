import { useSite } from '../context/SiteContext.jsx'
import styles from '../styles/pages/Menu.module.css'

export default function Menu() {
  const { menuCategories } = useSite()

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="eyebrow">On the steamer today</div>
        <h1 className={styles.heading}>Menu</h1>

        {menuCategories.map(cat => (
          <div key={cat.name} className={styles.category}>
            <h2 className={styles.categoryName}>{cat.name}</h2>
            <div className={styles.itemList}>
              {cat.items.map(item => (
                <div key={item.name} className={styles.item}>
                  <div>
                    <div className={styles.itemName}>{item.name}</div>
                    <div className={styles.itemDesc}>{item.desc}</div>
                  </div>
                  <div className={styles.itemPrice}>{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
