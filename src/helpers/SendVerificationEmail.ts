import { EmailTemplate } from "../../Email-templates/VerificationCodeTemplate";
import { Resend } from "resend";
import { ApiResponse } from "../Api-Response";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail({
  username,
  email,
  verificationCode,
}: {
  username: string;
  email: string;
  verificationCode: string;
}): Promise<ApiResponse> {
  try {
    // Create the JSX element directly using JSX syntax
    const emailComponent = React.createElement(EmailTemplate, { 
      username, 
      verificationCode 
    });

    const data = await resend.emails.send({
      from: "YourName <your_verified_email@domain.com>", // Use a verified email
      to: [email],
      subject: "Verify your email",
      react: emailComponent,
    });

    console.log("Email sent:", data);

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: "Error sending email", error: JSON.stringify(error) };
  }
}
