import '../../styles/global.scss'
import styles from './RegionCards.module.scss'
import { RegionCardProps } from '../../utils/interfaceRegionCards'


export default function RegionCards({title, img, description, minPrice}: RegionCardProps) {
  
  return (
    <li className={styles.regionCard}>
      <img
        src={img}
        alt="Imagem por do sol Mato Grosso do Sul"
      />
      <div>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.pricing}>A partir de <span>R$ {minPrice}</span></p>
      </div>
    </li>
  )
}
