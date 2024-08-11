import { Accordion } from 'src/components/Accordion'
import styles from './FaqSection.module.scss'
import { useMemo } from 'react'



export const FaqSection = (): JSX.Element => {
  const faqItems = useMemo(() => [
    {
      title: 'How can I track the status of my order?',
      content:
        'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    },
    {
      title: 'What payment methods do you accept?',
      content:
        'We accept a variety of payment methods including credit cards, PayPal, and bank transfers.',
    },
    {
      title: 'How can I return or exchange an item?',
      content:
        'To return or exchange an item, log in to your account, go to "My Orders", select the item you want to return or exchange, and follow the instructions.',
    },
  ], [])

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.wrapper}>
        <h2 className={styles.h2}>FAQ</h2>

        <Accordion items={faqItems} />
      </div>
    </section>
  )
}
