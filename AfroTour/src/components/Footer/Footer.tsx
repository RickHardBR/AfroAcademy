import styles from './Footer.module.scss'
import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p>Todos os direitos reservados ©️ 2022 - AfroTour</p>
        <nav className={styles.iconsFooter}>
          <a href="">
            <Icon className={styles.icons} icon="akar-icons:instagram-fill" />
          </a>

          <a href="">
            <Icon className={styles.icons} icon="akar-icons:facebook-fill" />
          </a>

          <a href="">
            <Icon className={styles.icons} icon="akar-icons:youtube-fill" />
          </a>
        </nav>
      </div>
    </footer>
  )
}
