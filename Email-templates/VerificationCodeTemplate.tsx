import * as React from 'react';

interface EmailTemplateProps {
  username: string;
  verificationCode: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  verificationCode
}) => (
  <div>
    <h1>Welcome, {username}!</h1>
    <p>Thank you for signing up to our app. Please verify your email address submit the verification code {verificationCode}.</p>
  </div>
);