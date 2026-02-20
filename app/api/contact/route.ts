import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Send email via Resend
    // NOTE: Until you verify your domain (crossfitaggieland.com) in Resend,
    // the "from" address must use Resend's default: onboarding@resend.dev
    // Once verified, swap it to: 'CrossFit Aggieland <noreply@crossfitaggieland.com>'
    await resend.emails.send({
      from: 'CrossFit Aggieland <onboarding@resend.dev>',
      to: 'seth@crossfitaggieland.com',
      replyTo: email,
      subject: `CFA Contact: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : '',
        '',
        message,
      ].filter(Boolean).join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
