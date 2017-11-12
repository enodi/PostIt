import nodemailer from 'nodemailer';

// sends email notification to users in a group when priority is urgent/critical
const sendNotification = (user, sender, group) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    auth: {
      user: 'noreply.postit.appl@gmail.com',
      pass: process.env.PASSWORD
    }
  });
  const mailOptions = {
    from: 'PostIt',
    to: user.email,
    subject: 'Message Posted',
    html: `<div>
    <p>Hi ${user.fullname}</p>
    <p>${sender} just posted a message in the group ${group.name}</p>
    <p>The PostIt Team</p></div>`
  };

  transporter.sendMail(mailOptions);
};

export default sendNotification;
