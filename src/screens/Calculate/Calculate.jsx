import clsx from 'clsx'
import styles from './Calculate.module.scss'
import { Input } from '../../ui/Input/Input'
import { useState } from 'react'
import { Button } from '../../ui/Button/Button'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

const data = {
  labels: [
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
    '2031',
    '2032',
    '2033',
    '2034',
    '2035',
    '2036',
    '2037',
    '2038',
    '2039',
    '2040',
    '2041',
  ],
  datasets: [
    {
      label: 'I n v e s t m e n t  G a i n s',
      backgroundColor: '#D9DCFA',
      data: [
        '100',
        '200',
        '400',
        '600',
        '1000',
        '1500',
        '2000',
        '2500',
        '3000',
        '7500',
        '10000',
        '13000',
        '18000',
        '28000',
        '35000',
        '42000',
        '50000',
        '57500',
      ],
    },
    {
      label: 'Y o u r  C o n t r i b u t i o n s',
      backgroundColor: '#6F7AF6',
      data: [
        '100',
        '100',
        '200',
        '300',
        '500',
        '750',
        '1000',
        '1250',
        '1500',
        '3750',
        '5000',
        '6500',
        '9000',
        '14000',
        '17500',
        '20000',
        '24000',
        '26000',
      ],
    },
  ],
}

const options = {
  elements: {
    bar: {
      borderRadius: 4.5,
      borderWidth: 0.7,
    },
  },
  scales: {
    y: {
      ticks: {
        callback: function (value) {
          return `$${value}` // Добавляем символ доллара
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          size: 12,
          // family: `'Arial', sans-serif`,
          family: `'Instrument Sans', serif`,
          weight: 500,
        },
      },
    },
  },
}

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
)

export const Calculate = () => {
  const [valueOne, setValueOne] = useState(10000)
  const [valueTwo, setValueTwo] = useState(500)
  const [valueThree, setValueThree] = useState(1000)
  const [valueFour, setValueFour] = useState(1)

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
            compound interest can help your child’s trust fund grow.
          </p>
        </div>
        <div className={styles.calculateWrap}>
          <div className={styles.panel}>
            <div className={styles.inputs}>
              <div className={clsx(styles.input, 'reveal scale')}>
                <p className="txt-18">Initial contribution amount</p>
                <Input
                  colorType="secondary"
                  setValue={setValueOne}
                  value={valueOne}
                  type="number"
                />
              </div>
              <div className={clsx(styles.input, 'reveal scale')}>
                <p className="txt-18">Your monthly saving goal</p>
                <Input
                  colorType="secondary"
                  setValue={setValueTwo}
                  value={valueTwo}
                  type="number"
                />
              </div>
              <div className={clsx(styles.input, 'reveal scale')}>
                <p className="txt-18">Gifts each year from family & friends</p>
                <Input
                  colorType="secondary"
                  setValue={setValueThree}
                  value={valueThree}
                  type="number"
                />
              </div>
              <div className={clsx(styles.input, 'reveal scale')}>
                <p className="txt-18">Your kid’s age</p>
                <Input
                  colorType="secondary"
                  setValue={setValueFour}
                  value={valueFour}
                  type="number"
                />
              </div>
            </div>
            <div className={clsx(styles.buttons, 'reveal scale')}>
              <Button icon="assets/icons/math.svg">Calculate</Button>
              <Button type="circle" icon="assets/icons/question.svg"></Button>
            </div>
          </div>
          <div className={clsx(styles.chart, 'reveal translate')}>
            <div className={styles.info}>
              <div className={clsx(styles.item, 'reveal scale')}>
                <div className={styles.square}></div>
                <p className="txt-14">your contributions</p>
              </div>
              <div className={clsx(styles.item, 'reveal scale')}>
                <div className={styles.square}></div>
                <p className="txt-14">investment gains</p>
              </div>
            </div>
            <div
              data-duration="2.5"
              data-delay="0.5"
              className={clsx('reveal', styles.canvas)}
            >
              <Bar data={data} options={options} />
            </div>
            <div className={styles.total}>
              <div className={styles.potentialBalance}>
                <h2>
                  $
                  <b
                    className="counter"
                    data-start="top top+=85%"
                    data-end="289"
                  >
                    0
                  </b>
                  ,
                  <b
                    className="counter"
                    data-start="top top+=85%"
                    data-end="788"
                  >
                    0
                  </b>
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
