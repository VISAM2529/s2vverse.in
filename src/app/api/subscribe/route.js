import nodemailer from 'nodemailer';
import { MongoClient } from 'mongodb';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Valid email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const tasks = [];

    // Configure Nodemailer
    if (process.env.EMAIL_HOST) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Send notification email to yourself
      tasks.push(
        transporter.sendMail({
          from: process.env.EMAIL_FROM,
          to: process.env.EMAIL_TO,
          subject: 'New s2vverse.in Subsriber',
          text: `New subscriber email: ${email}`,
          html: `<p>New subscriber has joined the waitlist!</p><p>Email: <strong>${email}</strong></p>`,
        })
      );

      // Optional: Send confirmation to subscriber
      if (process.env.SEND_CONFIRMATION === 'true') {
        tasks.push(
            transporter.sendMail({
              from: process.env.EMAIL_FROM,
              to: email,
              subject: 'Welcome to The Feed Waitlist',
              text: 'Thank you for joining our waitlist! We\'ll notify you when we launch.',
              html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(to bottom right, #881337, #6b21a8); padding: 30px; border-radius: 12px; color: #fff;">
                  <div style="text-align: center; margin-bottom: 25px;">
                    <h1 style="color: #fda4af; font-weight: 300; font-size: 24px; margin-bottom: 5px;">We Never Spoke,</h1>
                    <h2 style="color: #fda4af; font-weight: 400; font-size: 28px; margin-top: 0;">But The Feed Knew</h2>
                  </div>
                  
                  <div style="background-color: rgba(0, 0, 0, 0.3); backdrop-filter: blur(5px); padding: 25px; border-radius: 8px; border: 1px solid rgba(253, 164, 175, 0.3);">
                    <h3 style="color: #fda4af; margin-top: 0;">Thank you for joining our waitlist!</h3>
                    <p style="line-height: 1.6;">We're thrilled you've taken the first step to discover connections you never knew existed. We'll notify you as soon as we launch this modern love-story social platform.</p>
                    
                    <div style="margin: 25px 0; text-align: center;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="color: #fda4af; opacity: 0.5;">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                    
                    <p style="font-style: italic; text-align: center; color: rgba(253, 164, 175, 0.8);">
                      "For the ones who felt it in silence."
                    </p>
                  </div>
                  
                  <div style="margin-top: 30px; text-align: center; font-size: 12px; color: rgba(255, 255, 255, 0.6);">
                    <p>You're receiving this email because you joined the waitlist at s2vverse.in</p>
                  </div>
                </div>
              `,
            })
          );
      }
    }

    // Store in MongoDB
    if (process.env.MONGODB_URI) {
      const client = new MongoClient(process.env.MONGODB_URI);

      tasks.push(
        (async () => {
          try {
            await client.connect();
            const db = client.db('thala-app');
            const subscribers = db.collection('subscribers');
            const existing = await subscribers.findOne({ email });

            if (!existing) {
              await subscribers.insertOne({
                email,
                subscribedAt: new Date(),
              });
            }
          } catch (dbError) {
            console.error('Database error:', dbError);
          } finally {
            await client.close();
          }
        })()
      );
    }

    await Promise.allSettled(tasks);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process subscription' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
