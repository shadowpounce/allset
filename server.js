import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import { marked } from 'marked'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

// Настройка SMTP-транспорта
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Обработка POST-запроса на /api/send-email
app.post('/api/send-email', async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    firm_name,
    firm_site,
    aum,
    state,
    message,
    phone,
  } = req.body

  console.log(first_name)

  const text = marked(message)

  const markdownContent = `
        <b>Name:</b> ${first_name} ${last_name}<br/>
        <b>Email:</b> ${email}<br/>
        <b>Phone:</b> ${phone}<br/>
        <b>Firm name:</b> ${firm_name}<br/>
        <b>Firm site:</b> ${firm_site}<br/>
        <b>Aum:</b> ${aum}<br/>
        <b>State:</b> ${state}<br/>
        <b>Message:</b><br/>${text}<br/>
    `

  try {
    await transporter.sendMail({
      from: `"${first_name} ${last_name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `dotDNA Contact Form`,
      text: `**Name:** ${first_name} ${last_name}\n**Email:** ${email}\n**Phone:** ${phone}\n**Firm name:** ${firm_name}\n**Aum:** ${firm_site}\n**Aum:** ${aum}\n**State:** ${state}\n**Message:** ${message}`,
      html: markdownContent,
    })
    res.status(200).json({ status: 'Message sent successfully!' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ error: 'Failed to send message.' })
  }
})

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
