import styles from './Accordion.module.scss'
import plus from 'src/assets/images/svg/accordion-icon.svg'

type AccordionItem = {
  title: string
  content: string
}

type Props = {
  items: AccordionItem[]
}

export const Accordion = ({ items }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <details key={index} className={styles.details}>
          <summary className={styles.summary} aria-expanded="false" aria-controls={`content-${index}`}>
            <span className={styles.title}>{item.title}</span>
            <img
              src={plus}
              aria-hidden="true"
              className={styles.icon}
              alt="Expand or collapse section"
            />
          </summary>
          <div className={styles.content}>
            <p>{item.content}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
