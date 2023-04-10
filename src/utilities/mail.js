import nodemailer from 'nodemailer';
import config from '../config';

const sendMail = async (receiver, subject, mailBody) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: `${config.MAIL_USERNAME}`,
                pass: `${config.MAIL_PASSWORD}`,
            },
        });

        const info = await transporter.sendMail({
            from: `${config.MAIL_USERNAME}`,
            to: `${receiver}`,
            subject: `${subject}`,
            html: `${mailBody}`,
        });

        console.log('Message sent: %s', info.messageId);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export default sendMail;
