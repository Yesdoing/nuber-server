import Mailgun from 'mailgun-js';

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandbox4d0e97abda9f48d39dd0131c97585566.mailgun.org"
});

const sendEmail = (subject:string, html:string) => {
  const emailData: Mailgun.messages.SendData = {
    from: "fkrmtleo12@gmail.com",
    to: "fkrmtleo12@gmail.com",
    subject,
    html
  }

  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string ) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://nuber.com/verification/${key}/">here</a>`;
  return sendEmail(emailSubject, emailBody);
}