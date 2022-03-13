import { createTransport } from 'nodemailer';

export const transporter = createTransport({
  service: process.env.SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL || 'controlpanelbr@gmail.com',
    pass: process.env.PASS || 'TesteNode1234',
  },
});
