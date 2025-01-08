import clsx from 'clsx'
import styles from './FAQ.module.scss'
import { Dropdown } from '../../ui/Dropdown/Dropdown'

const faqItems = [
  {
    title: 'What is Allset, and how does it work?',
    text: 'Allset is a financial platform that enables parents to create long-term investment accounts for their children, designed to grow over time and fund major milestones like college, buying a home, starting a business, retirement or whatever you choose. Parents can customize distribution rules to maintain control over how and when funds are used.',
  },
  {
    title:
      'How is Allset different from a 529 plan, custodial account, or custodial Roth IRA?',
    text: 'Unlike 529 plans, Allset funds are not restricted to education expenses. Unlike custodial accounts, parents retain control over distributions beyond their child’s legal age. A custodial Roth IRA is limited by annual contribution caps and requires earned income, whereas Allset allows for larger investments without these restrictions, enabling a more flexible and comprehensive long-term savings strategy.',
  },
  {
    title: 'What kind of investment options does Allset offer?',
    text: 'Allset offers a range of diversified, low-cost index funds and other investment options tailored for long-term growth. Our portfolio is designed to minimize risk while maximizing returns over time, helping you build a secure financial future for your child. We tailor your portfolio for your goals.',
  },
  {
    title:
      'Can grandparents, other family members, or friends contribute to an Allset account?',
    text: 'Yes! Grandparents, family members, and friends can contribute directly to an Allset account. They can make one-time or recurring contributions, making it easy for loved ones to play a role in securing your child’s financial future.',
  },
  {
    title: 'How do I know my investments are secure?',
    text: 'At Allset, we use third-party custodians from established financial institutions to safeguard your investments. This ensures that your funds are held securely and separately from operational accounts. While all investments involve risk, our investment strategies are designed to adjust risk based on market conditions, focusing on long-term stability and growth.',
  },
  {
    title: 'What are the costs associated with using Allset?',
    text: 'Allset charges a low annual management fee based on assets under management (AUM), starting at the greater of 0.25% or $10 per month. Additional fees may apply for certain services.',
  },
  {
    title:
      'What happens if I want to make changes to the account or distribution rules?',
    text: 'Parents can easily update distribution rules or investment preferences through the Allset platform. Our intuitive tools make managing your child’s account simple and transparent.',
  },
]

export const FAQ = () => {
  return (
    <section id="faq" className={styles.FAQ}>
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
