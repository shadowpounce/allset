import clsx from 'clsx'
import styles from './Calculate.module.scss'
import { Input } from '../../ui/Input/Input'
import { useState, useEffect } from 'react'
import { Button } from '../../ui/Button/Button'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export const Calculate = () => {
  const [inputs, setInputs] = useState({
    initialContribution: 10000,
    monthlySavings: 500,
    annualGift: 1000,
    childAge: 0,
  })

  const [results, setResults] = useState({
    data: [],
    finalBalance: 0,
    totalContributions: 0,
    totalReturns: 0,
  })

  useEffect(() => {
    console.log(formatCurrency(results.finalBalance))
  }, [results])

  const formatWithCommas = (value) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const parseNumber = (value) => {
    return parseFloat(value.replace(/,/g, '')) || 0
  }

  const getFormattedValue = (field) => {
    return formatWithCommas(inputs[field])
  }

  const calculateTrajectory = (inputs) => {
    const { initialContribution, monthlySavings, annualGift, childAge } = inputs
    const annualRate = 0.08
    const monthlyRate = annualRate / 12

    let balance = initialContribution
    let totalContributions = initialContribution
    let totalReturns = 0
    const data = []
    const monthsToRun = (65 - childAge) * 12

    // Calculate years until age 22
    const monthsUntil22 = Math.max(0, (22 - childAge) * 12)

    for (let month = 1; month <= monthsToRun; month++) {
      const currentAge = childAge + month / 12

      // Add monthly contribution if before age 22
      if (month <= monthsUntil22) {
        balance += monthlySavings
        totalContributions += monthlySavings
      }

      // Apply monthly compound interest
      const beforeInterest = balance
      balance *= 1 + monthlyRate
      totalReturns += balance - beforeInterest

      // Add annual gift in December if before age 22
      if (month <= monthsUntil22 && month % 12 === 0) {
        balance += annualGift
        totalContributions += annualGift
      }

      // Record data points at each year
      if (month % 12 === 0) {
        data.push({
          age: Math.floor(currentAge),
          cumulativeContributions: Math.round(totalContributions),
          cumulativeReturns: Math.round(totalReturns),
          totalBalance: Math.round(balance),
        })
      }
    }

    return {
      data,
      finalBalance: Math.round(balance),
      totalContributions: Math.round(totalContributions),
      totalReturns: Math.round(totalReturns),
    }
  }

  useEffect(() => {
    const results = calculateTrajectory(inputs)
    setResults(results)
  }, [inputs])

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  // const handleInputChange = (field, value) => {
  //   const numValue = parseFloat(value) || 0
  //   setInputs((prev) => ({
  //     ...prev,
  //     [field]: numValue,
  //   }))
  // }

  const handleInputChange = (field, value) => {
    const numValue = parseNumber(value)
    setInputs((prev) => ({
      ...prev,
      [field]: numValue,
    }))
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const totalValue = payload.reduce((sum, entry) => sum + entry.value, 0)
      return (
        <div className={styles.tooltip}>
          <p className="font-medium">Age {label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
          <p className="font-medium mt-2 border-t pt-2">
            Total Balance: {formatCurrency(totalValue)}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <section id="calculate" className={styles.calculate}>
      <div className="container">
        <div
          className={clsx(
            'section-group centered',
            styles.calculateSectionGroup
          )}
        >
          <h2 className="split-text">See your potential</h2>
          <p className="txt split-text">
            Play with our calculator to see just how much the power of time and
            compound interest can help your child’s trust fund grow
          </p>
        </div>
        <div className={styles.calculateWrap}>
          <div className={styles.panel}>
            <div className={styles.inputs}>
              <div className={clsx(styles.input, 'reveal scale')}>
                <p className="txt-18">Initial contribution amount</p>
                <Input
                  addictionSymbol="$"
                  colorType="secondary"
                  value={getFormattedValue('initialContribution')}
                  onChange={(e) =>
                    handleInputChange('initialContribution', e.target.value)
                  }
                  type="text"
                />
              </div>
              <div className={clsx(styles.input, 'reveal scale')}>
                <p className="txt-18">Your monthly saving goal</p>
                <Input
                  addictionSymbol="$"
                  colorType="secondary"
                  value={getFormattedValue('monthlySavings')}
                  onChange={(e) =>
                    handleInputChange('monthlySavings', e.target.value)
                  }
                  type="text"
                />
              </div>
              <div className={clsx(styles.input, 'reveal scale')}>
                <p className="txt-18">Gifts each year from family & friends</p>
                <Input
                  addictionSymbol="$"
                  colorType="secondary"
                  value={getFormattedValue('annualGift')}
                  onChange={(e) =>
                    handleInputChange('annualGift', e.target.value)
                  }
                  type="text"
                />
              </div>
              <div className={clsx(styles.input, 'reveal scale')}>
                <p className="txt-18">Your kid’s age</p>
                <Input
                  colorType="secondary"
                  value={getFormattedValue('childAge')}
                  onChange={(e) =>
                    handleInputChange('childAge', e.target.value)
                  }
                  type="text"
                />
              </div>
            </div>
            <div className={clsx(styles.buttons, 'reveal scale')}>
              <Button icon="assets/icons/math.svg">Calculate</Button>
              <Button type="circle" icon="assets/icons/question.svg"></Button>
            </div>
          </div>
          <div className={clsx(styles.chart, 'reveal translate')}>
            {/* <div className={styles.info}>
              <div className={clsx(styles.item, 'reveal scale')}>
                <div className={styles.square}></div>
                <p className="txt-14">your contributions</p>
              </div>
              <div className={clsx(styles.item, 'reveal scale')}>
                <div className={styles.square}></div>
                <p className="txt-14">investment gains</p>
              </div>
            </div> */}
            <div
              data-duration="2.5"
              data-delay="0.5"
              className={clsx('reveal', styles.canvas)}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={results.data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" />
                  <YAxis tickFormatter={formatCurrency} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    dataKey="cumulativeContributions"
                    stackId="a"
                    fill="#d9dcfa"
                    name="Total Contributions"
                  />
                  <Bar
                    dataKey="cumulativeReturns"
                    stackId="a"
                    fill="#8884d8"
                    name="Total Investment Returns"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className={styles.total}>
              <div className={styles.potentialBalance}>
                <h2 className="reveal translate">
                  {formatCurrency(results.finalBalance)}
                  {/* {results &&
                    formatCurrency(results.finalBalance)
                      .slice(1)
                      .split(',')
                      .map((item, idx) => {
                        return (
                          <>
                            <b
                              className="counter"
                              data-start="top top+=85%"
                              data-end={item}
                            >
                              0
                            </b>
                            {idx + 1 >=
                            formatCurrency(results.finalBalance)
                              .slice(1)
                              .split(',').length
                              ? ''
                              : ', '}
                          </>
                        )
                      })} */}
                </h2>
                <p className="txt-20">Potential Future Balance at Age 65</p>
              </div>
              <div className={clsx(styles.secure, 'reveal scale')}>
                <div className={styles.text}>
                  <p className="txt-16">Secure your child's future</p>
                  <p className="txt-14">
                    Join waitlist today and set up a trust fund in minutes
                  </p>
                </div>
                <Button
                  type="circlePurple"
                  icon="assets/icons/add-white.svg"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
