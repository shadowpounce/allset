import clsx from 'clsx'
import styles from './Solution.module.scss'

export const Solution = () => {
  return (
    <div className={styles.solution}>
      <div className={clsx('container', styles.solutionContainer)}>
        <div className="section-group centered">
          <h2 className="split-text">The most flexible solution</h2>
          <p className="split-text">
            Decide when and how your child can use their assets
          </p>
        </div>
        <div className={styles.solutionTable}>
          <div className={clsx(styles.solutionTableRow, 'reveal translate')}>
            <div className={styles.solutionTableCell}>
              <p>Features</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>allset</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Custodial Account (UGMA/UTMA)</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>529 Plans</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Custodial Roth IRA</p>
            </div>
          </div>
          <div className={clsx(styles.solutionTableRow, 'reveal translate')}>
            <div className={styles.solutionTableCell}>
              <div className={styles.group}>
                <div className={styles.icon}>
                  <img src="assets/icons/ti1.svg" alt="" />
                </div>
                <p>Purpose</p>
              </div>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Any</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Any</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Education Only</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Retirement Only</p>
            </div>
          </div>
          <div className={clsx(styles.solutionTableRow, 'reveal translate')}>
            <div className={styles.solutionTableCell}>
              <div className={styles.group}>
                <div className={styles.icon}>
                  <img src="assets/icons/ti2.svg" alt="" />
                </div>
                <p>Age of Distributions</p>
              </div>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Customizable</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>18-21</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Until Used for Education</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Starting 59.5</p>
            </div>
          </div>
          <div className={clsx(styles.solutionTableRow, 'reveal translate')}>
            <div className={styles.solutionTableCell}>
              <div className={styles.group}>
                <div className={styles.icon}>
                  <img src="assets/icons/ti3.svg" alt="" />
                </div>
                <p>Early Withdrawals</p>
              </div>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Customizable</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>No</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>No Age Limit</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Yes</p>
            </div>
          </div>
          <div className={clsx(styles.solutionTableRow, 'reveal translate')}>
            <div className={styles.solutionTableCell}>
              <div className={styles.group}>
                <div className={styles.icon}>
                  <img src="assets/icons/ti4.svg" alt="" />
                </div>
                <p>Parent Control of Use 
                and Distributions</p>
              </div>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Full Control</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>No Control of Use</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Education Only</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>No Control of Use</p>
            </div>
          </div>
          <div className={clsx(styles.solutionTableRow, 'reveal translate')}>
            <div className={styles.solutionTableCell}>
              <div className={styles.group}>
                <div className={styles.icon}>
                  <img src="assets/icons/ti5.svg" alt="" />
                </div>
                <p>Available for Children 
                Without Earned Income</p>
              </div>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Yes</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Yes</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Yes</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>No</p>
            </div>
          </div>
          <div className={clsx(styles.solutionTableRow, 'reveal translate')}>
            <div className={styles.solutionTableCell}>
              <div className={styles.group}>
                <div className={styles.icon}>
                  <img src="assets/icons/ti6.svg" alt="" />
                </div>
                <p>Annual Contribution 
                Limits</p>
              </div>
            </div>
            <div className={styles.solutionTableCell}>
              <p>None</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>None</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Depends on State</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Up to $7,000</p>
            </div>
          </div>
          <div className={clsx(styles.solutionTableRow, 'reveal translate')}>
            <div className={styles.solutionTableCell}>
              <div className={styles.group}>
                <div className={styles.icon}>
                  <img src="assets/icons/ti7.svg" alt="" />
                </div>
                <p>Can Be Used as 
                Loan Collateral</p>
              </div>
            </div>
            <div className={styles.solutionTableCell}>
              <p>Yes</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>No</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>No</p>
            </div>
            <div className={styles.solutionTableCell}>
              <p>No</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
