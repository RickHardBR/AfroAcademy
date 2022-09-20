import styles from './Header.module.scss'

import logoSvg from '../../assets/logoHeaderAfro.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img className="filter-green" src={logoSvg} alt="Logo Afro ToDo" />
    </header>
  )
}
