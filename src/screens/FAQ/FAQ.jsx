import clsx from 'clsx'
import styles from './FAQ.module.scss'
import { Dropdown } from '../../ui/Dropdown/Dropdown'

const faqItems = [
  {
    title: 'What is Allset, and how does it work?',
    text: 'At Allset, we use third-party custodians from established financial institutions to safeguard your investments. This ensures that your funds are held securely and separately from operational accounts. While all investments involve risk, our investment strategies are designed to adjust risk based on market conditions, focusing on long-term stability and growth.',
  },
  {
    title:
      'How is Allset different from a 529 plan, custodial account, or custodial Roth IRA?',
    text: 'At Allset, we use third-party custodians from established financial institutions to safeguard your investments. This ensures that your funds are held securely and separately from operational accounts. While all investments involve risk, our investment strategies are designed to adjust risk based on market conditions, focusing on long-term stability and growth.',
  },
  {
    title: 'What kind of investment options does Allset offer?',
    text: 'At Allset, we use third-party custodians from established financial institutions to safeguard your investments. This ensures that your funds are held securely and separately from operational accounts. While all investments involve risk, our investment strategies are designed to adjust risk based on market conditions, focusing on long-term stability and growth.',
  },
  {
    title:
      'Can grandparents, other family members, or friends contribute to an Allset account?',
    text: 'At Allset, we use third-party custodians from established financial institutions to safeguard your investments. This ensures that your funds are held securely and separately from operational accounts. While all investments involve risk, our investment strategies are designed to adjust risk based on market conditions, focusing on long-term stability and growth.',
  },
  {
    title: 'How do I know my investments are secure?',
    text: 'At Allset, we use third-party custodians from established financial institutions to safeguard your investments. This ensures that your funds are held securely and separately from operational accounts. While all investments involve risk, our investment strategies are designed to adjust risk based on market conditions, focusing on long-term stability and growth.',
  },
  {
    title: 'What are the costs associated with using Allset?',
    text: 'At Allset, we use third-party custodians from established financial institutions to safeguard your investments. This ensures that your funds are held securely and separately from operational accounts. While all investments involve risk, our investment strategies are designed to adjust risk based on market conditions, focusing on long-term stability and growth.',
  },
  {
    title:
      'What happens if I want to make changes to the account or distribution rules?',
    text: 'At Allset, we use third-party custodians from established financial institutions to safeguard your investments. This ensures that your funds are held securely and separately from operational accounts. While all investments involve risk, our investment strategies are designed to adjust risk based on market conditions, focusing on long-term stability and growth.',
  },
]

export const FAQ = () => {
  return (
    <section className={styles.FAQ}>
      <div className={clsx('container', styles.FAQContainer)}>
        <h2 className={clsx(styles.FAQTitle, 'split-text')}>
          Frequently Asked Questions
        </h2>
        <div className={styles.FAQItems}>
          {faqItems.map((item) => (
            <Dropdown title={item.title} content={item.text} />
          ))}
        </div>
      </div>
    </section>
  )
}
