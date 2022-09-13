import nodemailer from 'nodemailer';

nodemailer.createTransport({
  pool: true,
  host: 'smtp.example.com',
  port: 465,
  secure: true, // use TLS
  auth: {
    user: 'username',
    pass: 'password',
  },
});
