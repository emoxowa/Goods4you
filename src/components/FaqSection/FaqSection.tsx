import { Accordion } from 'src/components/Accordion'
import styles from './FaqSection.module.scss'

const faqItems = [
  {
    title: 'How can I track the status of my order?',
    content:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
  {
    title: 'What payment methods do you accept?',
    content:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
  {
    title: 'How can I return or exchange an item?',
    content:
      'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
  },
]

export const FaqSection = (): JSX.Element => {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.wrapper}>
        <h2 className={styles.h2}>FAQ</h2>
        <Accordion items={faqItems} />
      </div>
    </section>
  )
}
