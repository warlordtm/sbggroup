import { NextResponse } from "next/server";
import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();


export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log("Resend key:", process.env.RESEND_API_KEY);


export async function POST(req: Request) {
  try {
    const { firstName, email, message, phone } = await req.json();

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "bamisayegodwin7@gmail.com",
      subject: `New message from ${firstName}`,
      replyTo: email,
      text: `Email: ${email}\n\nMessage: ${message}, My phone number is ${phone}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
