import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message, phone } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Jamie Lee White Website <onboarding@resend.dev>",
      to: "godwinbamisaye3@gmail.com",
      replyTo: email,
      subject: `New message from ${firstName} ${lastName || ""}`,
      text: `
New message received from the website contact form:

Name: ${firstName} ${lastName || ""}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message}
      `,
    });

    // ✅ log result for debugging
    console.log("Email sent:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
